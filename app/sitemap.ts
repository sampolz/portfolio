export const baseUrl = 'https://sampolyakov.com'

export default async function sitemap() {
  let routes = ['', '/banff-itinerary'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return routes
}
