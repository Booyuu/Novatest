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

  useEffect(() => {
    let frame = 0;
    const update = () => {
      const section = sectionRef.current;
      if (!section) return;
      const rect = section.getBoundingClientRect();
      const available = rect.height - window.innerHeight;
      const raw = available <= 0 ? 0 : -rect.top / available;
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

  const activeFloat = progress * Math.max(items.length - 1, 1);

  return (
    <div ref={sectionRef} className="relative mx-auto mt-16 max-w-[1200px]" style={{ height: `${items.length * 460}px` }}>
      <div className="sticky top-28 h-[760px]">
        {items.map((item, index) => {
          const distance = index - activeFloat;
          const isPast = distance < 0;
          const collapse = Math.min(1, Math.max(0, -distance));
          const nextOffset = Math.max(0, distance) * 46;
          const y = isPast ? index * 58 : index * 58 + nextOffset;
          const scale = isPast ? 1 - collapse * 0.025 : 1;
          const opacity = isPast ? 0.58 + (1 - collapse) * 0.22 : 1;
          const height = isPast ? 116 + (1 - collapse) * 410 : 560;
          const hideBody = collapse > 0.48;

          return (
            <article
              key={item.no}
              className={`absolute left-0 right-0 overflow-hidden rounded-[2.5rem] p-10 shadow-2xl shadow-slate-900/10 transition-[height,transform,opacity] duration-300 ease-out ${item.color}`}
              style={{
                height,
                transform: `translateY(${y}px) scale(${scale})`,
                opacity,
                zIndex: index + 1,
              }}
            >
              <div className="grid h-full gap-8 lg:grid-cols-[0.46fr_0.54fr]">
                <div>
                  <p className="text-4xl font-semibold text-slate-500/40">{item.no}</p>
                  <h3 className="mt-5 text-4xl font-semibold tracking-tight text-slate-950">{item.title}</h3>
                  <div className={`transition-all duration-300 ${hideBody ? 'pointer-events-none max-h-0 translate-y-4 overflow-hidden opacity-0' : 'max-h-[420px] translate-y-0 opacity-100'}`}>
                    <ul className="mt-8 grid gap-4 text-slate-700">
                      {item.points.map((point) => (
                        <li key={point} className="flex items-center gap-3">
                          <span className="h-2 w-2 rounded-full bg-slate-700/50" />
                          {point}
                        </li>
                      ))}
                    </ul>
                    {index === items.length - 1 ? (
                      <button onClick={onOpenModal} className="mt-8 rounded-full bg-slate-950 px-6 py-3 font-semibold text-white">NovaOS</button>
                    ) : null}
                  </div>
                </div>
                <div className={`self-center rounded-3xl border border-white/60 bg-white/70 p-5 shadow-xl transition-all duration-300 ${hideBody ? 'translate-y-8 opacity-0' : 'translate-y-0 opacity-100'}`}>
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
