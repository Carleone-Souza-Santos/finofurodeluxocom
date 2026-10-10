import { createFileRoute, Link } from "@tanstack/react-router";
import { AuroraBackdrop, Sparkles } from "@/components/site-chrome";
import heroEar from "@/assets/hero-ear.jpg";
import joias from "@/assets/joias.jpg";
import baby from "@/assets/baby.jpg";
import adulto from "@/assets/adulto.jpg";
import lobulo from "@/assets/lobulo.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    links: [{ rel: "canonical", href: "https://https-finofurodeluxo-com.lovable.app/" }],
    meta: [
      { property: "og:url", content: "https://https-finofurodeluxo-com.lovable.app/" },
      { property: "og:locale", content: "pt_BR" },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
      { title: "Fino Furo de Luxo — Piercing Humanizado em Santo André" },
      { name: "description", content: "Perfuração auricular humanizada e premium por Angelica Ribeiro. Sem dor, com técnica de Enfermagem, joias finas e ambiente acolhedor." },
      { property: "og:title", content: "Fino Furo de Luxo — Piercing Humanizado" },
      { property: "og:description", content: "Experiência segura, premium e humanizada em perfuração auricular." },
    ],
  }),
  component: Home,
});

const metodos = [
  {
    nome: "FF Adultos Luxo",
    desc: "Perfurações com método exclusivo, anestesia e técnicas de relaxamento que transformam cada furo em ritual.",
    img: adulto,
  },
  {
    nome: "FF Baby Luxo",
    desc: "Furo humanizado para bebês e crianças. Sem trauma, com anestesia e acolhimento pra um momento tranquilo.",
    img: baby,
  },
  {
    nome: "FF Reconstrução Lóbulo",
    desc: "Procedimento inovador que restaura lóbulos rasgados, alargados ou assimétricos. Autoestima de volta.",
    img: lobulo,
  },
];

