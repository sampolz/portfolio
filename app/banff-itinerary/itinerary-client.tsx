'use client'

import Link from 'next/link'
import { useState } from 'react'
import { ThemeToggle } from 'app/components/theme-toggle'
import styles from './itinerary.module.css'

type TagTone = 'hike' | 'photo' | 'food' | 'drive'
type DotTone = 'forest' | 'lake' | 'amber' | 'stone'
type BadgeTone = 'res' | 'fcfs'

type EventItem = {
  time: string
  name: string
  description: string
  tone: DotTone
  tags?: Array<{ label: string; tone: TagTone }>
}

type DayItem = {
  badge: string
  title: string
  subtitle: string
  events: EventItem[]
  camp: {
    name: string
    badge?: string
    badgeTone?: BadgeTone
    stars?: string
    detail: string
  }
  warning?: string
  tip?: string
}

const days: DayItem[] = [
  {
    badge: 'Day 1',
    title: 'Calgary to Banff',
    subtitle: 'Pick up van, stock up, first mountain evening',
    events: [
      {
        time: 'Morning',
        name: 'Pick up campervan and do the main grocery run',
        description:
          'Collect the van in Calgary, then stop at Superstore or Costco before heading west. Food inside the parks is far more expensive, so stock the full week here and leave with a full tank.',
        tone: 'stone',
        tags: [{ label: 'drive', tone: 'drive' }],
      },
      {
        time: 'Afternoon',
        name: 'Drive to Banff and explore town',
        description:
          'Walk Banff Avenue, grab current trail info from the Visitor Centre, then do Bow Falls and Vermilion Lakes around golden hour for the first classic Mount Rundle reflections.',
        tone: 'lake',
        tags: [{ label: 'photo', tone: 'photo' }],
      },
      {
        time: 'Evening',
        name: 'Set up camp, cook dinner, have the first campfire',
        description:
          'Ease into the trip with a lakeside site and a quiet first night. Parks Canada campgrounds offer fire permits with bundled firewood, which makes the campervan setup simple.',
        tone: 'amber',
        tags: [{ label: 'food', tone: 'food' }],
      },
    ],
    camp: {
      name: 'Two Jack Lakeside, Banff National Park',
      badge: 'Book now',
      badgeTone: 'res',
      stars: '★★★★★',
      detail:
        'Lakeside sites with Mount Rundle reflections, hot showers, fire pits, and quick access to Banff town. Reserve early because the best sites disappear quickly.',
    },
  },
  {
    badge: 'Day 2',
    title: 'Moraine Lake Sunrise and Lake Louise',
    subtitle: 'The two iconic lakes, best done with the shuttle',
    events: [
      {
        time: '5:00 AM',
        name: 'Moraine Lake sunrise',
        description:
          'Use the Parks Canada shuttle from Lake Louise Park and Ride. Get to the Rockpile early for the defining photo of the trip and stay through the first quiet hours of the morning.',
        tone: 'forest',
        tags: [
          { label: 'photo', tone: 'photo' },
          { label: 'hike', tone: 'hike' },
        ],
      },
      {
        time: 'Mid-morning',
        name: 'Consolation Lakes hike',
        description:
          'A short, easy-moderate hike through boulder fields to another vivid alpine lake. It fits well before heading back on the shuttle connection.',
        tone: 'lake',
        tags: [
          { label: 'hike', tone: 'hike' },
          { label: 'photo', tone: 'photo' },
        ],
      },
      {
        time: 'Afternoon',
        name: 'Lake Louise and Plain of Six Glaciers',
        description:
          'Walk the shoreline, then continue to the teahouse route beneath Victoria Glacier. It is a long but classic day and a strong centerpiece for the Banff portion of the loop.',
        tone: 'amber',
        tags: [
          { label: 'hike', tone: 'hike' },
          { label: 'photo', tone: 'photo' },
          { label: 'food', tone: 'food' },
        ],
      },
    ],
    camp: {
      name: 'Two Jack Lakeside, Night 2',
      badge: 'Same site',
      badgeTone: 'res',
      detail:
        'Keeping the same campsite makes the Moraine and Lake Louise shuttle day much easier. The van stays put while you move through the lake corridor.',
    },
    warning:
      'Book the Moraine Lake shuttle as soon as your window opens. It routinely sells out fast.',
  },
  {
    badge: 'Day 3',
    title: 'Johnston Canyon to Waterfowl Lakes',
    subtitle: 'Canyon hike, then north onto the Icefields Parkway',
    events: [
      {
        time: '7:30 AM',
        name: 'Johnston Canyon to the Ink Pots',
        description:
          'Start early before the crowds. The catwalk section is fast, and continuing to the Ink Pots makes the stop feel substantial instead of rushed.',
        tone: 'forest',
        tags: [
          { label: 'hike', tone: 'hike' },
          { label: 'photo', tone: 'photo' },
        ],
      },
      {
        time: 'Midday',
        name: 'Drive the early Icefields Parkway segment',
        description:
          'Top off in Lake Louise village first, then head north with offline maps downloaded. Herbert Lake and Hector Lake are easy scenic pull-offs that break up the drive well.',
        tone: 'lake',
        tags: [
          { label: 'drive', tone: 'drive' },
          { label: 'photo', tone: 'photo' },
        ],
      },
      {
        time: 'Afternoon',
        name: 'Bow Lake and Waterfowl Lakes arrival',
        description:
          'Stop at Bow Lake, then continue to Waterfowl Lakes early enough to claim a first-come, first-served site without stress.',
        tone: 'amber',
        tags: [
          { label: 'photo', tone: 'photo' },
          { label: 'drive', tone: 'drive' },
        ],
      },
    ],
    camp: {
      name: 'Waterfowl Lakes, Icefields Parkway',
      badge: 'First come, first served',
      badgeTone: 'fcfs',
      stars: '★★★★★',
      detail:
        'A standout campground right beside a turquoise lake, with water fill and dump access that suits a campervan well. Aim to arrive early in the afternoon.',
    },
  },
  {
    badge: 'Day 4',
    title: 'Peyto Lake, Columbia Icefield, Parker Ridge',
    subtitle: 'Three major Parkway stops, then sleep near the glacier',
    events: [
      {
        time: 'Morning',
        name: 'Peyto Lake viewpoint',
        description:
          'A short walk gets you to one of the best elevated glacial-lake viewpoints in the Rockies. Earlier is better before tour traffic builds.',
        tone: 'lake',
        tags: [{ label: 'photo', tone: 'photo' }],
      },
      {
        time: 'Midday',
        name: 'Gas and food at Saskatchewan River Crossing',
        description:
          'This is the practical stop on the route. Fuel up regardless of your tank level, because options remain limited until Jasper.',
        tone: 'stone',
        tags: [
          { label: 'food', tone: 'food' },
          { label: 'drive', tone: 'drive' },
        ],
      },
      {
        time: 'Afternoon',
        name: 'Columbia Icefield and Athabasca Glacier',
        description:
          'Walk up to the glacier toe even if you skip the paid attractions. The retreat markers make this stop feel much bigger than a roadside viewpoint.',
        tone: 'forest',
        tags: [
          { label: 'photo', tone: 'photo' },
          { label: 'hike', tone: 'hike' },
        ],
      },
      {
        time: 'Late afternoon',
        name: 'Parker Ridge hike',
        description:
          'Short, steep, and disproportionately rewarding. It gives one of the best glacier panoramas on the entire Parkway for relatively little effort.',
        tone: 'amber',
        tags: [
          { label: 'hike', tone: 'hike' },
          { label: 'photo', tone: 'photo' },
        ],
      },
    ],
    camp: {
      name: 'Wilcox Creek, Columbia Icefield',
      badge: 'First come, first served',
      badgeTone: 'fcfs',
      stars: '★★★★★',
      detail:
        'A dramatic overnight stop at the base of the icefield. It is exposed and can be windy, but the setting is exceptional.',
    },
  },
  {
    badge: 'Day 5',
    title: 'Athabasca Falls to Jasper',
    subtitle: 'Final Parkway stretch, waterfalls, then town',
    events: [
      {
        time: 'Morning',
        name: 'Sunwapta Falls and Athabasca Falls',
        description:
          'These are quick-access stops with very strong payoff. Early morning keeps them quieter and works well before rolling into Jasper.',
        tone: 'lake',
        tags: [
          { label: 'photo', tone: 'photo' },
          { label: 'hike', tone: 'hike' },
        ],
      },
      {
        time: 'Midday',
        name: 'Arrive in Jasper townsite',
        description:
          'Restock groceries, reset the van, and take a break from the Parkway rhythm. Jasper feels smaller and more grounded than Banff.',
        tone: 'forest',
        tags: [{ label: 'food', tone: 'food' }],
      },
      {
        time: 'Afternoon',
        name: 'Pyramid Lake and Patricia Lake',
        description:
          'An easy scenic afternoon with classic reflections and a strong sunset option at Pyramid Island.',
        tone: 'amber',
        tags: [{ label: 'photo', tone: 'photo' }],
      },
    ],
    camp: {
      name: 'Whistlers, Jasper National Park',
      badge: 'Book now',
      badgeTone: 'res',
      stars: '★★★',
      detail:
        'Convenient for two nights near Jasper with showers and town access. It is more about logistics than atmosphere, but it works well as a base.',
    },
    warning:
      'Whistlers has reduced capacity in the itinerary notes, so line up backup options if your dates are fixed.',
  },
  {
    badge: 'Day 6',
    title: 'Maligne Lake and Maligne Canyon',
    subtitle: 'Boat cruise, canyon walk, dark-sky finish',
    events: [
      {
        time: 'Morning',
        name: 'Maligne Lake and Spirit Island cruise',
        description:
          'This is the marquee Jasper day. Pre-booking matters because the lake is far enough from town that a sold-out cruise wastes the drive.',
        tone: 'lake',
        tags: [{ label: 'photo', tone: 'photo' }],
      },
      {
        time: 'Afternoon',
        name: 'Maligne Canyon hike',
        description:
          'The canyon gives the trip a completely different visual texture from the lakes and glaciers. Walking multiple bridges makes it worth the stop.',
        tone: 'forest',
        tags: [
          { label: 'hike', tone: 'hike' },
          { label: 'photo', tone: 'photo' },
        ],
      },
      {
        time: 'Evening',
        name: 'Dark-sky viewing outside Jasper',
        description:
          'If the weather cooperates, finish the trip with a late-night stargazing stop away from town glow.',
        tone: 'amber',
        tags: [{ label: 'photo', tone: 'photo' }],
      },
    ],
    camp: {
      name: 'Whistlers, Night 2',
      badge: 'Same site',
      badgeTone: 'res',
      detail:
        'Use the second Jasper night to shower, reset, and keep dinner simple before the drive back to Calgary.',
    },
  },
  {
    badge: 'Day 7',
    title: 'Valley of Five Lakes to Calgary',
    subtitle: 'Final hike, long drive, van return, flight home',
    events: [
      {
        time: '7:00 AM',
        name: 'Valley of Five Lakes hike',
        description:
          'A short final loop with strong color and low commitment. It works well as a last Jasper stop before switching fully into travel mode.',
        tone: 'forest',
        tags: [
          { label: 'hike', tone: 'hike' },
          { label: 'photo', tone: 'photo' },
        ],
      },
      {
        time: 'Mid-morning',
        name: 'Drive Jasper to Calgary',
        description:
          'Plan for the long eastbound return and leave buffer for cleaning out the van before drop-off.',
        tone: 'stone',
        tags: [{ label: 'drive', tone: 'drive' }],
      },
      {
        time: 'Afternoon',
        name: 'Return the van and fly out of YYC',
        description:
          'An afternoon or evening flight keeps the final day comfortable and reduces the risk of a rushed handoff.',
        tone: 'amber',
      },
    ],
    camp: {
      name: 'Full week camping cost',
      detail:
        'The original itinerary estimates roughly CAD 226 total for six campground nights, far below the hotel alternative for the same route.',
    },
    tip:
      'Priority bookings from the original artifact: Two Jack Lakeside, Whistlers, the Moraine Lake shuttle, and the Spirit Island cruise.',
  },
]

