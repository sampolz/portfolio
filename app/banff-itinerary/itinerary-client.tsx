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
    title: 'Calgary → Banff',
    subtitle: 'Pick up van · stock up · first mountain evening',
    events: [
      {
        time: 'Morning',
        name: 'Pick up campervan + big grocery run',
        description:
          'Collect van in Calgary then stop at Superstore or Costco before heading to the mountains. Stock up for the full week — food is 2–3x more expensive inside the parks. Fill the tank fully.',
        tone: 'stone',
        tags: [{ label: 'drive', tone: 'drive' }],
      },
      {
        time: 'Afternoon',
        name: 'Drive to Banff (1.5 hrs) · explore town',
        description:
          'Walk Banff Ave, stop at the Visitor Centre for maps and trail conditions. Bow Falls is a 10 min walk from town — quick and worth it. Drive the Vermilion Lakes road at golden hour — flat mirror-like water reflecting Mount Rundle. First iconic Rocky Mountain photo of the trip.',
        tone: 'lake',
        tags: [{ label: 'photo', tone: 'photo' }],
      },
      {
        time: 'Evening',
        name: 'Set up camp · cook dinner · campfire',
        description:
          'Settle into your lakeside site. Fire permits are ~$11 CAD/night and include firewood at all Parks Canada campgrounds. First night with the mountains all around you.',
        tone: 'amber',
        tags: [{ label: 'food', tone: 'food' }],
      },
    ],
    camp: {
      name: '⛺ Two Jack Lakeside — Banff National Park',
      badge: 'Book now',
      badgeTone: 'res',
      stars: '★★★★★',
      detail:
        'On the shores of Two Jack Lake with Mount Rundle reflections at sunrise and sunset. Fits campervans up to 27ft. Has drinking water, flush toilets, hot showers, fire pits, bear lockers. ~$34 CAD/night + $11 fire permit. 10km from Banff town. Reserve at reservation.pc.gc.ca — lakefront sites disappear fast.',
    },
  },
  {
    badge: 'Day 2',
    title: 'Moraine Lake Sunrise + Lake Louise',
    subtitle: 'The two most iconic lakes in Canada · pre-book shuttle',
    events: [
      {
        time: '5:00 AM',
        name: 'Moraine Lake sunrise',
        description:
          'Pre-booked Parks Canada shuttle from Lake Louise Park & Ride — you cannot drive to Moraine Lake. Valley of Ten Peaks reflected in turquoise water at first light. Scramble the Rockpile (5 mins, no skills needed) for the classic shot. Spend 2+ hours here. This is the defining image of the trip.',
        tone: 'forest',
        tags: [
          { label: 'photo', tone: 'photo' },
          { label: 'hike', tone: 'hike' },
        ],
      },
      {
        time: 'Mid-morning',
        name: 'Consolation Lakes hike from Moraine Lake',
        description:
          '5.8km round trip through boulder fields to a turquoise lake ringed by cliffs. Easy-moderate, low crowds, stunning. Start while still at Moraine before the shuttle back.',
        tone: 'lake',
        tags: [
          { label: 'hike', tone: 'hike' },
          { label: 'photo', tone: 'photo' },
        ],
      },
      {
        time: 'Afternoon',
        name: 'Lake Louise + Plain of Six Glaciers hike',
        description:
          "Shuttle connects Moraine to Lake Louise. Walk the famous turquoise lakeshore then hike the Plain of Six Glaciers trail (13.8km round trip, moderate) to a teahouse perched beneath Victoria Glacier. Cash only at the teahouse — best hot chocolate you'll ever have. Ride or hike back down as light fades.",
        tone: 'amber',
        tags: [
          { label: 'hike', tone: 'hike' },
          { label: 'photo', tone: 'photo' },
          { label: 'food', tone: 'food' },
        ],
      },
    ],
    camp: {
      name: '⛺ Two Jack Lakeside — Night 2',
      badge: 'Same site',
      badgeTone: 'res',
      detail:
        'Return to your lakeside home base. Two nights here makes logistics simple — the van stays parked while you shuttle to Moraine Lake.',
    },
    warning:
      '⚠️ Book Moraine Lake shuttle now — Parks Canada shuttle opens 2 days before your visit at 8am MT and sells out in minutes. Or book a guided sunrise tour which guarantees access. Search "Moraine Lake shuttle 2026" at parks.canada.ca.',
  },
  {
    badge: 'Day 3',
    title: 'Johnston Canyon + Drive to Waterfowl Lakes',
    subtitle: 'Canyon hike · head north on Icefields Parkway',
    events: [
      {
        time: '7:30 AM',
        name: 'Johnston Canyon — Lower Falls, Upper Falls + Ink Pots',
        description:
          'Catwalks bolted into canyon walls lead past two dramatic waterfalls to the Ink Pots — five vivid turquoise mineral springs at the top. ~10km total, ~3.5 hrs. Leave early, parking fills by 9am. Note: Bow Valley Parkway has a vehicle restriction 8am–8pm May 1–June 25 on the eastern section — access Johnston via Castle Junction instead, signs will direct you.',
        tone: 'forest',
        tags: [
          { label: 'hike', tone: 'hike' },
          { label: 'photo', tone: 'photo' },
        ],
      },
      {
        time: 'Midday',
        name: 'Drive north → Icefields Parkway',
        description:
          'Fill gas at Lake Louise village — last affordable gas before Saskatchewan River Crossing. Turn north onto the Icefields Parkway. First stop: Herbert Lake (mirror-flat reflections), then Hector Lake viewpoint. Download offline maps now — no cell service for most of the Parkway.',
        tone: 'lake',
        tags: [
          { label: 'drive', tone: 'drive' },
          { label: 'photo', tone: 'photo' },
        ],
      },
      {
        time: 'Afternoon',
        name: 'Bow Lake + arrive Waterfowl Lakes',
        description:
          "Pull over at Bow Lake — first major Parkway stop, glacier-fed turquoise water with Crowfoot Glacier looming above, short flat walk along the shore. Then continue to Waterfowl Lakes. Arrive by 2pm to secure a site — it's first-come-first-served.",
        tone: 'amber',
        tags: [
          { label: 'photo', tone: 'photo' },
          { label: 'drive', tone: 'drive' },
        ],
      },
    ],
    camp: {
      name: '⛺ Waterfowl Lakes — Icefields Parkway, Banff NP',
      badge: 'First come, first served',
      badgeTone: 'fcfs',
      stars: '★★★★★',
      detail:
        'Arguably the most beautiful campground in Canada. Sites right beside a turquoise lake with jaw-dropping mountain reflections — waking up here is genuinely surreal. 116 sites for tents and campervans. Has sani-dump + water fill (useful for your van). ~$26–32 CAD/night. Arrive before 2pm in June for a guaranteed spot.',
    },
  },
  {
    badge: 'Day 4',
    title: 'Peyto Lake → Columbia Icefield → Parker Ridge',
    subtitle: 'Three unmissable Parkway stops · sleep at the glacier',
    events: [
      {
        time: 'Morning',
        name: 'Peyto Lake viewpoint',
        description:
          '20 mins north of camp. Short walk (15 mins each way) to a viewpoint above a wolf-head shaped glacial lake in electric blue-green. One of the most photographed spots on earth. Go before the tour buses roll in — the early light is extraordinary anyway.',
        tone: 'lake',
        tags: [{ label: 'photo', tone: 'photo' }],
      },
      {
        time: 'Midday',
        name: 'Saskatchewan River Crossing — gas + food',
        description:
          'The only gas station between Lake Louise and Jasper. Fill up regardless of how full you are. Basic café here too. Then continue north toward the Columbia Icefield.',
        tone: 'stone',
        tags: [
          { label: 'food', tone: 'food' },
          { label: 'drive', tone: 'drive' },
        ],
      },
      {
        time: 'Afternoon',
        name: 'Columbia Icefield + Athabasca Glacier',
        description:
          "Largest icefield in the Canadian Rockies. Walk right up to the toe of the Athabasca Glacier for free — markers showing how far it's retreated are genuinely sobering. Optional: Ice Explorer bus onto the glacier surface (~$75 CAD) or Glacier Skywalk glass platform (~$30 CAD). The walk-up alone is worth it.",
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
      name: '⛺ Wilcox Creek — Columbia Icefield, Jasper NP',
      badge: 'First come, first served',
      badgeTone: 'fcfs',
      stars: '★★★★★',
      detail:
        "46 sites at the base of the Columbia Icefield — some with direct glacier views. Fits campervans under 27ft. Pit toilets, cooking shelters, fire pits. ~$26 CAD/night. Windy but extraordinary. You're sleeping at the largest icefield in the Rockies. Arrive by noon to be sure of a spot.",
    },
  },
  {
    badge: 'Day 5',
    title: 'Athabasca Falls → Jasper Town',
    subtitle: 'Final Parkway stretch · two waterfalls · arrive Jasper',
    events: [
      {
        time: 'Morning',
        name: 'Sunwapta Falls + Athabasca Falls',
        description:
          'Two roaring waterfalls in the northern stretch. Sunwapta plunges into a narrow canyon — 15 min walk. Athabasca Falls is the most powerful waterfall in the Rockies, carving through a basalt gorge — 10 min walk and completely spectacular. Both uncrowded in the early morning.',
        tone: 'lake',
        tags: [
          { label: 'photo', tone: 'photo' },
          { label: 'hike', tone: 'hike' },
        ],
      },
      {
        time: 'Midday',
        name: 'Arrive Jasper townsite',
        description:
          'Smaller and way less commercial than Banff — it has a real town feel. Restock van at the IGA grocery store. Lunch at Jasper Brewing Company (first national park brewery in Canada, great food). Walk the main street, pick up any supplies.',
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
      name: '⛺ Whistlers — Jasper National Park',
      badge: 'Book now',
      badgeTone: 'res',
      stars: '★★★',
      detail:
        'Largest campground in Jasper (781 sites), recently renovated. Has hot showers, sani-dump, trail into town. ~$35–42 CAD/night unserviced. Not the prettiest but the most convenient for two nights in Jasper. Operating at reduced capacity in 2026 due to 2024 wildfire — book as early as possible at reservation.pc.gc.ca.',
    },
    warning:
      "⚠️ Whistlers reduced capacity in 2026 due to Jasper wildfire recovery. If it's sold out, try Wapiti Campground (also near Jasper town) or Honeymoon Lake (~30km south, beautiful lakeside setting, first-come-first-served).",
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
          "Jasper is a UNESCO Dark Sky Preserve — one of the largest in the world. In mid-June it doesn't fully darken until ~11pm but if you stay up the stars are extraordinary. Drive a few km from camp to escape any glow from town. No equipment needed.",
        tone: 'amber',
        tags: [{ label: 'photo', tone: 'photo' }],
      },
    ],
    camp: {
      name: '⛺ Whistlers — Night 2',
      badge: 'Same site',
      badgeTone: 'res',
      detail:
        'Second night in Jasper. Use the showers, do laundry if needed. Cook a proper dinner in camp — Jasper restaurants are pricey. The Downstream Bar if you want one last dinner out in town.',
    },
  },
  {
    badge: 'Day 7',
    title: 'Valley of Five Lakes → Calgary → Fly Home',
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
        name: 'Drive Jasper → Calgary via Hwy 16 (4–4.5 hrs)',
        description:
          'East through the foothills back to Calgary. Stop in Hinton for coffee. Clean out the van before returning — most companies charge cleaning fees if left messy. Return van at Calgary depot.',
        tone: 'stone',
        tags: [{ label: 'drive', tone: 'drive' }],
      },
      {
        time: 'Afternoon',
        name: 'Fly home from Calgary YYC',
        description:
          "Book an afternoon or evening flight — don't cut it close. Allow 2.5 hrs at the airport. The van depot to YYC is typically 15–30 mins.",
        tone: 'amber',
      },
    ],
    camp: {
      name: '💰 Full week camping cost',
      detail:
        'Two Jack Lakeside ×2 nights: ~$90 CAD · Waterfowl Lakes ×1: ~$30 CAD · Wilcox Creek ×1: ~$26 CAD · Whistlers ×2: ~$80 CAD · Total: ~$226 CAD (~$165 USD) for the week · vs $2,000+ in hotels · If your dates fall after June 19: free park admission + 25% off camping saves even more.',
    },
    tip:
      'Book right now: Two Jack Lakeside and Whistlers are both reservable at reservation.pc.gc.ca. Waterfowl and Wilcox Creek are first-come-first-served — just arrive before noon each day. Also book the Moraine Lake shuttle and Spirit Island cruise ASAP — both sell out weeks in advance.',
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
          7 days · Pick up Calgary YYC · Icefields Parkway loop · Mid-June · Solar van, no hookups needed
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
