import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

interface LegalLayoutProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

export default function LegalLayout({ title, subtitle, children }: LegalLayoutProps) {
  return (
    <div className="bg-obsidian text-champagne font-montserrat min-h-screen">
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5"
        style={{ background: "linear-gradient(to bottom, rgba(13,13,13,0.95), transparent)" }}>
        <Link to="/" className="font-cormorant text-2xl tracking-[0.2em] text-gold font-light">SV STYLIST</Link>
        <Link to="/" className="text-xs tracking-[0.2em] uppercase text-champagne/70 hover:text-gold transition-colors flex items-center gap-2">
          <Icon name="ArrowLeft" size={14} />
          На главную
        </Link>
      </nav>

      <section className="pt-40 pb-20 border-b border-champagne/10">
        <div className="container max-w-4xl mx-auto px-8">
          <p className="text-gold text-xs tracking-[0.4em] uppercase mb-6">Правовая информация</p>
          <h1 className="font-cormorant text-5xl md:text-6xl font-light leading-tight mb-4">{title}</h1>
          {subtitle && <p className="text-champagne/50 text-sm">{subtitle}</p>}
        </div>
      </section>

      <section className="py-20">
        <div className="container max-w-4xl mx-auto px-8">
          <article className="prose-legal space-y-8 text-champagne/70 text-[15px] leading-[1.85]">
            {children}
          </article>

          <div className="mt-20 pt-10 border-t border-champagne/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <p className="text-champagne/40 text-xs tracking-widest">
              Документ актуален на {new Date().toLocaleDateString("ru-RU", { day: "numeric", month: "long", year: "numeric" })}
            </p>
            <div className="flex gap-6 text-xs tracking-widest uppercase">
              <Link to="/privacy" className="text-champagne/50 hover:text-gold transition-colors">Политика</Link>
              <Link to="/consent" className="text-champagne/50 hover:text-gold transition-colors">Согласие</Link>
              <Link to="/terms" className="text-champagne/50 hover:text-gold transition-colors">Соглашение</Link>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-champagne/10 py-10">
        <div className="container max-w-6xl mx-auto px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-cormorant text-2xl tracking-[0.2em] text-gold font-light">SV STYLIST</span>
          <p className="text-champagne/30 text-xs tracking-widest">© 2024 Светлана Власова · Персональный стилист</p>
        </div>
      </footer>
    </div>
  );
}
