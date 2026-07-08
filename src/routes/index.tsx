import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import heroImg from "@/assets/hero-community.jpg";
import { HandHeart, Baby, Wheat, Sparkles, HeartPulse, Leaf, ArrowRight, Heart, Users, HandCoins, Trees } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Maaiya Foundation — Social Change Front" },
      { name: "description", content: "Six programmes standing beside women, children, transgenders and the underprivileged. Join Maaiya Foundation." },
      { property: "og:title", content: "Maaiya Foundation — Social Change Front" },
      { property: "og:description", content: "Six programmes standing beside women, children, transgenders and the underprivileged." },
    ],
  }),
  component: Home,
});

const programs = [
  { to: "/samarthan", title: "Samarthan", Icon: HandCoins, blurb: "Financial assistance and support for women, girls and underprivileged children." },
  { to: "/suposhan", title: "Suposhan", Icon: Baby, blurb: "Post-delivery support for new mothers — reducing post-natal infections, promoting care." },
  { to: "/santript", title: "Santript", Icon: Wheat, blurb: "Distribution of food and grains, including remote areas and disaster relief." },
  { to: "/srijansheel", title: "Srijan Sheel", Icon: Sparkles, blurb: "Skill-building and skill-development to increase employability and independence." },
  { to: "/nirmaya", title: "Nirmaya", Icon: HeartPulse, blurb: "Aid and assistance for health and disease treatment for the underprivileged." },
  { to: "/sukriti", title: "Sukriti", Icon: Leaf, blurb: "Building back for the environment — forests, oceans, air, plantation and research." },
] as const;

const values = [
  { title: "Equality", body: "We meet every person as equal — the dignity of one is the dignity of all." },
  { title: "Integrity", body: "We do what we say. Every rupee, every hour, every promise, tracked." },
  { title: "Trust", body: "Communities lead, we support. Change grows where trust is rooted." },
  { title: "Transparency", body: "Open books, open work, open doors — always." },
] as const;

