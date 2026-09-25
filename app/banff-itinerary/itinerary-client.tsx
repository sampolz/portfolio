'use client'

import Link from 'next/link'
import { useState } from 'react'
import { ThemeToggle } from 'app/components/theme-toggle'
import styles from './itinerary.module.css'

type TagTone = 'hike' | 'photo' | 'food' | 'drive'
type DotTone = 'forest' | 'lake' | 'amber' | 'stone'
type BadgeTone = 'res' | 'fcfs' | 'booked'

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
    badge: 'Day 0',
    title: 'Fly to Calgary',
    subtitle: 'Evening flight · hotel night',
    events: [
      {
        time: '6:30pm',
        name: 'BOS → YYC',
        description:
          'WS1625 BOS-YYC. Land at 10pm.',
        tone: 'amber',
      },
    ],
    camp: {
      name: '🏨 Hotel night!',
      badge: 'Booked',
      badgeTone: 'booked',
      detail:
        'Calgary airport hotel',
    },
  },
  {
    badge: 'Day 1',
    title: 'Calgary → Banff',
    subtitle: 'Pick up van · stock up · first mountain evening',
    events: [
      {
        time: '8:00am',
        name: 'Pick up campervan + big grocery run',
        description:
          'Collect van in Calgary then stop at Superstore  before heading to the park. Stock up for the full week — food is 2–3x more expensive inside the parks.',
        tone: 'stone',
        tags: [{ label: 'drive', tone: 'drive' }],
      },
      {
        time: 'Afternoon',
        name: 'Drive to Canmore (~1 hr) · explore town',
        description:
          'Walk around town. Grab some food, and explore. Pretty chill.',
        tone: 'lake',
        tags: [{ label: 'photo', tone: 'photo' }],
      },
      {
        time: 'Evening',
        name: 'Set up camp · cook dinner · campfire',
        description:
          'Settle into our campsite. Booking includes fire permit + wood. First night! 🕺🕺🕺',
        tone: 'amber',
        tags: [{ label: 'food', tone: 'food' }],
      },
    ],
    camp: {
      name: '⛺ Tunnel Mountain Village 1 — Banff National Park',
      badge: 'Booked',
      badgeTone: 'booked',
      detail:
        'Site B45. Walk around campground for good views and wildlife.',
    },
  },
  {
    badge: 'Day 2',
    title: 'Moraine Lake + Lake Louise',
    subtitle: 'The two most iconic lakes in Canada · pre-book shuttle',
    events: [
      {
        time: '9:00 AM',
        name: 'Lake Louise',
        description:
          'Shuttle to Lake Louise. Hike Little Beehive via Lake Agnes Trail',
        tone: 'forest',
        tags: [
          { label: 'photo', tone: 'photo' },
          { label: 'hike', tone: 'hike' },
        ],
      },
      {
        time: '3:00pm',
        name: 'Moraine Lake',
        description:
          'Shuttle to Moraine Lake. Walk to the Rock Scramble and take pics.',
        tone: 'lake',
        tags: [
          { label: 'hike', tone: 'hike' },
          { label: 'photo', tone: 'photo' },
        ],
      },
      {
        time: 'Afternoon/Evening',
        name: 'Recover',
        description:
          "We will be dead at this point. Eat. Sleep.",
        tone: 'amber',
        tags: [
          { label: 'food', tone: 'food' },
        ],
      },
    ],
    camp: {
      name: '⛺ Tunnel Mountain Village 1 — Night 2',
      badge: 'Booked',
      badgeTone: 'booked',
      detail:
        'Return to B45. Two nights here!',
    },
    warning:
      '⚠️ Book Moraine Lake shuttle 2 days before at 8am MT, sells out in minutes. Or book a private shuttle which guarantees access but is hella $$$',
  },
  {
    badge: 'Day 3',
    title: 'Rained out mostly :(',
    subtitle: 'Rain and a lil hike',
    events: [
      {
        time: 'Morning',
        name: 'Chill',
        description:
          'Chill inside bc it was raining. Did laundry.',
        tone: 'forest',
        tags: [
          { label: 'hike', tone: 'hike' },
          { label: 'photo', tone: 'photo' },
        ],
      },
      {
        time: '7:00pm',
        name: 'Marble Canyon',
        description:
          "Alyssa found this place. Bit of a hidden gem. Nice lil hike took like an hour.",
        tone: 'amber',
        tags: [
          { label: 'photo', tone: 'photo' },
          { label: 'drive', tone: 'drive' },
        ],
      },
    ],
      camp: {
      name: '⛺ Tunnel Mountain Village 1',
      badge: 'Booked',
      badgeTone: 'booked',
      detail:
        'Had to book last minute so we were basically in a parking lot lol',
    },
  },
  {
    badge: 'Day 4',
    title: 'Bow Lake → Peyto Lake → Goats and Glaciers',
    subtitle: 'Three unmissable Parkway stops',
    events: [
      {
        time: 'Morning',
        name: 'Bow Lake',
        description:
          'Right on the road',
        tone: 'lake',
        tags: [{ label: 'photo', tone: 'photo' }],
      },
      {
        time: 'Morning',
        name: 'Peyto Lake viewpoint',
        description:
          'Short walk (15 mins each way) to a viewpoint. One of the most photographed spots on earth. Was pretty awesome.',
        tone: 'lake',
        tags: [{ label: 'photo', tone: 'photo' }],
      },
      {
        time: 'Afternoon',
        name: 'Columbia Icefield + Athabasca Glacier',
        description:
          "Skip idk it was a big piece of ice. Everything else is cooler",
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
          '3km south of the Icefields Centre. Short steep hike (4.8km round trip, 250m gain, ~2 hrs) above treeline to a ridge with sweeping views of the Saskatchewan Glacier and the whole Columbia Icefield system. Best bang-for-effort hike on the entire Parkway.',
        tone: 'amber',
        tags: [
          { label: 'hike', tone: 'hike' },
          { label: 'photo', tone: 'photo' },
        ],
      },
    ],
    camp: {
      name: '⛺ Whistlers Campground, Jasper NP',
      badge: 'Booked',
      badgeTone: 'booked',
      detail:
        "Booked site 26E. Largest campground in Jasper, recently renovated. Has hot showers, trail into town. Not the prettiest but the most convenient for two nights in Jasper. Operating at reduced capacity due to 2024 wildfire.",
    },
  },
  {
    badge: 'Day 5',
    title: 'Athabasca Falls → Jasper Town',
    subtitle: 'See end of parkway · two waterfalls · arrive Jasper',
    events: [
      {
        time: 'Morning',
        name: 'Sunwapta Falls + Athabasca Falls',
        description:
          'Two roaring waterfalls in the northern stretch of icefields parkway. Sunwapta plunges into a narrow canyon — 15 min walk. Athabasca Falls is the most powerful waterfall in the Rockies, carving through a basalt gorge — 10 min walk. Both uncrowded in the early morning.',
        tone: 'lake',
        tags: [
          { label: 'photo', tone: 'photo' },
          { label: 'hike', tone: 'hike' },
        ],
      },
      {
        time: 'Midday',
        name: 'Jasper townsite',
        description:
          'Smaller and way less commercial than Banff — feels like a real town. Restock van at the IGA grocery store if we need it. Lunch at Jasper Brewing Company (first national park brewery in Canada, great food). Walk main street.',
        tone: 'forest',
        tags: [{ label: 'food', tone: 'food' }],
      },
      {
        time: 'Afternoon',
        name: 'Pyramid Lake + Patricia Lake',
        description:
          '7km from Jasper. Two beautiful mountain lakes with stunning reflections. Walk the short bridge out to Pyramid Island — classic sunset spot. Elk and deer commonly wander through at dusk. Great golden hour light on the peaks.',
        tone: 'amber',
        tags: [{ label: 'photo', tone: 'photo' }],
      },
    ],
    camp: {
      name: '⛺ Whistlers Campground, Jasper NP',
      badge: 'Booked',
      badgeTone: 'booked',
      detail:
        "Night 2 at 26E.",
    }
  },
  {
    badge: 'Day 6',
    title: 'Maligne Lake + Maligne Canyon',
    subtitle: 'Spirit Island boat cruise · deepest canyon · dark skies',
    events: [
      {
        time: 'Morning',
        name: 'Maligne Lake — Spirit Island cruise',
        description:
          "45 min drive from Jasper. Canada's second largest natural lake — 22km long, ringed by snow-capped peaks with glaciers pouring down. Spirit Island boat cruise (~$80 CAD/person, pre-book) takes you to the most photographed island in Canada, perfectly framed in a turquoise inlet. One of those experiences that genuinely lives up to the hype. Book at banffjaspercollection.com.",
        tone: 'lake',
        tags: [{ label: 'photo', tone: 'photo' }],
      },
      {
        time: 'Afternoon',
        name: 'Maligne Canyon hike',
        description:
          'On the drive back. Deepest accessible canyon in the Rockies — 55m of sheer limestone walls with six bridges crossing at different levels and waterfalls thundering below. Walk to the 4th or 6th bridge for the full experience (~7km round trip). Completely different aesthetic from anything else on the trip.',
        tone: 'forest',
        tags: [
          { label: 'hike', tone: 'hike' },
          { label: 'photo', tone: 'photo' },
        ],
      },
      {
        time: 'Evening',
        name: 'Jasper dark sky viewing',
        description:
          "Jasper is a UNESCO Dark Sky Preserve — one of the largest in the world. In mid-June it doesn't fully darken until ~11pm but if we stay up the stars will be epic. Drive a few km from camp to escape any glow from town.",
        tone: 'amber',
        tags: [{ label: 'photo', tone: 'photo' }],
      },
    ],
    camp: {
      name: '⛺ Whistlers Campground, Jasper NP',
      badge: 'Booked',
      badgeTone: 'booked',
      detail:
        "Night 3 at 26E. Last night :(",
    },
  },
  {
    badge: 'Day 7',
    title: 'Valley of Five Lakes → Calgary',
    subtitle: 'Last morning hike · 4 hr drive · return van',
    events: [
      {
        time: '7:00 AM',
        name: 'Valley of Five Lakes hike',
        description:
          "One of Jasper's best easy hikes — 4.5km loop through forest to five lakes each a different shade of teal and turquoise. About 1.5 hrs. Beautiful and not crowded first thing in the morning. Perfect final hike before the drive back.",
        tone: 'forest',
        tags: [
          { label: 'hike', tone: 'hike' },
          { label: 'photo', tone: 'photo' },
        ],
      },
      {
        time: 'Mid-morning',
        name: 'Drive Jasper → Calgary (4–4.5 hrs)',
        description:
          'East through the foothills back to Calgary. Stop in Hinton. Clean out the van.',
        tone: 'stone',
        tags: [{ label: 'drive', tone: 'drive' }],
      },
            {
        time: '4:00pm',
        name: 'Return Van',
        description:
          'Say goodbye to our close personal friend :(',
        tone: 'stone',
        tags: [{ label: 'drive', tone: 'drive' }],
      },
    ],
    camp: {
      name: '🏨 Hotel night!',
      badge: 'NEED TO BOOK',
      badgeTone: 'res',
      detail:
        'Alyssa Bobissa\'s job to find dis lol',
    },
    },
      {
    badge: 'Day 8',
    title: 'Explore Calgary → Fly Home',
    subtitle: 'YYC → BOS',
    events: [
      {
        time: 'Morning',
        name: 'Explore Calgary',
        description:
          "Idk if there's anything that cool lol.",
        tone: 'forest',
      },
      {
        time: '3:30pm',
        name: 'Fly home',
        description:
          'WS 1626 YYC-Boston. Get to airport at like 1:30.',
        tone: 'stone',
      },
    ],
    camp: {
      name: 'The end :(',
      detail:
        'Gonna be epic.',
    },
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
  booked: styles.badgeBooked,
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
          <Link href="/banff-itinerary" className={styles.navLink}>
            Banff
          </Link>
          <a href="https://github.com/sampolz" className={styles.navLink}>
            GitHub
          </a>
          <ThemeToggle />
        </div>
      </nav>

      <section className={styles.shell}>
        <h1 className={styles.title}>
          Banff + Jasper <em>by Campervan</em>
        </h1>
        <p className={styles.dek}>
          7 days · Icefields Parkway loop · Mid-June
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
