'use client';

import { useState } from 'react';
import { Footer } from '@/components/Footer';
import { MaintenanceModal } from '@/components/MaintenanceModal';
import { Navbar } from '@/components/Navbar';
import { ProductCards } from '@/components/ProductCards';

export default function ProductsPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);

  return (
    <main className="bg-white text-slate-950">
      <Navbar onOpenModal={openModal} />
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_20%_15%,rgba(56,189,248,0.20),transparent_28rem),linear-gradient(180deg,#ffffff,#eef6ff)] px-8 pb-20 pt-40">
        <div className="absolute inset-0 bg-grid-lines bg-[length:64px_64px] opacity-40" />
        <div className="relative mx-auto max-w-[1500px]">
          <p className="eyebrow">Products / 产品</p>
          <h1 className="mt-5 max-w-5xl text-5xl font-semibold tracking-[-0.06em] text-slate-950 sm:text-7xl">The NovaStudio product ecosystem.</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">This is the future product map for NovaOS and the wider NovaStudio marketing operations ecosystem.</p>
        </div>
      </section>
      <ProductCards />
      <Footer onOpenModal={openModal} />
      <MaintenanceModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </main>
  );
}
