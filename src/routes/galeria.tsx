import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { AuroraBackdrop, Sparkles } from "@/components/site-chrome";
import g1 from "@/assets/galeria-1.jpg";
import g2 from "@/assets/galeria-2.jpg";
import g3 from "@/assets/galeria-3.jpg";
import g4 from "@/assets/galeria-4.jpg";
import g5 from "@/assets/galeria-5.jpg";
import g6 from "@/assets/galeria-6.jpg";
import baby from "@/assets/baby.jpg";
import adulto from "@/assets/adulto.jpg";
import lobulo from "@/assets/lobulo.jpg";

export const Route = createFileRoute("/galeria")({
  head: () => ({
    meta: [
      { title: "Galeria de Resultados — Antes e Depois | Fino Furo de Luxo São Paulo" },
      {
        name: "description",
        content:
          "Galeria oficial de resultados Fino Furo de Luxo: fotos reais de perfurações de orelha em São Paulo — lóbulo, helix, tragus, conch, baby e reconstrução. Antes e depois com técnica humanizada por enfermeira especialista.",
      },
      {
        name: "keywords",
        content:
          "galeria perfuração orelha, antes e depois piercing, furo de orelha São Paulo, piercing helix, piercing tragus, piercing lóbulo, piercing baby, reconstrução de lóbulo, fino furo de luxo, piercing humanizado",
      },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { property: "og:title", content: "Galeria Antes e Depois — Fino Furo de Luxo" },
      { property: "og:description", content: "Resultados reais de perfurações premium em São Paulo." },
      { property: "og:image", content: "/og-galeria.jpg" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Galeria Antes e Depois — Fino Furo de Luxo" },
      { name: "twitter:image", content: "/og-galeria.jpg" },
      { rel: "canonical", href: "https://finofurodeluxo.com.br/galeria" } as never,
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ImageGallery",
          name: "Galeria de Resultados Fino Furo de Luxo",
          description:
            "Fotos antes e depois de perfurações auriculares premium em São Paulo.",
          url: "https://finofurodeluxo.com.br/galeria",
          provider: {
            "@type": "LocalBusiness",
            name: "Fino Furo de Luxo",
            areaServed: "São Paulo",
          },
        }),
      },
    ],
  }),
  component: GaleriaPage,
});

const categorias = [
  { id: "todos", label: "Todos" },
  { id: "lobulo", label: "Lóbulo" },
  { id: "helix", label: "Helix" },
  { id: "tragus", label: "Tragus" },
  { id: "baby", label: "Baby" },
  { id: "reconstrucao", label: "Reconstrução" },
];

const itens = [
  { src: g1, cat: "lobulo", titulo: "Primeiro furo no lóbulo", legenda: "Stud de ouro 18k, técnica indolor" },
  { src: g4, cat: "helix", titulo: "Helix com argola dourada", legenda: "Composição com second hole" },
  { src: g5, cat: "tragus", titulo: "Tragus delicado", legenda: "Brilhante em ouro branco" },
  { src: g3, cat: "baby", titulo: "FF Baby Luxo", legenda: "Pingente esférico hipoalergênico" },
  { src: g6, cat: "reconstrucao", titulo: "Reconstrução de lóbulo", legenda: "Antes alargado · Depois harmônico" },
  { src: g2, cat: "lobulo", titulo: "Curadoria de joias", legenda: "Seleção exclusiva FF" },
  { src: adulto, cat: "helix", titulo: "Empilhamento autoral", legenda: "Helix + lóbulo combinados" },
  { src: baby, cat: "baby", titulo: "Furinho do bebê", legenda: "Procedimento tranquilo e seguro" },
  { src: lobulo, cat: "reconstrucao", titulo: "Lóbulo restaurado", legenda: "Cicatrização acompanhada" },
];

