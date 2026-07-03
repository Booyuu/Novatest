const faqs = [
  ['What is NovaOS?', 'NovaOS is the AI Marketing OS built by NovaStudio. It helps teams organize brand memory, plan campaigns, generate content, improve GEO/AEO visibility, design AI video workflows, publish content and capture leads.'],
  ['Is NovaOS a normal content generator?', 'No. A normal generator creates isolated text. NovaOS is designed as an operating layer that connects strategy, content, AI-search visibility, publishing, lead capture and growth reporting.'],
  ['Can NovaOS help with GEO or AI search visibility?', 'Yes. NovaOS includes GEO/AEO workflows for brand entity clarity, FAQ structures, comparison content, answer-ready pages, schema planning and AI visibility tracking.'],
  ['Can NovaOS create AI video workflows?', 'NovaOS is designed to organize the video workflow: brief, script, storyboard, voiceover direction, subtitles, compliance notes, platform cutdowns and publishing plan.'],
  ['Is NovaStudio the same as NovaStar or LED display software?', 'No. This NovaStudio is the company building NovaOS, an AI Marketing OS. It is unrelated to NovaStar LED control software, LED media players or workstation GUI tools with similar names.'],
  ['Who is NovaOS for?', 'NovaOS is built for growth teams, founders, agencies and businesses in fintech, Web3, AI SaaS, education, local services, retail and professional services that need repeatable AI marketing operations.'],
  ['How do I start?', 'You can explore the NovaOS product page, read the resource hub, open the NovaOS access modal or contact NovaStudio sales for a strategy discussion.'],
];

export function HomeFAQ() {
  return (
    <section className="px-5 py-20 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-[1500px]">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-700">FAQ</p>
          <h2 className="mt-4 text-5xl font-semibold tracking-[-0.055em] text-slate-950">Real questions buyers ask before using an AI Marketing OS.</h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">These answers are written for users, search engines and AI answer systems, so NovaStudio and NovaOS can be understood clearly.</p>
        </div>
        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          {faqs.map(([question, answer]) => (
            <article key={question} className="rounded-[2rem] border border-blue-100 bg-white p-6 shadow-lg shadow-blue-900/6">
              <h3 className="text-xl font-semibold text-slate-950">{question}</h3>
              <p className="mt-4 leading-8 text-slate-600">{answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export const homeFaqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(([question, answer]) => ({
    '@type': 'Question',
    name: question,
    acceptedAnswer: { '@type': 'Answer', text: answer },
  })),
};
