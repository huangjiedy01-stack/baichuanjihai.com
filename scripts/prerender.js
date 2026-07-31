/**
 * SEO 预渲染脚本
 * 解决 Vue SPA 对百度搜索引擎不友好的问题
 *
 * 原理：构建完成后，用 Puppeteer 无头浏览器访问每条路由，
 * 把渲染好的 HTML 保存为静态文件，百度爬虫就能直接读取内容。
 *
 * 使用方式：npm run build  →  npm run prerender
 */
import puppeteer from 'puppeteer'
import { createServer } from 'http'
import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const DIST_DIR = resolve(__dirname, 'dist')
const PORT = 3456

// 所有需要预渲染的路由
const ROUTES = [
  { path: '/', file: 'index.html', changefreq: 'weekly', priority: 1.0 },
  { path: '/about', file: 'about/index.html', changefreq: 'monthly', priority: 0.8 },
  { path: '/products', file: 'products/index.html', changefreq: 'weekly', priority: 0.9 },
  { path: '/craft', file: 'craft/index.html', changefreq: 'monthly', priority: 0.7 },
  { path: '/service', file: 'service/index.html', changefreq: 'monthly', priority: 0.7 },
  { path: '/spaces', file: 'spaces/index.html', changefreq: 'monthly', priority: 0.8 },
  { path: '/contact', file: 'contact/index.html', changefreq: 'monthly', priority: 0.6 },
]

/**
 * 启动本地 HTTP 服务器来托管 dist 目录
 */
function startServer() {
  return new Promise((resolveServer) => {
    const server = createServer((req, res) => {
      let filePath = req.url.split('?')[0]
      if (filePath === '/') filePath = '/index.html'
      const fullPath = resolve(DIST_DIR, `.${filePath}`)

      try {
        const content = readFileSync(fullPath)
        const ext = filePath.split('.').pop()
        const mimeTypes = {
          html: 'text/html',
          js: 'application/javascript',
          css: 'text/css',
          svg: 'image/svg+xml',
          jpg: 'image/jpeg',
          png: 'image/png',
        }
        res.writeHead(200, { 'Content-Type': mimeTypes[ext] || 'text/plain' })
        res.end(content)
      } catch {
        // SPA fallback: 所有不存在的路径返回 index.html
        try {
          const indexContent = readFileSync(resolve(DIST_DIR, 'index.html'))
          res.writeHead(200, { 'Content-Type': 'text/html' })
          res.end(indexContent)
        } catch {
          res.writeHead(404)
          res.end('Not Found')
        }
      }
    })

    server.listen(PORT, () => {
      console.log(`  本地服务器已启动: http://localhost:${PORT}`)
      resolveServer(server)
    })
  })
}

/**
 * 预渲染单个路由
 */
async function prerenderRoute(browser, baseUrl, route) {
  const page = await browser.newPage()
  try {
    console.log(`  正在渲染: ${route.path}`)

    await page.goto(`${baseUrl}${route.path}`, {
      waitUntil: 'networkidle2',
      timeout: 30000,
    })

    // 等待 Vue 应用渲染完成
    await page.waitForSelector('#app > *', { timeout: 10000 })

    // 额外等待以确保异步内容加载完毕
    await new Promise((r) => setTimeout(r, 2000))

    const html = await page.content()

    // 在 HTML 中添加静态 meta 标签（从路由配置对应）
    const outputPath = resolve(DIST_DIR, route.file)
    mkdirSync(dirname(outputPath), { recursive: true })
    writeFileSync(outputPath, html)

    console.log(`  ✓ 已生成: ${route.file}`)
  } catch (err) {
    console.error(`  ✗ 渲染失败: ${route.path}`, err.message)
  } finally {
    await page.close()
  }
}

/**
 * 生成 sitemap.xml（构建后版本，替换域名占位符）
 */
function generateSitemap(domain) {
  const today = new Date().toISOString().split('T')[0]
  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:mobile="http://www.baidu.com/schemas/sitemap-mobile/1/">\n`

  for (const route of ROUTES) {
    xml += `  <url>
    <loc>${domain}${route.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
    <mobile:mobile type="pc,mobile"/>
  </url>\n`
  }

  xml += '</urlset>\n'

  writeFileSync(resolve(DIST_DIR, 'sitemap.xml'), xml)
  console.log(`  ✓ sitemap.xml 已生成`)
}

/**
 * 主流程
 */
async function main() {
  // 从命令行参数获取域名，默认为 localhost
  // 优先从命令行参数读取，其次读配置文件，最后用默认值
  let domain = process.argv[2]
  if (!domain) {
    try {
      const config = JSON.parse(readFileSync(resolve(__dirname, 'seo.config.json'), 'utf-8'))
      domain = config.domain
    } catch {
      domain = 'https://baichuanjihai.com'
    }
  }
  console.log(`\n🚀 开始预渲染 ${ROUTES.length} 个页面...\n`)

  if (!existsSync(DIST_DIR)) {
    console.error('❌ dist 目录不存在，请先运行 npm run build')
    process.exit(1)
  }

  // 启动本地服务器
  const server = await startServer()
  const baseUrl = `http://localhost:${PORT}`

  // 启动浏览器
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  })

  try {
    // 逐个渲染页面
    for (const route of ROUTES) {
      await prerenderRoute(browser, baseUrl, route)
    }

    // 生成 sitemap
    generateSitemap(domain)

    console.log(`\n✅ 预渲染完成！静态 HTML 文件已生成到 dist/ 目录`)
    console.log(`   sitemap: ${domain}/sitemap.xml`)
    console.log(`   robots:  ${domain}/robots.txt\n`)
  } finally {
    await browser.close()
    server.close()
  }
}

main()
