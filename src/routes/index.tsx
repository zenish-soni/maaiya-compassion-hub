import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { useEffect, useState } from "react";
import { ArrowRight, Play, Quote, Users, HandCoins, Sprout, Utensils, Baby, HeartPulse, Sparkles } from "lucide-react";
import a1 from "@/assets/gallery/activity-1.png.asset.json";
import a2 from "@/assets/gallery/activity-2.png.asset.json";
import a3 from "@/assets/gallery/activity-3.png.asset.json";
import a4 from "@/assets/gallery/activity-4.png.asset.json";
import a5 from "@/assets/gallery/activity-5.png.asset.json";
import a6 from "@/assets/gallery/activity-6.png.asset.json";
import a7 from "@/assets/gallery/activity-7.png.asset.json";
import a8 from "@/assets/gallery/activity-8.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Maaiya Foundation — Help the People in Need" },
      { name: "description", content: "Maaiya Foundation stands with women, children and underprivileged families through six programmes: nutrition, livelihoods, healthcare and environment." },
      { property: "og:title", content: "Maaiya Foundation — Help the People in Need" },
      { property: "og:description", content: "Six programmes standing beside women, children and the underprivileged." },
    ],
  }),
  component: Home,
});

const callouts = [
  { title: "Today is the day to reach out and lend a helping hand", tint: "bg-[#c8873a]/85", img: a7.url },
  { title: "Even the smallest act of kindness can help change a life", tint: "bg-[#1e3a5f]/85", img: a2.url },
  { title: "Become a volunteer. You'll feel the benefits instantly", tint: "bg-[#3b6fa0]/85", img: a6.url },
] as const;

const whoWeAre = [
  { title: "Stand With Women", body: "Financial aid, dignity kits and post-natal support for mothers, girls and families at the edges of the safety net.", img: a1.url },
  { title: "Food For All", body: "Grain and ration distribution reaching remote villages, schools and disaster-affected homes.", img: a5.url },
  { title: "Learn & Earn", body: "Digital literacy, laptops and skill-building so young people can carry their families forward.", img: a3.url },
] as const;

const causes = [
  { tag: "Santript", title: "Food & Ration Relief", img: a2.url, raised: 68000, goal: 100000 },
  { tag: "Srijan Sheel", title: "Laptops for Village Schools", img: a4.url, raised: 42500, goal: 75000 },
  { tag: "Samarthan", title: "Support a Child's Education", img: a8.url, raised: 23670, goal: 45000 },
] as const;

const stats = [
  { k: "1,200+", v: "Families reached" },
  { k: "97", v: "Volunteers" },
  { k: "110", v: "Programmes run" },
  { k: "6", v: "Focus areas" },
] as const;

const testimonials = [
  { name: "Anita Devi", role: "Beneficiary, Samarthan", quote: "The support arrived when we had nowhere to turn. My daughter is back in school." },
  { name: "Dr. Ramesh Kumar", role: "Partner, Nirmaya", quote: "A rare foundation that shows up in the villages, not just in the reports." },
  { name: "Priya Singh", role: "Volunteer", quote: "Every drive I've joined has ended in a family fed, a child smiling. That's enough." },
] as const;

function inr(n: number) {
  return "₹" + n.toLocaleString("en-IN");
}

const heroSlides = [
  {
    img: a7.url,
    kicker: "Social Change Front",
    title: "Help The",
    accent: "Children",
    titleTail: "in Need",
    body: "Maaiya Foundation walks alongside women, children and underprivileged families — from a plate of food to a school laptop.",
  },
  {
    img: a2.url,
    kicker: "Santript",
    title: "A Full Plate is",
    accent: "a Promise",
    titleTail: "we keep",
    body: "Grain and ration distribution reaching remote villages, schools and disaster-affected homes across the state.",
  },
  {
    img: a3.url,
    kicker: "Srijan Sheel",
    title: "Skills that",
    accent: "Open Doors",
    titleTail: "for a lifetime",
    body: "Digital literacy, laptops and vocational training so every young person can carry their family forward.",
  },
];