function Home() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative overflow-hidden bg-warm">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 pb-16 pt-14 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:px-8 lg:pb-24 lg:pt-20">
          <div className="flex flex-col justify-center">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[var(--saffron)]/40 bg-white/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--saffron-deep)]">
              <Heart className="h-3.5 w-3.5" /> …social change front
            </div>
            <h1 className="mt-6 text-balance font-display text-5xl leading-[1.02] text-foreground sm:text-6xl lg:text-[5.5rem]">
              Equality. Integrity.<br />
              <span className="bg-sunset bg-clip-text text-transparent">Trust & Transparency.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Maaiya Foundation is a not-for-profit working in the field of reforming
              social causes and empowering both students as well as teachers — allaying
              the fears of darkness by revealing the real meaning and purpose of studies
              and education.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#programs" className="inline-flex items-center gap-2 rounded-full bg-sunset px-6 py-3 font-semibold text-white shadow-warm transition hover:scale-[1.03]">
                Explore programmes <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#donate" className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-white px-6 py-3 font-semibold text-primary shadow-lift transition hover:bg-muted">
                <Heart className="h-4 w-4" /> Donate now
              </a>
            </div>
            <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6">
              {[
                { k: "6", v: "Programmes" },
                { k: "1000+", v: "Lives touched" },
                { k: "100%", v: "Transparent" },
              ].map((s) => (
                <div key={s.v}>
                  <dt className="font-display text-3xl text-primary">{s.k}</dt>
                  <dd className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{s.v}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-sunset opacity-30 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] shadow-warm">
              <img src={heroImg} alt="Women and children of the Maaiya community at golden hour" width={1600} height={1100} className="h-full w-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden max-w-[240px] rounded-2xl border border-border bg-card p-4 shadow-lift sm:block">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-sunset text-white"><Users className="h-5 w-5" /></div>
                <div>
                  <div className="font-display text-lg leading-none">Community-led</div>
                  <div className="mt-1 text-xs text-muted-foreground">Change from within</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-6xl px-5 py-24 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_2fr]">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--saffron-deep)]">About Maaiya</div>
            <h2 className="mt-3 text-4xl lg:text-5xl">A social-change front for those who go unheard.</h2>
          </div>
          <div className="space-y-5 text-lg leading-relaxed text-foreground/80">
            <p>
              Maaiya Foundation is a not-for-profit organisation working in the field of reforming
              education and empowering both students as well as teachers. Our main purpose is to
              allay the fears of darkness in society by revealing the real meaning and purpose of
              studies and education.
            </p>
            <p>
              Six programmes — from nutrition to livelihoods, from healthcare to environment —
              carry that mission into the neighbourhoods, villages and homes that need it most.
            </p>
          </div>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <div key={v.title} className="rounded-2xl border border-border bg-card p-6 shadow-lift">
              <div className="grid h-10 w-10 place-items-center rounded-lg bg-sunset text-white"><HandHeart className="h-5 w-5" /></div>
              <h3 className="mt-4 text-xl">{v.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Programs */}
      <section id="programs" className="bg-muted/60">
        <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--saffron-deep)]">Programmes under Maaiya</div>
              <h2 className="mt-3 max-w-2xl text-4xl lg:text-5xl">Six ways we show up.</h2>
            </div>
            <p className="max-w-md text-muted-foreground">
              Each programme is designed around real needs — mothers, children, transgenders,
              and the underprivileged families that stand at the edges of the safety net.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {programs.map((p) => (
              <Link
                key={p.to}
                to={p.to}
                className="group relative overflow-hidden rounded-3xl border border-border bg-card p-7 shadow-lift transition hover:-translate-y-1 hover:shadow-warm"
              >
                <div className="absolute inset-x-0 -top-24 h-40 bg-sunset opacity-0 blur-3xl transition group-hover:opacity-40" />
                <div className="relative">
                  <div className="grid h-14 w-14 place-items-center rounded-2xl bg-sunset text-white shadow-warm">
                    <p.Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 text-2xl">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.blurb}</p>
                  <div className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                    Learn more <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Impact quote strip */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-sunset" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_30%,rgba(255,255,255,0.28),transparent_55%)]" />
        <div className="relative mx-auto max-w-5xl px-5 py-24 text-center text-cream lg:px-8">
          <Trees className="mx-auto h-10 w-10 text-white/80" strokeWidth={1.5} />
          <p className="mt-6 text-balance font-display text-3xl leading-tight text-white sm:text-4xl lg:text-5xl">
            "No one has ever become poor by giving."
          </p>
          <p className="mx-auto mt-5 max-w-2xl text-white/85">
            Every rupee, every hour, every voice compounds. Join the fund that carries these
            programmes into another village, another home, another chance.
          </p>
        </div>
      </section>

      {/* Donate */}
      <section id="donate" className="mx-auto max-w-6xl px-5 py-24 lg:px-8">
        <div className="grid gap-10 rounded-3xl border border-border bg-card p-8 shadow-warm lg:grid-cols-[1.2fr_1fr] lg:p-14">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--saffron-deep)]">Get involved</div>
            <h2 className="mt-3 text-4xl">Donate, volunteer, or partner with us.</h2>
            <p className="mt-4 max-w-lg text-muted-foreground">
              We're a small team doing meaningful work. Reach out to sponsor a programme,
              volunteer your time, or collaborate with your organisation.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="mailto:contact@maaiya.org" className="inline-flex items-center gap-2 rounded-full bg-sunset px-6 py-3 font-semibold text-white shadow-warm">
                <Heart className="h-4 w-4" /> Donate now
              </a>
              <a href="mailto:contact@maaiya.org?subject=Volunteer" className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-white px-6 py-3 font-semibold text-primary">
                Volunteer with us
              </a>
            </div>
          </div>
          <form className="space-y-3 rounded-2xl bg-muted/60 p-6" onSubmit={(e) => e.preventDefault()}>
            <div className="text-sm font-semibold text-foreground">Send us a message</div>
            <input className="w-full rounded-lg border border-border bg-white px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/40" placeholder="Your name" />
            <input className="w-full rounded-lg border border-border bg-white px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/40" placeholder="Email" type="email" />
            <textarea rows={4} className="w-full rounded-lg border border-border bg-white px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/40" placeholder="How can we help?" />
            <button className="w-full rounded-full bg-primary py-2.5 text-sm font-semibold text-primary-foreground">Send message</button>
          </form>
        </div>
      </section>
    </SiteLayout>
  );
}
