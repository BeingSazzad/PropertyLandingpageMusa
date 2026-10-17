import React from 'react';
import Link from 'next/link';

export type LegalSection = {
  id: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
};

type RelatedLink = {
  label: string;
  href: string;
};

type LegalDocumentProps = {
  eyebrow: string;
  title: string;
  intro: string;
  lastUpdated: string;
  controller: string;
  sections: LegalSection[];
  related: RelatedLink[];
};

export const LegalDocument: React.FC<LegalDocumentProps> = ({
  eyebrow,
  title,
  intro,
  lastUpdated,
  controller,
  sections,
  related,
}) => {
  return (
    <section className="bg-[#F8FAFC] px-4 pb-20 pt-10 sm:px-6 sm:pb-24 sm:pt-14 lg:px-10">
      <div className="mx-auto max-w-[1100px] space-y-12 sm:space-y-16">
        <header className="space-y-4">
          <span className="inline-flex rounded-full border border-[#E6EAEF] bg-white px-3.5 py-1.5 font-[family-name:var(--font-nav)] text-[14px] font-normal leading-5 text-[#494d4d]">
            {eyebrow}
          </span>
          <h1 className="title-section max-w-[16ch]">{title}</h1>
          <p className="text-body max-w-2xl">{intro}</p>
          <p className="font-[family-name:var(--font-nav)] text-[14px] font-normal leading-5 text-[#64748B]">
            Last updated: {lastUpdated}
            <span className="mx-2 text-[#CBD5E1]">·</span>
            {controller}
          </p>
        </header>

        <div className="grid items-start gap-10 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-16">
          <nav aria-label="On this page" className="lg:sticky lg:top-28">
            <p className="mb-3 font-[family-name:var(--font-nav)] text-[14px] font-medium leading-5 text-[#0A192F]">
              On this page
            </p>
            <ul className="flex flex-wrap gap-2 lg:flex-col lg:gap-0">
              {sections.map((section, index) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="inline-flex rounded-full border border-[#E6EAEF] bg-white px-3 py-1.5 font-[family-name:var(--font-nav)] text-[14px] font-normal leading-5 text-[#494d4d] transition-colors hover:border-[#BAE6FD] hover:text-[#0084FF] lg:block lg:rounded-none lg:border-0 lg:bg-transparent lg:px-0 lg:py-2"
                  >
                    <span className="hidden text-[#0084FF] lg:inline">{String(index + 1).padStart(2, '0')} </span>
                    {section.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <article className="space-y-10 rounded-[28px] border border-white bg-white px-6 py-8 shadow-[0_12px_40px_rgba(10,25,47,0.06)] sm:rounded-[32px] sm:px-10 sm:py-12">
            {sections.map((section, index) => (
              <section key={section.id} id={section.id} className="scroll-mt-28 space-y-3">
                <h2 className="font-[family-name:var(--font-display)] text-[22px] font-medium leading-7 text-[#131515] sm:text-[24px] sm:leading-8">
                  {index + 1}. {section.title}
                </h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="text-body">
                    {paragraph}
                  </p>
                ))}
                {section.bullets && section.bullets.length > 0 ? (
                  <ul className="list-disc space-y-2 pl-5">
                    {section.bullets.map((item) => (
                      <li key={item} className="text-body">
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}

            <div className="border-t border-[#E6EAEF] pt-8">
              <p className="mb-3 font-[family-name:var(--font-nav)] text-[14px] font-medium leading-5 text-[#0A192F]">
                Related
              </p>
              <div className="flex flex-wrap gap-3">
                {related.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="inline-flex items-center rounded-full border border-[#E6EAEF] bg-[#F8FAFC] px-4 py-2 font-[family-name:var(--font-nav)] text-[15px] font-medium leading-5 text-[#0A192F] transition-colors hover:border-[#BAE6FD] hover:text-[#0084FF]"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};
