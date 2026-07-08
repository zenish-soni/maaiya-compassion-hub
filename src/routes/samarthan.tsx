import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/gallery/activity-1.png.asset.json";
import { ProgramPage } from "@/components/program-page";
import { HandCoins } from "lucide-react";

export const Route = createFileRoute("/samarthan")({
  head: () => ({
    meta: [
      { title: "Samarthan — Financial support for women & children | Maaiya" },
      { name: "description", content: "Samarthan provides financial assistance and support for women, girls and underprivileged children." },
      { property: "og:title", content: "Samarthan — Maaiya Foundation" },
      { property: "og:description", content: "Financial assistance and support for women, girls and underprivileged children." },
    ],
  }),
  component: () => (
    <ProgramPage
      Icon={HandCoins}
      heroImage={heroImg.url}
      eyebrow="Programme 01"
      title="Samarthan"
      tagline="Financial assistance and support for women, girls and underprivileged children — because opportunity should never depend on where you were born."
      intro="Samarthan plays an important role in providing financial assistance and support for mostly women, girls and underprivileged children — meeting the costs that most quietly stand between a family and their next step forward."
      highlights={[
        { title: "Direct assistance", body: "Financial support routed to families and individuals with verified need, no middlemen." },
        { title: "Priority to women & girls", body: "Support is designed around the women and girls who most often carry a household's weight." },
        { title: "Child-first focus", body: "Assistance that keeps children in school, in care, and out of exploitative work." },
      ]}
      focus={[
        "Emergency and recurring financial assistance for underprivileged families",
        "Priority support for women, girls and single mothers",
        "Continuing-education stipends so children stay enrolled",
        "Small-scale grants to unlock the next step for a household",
      ]}
    />
  ),
});