const depoimentos = [
  { nome: "Caroline Pitarelli", texto: "Profissional altamente qualificada. Higienização impecável, sem dor, acompanhamento completo. Amei o resultado." },
  { nome: "Priscilla Tiemi", texto: "Atendimento maravilhoso em casa, humanizado e profissional. Minha bebê foi super tranquila." },
  { nome: "Nani Chaves", texto: "Melhor body piercer que já conheci! Tudo estéril, simpatia e profissionalismo da Angel." },
  { nome: "Renata Monteiro", texto: "Processo seguro, sem dor, nada inflamado. Eu e minha filha estamos apaixonadas pelo resultado." },
  { nome: "Vanessa Souza", texto: "Capacitada, atenciosa, explica tudo passo a passo e acompanha a cicatrização. Mal posso esperar pelo próximo." },
  { nome: "Malvina Cunha", texto: "Transmite tranquilidade e cuidado. Eu tinha receio e tudo fluiu. Me senti segura e acolhida." },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[92vh] overflow-hidden">
        <AuroraBackdrop />
        <Sparkles count={26} />
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-2 md:items-center">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 text-xs tracking-[0.3em] text-primary">
              ✦ ENFERMEIRA ESPECIALISTA
            </span>
            <h1 className="mt-6 font-display text-5xl leading-[1.05] text-balance md:text-7xl">
              Onde cada furo
              <br />
              vira <span className="shimmer-text italic">obra de arte</span>.
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
              Perfuração auricular humanizada, segura e premium em Santo André. Técnica de enfermagem, joias finas e um ritual que eleva sua autoestima.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="https://wa.me/5511000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-gradient-gold px-8 py-4 font-medium text-primary-foreground shadow-glow hover:scale-105 transition-transform"
              >
                Agendar meu ritual ✦
              </a>
              <Link
                to="/metodos"
                className="rounded-full border border-primary/40 px-8 py-4 font-medium text-foreground/90 hover:bg-primary/10 transition-colors"
              >
                Conhecer métodos
              </Link>
            </div>
            <div className="mt-12 flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex -space-x-2">
                {[1,2,3,4,5].map(i => (
                  <span key={i} className="grid h-9 w-9 place-items-center rounded-full bg-gradient-gold text-primary-foreground border-2 border-background text-xs">★</span>
                ))}
              </div>
              <div>
                <p className="text-foreground font-medium">+ de 500 sorrisos</p>
                <p>5.0 no Google · clientes apaixonadas</p>
              </div>
            </div>
          </div>

          <div className="relative animate-scale-in">
            <div className="absolute -inset-6 rounded-[3rem] bg-gradient-gold opacity-20 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2.5rem] border border-primary/20 shadow-luxe">
              <img
                src={heroEar}
                alt="Orelha adornada com piercings de ouro delicados"
                width={1536}
                height={1536}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 glass rounded-2xl p-5">
                <p className="text-xs tracking-[0.25em] text-primary">FF SIGNATURE</p>
                <p className="mt-1 font-display text-xl">Constelação de luxo no seu lóbulo</p>
              </div>
            </div>
            <div className="absolute -top-6 -right-6 h-24 w-24 rounded-full bg-gradient-gold opacity-30 blur-2xl animate-float" />
            <div className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-wine opacity-60 blur-3xl animate-float-slow" />
          </div>
        </div>
      </section>

      {/* MANIFESTO STRIP */}
      <section className="relative overflow-hidden border-y border-primary/15 bg-wine/40 py-10">
        <div className="flex animate-[shimmer_30s_linear_infinite] whitespace-nowrap gap-16 font-display text-3xl italic text-primary/60 md:text-5xl">
          {Array.from({ length: 2 }).map((_, k) => (
            <span key={k} className="flex gap-16">
              <span>Humanizado</span><span>✦</span>
              <span>Estéril</span><span>✦</span>
              <span>Sem dor</span><span>✦</span>
              <span>Premium</span><span>✦</span>
              <span>Joias finas</span><span>✦</span>
              <span>Acolhimento</span><span>✦</span>
            </span>
          ))}
        </div>
      </section>

      {/* MÉTODOS */}
      <section className="relative mx-auto max-w-7xl px-6 py-28">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs tracking-[0.4em] text-primary">OS MÉTODOS FF</p>
          <h2 className="mt-4 font-display text-4xl md:text-6xl text-balance">
            Três rituais. Uma <span className="text-gradient-gold italic">assinatura</span>.
          </h2>
          <p className="mt-5 text-muted-foreground">
            Cada método foi desenhado por anos de prática em enfermagem para transformar a perfuração em momento de cuidado.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {metodos.map((m, i) => (
            <article
              key={m.nome}
              className="group relative overflow-hidden rounded-3xl border border-primary/15 glass hover-lift"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={m.img}
                  alt={m.nome}
                  loading="lazy"
                  width={1280}
                  height={960}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-7">
                <p className="text-[10px] tracking-[0.4em] text-primary">MÉTODO {String(i + 1).padStart(2, "0")}</p>
                <h3 className="mt-2 font-display text-2xl">{m.nome}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{m.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* JOIAS */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 py-28 md:grid-cols-2 md:items-center">
          <div className="relative">
            <div className="absolute -inset-10 bg-gradient-gold opacity-15 blur-3xl rounded-full" />
            <img
              src={joias}
              alt="Joias delicadas em ouro com diamantes"
              loading="lazy"
              width={1280}
              height={960}
              className="relative rounded-3xl border border-primary/20 shadow-luxe"
            />
          </div>
          <div>
            <p className="text-xs tracking-[0.4em] text-primary">COLEÇÃO FF</p>
            <h2 className="mt-4 font-display text-4xl md:text-6xl text-balance">
              Joias para bebês — <span className="text-gradient-gold italic">delicadeza e brilho</span> desde o primeiro dia.
            </h2>
            <p className="mt-6 max-w-lg text-muted-foreground leading-relaxed">
              Curadoria de peças premium, hipoalergênicas e desenhadas para o conforto. Do primeiro furinho aos pares mais ousados — cada joia é escolhida com afeto.
            </p>
            <ul className="mt-8 space-y-3 text-sm text-foreground/90">
              {[
                "Materiais cirúrgicos · ouro · titânio",
                "Modelos exclusivos para bebês e crianças",
                "Embalagem de presente em todos os pares",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gradient-gold" /> {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section className="relative mx-auto max-w-7xl px-6 py-28">
        <div className="text-center">
          <p className="text-xs tracking-[0.4em] text-primary">QUEM AMOU CONTOU</p>
          <h2 className="mt-4 font-display text-4xl md:text-6xl">
            Histórias que <span className="text-gradient-gold italic">brilham</span>.
          </h2>
        </div>
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {depoimentos.map((d, i) => (
            <blockquote
              key={d.nome}
              className="glass rounded-3xl p-7 hover-lift"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="text-primary text-lg">★★★★★</div>
              <p className="mt-4 italic text-foreground/90 leading-relaxed">"{d.texto}"</p>
              <footer className="mt-6 flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-gold text-primary-foreground font-display">
                  {d.nome[0]}
                </span>
                <span className="font-display text-lg">{d.nome}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative mx-auto max-w-7xl px-6 pb-28">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-primary/25 bg-gradient-wine p-12 md:p-20 text-center shadow-luxe">
          <Sparkles count={20} />
          <p className="text-xs tracking-[0.4em] text-primary">PRONTA PARA BRILHAR?</p>
          <h2 className="mt-4 font-display text-4xl md:text-6xl text-balance">
            Seu próximo furo é uma <span className="shimmer-text italic">história</span>.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
            Reserve seu horário com Angelica e viva o ritual Fino Furo de Luxo.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/5511000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-gradient-gold px-8 py-4 font-medium text-primary-foreground shadow-glow hover:scale-105 transition-transform"
            >
              Agendar pelo WhatsApp
            </a>
            <Link
              to="/contato"
              className="rounded-full border border-primary/40 px-8 py-4 font-medium hover:bg-primary/10"
            >
              Outras formas de contato
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
