import React from "react";
import { siteData } from "../mock";
import { Button } from "../components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "../components/ui/card";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../components/ui/accordion";
// (carousel UI non utilisé pour la galerie en mode marquee)
import { toast } from "sonner";
import { ContactForm } from "../components/ContactForm";
import { trackBookingClick } from "../api/client";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogHeader,
  DialogTitle,
} from "../components/ui/dialog";
//

const Header = () => (
  <header className="header-glass">
    <div className="container-aesop flex items-center justify-between py-4">
      <a
        href="#top"
        className="text-xl font-normal brand-mark"
        style={{ fontFamily: "Playfair Display" }}
      >
        <span className="cmj">CMJ</span>
        <span className="hcab">Health Care &amp; Beauty</span>
      </a>
      <nav className="hidden md:flex items-center gap-8">
        <a className="navigation-link" href="#apropos">
          À propos
        </a>
        <a className="navigation-link" href="#prestations">
          Prestations
        </a>
        <a className="navigation-link" href="#reserver">
          Réserver &amp; Contact
        </a>
        <a className="navigation-link" href="#faq">
          FAQ
        </a>
      </nav>
      <Button
        onClick={() => {
          trackBookingClick({
            source: "header",
            href: siteData.booking.fresha,
          });
          window.open(siteData.booking.fresha, "_blank");
        }}
        className="rounded-none btn-rect btn-rect--gold hidden sm:inline-flex"
      >
        Réserver
      </Button>
    </div>
  </header>
);

