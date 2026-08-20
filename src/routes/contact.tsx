import { type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/layout/page-hero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { contactDetails } from "@/lib/copy";
import { useI18n } from "@/lib/i18n";

export const Route = createFileRoute("/contact")({ component: ContactPage });

function ContactPage() {
  const { t } = useI18n();

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = encodeURIComponent(String(data.get("subject") ?? "Ming Lab"));
    const body = encodeURIComponent(
      [
        `Name: ${data.get("name")}`,
        `Email: ${data.get("email")}`,
        "",
        String(data.get("message") ?? ""),
      ].join("\n"),
    );
    window.location.href = `mailto:${contactDetails.email}?subject=${subject}&body=${body}`;
  }

  const cards = [
    { label: t.contact.office, value: `${contactDetails.officeRoom} · ${contactDetails.officePhone}` },
    { label: t.contact.lab, value: `${contactDetails.labRoom} · ${contactDetails.labPhone}` },
    { label: t.contact.team, value: `${contactDetails.teamRoom} · ${contactDetails.teamPhone}` },
    { label: t.contact.email, value: contactDetails.email, href: `mailto:${contactDetails.email}` },
    { label: t.contact.hours, value: t.people.officeHoursValue },
  ];

  return (
    <main>
      <PageHero kicker={t.contact.kicker} title={t.contact.title} lead={t.contact.lead} />
      <section className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-5">
          {cards.map((c) => (
            <div key={c.label} className="border-b border-border pb-4">
              <p className="text-[11px] tracking-[0.2em] text-muted uppercase">{c.label}</p>
              {"href" in c && c.href ? (
                <a className="mt-1 block font-display text-2xl italic hover:text-accent" href={c.href}>
                  {c.value}
                </a>
              ) : (
                <p className="mt-1 font-display text-2xl italic">{c.value}</p>
              )}
            </div>
          ))}
          <p className="text-sm leading-relaxed text-muted">{contactDetails.campus}</p>
        </div>
        <form className="grid gap-4 bg-paper p-6 shadow-[var(--shadow-border)] sm:p-8" onSubmit={onSubmit}>
          <h2 className="font-display text-3xl italic">{t.contact.formTitle}</h2>
          <div className="grid gap-1.5">
            <Label htmlFor="name">{t.contact.name}</Label>
            <Input id="name" name="name" required />
          </div>
          <div className="grid gap-1.5">
            <Label htmlFor="email">{t.contact.emailField}</Label>
            <Input id="email" name="email" type="email" required />
          </div>
          <div className="grid gap-1.5">
            <Label htmlFor="subject">{t.contact.subject}</Label>
            <Input id="subject" name="subject" required />
          </div>
          <div className="grid gap-1.5">
            <Label htmlFor="message">{t.contact.message}</Label>
            <Textarea id="message" name="message" required minLength={10} />
          </div>
          <Button type="submit">{t.contact.submit}</Button>
        </form>
      </section>
    </main>
  );
}
