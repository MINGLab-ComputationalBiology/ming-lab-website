import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/layout/page-hero";
import { Button } from "@/components/ui/button";
import { contactDetails } from "@/lib/copy";
import { useI18n } from "@/lib/i18n";
import { team } from "@/lib/team";

export const Route = createFileRoute("/people")({ component: PeoplePage });

function PeoplePage() {
  const { t, lang } = useI18n();
  return (
    <main>
      <PageHero kicker={t.people.kicker} title={t.people.title} lead={t.people.lead} />
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <figure className="mb-16">
          <div className="frame bg-ink">
            <img
              src={`${import.meta.env.BASE_URL}images/team.jpg`}
              alt={t.people.groupPhoto}
              className="w-full object-cover object-center"
            />
          </div>
          <figcaption className="mt-4 text-[11px] tracking-[0.18em] text-muted uppercase">
            {t.people.groupPhoto} · {t.affiliation}
          </figcaption>
        </figure>
        <article className="grid gap-8 bg-paper p-6 shadow-[var(--shadow-border)] lg:grid-cols-[7.5rem_1fr] lg:p-10">
          <div>
            <img
              src={`${import.meta.env.BASE_URL}images/pi.jpg`}
              alt={t.pi}
              className="aspect-square w-24 object-cover object-[center_18%] sm:w-28"
            />
          </div>
          <div>
            <p className="text-[11px] tracking-[0.28em] text-muted uppercase">
              {t.people.piKicker}
            </p>
            <h2 className="mt-2 font-display text-4xl italic">
              {lang === "zh" ? `${t.pi} · Chen Ming` : `${t.pi} · 明晨`}
            </h2>
            <p className="mt-1 text-muted">
              {t.piTitle} · {t.affiliation}
            </p>
            <p className="mt-6 max-w-2xl leading-relaxed text-muted">{t.people.bio}</p>
            <div className="mt-6 flex flex-wrap gap-2 text-sm">
              <a className="border border-border px-3 py-1.5" href={`mailto:${contactDetails.email}`}>
                {contactDetails.email}
              </a>
              <a
                className="border border-border px-3 py-1.5"
                href={contactDetails.scholarUrl}
                target="_blank"
                rel="noreferrer"
              >
                {t.people.scholar}
              </a>
            </div>
            <Timeline title={t.people.education} items={[...t.education]} />
            <Timeline title={t.people.experience} items={[...t.experience]} />
            <Timeline title={t.people.awards} items={[...t.awards]} />
            <div className="mt-8">
              <h3 className="text-[11px] tracking-[0.22em] text-muted uppercase">
                {t.people.service}
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-muted">
                {t.service.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </div>
            <div className="mt-8">
              <h3 className="text-[11px] tracking-[0.22em] text-muted uppercase">
                {t.people.funding}
              </h3>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
                {t.funding}
              </p>
            </div>
          </div>
        </article>

        <div className="mt-20">
          <p className="text-[11px] tracking-[0.28em] text-muted uppercase">
            {t.nav.people}
          </p>
          <h2 className="mt-2 font-display text-4xl italic">
            {lang === "zh" ? "团队成员" : "Team members"}
          </h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((m) => (
              <article key={m.id} className="border border-border bg-paper p-5">
                <div className="grid size-14 place-items-center bg-surface font-display text-xl italic">
                  {m.initials}
                </div>
                <h3 className="mt-4 font-display text-2xl italic">
                  {lang === "zh" ? `${m.zh} · ${m.en}` : `${m.en} · ${m.zh}`}
                </h3>
                <p className="mt-1 text-sm text-muted">
                  {lang === "zh" ? m.roleZh : m.roleEn}
                </p>
                <div className="mt-3 space-y-1 text-sm text-muted">
                  {m.office ? <p>{m.office}</p> : null}
                  {m.phone ? <p>{m.phone}</p> : null}
                  {m.email ? (
                    <a className="text-accent hover:underline" href={`mailto:${m.email}`}>
                      {m.email}
                    </a>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-16 border border-border bg-ink p-8 text-ink-fg sm:p-12">
          <h2 className="font-display text-3xl italic">{t.people.recruiting}</h2>
          <p className="mt-3 max-w-xl text-ink-muted">{t.people.recruitingLead}</p>
          <Button variant="inverse" className="mt-6" asChild>
            <Link to="/join">{t.nav.join}</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}

function Timeline({
  title,
  items,
}: {
  title: string;
  items: readonly { when: string; what: string }[];
}) {
  return (
    <div className="mt-8">
      <h3 className="text-[11px] tracking-[0.22em] text-muted uppercase">{title}</h3>
      <dl className="mt-3 space-y-2">
        {items.map((row) => (
          <div key={row.when + row.what} className="grid gap-1 text-sm sm:grid-cols-[9rem_1fr]">
            <dt className="text-muted tabular-nums">{row.when}</dt>
            <dd>{row.what}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
