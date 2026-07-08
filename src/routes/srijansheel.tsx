import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/gallery/activity-3.png";
import { ProgramPage } from "@/components/program-page";
import { Sparkles } from "lucide-react";

export const Route = createFileRoute("/srijansheel")({
  head: () => ({
    meta: [
      { title: "Srijan Sheel — Skills for employability | Maaiya" },
      { name: "description", content: "Srijan Sheel builds skills and employability for women, transgenders and the underprivileged." },
      { property: "og:title", content: "Srijan Sheel — Maaiya Foundation" },
      { property: "og:description", content: "Skill-building and skill-development for economic independence." },
    ],
  }),
  component: () => (
    <ProgramPage
      Icon={Sparkles}
      heroImage={heroImg}
      eyebrow="Programme 04"
      title="Srijan Sheel"
      tagline="Skills open doors that charity alone cannot. Srijan Sheel builds the abilities that unlock lasting independence."
      intro="Srijan Sheel provides assistance in skill building and skill development to increase employability of women, transgenders and the underprivileged — leading to self reliance, ability to earn, and financial independence."
      highlights={[
        { title: "Practical training", body: "Programmes anchored in the trades and services that are hiring today." },
        { title: "Employability support", body: "Coaching, placement links and confidence-building that carry through the first job." },
        { title: "Independence", body: "The measurable outcome is a household earning its own way — sustainably." },
      ]}
      focus={[
        "Vocational and trade-skill training for women and transgenders",
        "Digital and soft-skill workshops for the underprivileged",
        "Employability coaching, interview preparation and placement links",
        "Micro-entrepreneurship guidance and seed support",
      ]}
    />
  ),
});
