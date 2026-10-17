import React from 'react';

export type LegalSection = {
  id: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
};

type LegalDocumentProps = {
  title: string;
  intro: string;
  sections: LegalSection[];
};

export const LegalDocument: React.FC<LegalDocumentProps> = ({
  title,
  intro,
  sections,
}) => {
  return (
    <section className="bg-[#F8FAFC] px-4 pb-20 pt-10 sm:px-6 sm:pb-24 sm:pt-14 lg:px-10">
      <div className="mx-auto max-w-[1100px] space-y-12 sm:space-y-16">
        <header className="mx-auto max-w-2xl space-y-4 text-center">
          <h1 className="title-section mx-auto">{title}</h1>
          <p className="text-body mx-auto max-w-2xl">{intro}</p>
        </header>

        <div>
          <article className="mx-auto max-w-[800px] space-y-10 rounded-[28px] border border-white bg-white px-6 py-8 shadow-[0_12px_40px_rgba(10,25,47,0.06)] sm:rounded-[32px] sm:px-10 sm:py-12">
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
          </article>
        </div>
      </div>
    </section>
  );
};
