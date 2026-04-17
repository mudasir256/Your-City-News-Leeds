import Image from "next/image";
import Link from "next/link";
import { ReviewsSlider } from "@/components/ReviewsSlider";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { faqItems } from "@/lib/faq";
import { reviews } from "@/lib/reviews";

const mapUrl =
  "https://www.google.com/maps/search/?api=1&query=Your+City+News+86+Bishopgate+St+Leeds+LS1+4BB";

const rangeCards = [
  {
    title: "Drinks — soft, chilled & spirited",
    text: "From everyday soft drinks and mixers through to lagers, craft-style favourites, wines and spirits, we keep the fridges and shelves busy so you are not stuck with the same few lines every visit. Guests often mention the breadth of choice — whether you want something familiar after a long shift or something new to try at the weekend. Our team is happy to nudge you towards a crisp white, a mellow red, or a cold can that hits the spot.",
    img: "/products.jpg",
    alt: "Selection of drinks and products in store",
  },
  {
    title: "Snacks, sweets & pick-me-ups",
    text: "Crisps, chocolate, sweets and the little treats that make a walk home feel shorter are all part of what we do. We know people dip in for a single bar, a sharing bag, or a stash for the hotel room — and we try to keep the range interesting so regulars still spot something different on the shelf. If you are feeding a crowd or just yourself, there is usually plenty to choose from.",
    img: "/products2.jpg",
    alt: "Snacks and confectionery on display",
  },
  {
    title: "Reads, papers & journey essentials",
    text: "Magazines, papers and bits-and-bobs for travel days sit alongside the rest of the range. Visitors often grab something to read on the train, a sweet something for the coach, or a cold drink before heading to the station. Stock changes with demand, so if you are after a particular title it is always worth asking — we will tell you honestly what we have in that week.",
    img: "/shoppic.jpg",
    alt: "Magazines and interior of the shop",
  },
] as const;

const visitorAudiences = [
  {
    title: "Locals & regulars",
    text: "If Leeds is home, you probably already know how handy it is to have somewhere that still feels awake when the rest of the street has gone quiet. Regulars pop in for the same chocolate bar every Friday, for milk and fruit on the way back from town, or for a four-pack when friends are on the sofa. We try to remember preferences without making a fuss — that is what neighbourhood shops are for.",
    img: "/products1.jpg",
    alt: "Everyday snacks and drinks on the shelves",
  },
  {
    title: "Visitors & hotel guests",
    text: "If you are visiting for work, a weekend away or a longer trip, reviews often mention how close we are to central hotels — easy for a cold drink, a magazine for the journey, or something sweet before you turn in. People travelling from Northern Ireland and further afield have told us they are glad to find a favourite wine or a familiar snack after a long day on the road. Ask at the counter if you are unsure what to pick; we would rather point you right than sell you wrong.",
    img: "/shoppic.jpg",
    alt: "Magazines and goods for travellers",
  },
  {
    title: "Night owls & shift workers",
    text: "Leeds never really switches off — hospitality, security, drivers, musicians and a hundred other jobs keep the city moving while most people sleep. When your break lands at an odd hour, a bright shop with cold drinks, hot snacks and someone awake at the till matters more than people think. We are grateful to everyone who trusts us on those late walks home.",
    img: "/products4.jpg",
    alt: "Chilled drinks and late-night essentials",
  },
] as const;

