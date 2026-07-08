import { Link } from "@tanstack/react-router";
import { SiteLayout } from "./site-layout";
import type { LucideIcon } from "lucide-react";
import { ArrowRight, Users } from "lucide-react";

export interface ProgramPageProps {
  eyebrow: string;
  title: string;
  tagline: string;
  intro: string;
  highlights: { title: string; body: string }[];
  focus: string[];
  Icon: LucideIcon;
  heroImage?: string;
  accent?: string;
}

export function ProgramPage({ eyebrow, title, tagline, intro, highlights, focus, Icon, heroImage }: ProgramPageProps) {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        {heroImage ? (
          <>
            <img src={heroImage} alt="" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0f1b3d]/90 via-[#0f1b3d]/70 to-[#0f1b3d]/40" />
          </>
        ) : (
          <div className="absolute inset-0 bg-sunset" />
        )}
        <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-20 lg:grid-cols-[1.4fr_1fr] lg:gap-16 lg:px-8 lg:py-28">
          <div className="text-white">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] backdrop-blur">
              {eyebrow}
            </div>
            <h1 className="mt-5 text-balance font-display text-5xl leading-[1.05] text-white sm:text-6xl lg:text-7xl">
              {title}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/85">{tagline}</p>
          </div>
          <div className="relative hidden lg:block">
            <div className="absolute -inset-6 rounded-[2rem] bg-white/10 blur-2xl" />
            <div className="relative grid aspect-square place-items-center rounded-[2rem] border border-white/25 bg-white/10 p-10 backdrop-blur-md">
              <Icon className="h-32 w-32 text-white" strokeWidth={1.25} />
            </div>
          </div>
        </div>
      </section>


      {/* Intro */}
      <section className="mx-auto max-w-4xl px-5 py-20 lg:px-8">
        <div className="h-px w-16 bg-secondary" />
        <p className="mt-6 text-balance font-display text-2xl leading-relaxed text-foreground sm:text-3xl">
          {intro}
        </p>
      </section>

      {/* Highlights */}
      <section className="bg-muted/60">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <h2 className="text-3xl sm:text-4xl">How the programme delivers</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {highlights.map((h) => (
              <div key={h.title} className="group rounded-2xl border border-border bg-card p-7 shadow-lift transition hover:-translate-y-1">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-sunset text-white shadow-warm">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-xl">{h.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{h.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Focus list */}
      <section className="mx-auto max-w-5xl px-5 py-20 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1fr_2fr]">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">Focus</div>
            <h2 className="mt-3 text-3xl">Where we direct our energy</h2>
          </div>
          <ul className="space-y-4">
            {focus.map((f) => (
              <li key={f} className="flex gap-3 rounded-xl border border-border bg-card p-5 shadow-lift">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[var(--saffron-deep)]" />
                <span className="text-sm leading-relaxed text-foreground/85">{f}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-5 pb-24 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-sunset p-10 shadow-warm sm:p-14">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.25),transparent_60%)]" />
          <div className="relative flex flex-col items-start justify-between gap-8 text-cream md:flex-row md:items-center">
            <div className="max-w-xl">
              <h3 className="text-3xl text-white sm:text-4xl">Stand with us on this journey</h3>
              <p className="mt-3 text-white/85">Your support fuels every meal, every lesson, every treatment.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href="#donate" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-primary shadow-lift transition hover:scale-[1.03]">
                <Heart className="h-4 w-4" /> Donate
              </a>
              <Link to="/gallery" className="inline-flex items-center gap-2 rounded-full border border-white/60 px-6 py-3 font-semibold text-white transition hover:bg-white/10">
                See our work <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
