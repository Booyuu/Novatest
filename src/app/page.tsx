"use client";

import { useState } from "react";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { MaintenanceModal } from "@/components/MaintenanceModal";
import { Navbar } from "@/components/Navbar";
import { ProductCards } from "@/components/ProductCards";
import { SolutionCards } from "@/components/SolutionCards";

const whatWeDo = ["AI brand strategy", "Campaign production", "Content operations", "Growth intelligence"];

function FeatureSection({ id, eyebrow, title, body }: { id: string; eyebrow: string; title: string; body: string }) {
  return (
    <section id={id} className="section-shell">
      <div className="glass-card rounded-[2rem] p-8 sm:p-12">
        <p className="text-sm uppercase tracking-[0.3em] text-blue-200">{eyebrow}</p>
        <h2 className="gradient-text mt-3 max-w-4xl text-4xl font-semibold">{title}</h2>
        <p className="mt-5 max-w-3xl leading-8 text-slate-300">{body}</p>
        {/* Video/demo placeholder: replace this panel with a product walkthrough or launch video. */}
        <div className="mt-8 h-56 rounded-3xl border border-white/10 bg-[radial-gradient(circle_at_center,rgba(96,165,250,0.25),transparent_35%),linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))]" />
      </div>
    </section>
  );
}

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);

  return (
    <main className="overflow-hidden">
      <Navbar onOpenModal={openModal} />
      <Hero onOpenModal={openModal} />
      <section id="what-we-do" className="section-shell">
        <p className="text-sm uppercase tracking-[0.3em] text-blue-200">What we do</p>
        <h2 className="gradient-text mt-3 text-4xl font-semibold">A command center for marketing teams that need speed, quality, and control.</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">{whatWeDo.map((item) => <div key={item} className="glass-card rounded-3xl p-6"><h3 className="text-xl font-semibold">{item}</h3><p className="mt-3 text-sm leading-6 text-slate-400">Reusable systems, intelligent workflows, and elegant execution for every growth channel.</p></div>)}</div>
      </section>
      <FeatureSection id="novaos" eyebrow="Enter NovaOS" title="The operating system layer for AI-native marketing." body="NovaOS connects strategy, content, campaigns, marketplace enablement, learning, and reporting into one governed workspace." />
      <ProductCards />
      <SolutionCards />
      <FeatureSection id="resources" eyebrow="Marketplace / Creator Economy" title="Package, publish, and scale creator-ready marketing assets." body="Support template libraries, productized service assets, partner ecosystems, and creator monetization readiness without building marketplace functionality yet." />
      <FeatureSection id="academy" eyebrow="Academy and Community" title="Enable teams and creators with guided learning loops." body="NovaStudio Academy brings playbooks, cohort learning, operational education, and community momentum into the broader ecosystem." />
      <FeatureSection id="why" eyebrow="Why NovaStudio" title="Premium execution meets enterprise-grade marketing intelligence." body="A dark, modern, AI-assisted workspace designed for clarity, brand consistency, reusable growth systems, and measurable business outcomes." />
      <CTA onOpenModal={openModal} />
      <Footer />
      <MaintenanceModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </main>
  );
}
