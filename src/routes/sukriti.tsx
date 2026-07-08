import { createFileRoute } from "@tanstack/react-router";
import { ProgramPage } from "@/components/program-page";
import { Leaf } from "lucide-react";

export const Route = createFileRoute("/sukriti")({
  head: () => ({
    meta: [
      { title: "Sukriti / PrakritiDharma — Environmental action | Maaiya" },
      { name: "description", content: "Sukriti is a duty toward sustainable development — forests, oceans, air, plantation, plastic reduction and environmental research." },
      { property: "og:title", content: "Sukriti — Maaiya Foundation" },
      { property: "og:description", content: "Duty toward building back — sustainable development for our environment." },
    ],
  }),
  component: () => (
    <ProgramPage
      Icon={Leaf}
      eyebrow="Programme 06"
      title="Sukriti"
      tagline="PrakritiDharma — a duty toward building back. The environment we inherit is the one we owe forward."
      intro="Sukriti / PrakritiDharma is our commitment to sustainable development for the environment — forests, oceans, air, plantation, cleaner waterways, less plastic, and research and aid to institutions working on environmental protection."
      highlights={[
        { title: "Land & forests", body: "Tree-plantation drives and support for reforestation and land-restoration projects." },
        { title: "Water & waste", body: "Sewage-cleaning drives, plastic-reduction campaigns and reducing ocean and sea pollution." },
        { title: "Research & aid", body: "Grants and support to institutions doing the long work of environmental protection." },
      ]}
      focus={[
        "Tree-plantation drives and reforestation partnerships",
        "Sewage cleaning and waterway restoration",
        "Reducing single-use plastic and ocean pollution",
        "Air-pollution mitigation initiatives",
        "Research and aid to environmental-protection institutions",
      ]}
    />
  ),
});
