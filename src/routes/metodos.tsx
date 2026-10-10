import { createFileRoute, Link } from "@tanstack/react-router";
import { AuroraBackdrop, Sparkles } from "@/components/site-chrome";
import baby from "@/assets/baby.jpg";
import adulto from "@/assets/adulto.jpg";
import lobulo from "@/assets/lobulo.jpg";

export const Route = createFileRoute("/metodos")({
  head: () => ({
    links: [{ rel: "canonical", href: "https://https-finofurodeluxo-com.lovable.app/metodos" }],
    meta: [
      { property: "og:url", content: "https://https-finofurodeluxo-com.lovable.app/metodos" },
      { property: "og:locale", content: "pt_BR" },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
      { title: "Métodos FF — Adultos, Baby e Reconstrução de Lóbulo" },
      { name: "description", content: "Conheça os três métodos exclusivos da Fino Furo de Luxo: FF Adultos Luxo, FF Baby Luxo e FF Reconstrução de Lóbulo." },
      { property: "og:title", content: "Métodos FF · Fino Furo de Luxo" },
      { property: "og:description", content: "Três rituais premium de perfuração auricular humanizada." },
    ],
  }),
  component: Metodos,
});

const metodos = [
  {
    id: "adultos",
    nome: "FF Adultos Luxo",
    tag: "MÉTODO 01",
    img: adulto,
    desc: "Perfurações com método exclusivo, anestesia tópica e técnicas de relaxamento que transformam o procedimento em ritual sensorial. Ideal para o primeiro furo, second hole, helix, tragus e composições autorais.",
    bullets: ["Anestesia e ambiente calmo", "Joias premium hipoalergênicas", "Acompanhamento da cicatrização"],
  },
  {
    id: "baby",
    nome: "FF Baby Luxo",
    tag: "MÉTODO 02",
    img: baby,
    desc: "O furo humanizado é uma técnica de aplicação sem traumas, indicada para bebês e crianças. Anestesia, acolhimento e técnicas de distração tornam o momento tranquilo — para o pequeno e para a família.",
    bullets: ["Atendimento em domicílio", "Material 100% estéril", "Certificado da coragem ✦"],
  },
  {
    id: "lobulo",
    nome: "FF Reconstrução de Lóbulo",
    tag: "MÉTODO 03",
    img: lobulo,
    desc: "Procedimento inovador, sem cirurgia, que restaura e remodela o lóbulo: corrige perfurações assimétricas, alargadas e rasgadas. Sua autoestima e a liberdade de usar as joias que você ama, de volta.",
    bullets: ["Reconstrução química especializada", "Resultado natural", "Avaliação personalizada"],
  },
];

function Metodos() {
  return (
    <>
      <section className="relative overflow-hidden">
        <AuroraBackdrop />
        <Sparkles count={20} />
        <div className="mx-auto max-w-4xl px-6 py-24 text-center animate-fade-up">
          <p className="text-xs tracking-[0.4em] text-primary">MÉTODOS FF</p>
          <h1 className="mt-4 font-display text-5xl md:text-7xl text-balance leading-[1.05]">
            Três rituais.
            <br />
            Uma <span className="text-gradient-gold italic">assinatura de luxo</span>.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Cada método foi pensado para um momento da vida. Mesma promessa em todos: cuidado humanizado, técnica de enfermagem e brilho que dura.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 space-y-24">
        {metodos.map((m, i) => (
          <article
            key={m.id}
            id={m.id}
            className="grid gap-12 md:grid-cols-2 md:items-center"
          >
            <div className={`relative ${i % 2 ? "md:order-2" : ""}`}>
              <div className="absolute -inset-6 rounded-[3rem] bg-gradient-gold opacity-15 blur-3xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-primary/20 shadow-luxe">
                <img src={m.img} alt={m.nome} loading="lazy" width={1280} height={960} className="w-full object-cover" />
              </div>
            </div>
            <div>
              <p className="text-xs tracking-[0.4em] text-primary">{m.tag}</p>
              <h2 className="mt-4 font-display text-4xl md:text-5xl">{m.nome}</h2>
              <p className="mt-5 text-muted-foreground leading-relaxed">{m.desc}</p>
              <ul className="mt-7 space-y-3">
                {m.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-foreground/90">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gradient-gold" /> {b}
                  </li>
                ))}
              </ul>
              <Link
                to="/contato"
                className="mt-8 inline-flex rounded-full bg-gradient-gold px-7 py-3.5 text-primary-foreground shadow-glow hover:scale-105 transition-transform"
              >
                Agendar este método ✦
              </Link>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}
