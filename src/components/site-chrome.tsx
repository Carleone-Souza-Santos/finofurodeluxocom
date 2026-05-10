import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { to: "/", label: "Início" },
  { to: "/sobre", label: "Sobre" },
  { to: "/metodos", label: "Métodos" },
  { to: "/galeria", label: "Galeria" },
  { to: "/videos", label: "Vídeos" },
  { to: "/contato", label: "Contato" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="mx-auto flex h-16 md:h-20 max-w-7xl items-center justify-between px-4 md:px-6">
        <Link to="/" className="flex items-center gap-3 group" onClick={() => setOpen(false)}>
          <span className="grid h-10 w-10 md:h-11 md:w-11 place-items-center rounded-full bg-gradient-gold text-primary-foreground font-display text-lg md:text-xl font-bold shadow-glow transition-transform group-hover:scale-110">
            FF
          </span>
          <span className="block">
            <span className="block font-display text-base md:text-lg leading-none text-gradient-gold">Fino Furo</span>
            <span className="block text-[9px] md:text-[10px] tracking-[0.3em] md:tracking-[0.35em] text-muted-foreground">DE LUXO</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm tracking-wide">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: true }}
              activeProps={{ className: "text-primary" }}
              className="text-foreground/80 hover:text-primary transition-colors relative after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-primary after:transition-all hover:after:w-full"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="https://wa.me/5511000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex rounded-full bg-gradient-gold px-4 md:px-5 py-2 md:py-2.5 text-xs md:text-sm font-medium text-primary-foreground shadow-glow hover:scale-105 transition-transform"
          >
            Agendar
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            className="md:hidden grid h-10 w-10 place-items-center rounded-full border border-primary/30 text-primary"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`md:hidden fixed inset-x-0 top-16 bottom-0 bg-background/95 backdrop-blur-xl border-t border-primary/15 transition-all duration-300 ${
          open ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col px-6 py-8 gap-1">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              activeOptions={{ exact: true }}
              activeProps={{ className: "text-primary bg-primary/10" }}
              className="rounded-xl px-4 py-4 text-lg font-display text-foreground/90 hover:text-primary hover:bg-primary/5 transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <a
            href="https://wa.me/5511000000000"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-6 rounded-full bg-gradient-gold px-6 py-3.5 text-center font-medium text-primary-foreground shadow-glow"
          >
            Agendar pelo WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="relative mt-24 md:mt-32 border-t border-primary/15 bg-gradient-wine">
      <div className="mx-auto grid max-w-7xl gap-10 md:gap-12 px-6 py-12 md:py-16 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid h-12 w-12 place-items-center rounded-full bg-gradient-gold text-primary-foreground font-display text-xl font-bold">FF</span>
            <div>
              <p className="font-display text-xl text-gradient-gold">Fino Furo de Luxo</p>
              <p className="text-xs tracking-[0.3em] text-muted-foreground">PIERCING HUMANIZADO</p>
            </div>
          </div>
          <p className="mt-5 max-w-sm text-sm text-muted-foreground leading-relaxed">
            Uma experiência segura, premium e cheia de afeto. Por Angelica Ribeiro, Enfermeira especialista em Santo André.
          </p>
        </div>
        <div>
          <p className="font-display text-lg text-primary">Navegue</p>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-primary">Início</Link></li>
            <li><Link to="/sobre" className="hover:text-primary">Sobre Angelica</Link></li>
            <li><Link to="/metodos" className="hover:text-primary">Métodos FF</Link></li>
            <li><Link to="/galeria" className="hover:text-primary">Galeria</Link></li>
            <li><Link to="/videos" className="hover:text-primary">Vídeos</Link></li>
            <li><Link to="/contato" className="hover:text-primary">Contato</Link></li>
          </ul>
        </div>
        <div>
          <p className="font-display text-lg text-primary">Encontre-nos</p>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>Santo André — SP</li>
            <li>Atendimento em domicílio</li>
            <li><a className="hover:text-primary" href="https://instagram.com" target="_blank" rel="noopener noreferrer">@finofurodeluxo</a></li>
            <li><a className="hover:text-primary" href="https://wa.me/5511000000000">WhatsApp</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary/10 py-6 text-center text-xs text-muted-foreground px-4">
        © {new Date().getFullYear()} Fino Furo de Luxo · Feito com cuidado e brilho.
      </div>
    </footer>
  );
}

export function Sparkles({ count = 18 }: { count?: number }) {
  const dots = Array.from({ length: count });
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {dots.map((_, i) => {
        const top = (i * 53) % 100;
        const left = (i * 37) % 100;
        const size = 2 + ((i * 7) % 6);
        const delay = (i % 7) * 0.4;
        return (
          <span
            key={i}
            className="absolute rounded-full bg-primary animate-twinkle"
            style={{
              top: `${top}%`,
              left: `${left}%`,
              width: size,
              height: size,
              animationDelay: `${delay}s`,
              boxShadow: "0 0 8px var(--gold)",
            }}
          />
        );
      })}
    </div>
  );
}

export function AuroraBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden>
      <div
        className="absolute -top-40 -left-40 h-[40rem] w-[40rem] rounded-full opacity-60 blur-3xl animate-aurora"
        style={{ background: "radial-gradient(circle, oklch(0.55 0.18 25 / 0.45), transparent 70%)" }}
      />
      <div
        className="absolute top-40 -right-40 h-[36rem] w-[36rem] rounded-full opacity-50 blur-3xl animate-aurora"
        style={{ background: "radial-gradient(circle, oklch(0.78 0.13 78 / 0.35), transparent 70%)", animationDelay: "4s" }}
      />
      <div
        className="absolute bottom-0 left-1/3 h-[30rem] w-[30rem] rounded-full opacity-40 blur-3xl animate-aurora"
        style={{ background: "radial-gradient(circle, oklch(0.6 0.15 35 / 0.4), transparent 70%)", animationDelay: "8s" }}
      />
    </div>
  );
}