function GaleriaPage() {
  const [filtro, setFiltro] = useState("todos");
  const visiveis = filtro === "todos" ? itens : itens.filter((i) => i.cat === filtro);

  return (
    <div className="relative min-h-screen overflow-hidden">
      <AuroraBackdrop />
      <Sparkles count={26} />

      {/* Hero */}
      <section className="relative px-6 pt-24 pb-16 text-center">
        <p className="text-xs tracking-[0.45em] text-primary/80">GALERIA · ANTES & DEPOIS</p>
        <h1 className="mt-5 font-display text-5xl md:text-7xl text-balance">
          Resultados que <span className="text-gradient-gold">brilham por si</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
          Cada perfuração é assinada com técnica, ouro e afeto. Conheça o portfólio real da
          maior referência em perfuração auricular humanizada de São Paulo.
        </p>
      </section>

      {/* Destaques por tipo */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { img: adulto, t: "Lóbulo & Helix", d: "Para o público adulto que quer composições autorais." },
            { img: baby, t: "Baby Luxo", d: "Procedimento tranquilo, joias seguras e mãe acolhida." },
            { img: lobulo, t: "Reconstrução", d: "Recuperação estética do lóbulo rasgado ou alargado." },
          ].map((d) => (
            <article key={d.t} className="group relative overflow-hidden rounded-3xl border border-primary/15 hover-lift">
              <img src={d.img} alt={`Destaque ${d.t}`} loading="lazy" className="h-72 w-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h2 className="font-display text-2xl text-gradient-gold">{d.t}</h2>
                <p className="mt-1 text-sm text-muted-foreground">{d.d}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Filtros */}
      <section className="mx-auto max-w-7xl px-6">
        <div className="flex flex-wrap justify-center gap-3">
          {categorias.map((c) => (
            <button
              key={c.id}
              onClick={() => setFiltro(c.id)}
              className={`rounded-full px-5 py-2 text-sm tracking-wide transition-all ${
                filtro === c.id
                  ? "bg-gradient-gold text-primary-foreground shadow-glow"
                  : "glass text-foreground/80 hover:text-primary"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visiveis.map((it, i) => (
            <figure
              key={`${it.src}-${i}`}
              className="group relative overflow-hidden rounded-2xl border border-primary/15 bg-card hover-lift animate-fade-up"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <img
                src={it.src}
                alt={`${it.titulo} — ${it.legenda}`}
                loading="lazy"
                className="h-80 w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <figcaption className="absolute inset-x-0 bottom-0 translate-y-2 bg-gradient-to-t from-background/95 via-background/60 to-transparent p-5 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <p className="font-display text-lg text-primary">{it.titulo}</p>
                <p className="text-xs text-muted-foreground">{it.legenda}</p>
              </figcaption>
              <span className="absolute left-4 top-4 rounded-full bg-background/70 px-3 py-1 text-[10px] tracking-[0.25em] text-primary backdrop-blur">
                {it.cat.toUpperCase()}
              </span>
            </figure>
          ))}
        </div>
      </section>

      {/* Antes e depois — placeholder para fotos reais */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="text-center">
          <p className="text-xs tracking-[0.4em] text-primary/80">ANTES & DEPOIS</p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl">Transformações reais</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Em breve: comparativos lado a lado com clientes que autorizaram o uso da imagem.
            Envie suas fotos e adicionaremos aqui.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {[
            { a: lobulo, b: g6, titulo: "Reconstrução de Lóbulo" },
            { a: g3, b: g1, titulo: "Primeiro Furo · Adulto" },
          ].map((c) => (
            <div key={c.titulo} className="overflow-hidden rounded-3xl border border-primary/20 glass">
              <div className="grid grid-cols-2">
                <div className="relative">
                  <img src={c.a} alt={`Antes — ${c.titulo}`} loading="lazy" className="h-72 w-full object-cover" />
                  <span className="absolute left-3 top-3 rounded-full bg-background/80 px-3 py-1 text-[10px] tracking-[0.3em] text-muted-foreground">ANTES</span>
                </div>
                <div className="relative">
                  <img src={c.b} alt={`Depois — ${c.titulo}`} loading="lazy" className="h-72 w-full object-cover" />
                  <span className="absolute left-3 top-3 rounded-full bg-gradient-gold px-3 py-1 text-[10px] tracking-[0.3em] text-primary-foreground">DEPOIS</span>
                </div>
              </div>
              <div className="p-5 text-center">
                <p className="font-display text-xl text-gradient-gold">{c.titulo}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-4xl px-6 pb-32 text-center">
        <h2 className="font-display text-4xl md:text-5xl">Sua história brilha aqui</h2>
        <p className="mt-4 text-muted-foreground">Agende sua experiência com a especialista número 1 de São Paulo.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="https://wa.me/5511000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-gradient-gold px-7 py-3 text-sm font-medium text-primary-foreground shadow-glow hover:scale-105 transition-transform"
          >
            Agendar pelo WhatsApp
          </a>
          <Link to="/videos" className="rounded-full border border-primary/30 px-7 py-3 text-sm hover:border-primary transition-colors">
            Ver vídeos do processo
          </Link>
        </div>
      </section>
    </div>
  );
}
