import earIcon from "@/assets/whatsapp-ear.png";

const WHATSAPP_URL = "https://wa.me/5511000000000?text=Ol%C3%A1%21%20Quero%20agendar%20minha%20perfura%C3%A7%C3%A3o%20na%20Fino%20Furo%20de%20Luxo.";

export function WhatsAppFab() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Agendar perfuração pelo WhatsApp"
      className="group fixed bottom-5 right-5 md:bottom-8 md:right-8 z-[60] flex items-center gap-3"
    >
      {/* Tooltip / label */}
      <span className="hidden md:inline-flex items-center rounded-full border border-primary/30 bg-background/80 px-4 py-2 text-xs uppercase tracking-[0.2em] text-foreground backdrop-blur-md shadow-elegant opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
        Agendar sua perfuração
      </span>

      {/* Button */}
      <span className="relative flex h-14 w-14 md:h-16 md:w-16 items-center justify-center rounded-full bg-gradient-gold shadow-glow ring-1 ring-primary/40 transition-transform duration-300 group-hover:scale-110">
        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full bg-primary/40 animate-ping opacity-60" />
        <span className="absolute inset-0 rounded-full bg-gradient-gold" />
        <img
          src={earIcon}
          alt=""
          aria-hidden="true"
          width={64}
          height={64}
          loading="lazy"
          className="relative h-9 w-9 md:h-11 md:w-11 object-contain drop-shadow-[0_2px_6px_rgba(0,0,0,0.35)]"
        />
      </span>
    </a>
  );
}
