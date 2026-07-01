'use client';

import { useState } from 'react';
import { Footer } from '@/components/Footer';
import { useLanguage } from '@/components/LanguageProvider';
import { MaintenanceModal } from '@/components/MaintenanceModal';
import { Navbar } from '@/components/Navbar';
import { ProductCards } from '@/components/ProductCards';

const pageCopy = {
  en: { eyebrow: 'Products', title: 'The NovaStudio product ecosystem.', body: 'This is the future product map for NovaOS and the wider NovaStudio marketing operations ecosystem.' },
  zh: { eyebrow: '产品与服务', title: 'NovaStudio 产品生态。', body: '这里是 NovaOS 与 NovaStudio 营销运营生态的未来产品地图。' },
  ja: { eyebrow: '製品とサービス', title: 'NovaStudio の製品エコシステム。', body: 'NovaOS と NovaStudio のマーケティング運用エコシステムの将来像です。' },
  ko: { eyebrow: '제품 및 서비스', title: 'NovaStudio 제품 생태계.', body: 'NovaOS와 NovaStudio 마케팅 운영 생태계의 미래 제품 지도입니다.' },
} as const;

export default function ProductsPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);
  const { lang } = useLanguage();
  const page = pageCopy[lang];

  return (
    <main className="bg-white text-slate-950">
      <Navbar onOpenModal={openModal} />
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_20%_15%,rgba(56,189,248,0.20),transparent_28rem),linear-gradient(180deg,#ffffff,#eef6ff)] px-8 pb-20 pt-40">
        <div className="absolute inset-0 bg-grid-lines bg-[length:64px_64px] opacity-40" />
        <div className="relative mx-auto max-w-[1500px]">
          <p className="eyebrow">{page.eyebrow}</p>
          <h1 className="mt-5 max-w-5xl text-5xl font-semibold tracking-[-0.06em] text-slate-950 sm:text-7xl">{page.title}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">{page.body}</p>
        </div>
      </section>
      <ProductCards />
      <Footer onOpenModal={openModal} />
      <MaintenanceModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </main>
  );
}
