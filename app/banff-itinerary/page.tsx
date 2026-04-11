import type { Metadata } from 'next'
import { ItineraryClient } from './itinerary-client'

export const metadata: Metadata = {
  title: 'Banff Campervan Itinerary',
  description: 'My 7-day intinerary for Banff and Jasper in a campervan.',
}

export default function BanffItineraryPage() {
  return <ItineraryClient />
}
