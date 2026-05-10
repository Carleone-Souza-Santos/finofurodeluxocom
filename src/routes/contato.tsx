import { createFileRoute } from "@tanstack/react-router";
import { AuroraBackdrop, Sparkles } from "@/components/site-chrome";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato — Fino Furo de Luxo · Santo André" },
      { name: "description", content: "Agende seu horário com Angelica Ribeiro. WhatsApp, Instagram e atendimento em Santo André ou em domicílio." },
      { property: "og:title", content: "Contato · Fino Furo de Luxo" },
      { property: "og:description", content: "Agende seu ritual de piercing humanizado." },
    ],
  }),
  component: Contato,
});

const canais = [
  { titulo: "WhatsApp", desc: "Resposta rápida para agendamento", action: "Abrir conversa", href: "https://wa.me/5511000000000", icone: "✉" },
  { titulo: "Instagram", desc: "Acompanhe trabalhos e novidades", action: "@finofurodeluxo", href: "https://instagram.com/finofurodeluxo", icone: "✦" },
  { titulo: "Google", desc: "Avaliações e localização", action: "Ver no mapa", href: "https://www.google.com/maps/place/Furo+humanizado+santo+andr%C3%A9+-+Fino+Furo+de+Luxo/@-23.6528233,-46.5380788,17z", icone: "★" },
];

function Contato() {
  return (
    <section className="relative overflow-hidden">
      <AuroraBackdrop />
      <Sparkles count={24} />
      <div className="mx-auto max-w-5xl px-6 py-24">
        <div className="text-center animate-fade-up">
          <p className="text-xs tracking-[0.4em] text-primary">VAMOS CONVERSAR</p>
          <h1 className="mt-4 font-display text-5xl md:text-7xl text-balance leading-[1.05]">
            Reserve seu <span className="text-gradient-gold italic">ritual</span>.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-muted-foreground text-lg">
            Atendimento em Santo André — SP e em domicílio sob agendamento. Responderemos em pouquíssimo tempo, com todo carinho.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {canais.map((c) => (
            <a
              key={c.titulo}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group glass rounded-3xl p-7 hover-lift block"
            >
              <span className="grid h-12 w-12 place-items-center rounded-full bg-gradient-gold text-primary-foreground text-xl">
                {c.icone}
              </span>
              <h3 className="mt-5 font-display text-2xl">{c.titulo}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{c.desc}</p>
              <p className="mt-5 text-sm text-primary group-hover:translate-x-1 transition-transform">
                {c.action} →
              </p>
            </a>
          ))}
        </div>

        <div className="mt-16 relative overflow-hidden rounded-[2.5rem] border border-primary/25 bg-gradient-wine p-10 md:p-14 text-center shadow-luxe">
          <Sparkles count={16} />
          <h2 className="font-display text-3xl md:text-5xl text-balance">
            Pronta para a sua próxima <span className="shimmer-text italic">constelação</span>?
          </h2>
          <a
            href="https://wa.me/5511000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex rounded-full bg-gradient-gold px-8 py-4 font-medium text-primary-foreground shadow-glow hover:scale-105 transition-transform"
          >
            Agendar agora ✦
          </a>
        </div>
      </div>
    </section>
  );
}
