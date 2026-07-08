import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import logoAsset from "@/assets/maaiya-logo.png.asset.json";
import { Facebook, Instagram, Twitter, Youtube, Linkedin, Menu, X, Heart, Mail, MapPin } from "lucide-react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/samarthan", label: "Samarthan" },
  { to: "/suposhan", label: "Suposhan" },
  { to: "/santript", label: "Santript" },
  { to: "/srijansheel", label: "Srijan Sheel" },
  { to: "/nirmaya", label: "Nirmaya" },
  { to: "/sukriti", label: "Sukriti" },
  { to: "/gallery", label: "Gallery" },
] as const;

export function SiteLayout({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-lg">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3 lg:px-8">
          <Link to="/" className="flex items-center gap-3">
            <img src={logoAsset.url} alt="Maaiya Foundation" className="h-12 w-12 rounded-full object-cover shadow-lift" />
            <div className="leading-tight">
              <div className="font-display text-xl font-semibold text-foreground">Maaiya</div>
              <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Social Change Front</div>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="rounded-full px-3 py-2 text-sm font-medium text-foreground/75 transition hover:bg-muted hover:text-foreground"
                activeProps={{ className: "rounded-full px-3 py-2 text-sm font-semibold text-primary bg-muted" }}
              >
                {n.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              to="/"
              hash="donate"
              className="hidden items-center gap-2 rounded-full bg-sunset px-5 py-2.5 text-sm font-semibold text-white shadow-warm transition hover:scale-[1.03] sm:inline-flex"
            >
              <Heart className="h-4 w-4" /> Donate
            </Link>
            <button
              onClick={() => setOpen((v) => !v)}
              className="rounded-full p-2 text-foreground lg:hidden"
              aria-label="Toggle menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
        {open && (
          <div className="border-t border-border/60 bg-background lg:hidden">
            <nav className="mx-auto flex max-w-7xl flex-col px-5 py-3">
              {nav.map((n) => (
                <Link
                  key={n.to}
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-sm font-medium text-foreground/80"
                  activeProps={{ className: "rounded-lg px-3 py-2.5 text-sm font-semibold text-primary bg-muted" }}
                >
                  {n.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>

      <main className="flex-1">{children}</main>

      <footer className="mt-24 bg-[var(--plum-deep)] text-cream">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-4 lg:px-8">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <img src={logoAsset.url} alt="" className="h-14 w-14 rounded-full" />
              <div>
                <div className="font-display text-2xl">Maaiya Foundation</div>
                <div className="text-xs uppercase tracking-[0.2em] opacity-70">…social change front</div>
              </div>
            </div>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-cream/75">
              A not-for-profit committed to equality, integrity, trust and transparency —
              standing beside women, children, transgenders and the underprivileged.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-secondary">Programs</h4>
            <ul className="mt-4 space-y-2 text-sm text-cream/80">
              {nav.slice(1, 7).map((n) => (
                <li key={n.to}>
                  <Link to={n.to} className="hover:text-secondary">{n.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-secondary">Reach us</h4>
            <ul className="mt-4 space-y-3 text-sm text-cream/80">
              <li className="flex items-start gap-2"><Mail className="mt-0.5 h-4 w-4 text-secondary" /> contact@maaiya.org</li>
              <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 text-secondary" /> India</li>
            </ul>
            <div className="mt-5 flex gap-3">
              {[Facebook, Twitter, Instagram, Youtube, Linkedin].map((Icon, i) => (
                <a key={i} href="#" aria-label="social" className="grid h-9 w-9 place-items-center rounded-full bg-white/10 transition hover:bg-secondary hover:text-ink">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="mx-auto max-w-7xl px-5 py-5 text-center text-xs text-cream/60 lg:px-8">
            © {new Date().getFullYear()} Maaiya Foundation. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