const dotToneClass: Record<DotTone, string> = {
  forest: styles.forest,
  lake: styles.lake,
  amber: styles.amber,
  stone: styles.stone,
}

const tagToneClass: Record<TagTone, string> = {
  hike: styles.tagHike,
  photo: styles.tagPhoto,
  food: styles.tagFood,
  drive: styles.tagDrive,
}

const badgeToneClass: Record<BadgeTone, string> = {
  res: styles.badgeRes,
  fcfs: styles.badgeFcfs,
}

export function ItineraryClient() {
  const [currentDay, setCurrentDay] = useState(0)
  const day = days[currentDay]

  return (
    <main className={styles.page}>
      <nav className={styles.nav}>
        <Link href="/" className={styles.brand}>
          Sam Polyakov
        </Link>
        <div className={styles.navLinks}>
          <Link href="/" className={styles.navLink}>
            Home
          </Link>
          <Link href="/blog" className={styles.navLink}>
            Blog
          </Link>
          <a href="https://github.com/sampolz" className={styles.navLink}>
            GitHub
          </a>
          <ThemeToggle />
        </div>
      </nav>

      <section className={styles.shell}>
        <div className={styles.eyebrow}>Travel artifact</div>
        <h1 className={styles.title}>
          Banff + Jasper <em>by Campervan</em>
        </h1>
        <p className={styles.dek}>
          A 7-day Calgary to Icefields Parkway loop adapted from the provided itinerary
          artifact, laid out as a browsable page inside the portfolio.
        </p>

        <div className={styles.tabs} aria-label="Day selector">
          {days.map((item, index) => (
            <button
              key={item.badge}
              type="button"
              className={`${styles.tab} ${index === currentDay ? styles.tabActive : ''}`}
              onClick={() => setCurrentDay(index)}
            >
              {item.badge}
            </button>
          ))}
        </div>

        <article className={styles.card}>
          <header className={styles.cardHead}>
            <div className={styles.dayBadge}>{day.badge}</div>
            <div>
              <h2 className={styles.dayTitle}>{day.title}</h2>
              <p className={styles.daySub}>{day.subtitle}</p>
            </div>
          </header>

          <div className={styles.cardBody}>
            <div className={styles.timeline}>
              {day.events.map((event) => (
                <div key={`${event.time}-${event.name}`} className={styles.event}>
                  <div className={`${styles.dot} ${dotToneClass[event.tone]}`}>
                    <div className={styles.dotInner} />
                  </div>
                  <div>
                    <div className={styles.eventTime}>{event.time}</div>
                    <div className={styles.eventName}>{event.name}</div>
                    <p className={styles.eventDesc}>{event.description}</p>
                    {event.tags ? (
                      <div className={styles.tags}>
                        {event.tags.map((tag) => (
                          <span
                            key={`${event.name}-${tag.label}`}
                            className={`${styles.tag} ${tagToneClass[tag.tone]}`}
                          >
                            {tag.label}
                          </span>
                        ))}
                      </div>
                    ) : null}
                  </div>
                </div>
              ))}
            </div>

            <section className={styles.campBox}>
              <div className={styles.campRow}>
                <div className={styles.campName}>{day.camp.name}</div>
                {day.camp.badge && day.camp.badgeTone ? (
                  <div className={`${styles.campBadge} ${badgeToneClass[day.camp.badgeTone]}`}>
                    {day.camp.badge}
                  </div>
                ) : null}
              </div>
              {day.camp.stars ? <div className={styles.stars}>{day.camp.stars}</div> : null}
              <p className={styles.campDetail}>{day.camp.detail}</p>
            </section>

            {day.warning ? <div className={styles.warn}>{day.warning}</div> : null}
            {day.tip ? <div className={styles.tip}>{day.tip}</div> : null}

            <div className={styles.navRow}>
              <button
                type="button"
                className={styles.navButton}
                onClick={() => setCurrentDay((value) => Math.max(0, value - 1))}
                disabled={currentDay === 0}
              >
                ← Prev
              </button>
              <button
                type="button"
                className={styles.navButton}
                onClick={() => setCurrentDay((value) => Math.min(days.length - 1, value + 1))}
                disabled={currentDay === days.length - 1}
              >
                Next →
              </button>
            </div>
          </div>
        </article>
      </section>

      <footer className={styles.footer}>
        <a href="https://github.com/sampolz" className={styles.navLink}>
          GitHub
        </a>
        <a href="https://linkedin.com/in/sam-polyakov" className={styles.navLink}>
          LinkedIn
        </a>
        <span className={styles.footerSpacer}>© Sam Polyakov</span>
      </footer>
    </main>
  )
}
