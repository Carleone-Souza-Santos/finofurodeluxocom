import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { AuroraBackdrop, Sparkles } from "@/components/site-chrome";
import cover from "@/assets/video-cover.jpg";
import adulto from "@/assets/adulto.jpg";
import baby from "@/assets/baby.jpg";
import lobulo from "@/assets/lobulo.jpg";
import joias from "@/assets/joias.jpg";

const YOUTUBE_DESTAQUE_ID = "Zqt7qZqa3b0";
const THUMB_DESTAQUE = `https://img.youtube.com/vi/${YOUTUBE_DESTAQUE_ID}/maxresdefault.jpg`;

export const Route = createFileRoute("/videos")({
  head: () => ({
    links: [{ rel: "canonical", href: "https://https-finofurodeluxo-com.lovable.app/videos" }],
    meta: [
      { property: "og:url", content: "https://https-finofurodeluxo-com.lovable.app/videos" },
      { property: "og:locale", content: "pt_BR" },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
      { title: "Vídeos Explicativos — Como é a Perfuração de Orelha | Fino Furo de Luxo" },
      {
        name: "description",
        content:
          "Assista vídeos profissionais explicando cada etapa da perfuração auricular: FF Adultos, FF Baby, reconstrução de lóbulo, cuidados e cicatrização. Conteúdo oficial Fino Furo de Luxo São Paulo.",
      },
      {
        name: "keywords",
        content:
          "vídeo perfuração orelha, como é o furo de orelha, vídeo piercing baby, vídeo reconstrução lóbulo, fino furo de luxo vídeos, piercing humanizado São Paulo",
      },
      { name: "robots", content: "index, follow, max-video-preview:-1, max-image-preview:large" },
      { property: "og:title", content: "Vídeos Explicativos — Fino Furo de Luxo" },
      { property: "og:description", content: "Assista ao tour pelo studio e a cada etapa da perfuração auricular em vídeo profissional." },
      { property: "og:image", content: THUMB_DESTAQUE },
      { property: "og:type", content: "video.other" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Vídeos Fino Furo de Luxo",
          itemListElement: [
            { "@type": "VideoObject", name: "Tour pelo Studio Fino Furo de Luxo", description: "Conheça o ambiente premium e a experiência humanizada de perfuração de orelha em São Paulo.", thumbnailUrl: THUMB_DESTAQUE, uploadDate: "2026-07-20", embedUrl: `https://www.youtube.com/embed/${YOUTUBE_DESTAQUE_ID}`, contentUrl: `https://www.youtube.com/watch?v=${YOUTUBE_DESTAQUE_ID}` },
            { "@type": "VideoObject", name: "FF Adultos Luxo — Processo completo", description: "Demonstração da técnica humanizada para adultos.", thumbnailUrl: "https://finofurodeluxo.com.br/og-video-adulto.jpg", uploadDate: "2025-01-01" },
            { "@type": "VideoObject", name: "FF Baby Luxo — Furinho do bebê", description: "Procedimento delicado em bebês com segurança total.", thumbnailUrl: "https://finofurodeluxo.com.br/og-video-baby.jpg", uploadDate: "2025-01-01" },
            { "@type": "VideoObject", name: "Reconstrução de Lóbulo", description: "Antes e depois da reconstrução estética.", thumbnailUrl: "https://finofurodeluxo.com.br/og-video-lobulo.jpg", uploadDate: "2025-01-01" },
          ],
        }),
      },
    ],
  }),
  component: VideosPage,
});

const videos = [
  {
    id: "adulto",
    titulo: "FF Adultos Luxo · Processo Completo",
    desc: "Da consulta à finalização: anestesia, marcação e perfuração indolor.",
    thumb: adulto,
    duracao: "3:42",
    categoria: "Adultos",
    youtubeId: "",
  },
  {
    id: "baby",
    titulo: "FF Baby Luxo · O Furinho do Bebê",
    desc: "Como é o procedimento em bebês a partir de 3 meses, com mãe ao lado.",
    thumb: baby,
    duracao: "2:58",
    categoria: "Baby",
    youtubeId: "",
  },
  {
    id: "lobulo",
    titulo: "Reconstrução de Lóbulo",
    desc: "Lóbulo rasgado ou alargado: o passo a passo da recuperação estética.",
    thumb: lobulo,
    duracao: "4:15",
    categoria: "Reconstrução",
    youtubeId: "",
  },
  {
    id: "cuidados",
    titulo: "Pós-Furo · Cuidados de Cicatrização",
    desc: "Higienização, troca de joias e o que evitar nas primeiras semanas.",
    thumb: cover,
    duracao: "5:20",
    categoria: "Cuidados",
    youtubeId: "",
  },
  {
    id: "joias",
    titulo: "Curadoria de Joias FF",
    desc: "Conheça a seleção de ouro 18k e titânio implantável usados nas perfurações.",
    thumb: joias,
    duracao: "2:30",
    categoria: "Joias",
    youtubeId: "",
  },
];

