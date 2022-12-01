export function getPageProducts(products, page, pageSize) {
  const startIndex = page * pageSize
  return products.slice(startIndex, startIndex + pageSize)
}
