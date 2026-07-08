import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/gallery/activity-5.png.asset.json";
import { ProgramPage } from "@/components/program-page";
import { Wheat } from "lucide-react";

export const Route = createFileRoute("/santript")({
  head: () => ({
    meta: [
      { title: "Santript — Food & grain distribution | Maaiya" },
      { name: "description", content: "Santript distributes food and grains to underprivileged families, including remote areas and disaster relief." },
      { property: "og:title", content: "Santript — Maaiya Foundation" },
      { property: "og:description", content: "Food and grain distribution for the underprivileged and disaster-affected." },
    ],
  }),
  component: () => (
    <ProgramPage
      Icon={Wheat}
      heroImage={heroImg.url}
      eyebrow="Programme 03"
      title="Santript"
      tagline="A full plate is a foundation. Santript carries food and grains to the families for whom the next meal is not a given."
      intro="Santript helps in distribution of food and grains for the underprivileged — with preference for women, children, transgenders and their families. This runs as regular distribution in remote areas, and as rapid response after floods, famines and other disasters."
      highlights={[
        { title: "Regular distribution", body: "Recurring grain and dry-ration support for households in remote and underserved regions." },
        { title: "Disaster relief", body: "Rapid food response after floods, famines and other emergencies, coordinated on the ground." },
        { title: "Dignity first", body: "Priority to women, children, transgenders and families most often overlooked in relief lines." },
      ]}
      focus={[
        "Monthly food and grain distribution in remote areas",
        "Emergency relief packages after floods and famines",
        "Priority distribution for women, children, transgenders and their families",
        "Support to community kitchens and shelters",
      ]}
    />
  ),
});