const Hero = () => {
  const { hero, brand, contact } = siteData;
  return (
    <section id="top" className="section relative overflow-hidden">
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url(/images/hero-bg.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>
      <div className="container-aesop grid-two hero-collage">
        <div className="space-y-6 bg-black/35 backdrop-blur-sm rounded-md p-4 md:p-6">
          <span
            className="gold-pill text-white uppercase"
            style={{ color: "#ffffff" }}
          >
            BRUXELLES CENTRE
          </span>
          <h1
            id="hero-title"
            className="text-4xl md:text-5xl leading-tight text-white force-white"
            style={{
              fontFamily: "Playfair Display",
              textShadow: "0 2px 8px rgba(0,0,0,.6)",
              color: "#ffffff",
            }}
          >
            {hero.title}
          </h1>
          <p
            className="text-lg md:text-xl text-[color:var(--accent-gold)]"
            style={{ textShadow: "0 1px 4px rgba(0,0,0,.6)" }}
          >
            {hero.subtitle}
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Button
              onClick={() => {
                trackBookingClick({
                  source: "hero",
                  href: siteData.booking.fresha,
                });
                window.open(siteData.booking.fresha, "_blank");
              }}
              className="rounded-none btn-rect border border-white text-white bg-transparent hover:bg-white hover:text-black"
              style={{ color: "#ffffff", borderColor: "#ffffff" }}
            >
              Réserver maintenant
            </Button>
            <a
              href="#prestations"
              className="btn-ghost text-white"
              style={{ color: "#ffffff" }}
            >
              Voir les prestations
            </a>
          </div>
          <p
            className="meta pt-2 text-white"
            style={{ textShadow: "0 1px 3px rgba(0,0,0,.6)" }}
          >
            {brand.name} — {brand.city} |{" "}
            {"Soins esthétiques personnalisés, ambiance sereine."} |{" "}
            {brand.address} | {contact.hours_short}
          </p>
        </div>
        <div className="relative">
          <div className="photo-card" style={{ height: "420px" }}>
            <img
              src={hero.collageMain}
              alt="Vue intérieure CMJ"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="photo-card photo-float" style={{ height: "220px" }}>
            <img
              src={hero.collageFloat}
              alt="Façade CMJ"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const GalleryStrip = () => {
  const [isHovered, setIsHovered] = React.useState(false);
  const items = React.useMemo(
    () => [...siteData.gallery, ...siteData.gallery],
    []
  );
  const durationSec = 10; // plus petit = plus rapide

  return (
    <section
      className="gallery-strip"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <style>{`@keyframes cmj-marquee{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}`}</style>
      <div className="container-aesop overflow-hidden">
        <div
          className="flex w-[200%]"
          style={{
            animation: `cmj-marquee ${durationSec}s linear infinite`,
            animationPlayState: isHovered ? "paused" : "running",
          }}
        >
          {items.map((src, idx) => (
            <div key={idx} className="px-2 shrink-0">
              <div className="gallery-img h-[200px] md:h-[260px] w-[260px] md:w-[360px]">
                <img
                  src={src}
                  alt={`Galerie ${idx + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AboutSection = () => {
  const { about } = siteData;
  return (
    <section id="apropos" className="section">
      <div className="container-aesop grid-two">
        <div className="space-y-6">
          <h2 className="text-3xl" style={{ fontFamily: "Playfair Display" }}>
            <span className="cmj">{about.title}</span>
          </h2>
          <p className="text-[color:var(--text-secondary)] text-lg">
            {about.lead}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {about.bullets.map((b, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="mt-1 text-[color:var(--accent-gold)]">•</span>
                <p className="text-sm text-[color:var(--text-secondary)]">
                  {b}
                </p>
              </div>
            ))}
          </div>
          <div className="pt-2 flex gap-4">
            <Button
              onClick={() => {
                trackBookingClick({
                  source: "about",
                  href: siteData.booking.fresha,
                });
                window.open(siteData.booking.fresha, "_blank");
              }}
              className="rounded-none btn-rect btn-rect--gold"
            >
              Réserver
            </Button>
            <a href="#prestations" className="btn-ghost">
              Voir les prestations
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="photo-card" style={{ height: "420px" }}>
            <img src={about.image} alt="À propos de CMJ — animé" />
          </div>
          {about.imageFloat && (
            <div className="photo-card photo-float" style={{ height: "220px" }}>
              <img src={about.imageFloat} alt="À propos — détail" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

// Respect DA: or + neutres (suppression du vert)
const accentGold = "#c9a56a";
const ServiceCard = ({ s, onBook }) => {
  const [flipped, setFlipped] = React.useState(false);
  const tariffs = React.useMemo(() => {
    const tokens = (s.id || "").split("-").filter(Boolean);
    const matched =
      siteData.treatwellServices?.filter((g) =>
        tokens.some((t) => g.id?.includes(t))
      ) || [];
    return matched.flatMap((g) => g.items || []);
  }, [s.id]);

  const fallbackById = React.useMemo(
    () => ({
      "laser-femmes": "/images/IMG_0097.jpg",
      "laser-hommes": "/images/photo-1700760934166-4c766d708139.jpg",
      "soin-visage-led": "/images/IMG_0109.jpg",
      "massage-corps-crane": "/images/IMG_0103.jpg",
      "cire-maillot": "/images/IMG_0111.jpg",
    }),
    []
  );

  const handleImgError = React.useCallback(
    (e) => {
      const img = e.currentTarget;
      if (img.dataset.fallbackApplied) {
        img.style.display = "none";
        return;
      }
      img.dataset.fallbackApplied = "1";
      img.src = fallbackById[s.id] || "/images/about.jpg";
    },
    [fallbackById, s.id]
  );

  return (
    <Card
      className="overflow-hidden group cursor-pointer"
      onClick={() => setFlipped((v) => !v)}
    >
      <div
        className="relative"
        style={{ perspective: "1000px", height: "100%" }}
      >
        <div
          className="transition-transform duration-500 [transform-style:preserve-3d]"
          style={{ transform: flipped ? "rotateY(180deg)" : "rotateY(0)" }}
        >
          {/* Face avant */}
          <div className="[backface-visibility:hidden]">
            <div className="aspect-[16/9] relative bg-[color:var(--bg-secondary)]">
              <img
                src={s.image}
                alt={s.title}
                className="h-full w-full object-cover"
                onError={handleImgError}
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-3 left-3 text-white/95 backdrop-blur-xl bg-[rgba(0,0,0,0.35)] px-3 py-2 rounded-lg border border-white/25">
                <div className="font-semibold">{s.title}</div>
                <div className="text-xs opacity-90">
                  {s.duration} • {s.price}
                </div>
              </div>
            </div>
            <CardContent className="pt-4 space-y-3">
              <p className="text-sm text-[color:var(--text-secondary)]">
                {s.desc}
              </p>
              <div className="flex flex-wrap gap-2">
                {s.benefits?.map((b) => (
                  <span
                    key={b}
                    className="text-xs rounded-full px-2 py-1 border bg-[rgba(201,165,106,0.08)] border-[color:var(--accent-gold)]/40 text-[color:var(--interactive-base)]"
                  >
                    {b}
                  </span>
                ))}
              </div>
              <a
                href={siteData.booking.fresha}
                onClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                  try {
                    trackBookingClick({
                      source: "services",
                      href: siteData.booking.fresha,
                    });
                  } catch (_) {}
                  window.location.href = siteData.booking.fresha;
                }}
                onMouseDown={(e) => e.stopPropagation()}
                onTouchStart={(e) => e.stopPropagation()}
                onClickCapture={(e) => e.stopPropagation()}
                className="mt-2 rounded-none btn-rect btn-rect--gold inline-flex items-center justify-center"
                style={{
                  backgroundColor: "var(--accent-gold)",
                  color: "var(--bg-primary)",
                  borderColor: "var(--accent-gold)",
                }}
              >
                Voir les tarifs
              </a>
            </CardContent>
          </div>

          {/* Face arrière (tarifs) */}
          <div
            className="absolute inset-0 [backface-visibility:hidden] border border-[color:var(--accent-gold)]/30 rounded-md overflow-hidden"
            style={{
              transform: "rotateY(180deg)",
              background:
                "linear-gradient(135deg, rgba(201,165,106,0.08), rgba(0,0,0,0.04))",
            }}
          >
            <div className="p-4 space-y-3 h-full flex flex-col min-h-0">
              <div
                className="font-semibold"
                style={{ fontFamily: "Playfair Display" }}
              >
                {s.title}
              </div>
              <div className="flex-1 min-h-0 overflow-y-auto">
                {tariffs.length > 0 ? (
                  <ul className="divide-y divide-[color:var(--border-light)] border rounded-md bg-white/10 backdrop-blur-sm">
                    {tariffs.map((it, idx) => (
                      <li
                        key={idx}
                        className="flex items-center justify-between p-2 text-sm"
                      >
                        <span>{it.name}</span>
                        <span className="text-[color:var(--text-secondary)]">
                          {it.price}
                        </span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-sm text-[color:var(--text-secondary)]">
                    Tarifs indisponibles pour le moment.
                  </p>
                )}
              </div>
              <div className="mt-auto flex gap-2">
                <a
                  href={siteData.booking.fresha}
                  onClick={(e) => {
                    e.stopPropagation();
                    e.preventDefault();
                    try {
                      trackBookingClick({
                        source: "services",
                        href: siteData.booking.fresha,
                      });
                    } catch (_) {}
                    window.location.href = siteData.booking.fresha;
                  }}
                  onMouseDown={(e) => e.stopPropagation()}
                  onTouchStart={(e) => e.stopPropagation()}
                  onClickCapture={(e) => e.stopPropagation()}
                  className="rounded-none btn-rect btn-rect--gold grow inline-flex items-center justify-center"
                  style={{
                    backgroundColor: "var(--accent-gold)",
                    color: "var(--bg-primary)",
                    borderColor: "var(--accent-gold)",
                  }}
                >
                  Réserver sur Treatwell
                </a>
                <Button
                  onClick={(e) => {
                    e.stopPropagation();
                    setFlipped(false);
                  }}
                  variant="outline"
                  className="rounded-none btn-rect"
                >
                  Retour
                </Button>
              </div>
              <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-[rgba(0,0,0,0.06)] to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

const Stars = ({ value = 5 }) => (
  <div className="flex gap-0.5 text-[color:var(--accent-gold)]">
    {Array.from({ length: 5 }).map((_, i) => (
      <span key={i}>{i < value ? "★" : "☆"}</span>
    ))}
  </div>
);

const Testimonials = () => {
  const [items, setItems] = React.useState(siteData.testimonials || []);

  React.useEffect(() => {
    fetch("/treatwell-reviews.json")
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) setItems(data);
      })
      .catch(() => {});
  }, []);

  if (!items?.length) return null;
  return (
    <section
      className="py-16 bg-[color:var(--bg-secondary)]/40"
      id="temoignages"
    >
      <div className="container-aesop">
        <div className="mb-6">
          <h2
            className="text-3xl font-semibold"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Témoignages
          </h2>
          <p className="text-[color:var(--text-secondary)] mt-1">
            Avis vérifiés (Treatwell)
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((t, idx) => (
            <div
              key={idx}
              className="border rounded-md bg-white/60 backdrop-blur p-4 space-y-2"
            >
              <Stars value={Math.max(0, Math.min(5, t.rating || 5))} />
              <p className="text-sm">“{t.quote}”</p>
              <div className="text-xs text-[color:var(--text-secondary)]">
                — {t.name || "Client"}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const openTreatwell = () => {
    const href = siteData.booking.fresha;
    trackBookingClick({ source: "services", href });
    window.open(href, "_blank");
  };
  return (
    <section
      id="services"
      className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16"
    >
      <div className="max-w-2xl">
        <h2
          className="text-3xl font-semibold"
          style={{ fontFamily: "Playfair Display, serif" }}
        >
          Nos services
        </h2>
        <p className="mt-2 text-[color:var(--text-secondary)]">
          Des soins fondés sur la science, pensés pour votre confort et des
          résultats durables.
        </p>
      </div>
      <div className="mt-8 grid md:grid-cols-3 gap-6">
        {siteData.servicesCards.map((s) => (
          <ServiceCard key={s.id} s={s} onBook={openTreatwell} />
        ))}
      </div>
    </section>
  );
};

const BookingContact = () => {
  const { contact, booking } = siteData;
  const copy = async (text, label) => {
    try {
      await navigator.clipboard.writeText(text);
      toast(label + " copié");
    } catch (e) {
      toast("Impossible de copier");
    }
  };

  return (
    <section id="reserver" className="section">
      <div className="container-aesop grid-two">
        <div>
          <h2
            className="text-3xl mb-6"
            style={{ fontFamily: "Playfair Display" }}
          >
            Réservation &amp; Contact
          </h2>
          <p className="meta mb-6">
            Adresse : {contact.address || siteData.brand.address}. Horaires :{" "}
            {contact.hours_short}. Tél. {contact.phone_display} —{" "}
            {siteData.contact.email}
          </p>
          <div className="flex flex-wrap gap-4">
            <Button
              onClick={() => {
                trackBookingClick({ source: "booking", href: booking.fresha });
                window.open(booking.fresha, "_blank");
              }}
              className="rounded-none btn-rect btn-rect--gold"
            >
              Réserver (Treatwell)
            </Button>
            <Button
              onClick={() => copy(siteData.contact.phone_tel, "Numéro")}
              variant="outline"
              className="rounded-none btn-rect"
            >
              Copier tél.
            </Button>
            <Button
              onClick={() => copy(siteData.contact.email, "Email")}
              variant="outline"
              className="rounded-none btn-rect"
            >
              Copier e‑mail
            </Button>
          </div>
          <div className="mt-6">
            <ul className="text-sm text-[color:var(--text-secondary)] space-y-2">
              {siteData.contact.hours_detail.map((h, idx) => (
                <li key={idx}>
                  {h.day} — {h.hours}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <div className="w-full h-[360px] overflow-hidden rounded-md border border-[color:var(--border-light)] mb-6">
            <iframe
              title="Carte CMJ"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              src={`https://www.google.com/maps?q=${encodeURIComponent(
                siteData.contact.maps_q
              )}&output=embed`}
            ></iframe>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

const FAQ = () => (
  <section id="faq" className="section-sm bg-[color:var(--bg-secondary)]">
    <div className="container-aesop">
      <h2 className="text-3xl mb-6" style={{ fontFamily: "Playfair Display" }}>
        Questions fréquentes
      </h2>
      <Accordion type="single" collapsible className="w-full">
        {siteData.faqs.map((f, idx) => (
          <AccordionItem key={idx} value={`item-${idx}`}>
            <AccordionTrigger className="text-left">{f.q}</AccordionTrigger>
            <AccordionContent className="text-[color:var(--text-secondary)]">
              {f.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

const Footer = () => (
  <footer className="section-sm border-t border-[color:var(--border-light)]">
    <div className="container-aesop flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
      <div>
        <p className="small">
          © {new Date().getFullYear()} CMJ Health Care &amp; Beauty — Bruxelles
        </p>
        <p className="small">
          Rue du Pont Neuf 30, 1000 Bruxelles — T.{" "}
          {siteData.contact.phone_display}
        </p>
      </div>
      <Button
        onClick={() => {
          trackBookingClick({
            source: "footer",
            href: siteData.booking.fresha,
          });
          window.open(siteData.booking.fresha, "_blank");
        }}
        className="rounded-none btn-rect border border-white text-white bg-transparent hover:bg-white hover:text-black"
        style={{ color: "#ffffff", borderColor: "#ffffff" }}
      >
        Réserver maintenant
      </Button>
    </div>
  </footer>
);

export default function Landing() {
  return (
    <div>
      <Header />
      <Hero />
      <GalleryStrip />
      <AboutSection />
      <Services />
      <Testimonials />
      <BookingContact />
      <FAQ />
      <Footer />
    </div>
  );
}