function Home() {
  const [slide, setSlide] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setSlide((s) => (s + 1) % heroSlides.length), 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <SiteLayout>
      {/* HERO SLIDER */}
      <section className="relative isolate overflow-hidden">
        {heroSlides.map((s, i) => (
          <img
            key={i}
            src={s.img}
            alt=""
            className={"absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 " + (i === slide ? "opacity-100" : "opacity-0")}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f1b3d]/90 via-[#0f1b3d]/70 to-[#0f1b3d]/30" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-28 lg:min-h-[600px] lg:px-8 lg:py-40">
          {heroSlides.map((s, i) => (
            <div
              key={i}
              className={"max-w-2xl text-primary-foreground transition-all duration-700 " + (i === slide ? "opacity-100 translate-y-0" : "pointer-events-none absolute opacity-0 translate-y-4")}
            >
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.24em] backdrop-blur">
                <Sparkles className="h-3.5 w-3.5" /> {s.kicker}
              </div>
              <h1 className="mt-6 font-display text-5xl leading-[1.02] text-white sm:text-6xl lg:text-7xl">
                {s.title} <span className="text-[#e0b872]">{s.accent}</span>
                <br /> {s.titleTail}
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/85">{s.body}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#join" className="inline-flex items-center gap-2 rounded-full bg-[#e0b872] px-6 py-3 font-semibold text-[#0f1b3d] shadow-warm transition hover:brightness-105">
                  <Users className="h-4 w-4" /> Join Us Now
                </a>
                <a href="#causes" className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/5 px-6 py-3 font-semibold text-white backdrop-blur transition hover:bg-white/15">
                  View More <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
        {/* dots */}
        <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 gap-2">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setSlide(i)}
              aria-label={`Slide ${i + 1}`}
              className={"h-2 rounded-full transition-all " + (i === slide ? "w-8 bg-[#e0b872]" : "w-2 bg-white/50 hover:bg-white/80")}
            />
          ))}
        </div>
      </section>


      {/* CALLOUT STRIP */}
      <section className="relative -mt-1 grid gap-0 md:grid-cols-3">
        {callouts.map((c) => (
          <div key={c.title} className="relative isolate overflow-hidden">
            <img src={c.img} alt="" className="absolute inset-0 h-full w-full object-cover" />
            <div className={"absolute inset-0 " + c.tint} />
            <div className="relative flex flex-col gap-4 p-8 text-white lg:p-10">
              <p className="max-w-[16rem] font-display text-2xl leading-snug">{c.title}</p>
              <a href="#join" className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#0f1b3d] shadow-lift transition hover:brightness-95">
                Join Us
              </a>
            </div>
          </div>
        ))}
      </section>

      {/* WHO WE ARE */}
      <section id="about" className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="text-center">
          <div className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#3b6fa0]">Who We Are</div>
          <h2 className="mx-auto mt-3 max-w-2xl font-display text-4xl lg:text-5xl">
            Organisation set up to provide help and raise funds for those in need.
          </h2>
          <div className="mx-auto mt-5 h-[3px] w-16 rounded-full bg-[#e0b872]" />
        </div>
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {whoWeAre.map((w) => (
            <article key={w.title} className="group">
              <div className="overflow-hidden rounded-2xl shadow-lift">
                <img src={w.img} alt={w.title} className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105" />
              </div>
              <h3 className="mt-5 font-display text-2xl text-primary">{w.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{w.body}</p>
            </article>
          ))}
        </div>
      </section>

      {/* FUNDRAISING COMMUNITY BANNER */}
      <section className="relative isolate overflow-hidden">
        <img src={a6.url} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-[#0f1b3d]/80" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 py-20 lg:grid-cols-[1fr_1.1fr] lg:px-8">
          <div className="relative">
            <div className="overflow-hidden rounded-2xl shadow-warm">
              <img src={a5.url} alt="Fundraising community" className="aspect-[4/3] w-full object-cover" />
            </div>
            <button aria-label="Play video" className="absolute inset-0 m-auto grid h-16 w-16 place-items-center rounded-full bg-white text-[#0f1b3d] shadow-warm transition hover:scale-110">
              <Play className="h-6 w-6 fill-current" />
            </button>
          </div>
          <div className="text-primary-foreground">
            <div className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#e0b872]">Together</div>
            <h2 className="mt-3 font-display text-4xl text-white lg:text-5xl">Fundraising Community</h2>
            <p className="mt-5 max-w-xl text-white/85">
              A network of donors, volunteers and partners who show up — meal by meal, book by
              book, home by home. Small acts, compounded across a state.
            </p>
            <a href="#join" className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-[#0f1b3d] shadow-lift">
              Join Us <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* LATEST CAUSES */}
      <section id="causes" className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="text-center">
          <div className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#3b6fa0]">Latest Causes</div>
          <h2 className="mt-3 font-display text-4xl lg:text-5xl">Where your help lands today.</h2>
          <div className="mx-auto mt-5 h-[3px] w-16 rounded-full bg-[#e0b872]" />
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {causes.map((c) => {
            const pct = Math.min(100, Math.round((c.raised / c.goal) * 100));
            return (
              <article key={c.title} className="overflow-hidden rounded-2xl border border-border bg-card shadow-lift">
                <div className="relative overflow-hidden">
                  <img src={c.img} alt={c.title} className="aspect-[4/3] w-full object-cover" />
                  <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-[#0f1b3d]">
                    {c.tag}
                  </span>
                </div>
                <div className="p-6">
                  <div className="text-[10px] font-semibold uppercase tracking-widest text-[#c8873a]">Welfare</div>
                  <h3 className="mt-2 font-display text-2xl">{c.title}</h3>
                  <div className="mt-5">
                    <div className="h-2.5 w-full overflow-hidden rounded-full bg-[#ececec]">
                      <div className="h-full rounded-full bg-[#e0b872]" style={{ width: pct + "%" }} />
                    </div>
                  </div>
                  <a href="#join" className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                    Join This Cause <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="relative isolate overflow-hidden">
        <img src={a4.url} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-[#0f1b3d]/85" />
        <div className="relative mx-auto grid max-w-7xl grid-cols-2 gap-8 px-5 py-20 text-center text-white md:grid-cols-4 lg:px-8">
          {stats.map((s) => (
            <div key={s.v}>
              <div className="font-display text-5xl text-white lg:text-6xl">{s.k}</div>
              <div className="mt-2 text-xs uppercase tracking-[0.24em] text-white/70">{s.v}</div>
            </div>
          ))}
        </div>
      </section>

      {/* VOLUNTEER CTA */}
      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="grid overflow-hidden rounded-3xl shadow-warm lg:grid-cols-2">
          <div className="bg-[#c8873a] p-10 text-white lg:p-14">
            <div className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/80">Join Us</div>
            <h2 className="mt-3 font-display text-4xl text-white">Become a Volunteer</h2>
            <p className="mt-5 max-w-md text-white/90">
              Give a Saturday, a skill or a smile. We match your time to the programme that
              needs it most — from grain drives to classrooms.
            </p>
            <a href="mailto:contact@maaiya.org?subject=Volunteer" className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-[#0f1b3d] shadow-lift">
              <Users className="h-4 w-4" /> Sign Up
            </a>
          </div>
          <img src={a1.url} alt="Volunteers at a Maaiya Foundation event" className="h-full w-full object-cover" />
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-muted/60">
        <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
          <div className="text-center">
            <div className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#3b6fa0]">Voices</div>
            <h2 className="mt-3 font-display text-4xl lg:text-5xl">What the community says.</h2>
            <div className="mx-auto mt-5 h-[3px] w-16 rounded-full bg-[#e0b872]" />
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure key={t.name} className="rounded-2xl border border-border bg-card p-7 shadow-lift">
                <Quote className="h-6 w-6 text-[#e0b872]" />
                <blockquote className="mt-4 text-foreground/85 leading-relaxed">"{t.quote}"</blockquote>
                <figcaption className="mt-6">
                  <div className="font-semibold text-primary">{t.name}</div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">{t.role}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER + JOIN */}
      <section id="join" className="relative isolate overflow-hidden">
        <div className="absolute inset-0 bg-[#3b6fa0]" />
        <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-5 py-14 text-white md:flex-row lg:px-8">
          <div>
            <h3 className="font-display text-3xl text-white">Subscribe & stay in the loop.</h3>
            <p className="mt-1 text-white/85">Programme updates, drives and stories — once a month, never more.</p>
          </div>
          <form onSubmit={(e) => e.preventDefault()} className="flex w-full max-w-md items-center gap-2 rounded-full bg-white p-1.5 shadow-lift">
            <input type="email" placeholder="Your email address" className="flex-1 rounded-full bg-transparent px-4 py-2 text-sm text-foreground outline-none" />
            <button className="rounded-full bg-[#0f1b3d] px-5 py-2.5 text-sm font-semibold text-white">Subscribe</button>
          </form>
        </div>
      </section>

      {/* PROGRAMS UNDER MAAIYA */}
      <section id="programs" className="bg-muted/40">
        <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
          <div className="text-center">
            <div className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#3b6fa0]">Our Programmes</div>
            <h2 className="mt-3 font-display text-4xl lg:text-5xl">Six ways we show up.</h2>
            <div className="mx-auto mt-5 h-[3px] w-16 rounded-full bg-[#e0b872]" />
            <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
              Each programme is designed around a real need — mothers, children, transgenders and
              underprivileged families that stand at the edges of the safety net.
            </p>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { to: "/samarthan", title: "Samarthan", Icon: HandCoins, img: a1.url, blurb: "Financial assistance for women, girls and underprivileged children." },
              { to: "/suposhan", title: "Suposhan", Icon: Baby, img: a2.url, blurb: "Post-delivery support for new mothers — safer starts for mother and child." },
              { to: "/santript", title: "Santript", Icon: Utensils, img: a5.url, blurb: "Food and grain distribution for families in remote and disaster-hit areas." },
              { to: "/srijansheel", title: "Srijan Sheel", Icon: Sparkles, img: a3.url, blurb: "Skill-building and digital literacy that lead to real employability." },
              { to: "/nirmaya", title: "Nirmaya", Icon: HeartPulse, img: a7.url, blurb: "Aid and treatment for the underprivileged, with care that reaches the last home." },
              { to: "/sukriti", title: "Sukriti", Icon: Sprout, img: a6.url, blurb: "Duty toward the environment — plantation, cleaner waterways, less plastic." },
            ].map((p) => (
              <Link
                key={p.to}
                to={p.to}
                className="group overflow-hidden rounded-2xl border border-border bg-card shadow-lift transition hover:-translate-y-1 hover:shadow-warm"
              >
                <div className="relative overflow-hidden">
                  <img src={p.img} alt={p.title} className="aspect-[16/10] w-full object-cover transition duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f1b3d]/60 via-transparent to-transparent" />
                  <div className="absolute left-4 top-4 grid h-11 w-11 place-items-center rounded-xl bg-[#0f1b3d] text-white shadow-lift">
                    <p.Icon className="h-5 w-5" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-2xl text-primary">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.blurb}</p>
                  <div className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                    Learn more <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <img src={a8.url} alt="" className="hidden" />
      </section>

    </SiteLayout>
  );
}
