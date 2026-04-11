import type { Metadata } from 'next'
import { ItineraryClient } from './itinerary-client'

export const metadata: Metadata = {
  title: 'Banff Campervan Itinerary',
  description: 'A 7-day Banff and Jasper campervan itinerary artifact.',
}

export default function BanffItineraryPage() {
  return <ItineraryClient />
}
