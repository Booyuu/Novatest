import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'NovaStudio NovaOS AI Marketing OS';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex', position: 'relative', overflow: 'hidden', background: 'linear-gradient(135deg,#f8fbff 0%,#eaf2ff 52%,#ffffff 100%)', fontFamily: 'Arial, Helvetica, sans-serif', color: '#071427' }}>
        <div style={{ position: 'absolute', left: -120, top: -140, width: 420, height: 420, borderRadius: 999, background: 'rgba(37,99,235,0.16)', filter: 'blur(12px)' }} />
        <div style={{ position: 'absolute', right: -100, bottom: -130, width: 460, height: 460, borderRadius: 999, background: 'rgba(125,92,255,0.14)', filter: 'blur(12px)' }} />
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 72, width: '68%', zIndex: 2 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 18, fontSize: 34, fontWeight: 700 }}>
            <div style={{ width: 70, height: 70, borderRadius: 22, background: '#050816', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 24 }}>OS</div>
            <div>NovaStudio</div>
          </div>
          <div style={{ marginTop: 46, fontSize: 72, lineHeight: 0.95, letterSpacing: -4.2, fontWeight: 800 }}>NovaOS: AI Marketing OS for Growth Teams</div>
          <div style={{ marginTop: 28, fontSize: 30, lineHeight: 1.4, color: '#526173' }}>GEO · Content · AI Video Workflows · Publishing · Lead Capture</div>
        </div>
        <div style={{ position: 'absolute', right: 72, top: 84, width: 330, height: 420, borderRadius: 42, background: '#050816', padding: 28, color: '#fff', boxShadow: '0 30px 80px rgba(37,99,235,0.22)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}><span style={{ fontSize: 16, color: '#93c5fd', letterSpacing: 4 }}>NOVAOS</span><span style={{ borderRadius: 18, background: '#2563eb', padding: '12px 14px', fontWeight: 700 }}>OS</span></div>
          {['GEO/AEO audit', 'Content engine', 'AI video workflow', 'Lead capture'].map((item, index) => (
            <div key={item} style={{ marginTop: 24, border: '1px solid rgba(255,255,255,0.12)', borderRadius: 22, padding: 18, display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 20 }}><span>{item}</span><span style={{ color: '#93c5fd' }}>0{index + 1}</span></div>
          ))}
        </div>
      </div>
    ),
    size,
  );
}
