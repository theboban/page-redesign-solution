import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const HERO_IMAGE = "https://cdn.poehali.dev/projects/f603708c-5b71-43b9-b59e-c4d7b5f89356/files/2123a654-4626-4494-a629-df8692a8e5aa.jpg";
const WARDROBE_IMAGE = "https://cdn.poehali.dev/projects/f603708c-5b71-43b9-b59e-c4d7b5f89356/files/1d74d958-1c83-426e-b2cd-71a04768a320.jpg";
const BEFORE_AFTER_IMAGE = "https://cdn.poehali.dev/projects/f603708c-5b71-43b9-b59e-c4d7b5f89356/files/114b6ffe-74ca-4197-a7cc-b84a4a8e1c1c.jpg";

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return { ref, inView };
}

const services = [
  { icon: "Sparkles", title: "Персональный шопинг", desc: "Создаю гардероб мечты с нуля: анализ фигуры, цветотип, подбор образов под вашу жизнь", price: "от 15 000 ₽" },
  { icon: "Camera", title: "Стилизация фотосессий", desc: "Полная подготовка к съёмке: образы, аксессуары, визаж — всё в одном стиле", price: "от 25 000 ₽" },
  { icon: "Star", title: "Разбор гардероба", desc: "Аудит текущего гардероба, избавление от лишнего и создание капсулы на каждый день", price: "от 8 000 ₽" },
  { icon: "Crown", title: "Имидж-консультация", desc: "Стратегия образа под ваши цели: деловой стиль, мероприятия, повседневная жизнь", price: "от 5 000 ₽" },
];

const transformations = [
  {
    name: "Мария, 34 года",
    before: "Офисный дресс-код без выразительности",
    after: "Уверенный деловой образ с авторским почерком",
    tag: "Деловой стиль",
  },
  {
    name: "Анна, 28 лет",
    before: "Повседневные образы без системы",
    after: "Капсульный гардероб на 30+ сочетаний",
    tag: "Повседневный стиль",
  },
  {
    name: "Светлана, 42 года",
    before: "Скрывала фигуру, избегала ярких вещей",
    after: "Открыла свой цветотип, полюбила отражение в зеркале",
    tag: "Полная трансформация",
  },
];