const moreRange = [
  {
    title: "Fresh fruit & everyday groceries",
    text: "When you need something simple for the room or the kitchen table — fruit, cupboard basics and those small items you forgot on the big shop — we try to be useful as well as convenient. It is all part of being a proper corner shop in the middle of the city.",
    img: "/fruits1.jpg",
    alt: "Fresh fruit and groceries",
  },
  {
    title: "Weekend treats & something special",
    text: "Whether you are winding down after work or stocking up before friends come round, we keep lines that suit quieter nights and louder ones alike. Ask what is new or what has been flying out — the counter is the best place for an honest recommendation.",
    img: "/products3.jpg",
    alt: "Products and bottles in store",
  },
  {
    title: "Bright, busy, and local",
    text: "Your City News is not a faceless chain aisle — it is a small shop with a big personality, shelves that stay colourful, and staff who remember faces. That energy is exactly what people describe when they say Leeds still feels like a city of neighbourhoods.",
    img: "/beautfullbg.jpg",
    alt: "Colourful shop display",
  },
] as const;

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="relative isolate min-h-[min(100dvh,56rem)] overflow-hidden bg-[#050a1c] text-cream">
          <div className="absolute inset-0">
            <Image
              src="/beautfullbg.jpg"
              alt="Bright, colourful interior of Your City News and Off Licence, Leeds"
              fill
              priority
              className="object-cover object-center"
              sizes="100vw"
            />
            {/* Tint + vignette: strong enough for type, light enough to see the photo */}
            <div
              className="absolute inset-0 bg-gradient-to-br from-[#030712]/85 via-brand/45 to-[#0a1a4a]/80"
              aria-hidden
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent" aria-hidden />
            <div
              className="absolute inset-0 bg-[radial-gradient(100%_70%_at_0%_0%,rgba(0,0,0,0.35),transparent_50%)]"
              aria-hidden
            />
          </div>
          <div className="relative z-10 mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:py-32">
            <p className="mb-3 inline-flex rounded-full border border-cream/35 bg-cream/10 px-3 py-1 text-xs font-medium uppercase tracking-widest text-cream">
              Leeds city centre · 86 Bishopgate Street · LS1 4BB
            </p>
            <h1 className="font-display max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-white [text-shadow:0_2px_28px_rgba(0,0,0,0.45)] sm:text-5xl lg:text-6xl">
              Your City News &amp; Off Licence — late-night news, drinks and good company in the heart of Leeds.
            </h1>
            <div className="mt-8 max-w-2xl space-y-4 text-lg leading-relaxed text-cream [text-shadow:0_1px_14px_rgba(0,0,0,0.5)]">
              <p className="text-cream">
                Step in for magazines and papers, soft drinks, energy drinks, crisps, chocolate, wines, beers and spirits
                — the sort of well-stocked counter you remember from proper city-centre independents. We sit on Bishopgate
                Street where locals, students, office workers and hotel guests cross paths, often late into the night.
              </p>
              <p className="text-cream">
                People tell us we are as much a friendly stop-out as a shop: recommendations at the till, laughter at
                closing time, and a welcome if you are new to Leeds or just passing through. If you need directions,
                a suggestion for a drink, or two minutes of warmth out of the rain, you are always welcome.
              </p>
            </div>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="tel:+441132441313"
                className="inline-flex items-center justify-center rounded-full bg-cream px-6 py-3 text-sm font-semibold text-brand shadow-card transition hover:bg-white"
              >
                +44 113 244 1313
              </a>
              <a
                href={mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-cream/40 bg-cream/10 px-6 py-3 text-sm font-semibold text-cream backdrop-blur-sm transition hover:border-cream/60 hover:bg-cream/15"
              >
                Get directions
              </a>
            </div>
            <div className="mt-14 grid gap-8 border-t border-cream/20 pt-10 sm:grid-cols-3">
              <div>
                <p className="font-display text-3xl font-semibold text-white [text-shadow:0_2px_20px_rgba(0,0,0,0.4)]">
                  4.5
                </p>
                <p className="mt-1 text-sm text-cream/85">Average rating on Google (30 reviews)</p>
                <p className="mt-3 text-sm leading-relaxed text-cream/90">
                  Guests often praise the range, the prices on drinks, and how easy we are to find next to hotels and
                  the centre.
                </p>
              </div>
              <div className="sm:border-l sm:border-cream/20 sm:pl-8">
                <p className="text-sm font-semibold uppercase tracking-wider text-cream">Late opening</p>
                <p className="mt-2 text-sm leading-relaxed text-cream/90">
                  Known for early starts and very late finishes — a reliable pit-stop when much of the high street has
                  gone quiet. Call if you need exact times on a particular day.
                </p>
              </div>
              <div className="sm:border-l sm:border-cream/20 sm:pl-8">
                <p className="text-sm font-semibold uppercase tracking-wider text-cream">In their words</p>
                <p className="mt-2 text-sm italic leading-relaxed text-cream/95">
                  &ldquo;Best range of soft drinks, drinks, crisps and chocolates in town.&rdquo;
                </p>
                <p className="mt-1 text-xs text-cream/75">— Google review summary</p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-slate-200/80 bg-cream py-16 sm:py-20" id="story">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:grid-cols-2 sm:gap-12 sm:px-6">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-card ring-1 ring-slate-200/70 sm:aspect-[5/4]">
              <Image
                src="/shopic1.jpg"
                alt="Your City News shop front on Bishopgate Street"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
            </div>
            <div className="text-center sm:text-left">
              <h2 className="font-display text-2xl font-semibold text-brand sm:text-3xl">More than a quick transaction</h2>
              <p className="mt-5 text-slate-600 leading-relaxed">
                Independent shops like ours are where Leeds keeps its personality — a counter where you can ask a
                question without an app, where staff recognise regulars, and where visitors stumble on something they did
                not know they wanted. Your City News &amp; Off Licence has grown into that kind of place: part newsagent,
                part off licence, part late-night port in a storm.
              </p>
              <p className="mt-4 text-slate-600 leading-relaxed">
                We are proud of the mix of people who use the shop: night workers grabbing something cold after a shift,
                students between lectures, rugby and gig crowds, hotel guests stepping out for two minutes, and neighbours
                who have called Leeds home for decades. However long you stay — thirty seconds or ten minutes at the
                door — we try to make it feel worth the walk.
              </p>
            </div>
          </div>
        </section>

        <section className="border-b border-slate-200/80 bg-white py-16 sm:py-24" id="about">
          <div className="mx-auto grid max-w-6xl gap-14 px-4 sm:grid-cols-2 sm:items-start sm:gap-16 sm:px-6">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-card ring-1 ring-slate-200/60">
              <Image
                src="/shopcounter.jpg"
                alt="Inside the shop — counter and friendly service"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div>
              <h2 className="font-display text-3xl font-semibold text-brand sm:text-4xl">A proper Leeds welcome</h2>
              <p className="mt-5 text-slate-600 leading-relaxed">
                Cold drink after work, weekend bottle, magazine for the train, or a quick cupboard top-up — we keep it
                straightforward and warm. When people say it feels more like a chat than a formal shop visit, that is the
                compliment we want.
              </p>
              <p className="mt-4 text-slate-600 leading-relaxed">
                Honest shelves: brands you know, seasonal bits when we can, and staff who know the stock — happy to
                nudge you on wine, snacks, or what the regulars are on about this week.
              </p>
              <ul className="mt-6 space-y-2.5 text-slate-700">
                {[
                  "Papers, magazines & reads for the road",
                  "Soft drinks, mixers, chilled lines & off-licence favourites",
                  "Beer, cider, wine & spirits — ask for a recommendation",
                  "Snacks, sweets, cards, stamps & small essentials",
                  "Fruit & grocery bits for home or the hotel",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-relaxed">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mx-auto mt-16 grid max-w-6xl gap-10 px-4 sm:grid-cols-2 sm:items-center sm:px-6">
            <p className="text-slate-600 leading-relaxed">
              Travel guides and visitor write-ups sometimes call the atmosphere here a &ldquo;late-night hangout&rdquo; as
              much as a shop — friendships struck up over the counter, lively chat, and staff who greet you with a smile
              even when the clock says it should be bedtime. We will not pretend every night is the same; Leeds moves
              fast. But we do try to keep the lights on and the kettle logic of a good corner shop: fair stock, fair
              chat, and a door that opens when you need it.
            </p>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-soft ring-1 ring-slate-200/60">
              <Image
                src="/products5.jpg"
                alt="Colourful stock on display inside the shop"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
            </div>
          </div>
        </section>

        <section className="bg-warm py-16 sm:py-24" id="visitors">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="max-w-3xl">
              <h2 className="font-display text-3xl font-semibold text-brand sm:text-4xl">Who we love seeing through the door</h2>
              <p className="mt-4 text-slate-600 leading-relaxed">
                Bishopgate Street sits where the city centre meets real daily life — office blocks, flats, hotels and
                footpaths that stay busy long after the department stores dim their windows. That mix shapes what we
                stock and how we run the day. Here are three kinds of visits we see all the time (though you do not
                have to fit a box — everyone is welcome).
              </p>
            </div>
            <div className="mt-12 grid gap-8 lg:grid-cols-3">
              {visitorAudiences.map((card) => (
                <article
                  key={card.title}
                  className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-soft"
                >
                  <div className="relative aspect-[16/10]">
                    <Image src={card.img} alt={card.alt} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 33vw" />
                  </div>
                  <div className="p-8">
                    <h3 className="font-display text-xl font-semibold text-brand">{card.title}</h3>
                    <p className="mt-4 text-sm text-slate-600 leading-relaxed">{card.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-slate-200/80 bg-white py-16 sm:py-24" id="range">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="max-w-3xl">
              <h2 className="font-display text-3xl font-semibold text-brand sm:text-4xl">Something for every visit</h2>
              <p className="mt-4 text-slate-600 leading-relaxed">
                We are not trying to be a supermarket the size of a football pitch — instead, we pack a lot of choice
                into a space you can cross in a minute. That means turning stock over, listening to what people ask for,
                and keeping fridges full of the drinks people actually want at the moment they walk in. Below is a longer
                look at the kinds of things you will find on a typical week; lines can change with the seasons and with
                what suppliers send us, so treat this as a guide rather than a fixed catalogue.
              </p>
              <p className="mt-4 text-slate-600 leading-relaxed">
                If you are planning a party, a quiet night in, or a train picnic, start with a wander down the aisles
                and finish at the counter — that is where the best suggestions usually happen.
              </p>
            </div>
            <div className="mt-14 grid gap-8 lg:grid-cols-3">
              {rangeCards.map((card) => (
                <article
                  key={card.title}
                  className="group overflow-hidden rounded-2xl bg-cream shadow-soft ring-1 ring-slate-200/60 transition hover:shadow-card"
                >
                  <div className="relative aspect-[5/3]">
                    <Image
                      src={card.img}
                      alt={card.alt}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-[1.03]"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-6 sm:p-7">
                    <h3 className="font-display text-xl font-semibold text-brand">{card.title}</h3>
                    <p className="mt-3 text-sm text-slate-600 leading-relaxed">{card.text}</p>
                  </div>
                </article>
              ))}
            </div>
            <div className="mt-10 grid gap-8 lg:grid-cols-3">
              {moreRange.map((card) => (
                <article
                  key={card.title}
                  className="group overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-soft transition hover:shadow-card"
                >
                  <div className="relative aspect-[5/3]">
                    <Image
                      src={card.img}
                      alt={card.alt}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-[1.02]"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-6 sm:p-7">
                    <h3 className="font-display text-lg font-semibold text-brand">{card.title}</h3>
                    <p className="mt-3 text-sm text-slate-600 leading-relaxed">{card.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-brand py-16 text-white sm:py-24" id="gallery">
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <h2 className="font-display text-3xl font-semibold sm:text-4xl">Inside the buzz</h2>
            <p className="mt-4 text-white/80 leading-relaxed">
              Colourful shelves, chilled cabinets and the little details that make a small shop feel alive — we refresh
              displays as stock lands so there is always something catching the eye. Whether you are in for thirty
              seconds or you linger for a chat, we hope it feels like Leeds: unpretentious, busy in the best way, and a
              bit warmer than the weather outside.
            </p>
          </div>
        </section>

        <section className="border-b border-slate-200/80 bg-cream py-16 sm:py-24" id="leeds">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:grid-cols-2 sm:items-center sm:gap-14 sm:px-6">
            <div className="order-2 sm:order-1">
              <h2 className="font-display text-3xl font-semibold text-brand sm:text-4xl">On the ground in Leeds</h2>
              <p className="mt-5 text-slate-600 leading-relaxed">
                Leeds city centre keeps growing — new flats, new offices, new faces every semester — but it still runs on
                small independents that know their street. Bishopgate Street connects you to the rhythm of the centre:
                close enough to walk from the station or the main shopping blocks, but grounded enough that people live
                and work here year-round, not only on Saturdays.
              </p>
              <p className="mt-4 text-slate-600 leading-relaxed">
                We think that matters for how a shop behaves. Your City News is not a pop-up or a faceless franchise; it
                is part of the daily texture of LS1. When you spend your money here, it stays in the city in a way that
                matters — wages for local staff, orders from regional suppliers, and a frontage that still looks like Leeds
                rather than anywhere else on the map.
              </p>
              <p className="mt-4 text-slate-600 leading-relaxed">
                If you are new to the area, say hello. If you are old Leeds through and through, tell us what we should
                stock next. Either way, we are glad you found us — and we hope you leave with exactly what you needed, plus
                maybe one thing you did not know you wanted until you saw it on the shelf.
              </p>
            </div>
            <div className="relative order-1 aspect-[4/3] overflow-hidden rounded-2xl shadow-card ring-1 ring-slate-200/70 sm:order-2">
              <Image
                src="/products6.jpg"
                alt="Leeds city life — products and signage in the shop window"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
            </div>
          </div>
        </section>

        <section
          className="relative overflow-hidden border-b border-slate-200/80 bg-gradient-to-b from-warm/50 via-cream/40 to-white py-16 sm:py-28"
          id="payments"
        >
          <div
            className="pointer-events-none absolute -right-24 -top-32 h-80 w-80 rounded-full bg-brand/[0.07] blur-3xl sm:-right-32 sm:h-[28rem] sm:w-[28rem]"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-brand/[0.05] blur-3xl"
            aria-hidden
          />
          <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
            <div className="grid items-start gap-14 lg:grid-cols-2 lg:gap-20">
              <div className="relative">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand/75">At the till</p>
                <h2 className="font-display mt-3 text-3xl font-semibold text-brand sm:text-4xl">
                  Payments &amp; quick visits
                </h2>
                <div className="mt-6 flex flex-wrap gap-2">
                  {["Cards", "Contactless", "Apple & Google Pay", "Cash"].map((label) => (
                    <span
                      key={label}
                      className="inline-flex items-center rounded-full border border-brand/15 bg-white/80 px-3.5 py-1 text-xs font-medium text-brand shadow-sm backdrop-blur-sm"
                    >
                      {label}
                    </span>
                  ))}
                </div>
                <p className="mt-7 text-slate-600 leading-relaxed">
                  For many people, a corner shop is only as good as how fast they can get in and out. We accept major
                  credit and debit cards where available, contactless cards, and NFC mobile payments so you can tap and
                  go when you are rushing to a train or back to a hotel. Cash is welcome too.
                </p>
                <p className="mt-4 rounded-2xl border border-slate-200/80 bg-white/70 p-5 text-slate-600 leading-relaxed shadow-sm backdrop-blur-sm">
                  Google lists us with options including delivery and &ldquo;quick visit&rdquo; — availability can change,
                  so if you need something brought out or you are unsure whether we can help with a larger order, the
                  quickest route is always a phone call. We would rather set expectations honestly than promise
                  something we cannot deliver on the day.
                </p>
              </div>

              <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-warm via-cream to-[#f5f0e8] shadow-[0_24px_60px_-18px_rgba(13,46,157,0.18)] ring-1 ring-brand/10 transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_70px_-16px_rgba(13,46,157,0.24)]">
                <div className="relative aspect-[2/1] w-full overflow-hidden sm:aspect-[21/9]">
                  <Image
                    src="/products8.jpg"
                    alt="Shelves stocked for your visit"
                    fill
                    className="object-cover transition duration-700 ease-out group-hover:scale-[1.03]"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-90"
                    aria-hidden
                  />
                </div>
                <div className="relative px-7 pb-8 pt-7 sm:px-9 sm:pb-9 sm:pt-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand/70">Plan your trip</p>
                  <h3 className="font-display mt-2 text-2xl font-semibold text-brand">Before you visit</h3>
                  <ul className="mt-6 space-y-0 divide-y divide-slate-300/50 text-sm text-slate-600 leading-relaxed">
                    <li className="flex gap-4 pb-5 pt-0">
                      <span
                        className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand/12 text-xs font-bold text-brand"
                        aria-hidden
                      >
                        1
                      </span>
                      <div>
                        <span className="font-semibold text-slate-800">Planning</span>
                        <p className="mt-1.5">
                          If you are organising a one-off trip or meeting friends nearby, save our address in your maps
                          app — 86 Bishopgate Street, Leeds LS1 4BB — so you are not hunting signal on the pavement.
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-4 py-5">
                      <span
                        className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand/12 text-xs font-bold text-brand"
                        aria-hidden
                      >
                        2
                      </span>
                      <div>
                        <span className="font-semibold text-slate-800">Peak times</span>
                        <p className="mt-1.5">
                          Weekends, match days and gig nights can mean a busier counter. We will move everyone through
                          as quickly as we can while still answering questions properly.
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-4 pt-5">
                      <span
                        className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand/12 text-xs font-bold text-brand"
                        aria-hidden
                      >
                        3
                      </span>
                      <div>
                        <span className="font-semibold text-slate-800">Special requests</span>
                        <p className="mt-1.5">
                          If you need a particular magazine issue, a multipack, or a type of wine you cannot see, ask.
                          We cannot magic every product into existence, but we can often tell you when the next delivery
                          is due or suggest a close alternative.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-slate-200/80 bg-brand py-16 text-white sm:py-24" id="reviews">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h2 className="font-display text-3xl font-semibold sm:text-4xl">What people are saying</h2>
            <div className="mt-6 max-w-3xl space-y-4 text-white/80 leading-relaxed">
              <p>
                We are genuinely grateful for everyone who leaves a review — good, mixed, or blunt. It helps other
                people find us and reminds us what matters: range, price, atmosphere and honesty at the till. The
                snippets below are taken from public Google-style feedback; wording is lightly tidied only where it
                helps readability.
              </p>
              <p>
                Common themes? Friendly staff, a strong selection of drinks and snacks, recommendations from behind the
                counter, and a sense that the shop is part of Leeds&apos;s late-night rhythm. We read them all, even when
                we wince — it keeps us grounded.
              </p>
            </div>
            <ReviewsSlider reviews={reviews.slice(0, 5)} />
          </div>
        </section>

        <section className="bg-cream py-16 sm:py-24" id="faq">
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <h2 className="font-display text-3xl font-semibold text-brand sm:text-4xl">Questions we hear a lot</h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              If your question is not here, pick up the phone — we are happy to help. The answers below are written in
              plain language so you know what to expect before you walk down Bishopgate Street.
            </p>
            <div className="mt-10 space-y-3">
              {faqItems.map((item) => (
                <details
                  key={item.q}
                  className="group overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-soft open:shadow-card"
                >
                  <summary className="flex cursor-pointer list-none items-center gap-3 px-5 py-4 font-semibold text-brand marker:content-none [&::-webkit-details-marker]:hidden">
                    <span className="flex min-w-0 flex-1 items-center justify-between gap-3">
                      <span>{item.q}</span>
                      <span className="shrink-0 text-slate-400 transition group-open:rotate-45" aria-hidden>
                        +
                      </span>
                    </span>
                  </summary>
                  <p className="border-t border-slate-100 px-5 pb-4 pt-3 text-sm text-slate-600 leading-relaxed">
                    {item.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-slate-200/80 bg-white py-16 sm:py-24" id="visit">
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <div>
              <h2 className="font-display text-3xl font-semibold text-brand sm:text-4xl">Visit us</h2>
              <address className="mt-5 not-italic text-slate-600 leading-relaxed">
                Your City News &amp; Off Licence
                <br />
                86 Bishopgate Street
                <br />
                Leeds LS1 4BB
                <br />
                United Kingdom
              </address>
              <p className="mt-6 text-slate-600 leading-relaxed">
                <span className="font-semibold text-slate-800">Phone:</span>{" "}
                <a href="tel:+441132441313" className="text-brand underline-offset-2 hover:underline">
                  +44 113 244 1313
                </a>
              </p>
              <div className="mt-6 space-y-4 text-slate-600 leading-relaxed">
                <p>
                  <span className="font-semibold text-slate-800">Hours:</span> We are widely known for opening early and
                  staying open very late — often into the early hours — which is why night workers, hospitality staff
                  and hotel guests mention us alongside the bigger chains. Published times on map listings can look
                  complicated because they reflect split patterns across the week; the safest approach, especially
                  before a bank holiday or if you are travelling in from outside Leeds, is to ring ahead and confirm.
                </p>
                <p>
                  <span className="font-semibold text-slate-800">Finding us:</span> Use Google Maps or your preferred
                  navigation app with our postcode LS1 4BB. If you are walking from the station or the main shopping
                  streets, Bishopgate Street is a short stride away — look for the bright frontage and the window full
                  of colour.
                </p>
                <p>
                  <span className="font-semibold text-slate-800">Accessibility &amp; parking:</span> City-centre
                  parking is always tight; nearby pay-and-display or multi-storeys are your best bet if you are driving.
                  On foot we are straightforward — give yourself an extra minute if it is raining; Leeds pavements dry
                  faster than your shoes do.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="tel:+441132441313"
                  className="inline-flex rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white shadow-soft transition hover:bg-brand-light"
                >
                  Call the shop
                </a>
                <a
                  href={mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex rounded-full border border-brand/25 bg-white px-5 py-2.5 text-sm font-semibold text-brand transition hover:border-brand/40"
                >
                  Open in Google Maps
                </a>
              </div>
              <p className="mt-8 text-sm text-slate-500 leading-relaxed">
                Mentioned on travel and listing sites including{" "}
                <Link
                  href="https://wanderlog.com/place/details/15083459/your-city-news-leeds"
                  className="font-medium text-brand underline-offset-2 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Wanderlog
                </Link>{" "}
                — thank you to everyone who tags us, reviews us, or recommends us by word of mouth. Independent Leeds
                only works when people choose it.
              </p>
            </div>
          </div>
        </section>

        <section className="border-t border-slate-200 bg-warm py-12">
          <div className="mx-auto max-w-xl px-4 text-center sm:px-6">
            <p className="text-sm text-slate-600 leading-relaxed">
              Your City News &amp; Off Licence — 86 Bishopgate Street, Leeds LS1 4BB — newsagent and off licence in the
              heart of the city. Open late, stocked wide, and glad to see you.
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
