export function getAssetPath(src: string): string {
  if (!src) return "";
  if (
    src.startsWith("http://") ||
    src.startsWith("https://") ||
    src.startsWith("data:") ||
    src.startsWith("blob:") ||
    src.startsWith("//")
  ) {
    return src;
  }
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const cleanSrc = src.startsWith("/") ? src : `/${src}`;
  if (basePath && cleanSrc.startsWith(basePath)) {
    return cleanSrc;
  }
  return `${basePath}${cleanSrc}`;
}
