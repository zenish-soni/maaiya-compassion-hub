import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { useState } from "react";
import a1 from "@/assets/gallery/activity-1.png.asset.json";
import a2 from "@/assets/gallery/activity-2.png.asset.json";
import a3 from "@/assets/gallery/activity-3.png.asset.json";
import a4 from "@/assets/gallery/activity-4.png.asset.json";
import a5 from "@/assets/gallery/activity-5.png.asset.json";
import a6 from "@/assets/gallery/activity-6.png.asset.json";
import a7 from "@/assets/gallery/activity-7.png.asset.json";
import a8 from "@/assets/gallery/activity-8.png.asset.json";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Maaiya Foundation" },
      { name: "description", content: "Moments from Maaiya Foundation's programmes across communities." },
      { property: "og:title", content: "Gallery — Maaiya Foundation" },
      { property: "og:description", content: "Moments from Maaiya Foundation's programmes across communities." },
    ],
  }),
  component: Gallery,
});

const filters = ["All", "Suposhan", "Samarthan", "Santript", "Srijan Sheel", "Nirmaya", "Sukriti"] as const;

const items = [
  { tag: "Samarthan", caption: "Clothing distribution drive", src: a1.url },
  { tag: "Santript", caption: "Food grain distribution to families", src: a2.url },
  { tag: "Srijan Sheel", caption: "Digital literacy session with students", src: a3.url },
  { tag: "Srijan Sheel", caption: "Handing over laptops to a school", src: a4.url },
  { tag: "Santript", caption: "Community food distribution event", src: a5.url },
  { tag: "Samarthan", caption: "Support for underprivileged children", src: a6.url },
  { tag: "Samarthan", caption: "Outreach across village communities", src: a7.url },
  { tag: "Samarthan", caption: "School supplies for young learners", src: a8.url },
];

function Gallery() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");
  const filtered = active === "All" ? items : items.filter((i) => i.tag === active);

  return (
    <SiteLayout>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-sunset" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_10%,rgba(255,255,255,0.28),transparent_55%)]" />
        <div className="relative mx-auto max-w-7xl px-5 py-24 text-center text-cream lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] backdrop-blur">
            Gallery
          </div>
          <h1 className="mt-5 font-display text-5xl text-white sm:text-6xl">Moments from the field.</h1>
          <p className="mx-auto mt-4 max-w-2xl text-white/85">
            The programmes as they actually look — mothers, children, volunteers and the everyday
            work of small, steady change.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="flex flex-wrap justify-center gap-2">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={
                "rounded-full px-4 py-2 text-sm font-semibold transition " +
                (active === f
                  ? "bg-primary text-primary-foreground shadow-lift"
                  : "border border-border bg-card text-foreground/70 hover:bg-muted")
              }
            >
              {f}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item, i) => (
            <figure key={i} className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-lift">
              <img
                src={item.src}
                alt={item.caption}
                loading="lazy"
                width={1600}
                height={1100}
                className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 bg-gradient-to-t from-black/70 via-black/25 to-transparent p-4 text-white">
                <span className="text-sm font-medium">{item.caption}</span>
                <span className="rounded-full bg-white/20 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest backdrop-blur">
                  {item.tag}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
