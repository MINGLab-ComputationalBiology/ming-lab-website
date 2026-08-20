import { type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/layout/page-hero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { contactDetails } from "@/lib/copy";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/join")({ component: JoinPage });

function JoinPage() {
  const { t } = useI18n();

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = encodeURIComponent(
      `Ming Lab application — ${String(data.get("position") ?? "")}`,
    );
    const body = encodeURIComponent(
      [
        `Name: ${data.get("name")}`,
        `Email: ${data.get("email")}`,
        `Position: ${data.get("position")}`,
        `Affiliation: ${data.get("affiliation")}`,
        "",
        String(data.get("message") ?? ""),
      ].join("\n"),
    );
    window.location.href = `mailto:${contactDetails.email}?subject=${subject}&body=${body}`;
  }

  return (
    <main>
      <PageHero kicker={t.join.kicker} title={t.join.title} lead={t.join.lead} />
      <section className="mx-auto grid max-w-6xl gap-14 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_1fr]">
        <div>
          <h2 className="font-display text-3xl italic">{t.join.rolesTitle}</h2>
          <div className="mt-8 space-y-6">
            {t.join.lookingFor.map((role) => (
              <article key={role.title} className="border-t border-border pt-5">
                <h3 className="font-display text-2xl italic">{role.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{role.body}</p>
              </article>
            ))}
          </div>
        </div>
        <div className="bg-paper p-6 shadow-[var(--shadow-border)] sm:p-8">
          <h2 className="font-display text-3xl italic">{t.join.formTitle}</h2>
          <p className="mt-2 text-sm text-muted">{t.join.formLead}</p>
          <form className="mt-8 grid gap-4" onSubmit={onSubmit}>
            <Field name="name" label={t.join.name} required />
            <Field name="email" label={t.join.email} type="email" required />
            <div className="grid gap-1.5">
              <Label htmlFor="position">{t.join.position}</Label>
              <select
                id="position"
                name="position"
                required
                className="h-11 border border-border bg-paper px-3 text-sm"
              >
                {t.join.positions.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.label}
                  </option>
                ))}
              </select>
            </div>
            <Field name="affiliation" label={t.join.affiliation} />
            <div className="grid gap-1.5">
              <Label htmlFor="message">{t.join.message}</Label>
              <Textarea id="message" name="message" required minLength={20} />
            </div>
            <Button type="submit">{t.join.submit}</Button>
          </form>
        </div>
      </section>
    </main>
  );
}

function Field({
  name,
  label,
  type = "text",
  required,
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div className="grid gap-1.5">
      <Label htmlFor={name}>{label}</Label>
      <Input id={name} name={name} type={type} required={required} />
    </div>
  );
}
