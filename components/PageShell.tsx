'use client';

import { ReactNode, useState } from 'react';
import { Footer } from '@/components/Footer';
import { MaintenanceModal } from '@/components/MaintenanceModal';
import { Navbar } from '@/components/Navbar';

export function PageShell({ children }: { children: ReactNode }) {
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);

  return (
    <main className="bg-white text-slate-950">
      <Navbar onOpenModal={openModal} />
      {children}
      <Footer onOpenModal={openModal} />
      <MaintenanceModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </main>
  );
}
