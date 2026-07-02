'use client';

import { useState } from 'react';
import { CTA } from '@/components/CTA';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/Hero';
import { HomeDeepSections } from '@/components/HomeDeepSections';
import { MaintenanceModal } from '@/components/MaintenanceModal';
import { Navbar } from '@/components/Navbar';

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);

  return (
    <main className="overflow-hidden bg-white text-slate-950">
      <Navbar onOpenModal={openModal} />
      <Hero onOpenModal={openModal} />
      <HomeDeepSections onOpenModal={openModal} />
      <CTA onOpenModal={openModal} />
      <Footer onOpenModal={openModal} />
      <MaintenanceModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </main>
  );
}
