import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Banff Campervan Itinerary',
  description: 'Banff campervan itinerary artifact.',
}

export default function BanffItineraryPage() {
  return (
    <iframe
      src="/banff_campervan_final_itinerary.html"
      title="Banff Campervan Itinerary"
      style={{
        border: 0,
        width: '100%',
        minHeight: '100vh',
      }}
    />
  )
}
