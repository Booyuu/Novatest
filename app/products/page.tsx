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
    <main className="bg-nova-black text-white">
      <Navbar onOpenModal={openModal} />
      <section className="bg-radial-stage px-5 pb-16 pt-36 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="eyebrow">Products / 产品</p>
          <h1 className="mt-5 max-w-5xl text-5xl font-semibold tracking-[-0.06em] sm:text-7xl">The NovaStudio product ecosystem.</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">This is the future product map for NovaOS and the wider NovaStudio marketing operations ecosystem.</p>
          <p className="mt-3 max-w-3xl text-base leading-7 text-slate-400">这里是 NovaOS 与 NovaStudio 营销运营生态的未来产品地图。</p>
        </div>
      </section>
      <ProductCards />
      <Footer onOpenModal={openModal} />
      <MaintenanceModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </main>
  );
}