function VideosPage() {
  const [ativo, setAtivo] = useState<string | null>(null);

  return (
    <div className="relative min-h-screen overflow-hidden">
      <AuroraBackdrop />
      <Sparkles count={22} />

      {/* Hero */}
      <section className="relative px-6 pt-24 pb-16 text-center">
        <p className="text-xs tracking-[0.45em] text-primary/80">VÍDEOS · BIBLIOTECA OFICIAL</p>
        <h1 className="mt-5 font-display text-5xl md:text-7xl text-balance">
          Veja cada processo <span className="shimmer-text">em movimento</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
          Conteúdo profissional em alta definição mostrando exatamente como cada perfuração é
          realizada — para você chegar segura, informada e apaixonada.
        </p>
      </section>

      {/* Vídeo destaque */}
      <section className="mx-auto max-w-6xl px-6 pb-12">
        <div className="relative aspect-video overflow-hidden rounded-3xl border border-primary/20 shadow-luxe group">
          <img src={THUMB_DESTAQUE} alt="Tour pelo Studio Fino Furo de Luxo — vídeo destaque" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
            <button
              onClick={() => setAtivo("destaque")}
              aria-label="Reproduzir tour pelo studio"
              className="grid h-24 w-24 place-items-center rounded-full bg-gradient-gold shadow-glow hover:scale-110 transition-transform"
            >
              <span className="ml-1 text-3xl text-primary-foreground">▶</span>
            </button>
            <h2 className="mt-6 font-display text-3xl md:text-5xl text-gradient-gold">Tour pelo Studio</h2>
            <p className="mt-2 max-w-xl text-muted-foreground">Conheça o ambiente onde a magia acontece em São Paulo.</p>
          </div>
        </div>
      </section>

      {/* Grid de vídeos */}
      <section className="mx-auto max-w-7xl px-6 py-12">
        <h2 className="font-display text-3xl md:text-4xl text-center">Biblioteca por processo</h2>
        <div className="gold-line mx-auto mt-4 w-32" />

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {videos.map((v, i) => (
            <article
              key={v.id}
              className="group overflow-hidden rounded-2xl border border-primary/15 bg-card hover-lift animate-fade-up"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <button
                onClick={() => setAtivo(v.id)}
                className="relative block w-full aspect-video overflow-hidden"
                aria-label={`Reproduzir ${v.titulo}`}
              >
                <img src={v.thumb} alt={`Thumbnail do vídeo ${v.titulo}`} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                <span className="absolute left-3 top-3 rounded-full bg-background/80 px-3 py-1 text-[10px] tracking-[0.3em] text-primary backdrop-blur">
                  {v.categoria.toUpperCase()}
                </span>
                <span className="absolute right-3 top-3 rounded-full bg-background/80 px-3 py-1 text-xs text-foreground/80 backdrop-blur">
                  {v.duracao}
                </span>
                <span className="absolute inset-0 grid place-items-center">
                  <span className="grid h-16 w-16 place-items-center rounded-full bg-gradient-gold shadow-glow transition-transform duration-500 group-hover:scale-110">
                    <span className="ml-1 text-xl text-primary-foreground">▶</span>
                  </span>
                </span>
              </button>
              <div className="p-5">
                <h3 className="font-display text-xl text-gradient-gold">{v.titulo}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Modal player */}
      {ativo && (
        <div
          className="fixed inset-0 z-[60] grid place-items-center bg-background/90 p-4 animate-fade-up"
          onClick={() => setAtivo(null)}
        >
          <div className="w-full max-w-4xl overflow-hidden rounded-2xl border border-primary/30 bg-card shadow-luxe" onClick={(e) => e.stopPropagation()}>
            <div className="aspect-video w-full bg-black">
              {ativo === "destaque" ? (
                <iframe
                  className="h-full w-full"
                  src={`https://www.youtube.com/embed/${YOUTUBE_DESTAQUE_ID}?autoplay=1&rel=0`}
                  title="Tour pelo Studio Fino Furo de Luxo"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              ) : (
                <div className="h-full w-full grid place-items-center text-center text-muted-foreground p-8">
                  <div>
                    <p className="font-display text-2xl text-gradient-gold">Vídeo em produção</p>
                    <p className="mt-2 text-sm">Envie o link do YouTube/Vimeo do conteúdo "{ativo}" para incorporarmos aqui.</p>
                  </div>
                </div>
              )}
            </div>
            <div className="flex justify-end p-3">
              <button onClick={() => setAtivo(null)} className="rounded-full border border-primary/30 px-4 py-1.5 text-sm hover:border-primary">Fechar</button>
            </div>
          </div>
        </div>
      )}

      {/* CTA */}
      <section className="mx-auto max-w-4xl px-6 py-24 text-center">
        <h2 className="font-display text-4xl md:text-5xl">Pronta para viver essa experiência?</h2>
        <p className="mt-4 text-muted-foreground">Atendimento exclusivo em São Paulo, com agenda limitada.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a href="https://wa.me/5511000000000" target="_blank" rel="noopener noreferrer" className="rounded-full bg-gradient-gold px-7 py-3 text-sm font-medium text-primary-foreground shadow-glow hover:scale-105 transition-transform">
            Agendar pelo WhatsApp
          </a>
          <Link to="/galeria" className="rounded-full border border-primary/30 px-7 py-3 text-sm hover:border-primary transition-colors">
            Ver galeria de resultados
          </Link>
        </div>
      </section>
    </div>
  );
}
