export function getImageUrl(filename) {
  try {
    return new URL(`/src/assets/images/${filename}`, import.meta.url).href
  } catch {
    return ''
  }
}
