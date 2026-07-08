import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/gallery/activity-2.png";
import { ProgramPage } from "@/components/program-page";
import { Baby } from "lucide-react";

export const Route = createFileRoute("/suposhan")({
  head: () => ({
    meta: [
      { title: "Suposhan — Post-delivery care for new mothers | Maaiya" },
      { name: "description", content: "Suposhan supports new mothers post-delivery — reducing post-natal infections and promoting child care." },
      { property: "og:title", content: "Suposhan — Maaiya Foundation" },
      { property: "og:description", content: "Post-delivery support for new mothers and their newborns." },
    ],
  }),
  component: () => (
    <ProgramPage
      Icon={Baby}
      heroImage={heroImg}
      eyebrow="Programme 02"
      title="Suposhan"
      tagline="Standing beside new mothers in the weeks that matter most — protecting the health of both mother and child."
      intro="Under Suposhan, we provide post-delivery support to new mothers to help in child care, reduce post-natal infections, and promote healthier, safer beginnings for the newborn."
      highlights={[
        { title: "Post-natal care", body: "Home visits, essentials and guidance for mothers in the critical first weeks after delivery." },
        { title: "Infection prevention", body: "Basic hygiene supplies and awareness that dramatically reduce post-natal infections." },
        { title: "Newborn wellbeing", body: "Support with feeding, immunisation reminders and early-childhood care." },
      ]}
      focus={[
        "Post-delivery support kits for new mothers",
        "Awareness and coaching to reduce post-natal infections",
        "Guidance on breastfeeding, hygiene and newborn care",
        "Linkages to nearby health services and immunisation drives",
      ]}
    />
  ),
});
