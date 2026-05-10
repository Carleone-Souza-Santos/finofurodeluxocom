import { createFileRoute, Link } from "@tanstack/react-router";
import { AuroraBackdrop, Sparkles } from "@/components/site-chrome";
import heroEar from "@/assets/hero-ear.jpg";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre Angelica Ribeiro — Fino Furo de Luxo" },
      { name: "description", content: "Conheça Angelica Ribeiro, Enfermeira especialista em furo humanizado e fundadora da Fino Furo de Luxo em Santo André." },
      { property: "og:title", content: "Sobre Angelica · Fino Furo de Luxo" },
      { property: "og:description", content: "14+ anos em saúde, especialista em piercing humanizado e reconstrução de lóbulo." },
    ],
  }),
  component: Sobre,
});

const timeline = [
  { ano: "2011", titulo: "O começo na saúde", desc: "Início da trajetória na enfermagem, área que se tornaria minha vocação." },
  { ano: "2020", titulo: "Especialização em UTI Adulto", desc: "Pós-graduação em terapia intensiva durante a pandemia. 14+ anos dedicados a cuidar de vidas." },
  { ano: "2023", titulo: "Furo humanizado & Body Piercer Luxo", desc: "Formações reconhecidas pelo MEC e mergulho exclusivo no universo do piercing premium." },
  { ano: "2024", titulo: "Reconstrução de lóbulo química", desc: "Método inovador para devolver autoestima a quem deseja voltar a usar suas joias preferidas." },
];

function Sobre() {
  return (
    <>
      <section className="relative overflow-hidden">
        <AuroraBackdrop />
        <Sparkles count={20} />
        <div className="mx-auto grid max-w-7xl gap-16 px-6 py-24 md:grid-cols-[1.1fr_1fr] md:items-center">
          <div className="animate-fade-up">
            <p className="text-xs tracking-[0.4em] text-primary">SOBRE</p>
            <h1 className="mt-4 font-display text-5xl md:text-7xl text-balance leading-[1.05]">
              Angelica Ribeiro,
              <br />
              <span className="text-gradient-gold italic">enfermeira do detalhe</span>.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground leading-relaxed">
              Mais de 14 anos cuidando de pessoas. Em 2023 redescobri minha essência ao mergulhar no universo do piercing humanizado. Hoje transformo cada perfuração em um momento de cuidado, segurança e brilho.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/metodos" className="rounded-full bg-gradient-gold px-7 py-3.5 text-primary-foreground shadow-glow hover:scale-105 transition-transform">
                Ver métodos
              </Link>
              <Link to="/contato" className="rounded-full border border-primary/40 px-7 py-3.5 hover:bg-primary/10">
                Falar com Angelica
              </Link>
            </div>
          </div>

          <div className="relative animate-scale-in">
            <div className="absolute -inset-6 bg-gradient-gold opacity-20 blur-3xl rounded-full" />
            <div className="relative overflow-hidden rounded-[2.5rem] border border-primary/20 shadow-luxe">
              <img src={heroEar} alt="Detalhe do trabalho da Fino Furo de Luxo" width={1536} height={1536} className="w-full" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20">
        <p className="text-xs tracking-[0.4em] text-primary text-center">MINHA TRAJETÓRIA</p>
        <h2 className="mt-4 text-center font-display text-4xl md:text-5xl">Da UTI ao luxo do detalhe</h2>

        <div className="relative mt-16">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/40 to-transparent" />
          <div className="space-y-12">
            {timeline.map((t, i) => (
              <div key={t.ano} className={`relative grid gap-6 md:grid-cols-2 md:items-center ${i % 2 ? "" : ""}`}>
                <div className={`pl-12 md:pl-0 ${i % 2 ? "md:order-2 md:pl-12" : "md:text-right md:pr-12"}`}>
                  <p className="font-display text-4xl text-gradient-gold">{t.ano}</p>
                  <h3 className="mt-2 font-display text-2xl">{t.titulo}</h3>
                  <p className="mt-2 text-muted-foreground">{t.desc}</p>
                </div>
                <span className="absolute left-2.5 md:left-1/2 -translate-x-1/2 grid h-5 w-5 place-items-center rounded-full bg-gradient-gold shadow-glow">
                  <span className="h-2 w-2 rounded-full bg-background" />
                </span>
                <div />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
