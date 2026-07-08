import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/gallery/activity-7.png.asset.json";
import { ProgramPage } from "@/components/program-page";
import { HeartPulse } from "lucide-react";

export const Route = createFileRoute("/nirmaya")({
  head: () => ({
    meta: [
      { title: "Nirmaya — Healthcare for the underprivileged | Maaiya" },
      { name: "description", content: "Nirmaya provides aid and assistance for health and disease treatment to underprivileged women, children and transgenders." },
      { property: "og:title", content: "Nirmaya — Maaiya Foundation" },
      { property: "og:description", content: "Healthcare aid for women, children, transgenders and their families." },
    ],
  }),
  component: () => (
    <ProgramPage
      Icon={HeartPulse}
      heroImage={heroImg.url}
      eyebrow="Programme 05"
      title="Nirmaya"
      tagline="Without illness. Nirmaya carries aid and treatment to the families who most often go without either."
      intro="Nirmaya — meaning 'without illness' — provides aid and assistance for health and disease treatment to the underprivileged, with preference to women, children, transgenders and their families."
      highlights={[
        { title: "Treatment support", body: "Financial help toward diagnosis, medication and hospital care for underprivileged patients." },
        { title: "Preventive outreach", body: "Health camps, awareness drives and check-ups where clinical care is otherwise out of reach." },
        { title: "Priority care", body: "Women, children and transgenders receive first priority in every intake." },
      ]}
      focus={[
        "Aid for disease diagnosis, treatment and medication",
        "Health camps and preventive check-ups in underserved areas",
        "Priority support for women, children and transgender patients",
        "Linkages with hospitals and specialists for continued care",
      ]}
    />
  ),
});