const reviews = [
  { name: "Екатерина М.", text: "После консультации я перестала тратить деньги на вещи, которые не ношу. Теперь каждое утро — удовольствие!", stars: 5 },
  { name: "Ирина В.", text: "Шопинг с личным стилистом — это совсем другой опыт. За 4 часа собрали гардероб на год вперёд.", stars: 5 },
  { name: "Наталья К.", text: "Фотосессия прошла блестяще. Все образы были продуманы до мелочей — снимки получились невероятные!", stars: 5 },
];

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const [agreed, setAgreed] = useState(false);
  const aboutSection = useInView();
  const servicesSection = useInView();
  const transformSection = useInView();
  const reviewsSection = useInView();
  const contactSection = useInView();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="bg-obsidian text-champagne font-montserrat overflow-x-hidden">
      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5"
        style={{ background: "linear-gradient(to bottom, rgba(13,13,13,0.95), transparent)" }}>
        <span className="font-cormorant text-2xl tracking-[0.2em] text-gold font-light">SV STYLIST</span>
        <div className="hidden md:flex gap-10 text-xs tracking-[0.2em] uppercase text-champagne/70">
          {[["about","Обо мне"],["services","Услуги"],["transformations","До/После"],["contact","Контакт"]].map(([id,label]) => (
            <button key={id} onClick={() => scrollTo(id)}
              className="hover:text-gold transition-colors duration-300">{label}</button>
          ))}
        </div>
        <button onClick={() => scrollTo("contact")}
          className="hidden md:block border border-gold/60 text-gold text-xs tracking-[0.2em] uppercase px-6 py-2.5 hover:bg-gold hover:text-obsidian transition-all duration-300">
          Записаться
        </button>
        <button className="md:hidden text-gold" onClick={() => setMenuOpen(!menuOpen)}>
          <Icon name={menuOpen ? "X" : "Menu"} size={22} />
        </button>
      </nav>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-obsidian/98 flex flex-col items-center justify-center gap-10">
          {[["about","Обо мне"],["services","Услуги"],["transformations","До/После"],["contact","Контакт"]].map(([id,label]) => (
            <button key={id} onClick={() => scrollTo(id)}
              className="font-cormorant text-4xl text-champagne hover:text-gold transition-colors tracking-widest">{label}</button>
          ))}
        </div>
      )}

      {/* HERO */}
      <section className="relative min-h-screen flex items-end pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO_IMAGE} alt="Стилист" className="w-full h-full object-cover object-top opacity-50" />
          <div className="absolute inset-0" style={{background:"linear-gradient(to top, #0d0d0d 30%, rgba(13,13,13,0.3) 70%, rgba(13,13,13,0.6))"}} />
        </div>

        {/* Gold grain texture overlay */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{backgroundImage:`url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,backgroundSize:"256px"}} />

        <div className="relative z-10 container max-w-6xl mx-auto px-8">
          <div className="max-w-2xl">
            <p className="text-gold text-xs tracking-[0.4em] uppercase mb-6 animate-fade-in opacity-0">
              Персональный стилист
            </p>
            <h1 className="font-cormorant text-7xl md:text-9xl font-light leading-none mb-6 animate-fade-up opacity-0"
              style={{animationFillMode:"forwards"}}>
              Светлана<br/><em className="italic text-gold">Власова</em>
            </h1>
            <p className="text-champagne/60 text-sm tracking-widest uppercase mb-12 animate-fade-up-delay opacity-0"
              style={{animationFillMode:"forwards"}}>
              Трансформации · Образы · Шопинг
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up-delay2 opacity-0"
              style={{animationFillMode:"forwards"}}>
              <button onClick={() => scrollTo("contact")}
                className="bg-gold text-obsidian text-xs tracking-[0.3em] uppercase px-10 py-4 font-semibold hover:bg-gold-light transition-all duration-300 hover:shadow-[0_0_30px_rgba(201,168,76,0.4)]">
                Записаться на консультацию
              </button>
              <button onClick={() => scrollTo("transformations")}
                className="border border-champagne/30 text-champagne text-xs tracking-[0.3em] uppercase px-10 py-4 hover:border-gold hover:text-gold transition-all duration-300">
                Смотреть работы
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="flex gap-12 mt-20 border-t border-champagne/10 pt-10">
            {[["8+","лет опыта"],["300+","трансформаций"],["98%","довольных клиентов"]].map(([num, label]) => (
              <div key={label}>
                <div className="font-cormorant text-4xl text-gold font-light">{num}</div>
                <div className="text-champagne/50 text-xs tracking-widest uppercase mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 right-8 flex flex-col items-center gap-2 text-champagne/30">
          <span className="text-xs tracking-[0.3em] uppercase rotate-90 origin-center translate-y-8">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-gold/50 to-transparent" />
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-32">
        <div ref={aboutSection.ref} className="container max-w-6xl mx-auto px-8">
          <div className={`grid md:grid-cols-2 gap-20 items-center transition-all duration-1000 ${aboutSection.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <div className="relative">
              <img src={WARDROBE_IMAGE} alt="Гардероб" className="w-full aspect-[4/5] object-cover" />
              <div className="absolute -bottom-6 -right-6 w-48 h-48 border border-gold/30 -z-10" />
              <div className="absolute -top-6 -left-6 w-32 h-32 border border-gold/20 -z-10" />
              <div className="absolute top-8 left-8 bg-obsidian/90 border border-gold/40 px-6 py-4">
                <div className="font-cormorant text-3xl text-gold font-light">8</div>
                <div className="text-xs tracking-widest text-champagne/60 uppercase">лет в моде</div>
              </div>
            </div>
            <div>
              <p className="text-gold text-xs tracking-[0.4em] uppercase mb-4">Обо мне</p>
              <h2 className="font-cormorant text-5xl md:text-6xl font-light leading-tight mb-8">
                Ваш образ —<br/><em className="italic text-gold">моя страсть</em>
              </h2>
              <div className="space-y-5 text-champagne/65 text-sm leading-relaxed">
                <p>Я верю, что каждый человек заслуживает видеть в зеркале лучшую версию себя. За 8 лет практики я помогла сотням клиентов раскрыть свой неповторимый стиль.</p>
                <p>Мой подход — не просто подобрать красивые вещи, а создать систему образов, которая работает на вашу жизнь, карьеру и самоощущение.</p>
                <p>Я работала со звёздами, топ-менеджерами, молодожёнами и теми, кто просто решил начать новую главу жизни с новым образом.</p>
              </div>
              <div className="mt-10 flex items-center gap-6">
                <div className="h-px flex-1 bg-gradient-to-r from-gold/50 to-transparent" />
                <p className="font-cormorant italic text-xl text-gold">"Стиль — это язык без слов"</p>
                <div className="h-px flex-1 bg-gradient-to-l from-gold/50 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-32 bg-rich-dark">
        <div ref={servicesSection.ref} className="container max-w-6xl mx-auto px-8">
          <div className={`text-center mb-20 transition-all duration-800 ${servicesSection.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <p className="text-gold text-xs tracking-[0.4em] uppercase mb-4">Что я предлагаю</p>
            <h2 className="font-cormorant text-5xl md:text-6xl font-light">Услуги</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-px bg-champagne/10">
            {services.map((s, i) => (
              <div key={i}
                className={`bg-rich-dark p-10 group hover:bg-warm-black transition-all duration-500 cursor-pointer
                  ${servicesSection.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
                `}
                style={{transitionDelay:`${i * 100}ms`}}>
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 border border-gold/40 flex items-center justify-center group-hover:bg-gold/10 transition-colors duration-300">
                    <Icon name={s.icon} size={20} className="text-gold" />
                  </div>
                  <span className="text-gold/60 font-cormorant text-lg italic">{String(i+1).padStart(2,"0")}</span>
                </div>
                <h3 className="font-cormorant text-2xl font-light mb-3 group-hover:text-gold transition-colors">{s.title}</h3>
                <p className="text-champagne/50 text-sm leading-relaxed mb-6">{s.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-gold text-sm font-light tracking-wide">{s.price}</span>
                  <Icon name="ArrowRight" size={16} className="text-gold/40 group-hover:text-gold group-hover:translate-x-1 transition-all duration-300" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BEFORE/AFTER */}
      <section id="transformations" className="py-32">
        <div ref={transformSection.ref} className="container max-w-6xl mx-auto px-8">
          <div className={`text-center mb-20 transition-all duration-800 ${transformSection.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <p className="text-gold text-xs tracking-[0.4em] uppercase mb-4">Трансформации</p>
            <h2 className="font-cormorant text-5xl md:text-6xl font-light">До & После</h2>
          </div>

          {/* Main before/after visual */}
          <div className={`relative mb-20 transition-all duration-1000 delay-200 ${transformSection.inView ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>
            <img src={BEFORE_AFTER_IMAGE} alt="Трансформация" className="w-full max-h-[500px] object-cover" />
            <div className="absolute inset-0 flex">
              <div className="flex-1 flex items-end p-8">
                <div className="bg-obsidian/80 border border-champagne/20 px-6 py-3">
                  <span className="text-champagne/60 text-xs tracking-widest uppercase">До</span>
                </div>
              </div>
              <div className="w-px bg-gold/60" />
              <div className="flex-1 flex items-end justify-end p-8">
                <div className="bg-gold/90 px-6 py-3">
                  <span className="text-obsidian text-xs tracking-widest uppercase font-semibold">После</span>
                </div>
              </div>
            </div>
          </div>

          {/* Transformation cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {transformations.map((t, i) => (
              <div key={i}
                className={`border border-champagne/10 p-8 hover:border-gold/40 transition-all duration-500
                  ${transformSection.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
                `}
                style={{transitionDelay:`${300 + i * 100}ms`}}>
                <span className="text-xs text-gold/70 tracking-widest uppercase border border-gold/30 px-3 py-1 mb-6 inline-block">{t.tag}</span>
                <h4 className="font-cormorant text-xl font-light mb-6 text-champagne">{t.name}</h4>
                <div className="space-y-4">
                  <div className="flex gap-3 items-start">
                    <span className="w-5 h-5 rounded-full border border-champagne/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon name="Minus" size={10} className="text-champagne/40" />
                    </span>
                    <p className="text-champagne/50 text-sm">{t.before}</p>
                  </div>
                  <div className="flex gap-3 items-start">
                    <span className="w-5 h-5 rounded-full bg-gold/20 border border-gold/60 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon name="Check" size={10} className="text-gold" />
                    </span>
                    <p className="text-champagne text-sm">{t.after}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-32 bg-rich-dark">
        <div ref={reviewsSection.ref} className="container max-w-6xl mx-auto px-8">
          <div className={`text-center mb-20 transition-all duration-800 ${reviewsSection.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <p className="text-gold text-xs tracking-[0.4em] uppercase mb-4">Отзывы клиентов</p>
            <h2 className="font-cormorant text-5xl md:text-6xl font-light">Они доверились мне</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((r, i) => (
              <div key={i}
                className={`p-8 border border-champagne/10 relative transition-all duration-700
                  ${reviewsSection.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
                `}
                style={{transitionDelay:`${i * 150}ms`}}>
                <div className="absolute top-6 right-8 font-cormorant text-6xl text-gold/20 leading-none select-none">"</div>
                <div className="flex mb-4">
                  {Array(r.stars).fill(0).map((_, j) => (
                    <Icon key={j} name="Star" size={12} className="text-gold fill-gold" />
                  ))}
                </div>
                <p className="text-champagne/70 text-sm leading-relaxed mb-6 italic font-cormorant text-lg">"{r.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-px bg-gold/50" />
                  <span className="text-xs text-champagne/50 tracking-widest uppercase">{r.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-24 relative overflow-hidden"
        style={{background:"linear-gradient(135deg, #1a1714 0%, #231f1a 50%, #1a1714 100%)"}}>
        <div className="absolute inset-0 opacity-5"
          style={{backgroundImage:"repeating-linear-gradient(45deg, #c9a84c 0, #c9a84c 1px, transparent 0, transparent 50%)", backgroundSize:"20px 20px"}} />
        <div className="relative container max-w-4xl mx-auto px-8 text-center">
          <p className="text-gold text-xs tracking-[0.4em] uppercase mb-6">Готовы к перемене?</p>
          <h2 className="font-cormorant text-5xl md:text-7xl font-light mb-8 leading-tight">
            Ваша трансформация<br/><em className="italic text-gold">начинается сегодня</em>
          </h2>
          <p className="text-champagne/60 mb-12 max-w-lg mx-auto leading-relaxed">Запишитесь на бесплатную 30-минутную консультацию и узнайте, как изменить свой стиль раз и навсегда</p>
          <button onClick={() => scrollTo("contact")}
            className="bg-gold text-obsidian text-xs tracking-[0.3em] uppercase px-14 py-5 font-semibold hover:bg-gold-light transition-all duration-300 hover:shadow-[0_0_40px_rgba(201,168,76,0.5)]">
            Получить консультацию
          </button>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-32">
        <div ref={contactSection.ref} className="container max-w-6xl mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-20">
            <div className={`transition-all duration-1000 ${contactSection.inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
              <p className="text-gold text-xs tracking-[0.4em] uppercase mb-4">Контакт</p>
              <h2 className="font-cormorant text-5xl md:text-6xl font-light mb-8">
                Давайте<br/><em className="italic text-gold">познакомимся</em>
              </h2>
              <div className="space-y-6 mb-10">
                {[
                  { icon: "Phone", label: "Телефон", value: "+7 (900) 000-00-00" },
                  { icon: "Mail", label: "Email", value: "stylist@example.com" },
                  { icon: "MapPin", label: "Город", value: "Москва" },
                  { icon: "Instagram", label: "Instagram", value: "@sv_stylist" },
                ].map(({ icon, label, value }) => (
                  <div key={label} className="flex items-center gap-5">
                    <div className="w-10 h-10 border border-gold/30 flex items-center justify-center flex-shrink-0">
                      <Icon name={icon} size={16} className="text-gold" />
                    </div>
                    <div>
                      <div className="text-xs text-champagne/40 tracking-widest uppercase mb-0.5">{label}</div>
                      <div className="text-champagne text-sm">{value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className={`transition-all duration-1000 delay-200 ${contactSection.inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <input type="text" placeholder="Ваше имя"
                    className="w-full bg-transparent border border-champagne/20 focus:border-gold/60 outline-none px-5 py-4 text-champagne placeholder:text-champagne/30 text-sm transition-colors duration-300" />
                </div>
                <div>
                  <input type="tel" placeholder="Телефон"
                    className="w-full bg-transparent border border-champagne/20 focus:border-gold/60 outline-none px-5 py-4 text-champagne placeholder:text-champagne/30 text-sm transition-colors duration-300" />
                </div>
                <div>
                  <select className="w-full bg-obsidian border border-champagne/20 focus:border-gold/60 outline-none px-5 py-4 text-champagne/60 text-sm transition-colors duration-300">
                    <option value="">Выберите услугу</option>
                    {services.map(s => <option key={s.title}>{s.title}</option>)}
                  </select>
                </div>
                <div>
                  <textarea rows={4} placeholder="Расскажите о себе и своей задаче"
                    className="w-full bg-transparent border border-champagne/20 focus:border-gold/60 outline-none px-5 py-4 text-champagne placeholder:text-champagne/30 text-sm resize-none transition-colors duration-300" />
                </div>
                <label className="flex items-start gap-3 cursor-pointer group select-none pt-2">
                  <span className="relative flex-shrink-0 mt-0.5">
                    <input
                      type="checkbox"
                      checked={agreed}
                      onChange={(e) => setAgreed(e.target.checked)}
                      className="peer sr-only"
                    />
                    <span className="block w-5 h-5 border border-champagne/30 group-hover:border-gold/60 peer-checked:border-gold peer-checked:bg-gold transition-all duration-300" />
                    {agreed && (
                      <Icon name="Check" size={12} className="absolute top-1 left-1 text-obsidian pointer-events-none" />
                    )}
                  </span>
                  <span className="text-champagne/50 text-xs leading-relaxed">
                    Я принимаю условия{" "}
                    <Link to="/privacy" className="text-gold/80 hover:text-gold underline underline-offset-2 decoration-gold/40">
                      Политики конфиденциальности
                    </Link>
                    {" "}и даю{" "}
                    <Link to="/consent" className="text-gold/80 hover:text-gold underline underline-offset-2 decoration-gold/40">
                      согласие на обработку персональных данных
                    </Link>
                    {" "}в соответствии с ФЗ-152
                  </span>
                </label>
                <button type="submit"
                  disabled={!agreed}
                  className="w-full bg-gold text-obsidian text-xs tracking-[0.3em] uppercase py-4 font-semibold hover:bg-gold-light transition-all duration-300 hover:shadow-[0_0_30px_rgba(201,168,76,0.4)] disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:shadow-none disabled:hover:bg-gold">
                  Отправить заявку
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-champagne/10 py-12">
        <div className="container max-w-6xl mx-auto px-8 space-y-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <span className="font-cormorant text-2xl tracking-[0.2em] text-gold font-light">SV STYLIST</span>
            <div className="flex flex-wrap gap-x-8 gap-y-3 justify-center text-xs tracking-[0.2em] uppercase">
              <Link to="/privacy" className="text-champagne/50 hover:text-gold transition-colors">Политика конфиденциальности</Link>
              <Link to="/consent" className="text-champagne/50 hover:text-gold transition-colors">Согласие на обработку ПДн</Link>
              <Link to="/terms" className="text-champagne/50 hover:text-gold transition-colors">Пользовательское соглашение</Link>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6 border-t border-champagne/10">
            <p className="text-champagne/30 text-xs tracking-widest">© 2024 Светлана Власова · Персональный стилист</p>
            <div className="flex gap-6">
              {[["Instagram","@sv_stylist"],["MessageCircle","Telegram"]].map(([_, label]) => (
                <button key={label} className="text-champagne/30 hover:text-gold transition-colors duration-300 text-xs tracking-widest">
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}