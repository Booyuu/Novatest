'use client';

import { useEffect, useRef, useState } from 'react';

export type StackItem = {
  no: string;
  title: string;
  color: string;
  points: readonly string[];
};

export function ScrollStack({ items, onOpenModal }: { items: readonly StackItem[]; onOpenModal: () => void }) {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [progress, setProgress] = useState(0);
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      const section = sectionRef.current;
      setIsDesktop(window.innerWidth >= 1024);
      if (!section) return;
      const rect = section.getBoundingClientRect();
      const stickyWindow = Math.max(1, rect.height - window.innerHeight);
      const startOffset = window.innerHeight * 0.14;
      const raw = (startOffset - rect.top) / stickyWindow;
      setProgress(Math.min(1, Math.max(0, raw)));
    };
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  if (!isDesktop) {
    return (
      <div className="mx-auto mt-12 grid max-w-[1200px] gap-6">
        {items.map((item, index) => (
          <article key={item.no} className={`rounded-[2rem] p-7 shadow-xl shadow-slate-900/10 ${item.color}`}>
            <p className="text-3xl font-semibold text-slate-500/40">{item.no}</p>
            <h3 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950">{item.title}</h3>
            <ul className="mt-6 grid gap-3 text-slate-700">
              {item.points.map((point) => <li key={point}>• {point}</li>)}
            </ul>
            {index === items.length - 1 ? <button onClick={onOpenModal} className="mt-6 rounded-full bg-slate-950 px-6 py-3 font-semibold text-white">NovaOS</button> : null}
          </article>
        ))}
      </div>
    );
  }

  const activeFloat = progress * Math.max(items.length - 1, 1);

  return (
    <div ref={sectionRef} className="relative mx-auto mt-16 max-w-[1200px]" style={{ height: `calc(100vh + ${(items.length - 1) * 320}px + 120px)` }}>
      <div className="sticky top-24 h-[860px] overflow-hidden">
        {items.map((item, index) => {
          const distance = index - activeFloat;
          const collapse = Math.min(1, Math.max(0, -distance));
          const isPast = distance < 0;
          const isCurrent = distance > -1 && distance <= 1;
          const headerY = index * 52;
          const incomingY = 118 + index * 16 + Math.max(0, distance) * 380;
          const currentY = headerY + Math.max(0, distance) * 240;
          const y = isPast ? headerY : isCurrent ? currentY : incomingY;
          const height = isPast ? 86 + (1 - collapse) * 474 : 540;
          const scale = isPast ? 1 - collapse * 0.016 : 1;
          const opacity = isPast ? 0.7 + (1 - collapse) * 0.25 : 1;
          const hideBody = collapse > 0.28;

          return (
            <article
              key={item.no}
              className={`absolute left-0 right-0 overflow-hidden rounded-[2.5rem] p-10 shadow-2xl shadow-slate-900/10 will-change-transform ${item.color}`}
              style={{
                height,
                transform: `translate3d(0, ${y}px, 0) scale(${scale})`,
                opacity,
                zIndex: index + 1,
                transition: 'height 90ms linear, transform 90ms linear, opacity 90ms linear',
              }}
            >
              <div className="grid h-full gap-8 lg:grid-cols-[0.46fr_0.54fr]">
                <div>
                  <p className="text-4xl font-semibold text-slate-500/40">{item.no}</p>
                  <h3 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950">{item.title}</h3>
                  <div className={`transition-all duration-200 ${hideBody ? 'pointer-events-none max-h-0 translate-y-4 overflow-hidden opacity-0' : 'max-h-[420px] translate-y-0 opacity-100'}`}>
                    <ul className="mt-8 grid gap-4 text-slate-700">
                      {item.points.map((point) => (
                        <li key={point} className="flex items-center gap-3">
                          <span className="h-2 w-2 rounded-full bg-slate-700/50" />
                          {point}
                        </li>
                      ))}
                    </ul>
                    {index === items.length - 1 ? <button onClick={onOpenModal} className="mt-8 rounded-full bg-slate-950 px-6 py-3 font-semibold text-white">NovaOS</button> : null}
                  </div>
                </div>
                <div className={`self-center rounded-3xl border border-white/60 bg-white/70 p-5 shadow-xl transition-all duration-200 ${hideBody ? 'translate-y-8 opacity-0' : 'translate-y-0 opacity-100'}`}>
                  <div className="mb-4 flex gap-2"><span className="h-3 w-3 rounded-full bg-red-400" /><span className="h-3 w-3 rounded-full bg-yellow-400" /><span className="h-3 w-3 rounded-full bg-green-400" /></div>
                  <div className="rounded-2xl bg-slate-950 p-6 text-left font-mono text-sm leading-8 text-blue-100">
                    <p>module: {item.title}</p>
                    <p>status: ready</p>
                    <p>workflow: strategy → execution → insight</p>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
