export type ResourceArticle = {
  slug: string;
  title: string;
  description: string;
  category: string;
  readTime: string;
  audience: string;
  published: string;
  sections: { heading: string; body: string; bullets?: string[] }[];
  faqs: { question: string; answer: string }[];
};

export const resourceArticles: ResourceArticle[] = [
  {
    slug: 'what-is-geo-ai-search',
    title: 'What is GEO and why does it matter for AI search?',
    description: 'A practical explanation of Generative Engine Optimization and why businesses need answer-ready content for AI search, ChatGPT, Gemini, Perplexity and modern discovery journeys.',
    category: 'GEO / AEO',
    readTime: '8 min read',
    audience: 'Founders, marketers and growth teams',
    published: '2026-07-04',
    sections: [
      { heading: 'GEO is about being understood by answer engines', body: 'Generative Engine Optimization, or GEO, is the practice of making a brand, product or topic easier for AI systems to understand, summarize and cite. Traditional SEO helps pages rank in search results. GEO focuses on whether AI answer engines can identify what you do, who you serve, why you are credible and which page should support an answer.' },
      { heading: 'AI search changes the buying journey', body: 'Many buyers no longer start with a list of blue links. They ask an AI assistant to compare vendors, explain a category, shortlist tools or summarize a market. If your brand is not described clearly across your site, schema, FAQs, comparison pages and authority content, the AI may ignore you or confuse you with another company.', bullets: ['Clear entity definition', 'Answer-ready pages', 'FAQ and schema markup', 'Comparison content', 'Evidence and authority signals'] },
      { heading: 'What good GEO content looks like', body: 'Good GEO content is direct, structured and useful. It answers the question first, explains the context, gives examples, and links related concepts together. The goal is not keyword stuffing. The goal is to reduce ambiguity so both humans and AI systems can understand the brand and its category.' },
      { heading: 'How NovaOS approaches GEO', body: 'NovaOS treats GEO as part of a marketing operating system. The workflow starts with brand entity clarity, then moves into FAQ structures, comparison pages, content calendars, lead paths and dashboards. This prevents GEO from becoming a one-time technical checklist and turns it into an ongoing growth function.' },
    ],
    faqs: [
      { question: 'Is GEO the same as SEO?', answer: 'No. SEO focuses on search engine rankings and traffic. GEO focuses on how AI systems understand, summarize and reference a brand or topic in generated answers.' },
      { question: 'Do small businesses need GEO?', answer: 'Yes, especially if customers search through ChatGPT, Gemini, Perplexity or AI summaries before contacting vendors. GEO helps smaller brands define themselves clearly.' },
      { question: 'What is the first step in GEO?', answer: 'Start by cleaning the brand entity: explain who you are, what you offer, who you serve and what you are not. Then build structured supporting pages and FAQs.' },
    ],
  },
  {
    slug: 'geo-vs-seo-vs-aeo',
    title: 'GEO vs SEO vs AEO: what businesses should know',
    description: 'A simple comparison of SEO, AEO and GEO, with practical guidance on how each one supports search visibility, AI answers and customer acquisition.',
    category: 'Comparison',
    readTime: '9 min read',
    audience: 'Business owners and marketing teams',
    published: '2026-07-04',
    sections: [
      { heading: 'SEO helps pages get found', body: 'Search Engine Optimization is still important. It improves page structure, relevance, crawlability, internal links, content quality and search result visibility. SEO is the foundation because AI systems still learn from websites and search indexes.' },
      { heading: 'AEO helps pages answer questions', body: 'Answer Engine Optimization focuses on making content suitable for direct answers. FAQ sections, concise definitions, step-by-step explanations and structured data help a page answer specific user questions.' },
      { heading: 'GEO helps AI understand and cite the brand', body: 'Generative Engine Optimization adds another layer. It asks whether AI systems can correctly describe the brand, distinguish it from similarly named entities and connect it with the right category, use cases and evidence.' },
      { heading: 'The best strategy combines all three', body: 'A modern business should not choose only one. SEO brings the crawlable foundation, AEO improves question answering, and GEO improves AI-era understanding. Together they help a brand show up in search pages, snippets and generated answers.', bullets: ['SEO: discoverability', 'AEO: answer readiness', 'GEO: AI understanding and disambiguation', 'Content operations: ongoing execution'] },
    ],
    faqs: [
      { question: 'Which should I start with first?', answer: 'Start with entity clarity and basic SEO structure, then add FAQ/AEO content, then expand into GEO-focused comparison and authority pages.' },
      { question: 'Can GEO replace SEO?', answer: 'No. GEO builds on SEO. If your site is not crawlable, clear and authoritative, AI systems have less reliable information to work with.' },
      { question: 'What does NovaOS automate?', answer: 'NovaOS can help plan GEO/AEO content, organize FAQs, create comparison content, connect pages to lead capture and track progress in a growth dashboard.' },
    ],
  },
  {
    slug: 'clean-confused-brand-entity-ai-answers',
    title: 'How to clean a confused brand entity in AI answers',
    description: 'A tactical guide for brands that share a name with other software, products or local businesses and need AI systems to understand the correct entity.',
    category: 'Brand entity',
    readTime: '10 min read',
    audience: 'Founders, SaaS teams and brand owners',
    published: '2026-07-04',
    sections: [
      { heading: 'Brand confusion is a real AI-search risk', body: 'If several products share a similar name, AI systems may merge information from multiple entities. A brand can be confused with hardware, legacy software, unrelated tools or local businesses. This reduces trust and makes AI answers unreliable.' },
      { heading: 'Write a clear disambiguation statement', body: 'Your website should explicitly define what the brand is and what it is not. This is not only for humans. It gives AI systems clean language to use when separating your entity from similarly named products.', bullets: ['Official brand name', 'Product category', 'Founder or company context where appropriate', 'What the brand is not', 'Primary market and use cases'] },
      { heading: 'Create pages that repeat the correct context naturally', body: 'A homepage statement is not enough. The same entity definition should appear across the product page, about page, media kit, schema markup, FAQ, resources and comparison content. Repetition across credible pages helps reduce ambiguity.' },
      { heading: 'Use structured data to reinforce the entity', body: 'Organization, WebSite, SoftwareApplication, FAQPage and Article schema can all help. The goal is to give machines a consistent graph: NovaStudio builds NovaOS; NovaOS is an AI Marketing OS; the category is AI marketing operations, not LED software or workstation control software.' },
    ],
    faqs: [
      { question: 'How long does entity cleanup take?', answer: 'It depends on crawl frequency and how much conflicting information exists. A clean website, media kit, FAQ and structured data can start improving the signal, but AI systems may take time to update.' },
      { question: 'Should I change the brand name if it is confused?', answer: 'Not always. If the brand can own a clearer category and product name, entity cleanup may be enough. A strong product name like NovaOS can also reduce confusion.' },
      { question: 'What content helps most?', answer: 'An about page, product page, media kit, FAQ, comparison pages and structured resources help establish the correct brand meaning.' },
    ],
  },
  {
    slug: 'ai-marketing-os-growth-teams',
    title: 'How an AI Marketing OS helps growth teams',
    description: 'Why growth teams need an operating layer that connects strategy, content, AI workflows, lead capture and performance instead of using disconnected tools.',
    category: 'NovaOS',
    readTime: '8 min read',
    audience: 'Growth teams and operators',
    published: '2026-07-04',
    sections: [
      { heading: 'Growth work is fragmented', body: 'Most teams use one tool for writing, another for design, another for publishing, another for CRM and another for reporting. The result is speed without memory. Teams generate content but lose context, strategy and learnings.' },
      { heading: 'An operating system connects the workflow', body: 'An AI Marketing OS is not just a text generator. It connects the brand memory, campaign brief, content calendar, creative workflow, publishing plan, lead capture path and performance dashboard into one repeatable system.' },
      { heading: 'What NovaOS is designed to organize', body: 'NovaOS focuses on the areas where growth teams repeatedly lose time: brand context, campaign planning, GEO/AEO content, AI video workflow, publishing and lead capture.', bullets: ['Brand Brain', 'Campaign Builder', 'Content Engine', 'AI Video Workflow', 'Publishing Hub', 'Lead Capture Kit', 'Growth Dashboard'] },
      { heading: 'The outcome is operational leverage', body: 'When marketing work becomes a system, teams do not need to restart every project from zero. They can reuse briefs, content formats, audience logic, compliance notes, templates and reporting structures.' },
    ],
    faqs: [
      { question: 'Is an AI Marketing OS the same as a CRM?', answer: 'No. A CRM stores customer relationships. An AI Marketing OS organizes the work that creates demand, content, leads and growth workflows before and around the CRM.' },
      { question: 'Can agencies use NovaOS?', answer: 'Yes. Agencies can use NovaOS to standardize campaign planning, content generation, GEO workflows and client delivery assets.' },
      { question: 'Does NovaOS replace marketers?', answer: 'No. It supports marketers by turning repeated work into structured workflows and reducing manual execution time.' },
    ],
  },
  {
    slug: 'turn-content-into-leads-novaos',
    title: 'How to turn content into leads with NovaOS',
    description: 'A practical framework for connecting content strategy, landing pages, offers, forms, follow-up and CRM-ready lead capture.',
    category: 'Lead capture',
    readTime: '7 min read',
    audience: 'Sales and marketing teams',
    published: '2026-07-04',
    sections: [
      { heading: 'Content should have a conversion path', body: 'Many teams publish content without a clear next step. A reader likes the article, watches the video or sees the social post, but there is no offer, form or follow-up path. Content without conversion design is difficult to measure.' },
      { heading: 'Start with the buyer question', body: 'The best lead paths begin with a real question. What is the buyer trying to solve? What proof do they need? What would make them ask for help? Content should answer the question and naturally lead to the next useful action.' },
      { heading: 'Connect the assets', body: 'A complete system includes topic clusters, landing pages, lead magnets, forms, qualification questions, email follow-up and CRM handoff. NovaOS is designed to organize these pieces so content becomes a repeatable acquisition workflow.', bullets: ['Problem article', 'Comparison page', 'Checklist or audit offer', 'Lead form', 'Follow-up sequence', 'CRM-ready record'] },
      { heading: 'Measure the workflow, not only the post', body: 'The important metric is not only views. Teams should track which pages generate qualified interest, which questions appear repeatedly and which offers move users closer to a sales conversation.' },
    ],
    faqs: [
      { question: 'What is a good lead magnet?', answer: 'A useful lead magnet solves a real problem: an audit, checklist, calculator, template, benchmark or practical guide.' },
      { question: 'Can blog articles generate leads?', answer: 'Yes, if the article connects to a relevant offer, form and follow-up path. Publishing alone is not enough.' },
      { question: 'How does GEO support lead capture?', answer: 'GEO helps answer-ready content be discovered by AI systems, while lead capture turns that discovery into a business conversation.' },
    ],
  },
  {
    slug: 'ai-video-workflow-fintech-web3-marketing',
    title: 'AI video workflow for fintech and Web3 marketing',
    description: 'How fintech, payment and Web3 teams can plan safer AI video workflows for product education, onboarding, KYC guides and campaign content.',
    category: 'AI video workflow',
    readTime: '9 min read',
    audience: 'Fintech, payments and Web3 teams',
    published: '2026-07-04',
    sections: [
      { heading: 'AI video needs workflow, not random generation', body: 'Fintech and Web3 teams often need videos for registration, KYC, product education, card use cases, merchant onboarding and campaign explainers. Random AI clips are not enough. The workflow must control message, compliance, visual style, subtitles and platform formats.' },
      { heading: 'Start with the user action', body: 'A strong video workflow begins with one action: register, complete KYC, understand a card benefit, scan and pay, contact sales or compare a product. The script, visuals and CTA should all support that action.' },
      { heading: 'Build reusable production blocks', body: 'NovaOS can organize repeatable video assets: hook, product screen, benefit explanation, voiceover, subtitles, compliance note, CTA and localized versions. This helps teams publish faster without losing control.', bullets: ['Script brief', 'Storyboard', 'Voiceover copy', 'Subtitles', 'Compliance review', 'Platform cutdowns'] },
      { heading: 'Compliance and clarity matter', body: 'For high-trust industries, video should avoid exaggerated promises, unclear financial claims and risky statements. AI speed is valuable only if the final content is clear, accurate and reviewable.' },
    ],
    faqs: [
      { question: 'Can AI video be used for fintech ads?', answer: 'Yes, but the claims, disclaimers, targeting, platform rules and local regulations must be reviewed carefully before publishing.' },
      { question: 'What videos should fintech teams make first?', answer: 'Start with product education, onboarding, registration, KYC, merchant use cases and customer support explainers.' },
      { question: 'Why connect AI video to NovaOS?', answer: 'NovaOS helps turn video production into a repeatable workflow connected to campaign goals, content calendars, lead capture and reporting.' },
    ],
  },
];

export function getResourceArticle(slug: string) {
  return resourceArticles.find((article) => article.slug === slug);
}
