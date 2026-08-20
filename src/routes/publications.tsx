import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/layout/page-hero";
import { Input } from "@/components/ui/input";
import { contactDetails } from "@/lib/copy";
import { useI18n } from "@/lib/i18n";
import { publications, type PubRole } from "@/lib/publications";

export const Route = createFileRoute("/publications")({
  component: PublicationsPage,
});

function PublicationsPage() {
  const { t } = useI18n();
  const [q, setQ] = useState("");
  const [year, setYear] = useState("");
  const [role, setRole] = useState("");
  const years = useMemo(
    () => Array.from(new Set(publications.map((p) => p.year))).sort((a, b) => b - a),
    [],
  );

  const filtered = publications.filter((p) => {
    const hay = `${p.title} ${p.authors} ${p.journal}`.toLowerCase();
    if (q && !hay.includes(q.toLowerCase())) return false;
    if (year && String(p.year) !== year) return false;
    if (role === "first" && p.role !== "first" && p.role !== "co-first") return false;
    if (role === "corresponding" && p.role !== "corresponding") return false;
    if (role === "co-author" && p.role !== "co-author") return false;
    return true;
  });

  const roleLabel: Record<PubRole, string> = {
    first: t.publicationsPage.first,
    "co-first": t.publicationsPage.coFirst,
    corresponding: t.publicationsPage.corresponding,
    "co-author": t.publicationsPage.coAuthor,
  };

  return (
    <main>
      <PageHero
        kicker={t.publicationsPage.kicker}
        title={t.publicationsPage.title}
        lead={t.publicationsPage.lead}
      />
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-3 sm:grid-cols-[1fr_8rem_12rem]">
          <Input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder={t.publicationsPage.search}
            aria-label={t.publicationsPage.search}
          />
          <select
            className="h-11 border border-border bg-paper px-3 text-sm"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            aria-label={t.publicationsPage.allYears}
          >
            <option value="">{t.publicationsPage.allYears}</option>
            {years.map((y) => (
              <option key={y} value={y}>
                {y}
              </option>
            ))}
          </select>
          <select
            className="h-11 border border-border bg-paper px-3 text-sm"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            aria-label={t.publicationsPage.allRoles}
          >
            <option value="">{t.publicationsPage.allRoles}</option>
            <option value="first">{t.publicationsPage.first}</option>
            <option value="corresponding">{t.publicationsPage.corresponding}</option>
            <option value="co-author">{t.publicationsPage.coAuthor}</option>
          </select>
        </div>

        <div className="mt-4 flex gap-6 text-sm text-muted">
          <a href={contactDetails.scholarUrl} target="_blank" rel="noreferrer" className="hover:text-fg">
            {t.publicationsPage.scholar}
          </a>
          <a href={contactDetails.facultyUrl} target="_blank" rel="noreferrer" className="hover:text-fg">
            {t.publicationsPage.faculty}
          </a>
        </div>

        <ol className="mt-10 divide-y divide-border">
          {filtered.map((p) => (
            <li key={p.id} className="grid gap-4 py-8 md:grid-cols-[5.5rem_1fr]">
              <span className="font-display text-3xl italic text-muted">{p.year}</span>
              <div>
                <div className="flex flex-wrap items-center gap-2 text-[11px] tracking-[0.14em] text-muted uppercase">
                  <span className="border border-border px-2 py-0.5">{roleLabel[p.role]}</span>
                  <span>{p.journal}</span>
                  {p.citations ? (
                    <span>
                      {p.citations} {t.publicationsPage.citations}
                    </span>
                  ) : null}
                </div>
                <h2 className="mt-2 max-w-3xl font-display text-2xl italic leading-snug">
                  {p.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-muted">{p.authors}</p>
                <p className="mt-1 text-sm text-muted">
                  {[p.volume, p.pages].filter(Boolean).join(" · ")}
                  {p.pmid ? ` · PMID ${p.pmid}` : ""}
                </p>
                <div className="mt-3 flex gap-4 text-sm">
                  {p.doi ? (
                    <a
                      className="text-accent hover:underline"
                      href={`https://doi.org/${p.doi}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      DOI
                    </a>
                  ) : null}
                  {p.pmid ? (
                    <a
                      className="text-accent hover:underline"
                      href={`https://pubmed.ncbi.nlm.nih.gov/${p.pmid}/`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      PubMed
                    </a>
                  ) : null}
                  {p.url ? (
                    <a
                      className="text-accent hover:underline"
                      href={p.url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Full text
                    </a>
                  ) : null}
                </div>
              </div>
            </li>
          ))}
        </ol>
        {filtered.length === 0 ? (
          <p className="py-16 text-center text-muted">{t.publicationsPage.empty}</p>
        ) : null}
      </section>
    </main>
  );
}
