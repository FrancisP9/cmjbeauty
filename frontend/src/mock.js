export const siteData = {
  brand: {
    name: "CMJ Health Care & Beauty",
    city: "Bruxelles",
    address: "Rue du Pont Neuf 30, 1000 Bruxelles",
  },
  booking: { fresha: "https://share.google/RSO9x44LBUl4MIxGb" },
  contact: {
    phone_display: "0473 31 18 15",
    phone_tel: "+32473311815",
    email: "ginfinie@cmjhb.be",
    hours_short: "Jeu–Sam 11:00–18:30",
    hours_detail: [
      { day: "Jeudi", hours: "11:00–18:30" },
      { day: "Vendredi", hours: "11:00–18:30" },
      { day: "Samedi", hours: "11:00–18:30" },
    ],
    maps_q: "Rue du Pont Neuf 30, 1000 Bruxelles",
  },
  hero: {
    title: "Votre beauté, notre expertise — au cœur de Bruxelles",
    subtitle: "Soin personnalisé, techniques avancées, expérience sereine.",
    collageMain:
      "https://customer-assets.emergentagent.com/job_brussels-beauty-cmj/artifacts/ei6l1c6s_gallery-2.jpg",
    collageFloat:
      "https://customer-assets.emergentagent.com/job_brussels-beauty-cmj/artifacts/wd31zz00_IMG_0094.jpg",
  },
  about: {
    title: "À propos",
    lead: "Institut indépendant au centre de Bruxelles, CMJ propose des soins esthétiques personnalisés dans une atmosphère sereine, avec des techniques avancées (laser & électrolyse) et une hygiène irréprochable.",
    bullets: [
      "Approche sur‑mesure et conseils honnêtes",
      "Technologies éprouvées & protocoles ciblés",
      "Hygiène stricte et confort de soin",
      "Réservation simple en ligne",
    ],
    image: "/images/IMG_0109.gif",
    imageFloat: "/images/IMG_0106.GIF",
  },
  gallery: [
    "/images/gallery-1.jpg",
    "/images/gallery-2.jpg",
    "/images/gallery-3.jpg",
    "/images/gallery-4.jpg",
    "/images/IMG_0094.jpg",
    "/images/IMG_0111.jpg",
  ],
  servicesCards: [
    {
      id: "laser-femmes",
      title: "Épilation Laser Diode — Femme",
      desc: "Zones au choix (visage, aisselles, maillot, jambes…). Tarifs à la séance.",
      duration: "20–30 min",
      price: "à partir de 18 €",
      image:
        "https://images.unsplash.com/photo-1700760933941-3a06a28fbf47?crop=entropy&cs=srgb&fm=jpg&q=85",
      benefits: ["Rapide", "Efficace", "Zones ciblées"],
    },
    {
      id: "laser-hommes",
      title: "Épilation Laser Diode — Homme",
      desc: "Zones au choix (barbe/cou, torse, dos, épaules, bras, jambes…).",
      duration: "25–40 min",
      price: "à partir de 27 €",
      image: "/images/photo-1700760934166-4c766d708139.jpg",
      benefits: ["Confort", "Zones larges", "Résultats progressifs"],
    },
    {
      id: "soin-visage-led",
      title: "Soin visage spécifique + LED",
      desc: "Protocole ciblé (éclat, imperfections, anti‑âge) complété par photothérapie LED.",
      duration: "1 h 20",
      price: "à partir de 103,50 €",
      image:
        "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=1600&q=80",
      benefits: ["Éclat", "Régénération", "Confort"],
    },
    {
      id: "massage-corps-crane",
      title: "Massage du corps et crâne",
      desc: "Détente profonde du corps et relâchement des tensions craniennes.",
      duration: "1 h 30",
      price: "à partir de 117 €",
      image:
        "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1600&q=80",
      benefits: ["Détente", "Relâchement", "Bien‑être"],
    },
    {
      id: "cire-maillot",
      title: "Épilation à la cire — Maillot brésilien",
      desc: "Épilation à la cire avec précision et hygiène, selon votre préférence.",
      duration: "25 min",
      price: "à partir de 25 €",
      image:
        "https://images.unsplash.com/photo-1507013671507-44b39fdb9760?auto=format&fit=crop&w=1600&q=80",
      benefits: ["Net", "Hygiène", "Rapide"],
    },
  ],
  treatwellServices: [
    {
      id: "laser-femmes",
      title:
        "Épilation Laser Diode Femmes (prix/séance): 6 séances + 2 offertes",
      items: [
        { name: "Orteils", price: "à partir de 18 €" },
        { name: "Intersourcil", price: "à partir de 27 €" },
        { name: "Mains", price: "à partir de 27 €" },
        { name: "Mamelons", price: "à partir de 27 €" },
        { name: "Pieds", price: "à partir de 27 €" },
        { name: "Interfessier", price: "à partir de 31,50 €" },
        { name: "Lèvre supérieure", price: "à partir de 36 €" },
        { name: "Menton", price: "à partir de 36 €" },
        { name: "Cou", price: "à partir de 45 €" },
        { name: "Favoris", price: "à partir de 45 €" },
        { name: "Nuque", price: "à partir de 45 €" },
        { name: "Aiselles", price: "à partir de 63 €" },
        { name: "Bikini simple", price: "à partir de 63 €" },
        { name: "Joues", price: "à partir de 63 €" },
        { name: "Avant-Bras", price: "à partir de 72 €" },
        { name: "Abdomen", price: "à partir de 81 €" },
        { name: "Bikini Brésilien", price: "à partir de 90 €" },
        { name: "Fesses", price: "à partir de 90 €" },
        {
          name: "Visage complet/barbe (hors cou)",
          price: "à partir de 94,50 €",
        },
        { name: "Bras", price: "à partir de 108 €" },
        { name: "Fesses + interfessier", price: "à partir de 108 €" },
        { name: "Bras entiers et mains", price: "à partir de 112,50 €" },
        { name: "1/2 jambes", price: "à partir de 126 €" },
        { name: "Bikini Total", price: "à partir de 135 €" },
        { name: "Cuisses", price: "à partir de 135 €" },
        { name: "Jambes entières", price: "à partir de 252 €" },
        { name: "Jambes entières + Pieds", price: "à partir de 270 €" },
        { name: "Corps entiers", price: "à partir de 720 €" },
      ],
    },
    {
      id: "laser-hommes",
      title: "Épilation Laser Diode Homme (prix/séance) 8 séances + 2 offertes",
      items: [
        { name: "Orteils", price: "à partir de 27 €" },
        { name: "Pieds", price: "à partir de 36 €" },
        { name: "Interfessier", price: "à partir de 40,50 €" },
        { name: "Nuque", price: "à partir de 54 €" },
        { name: "Bikini simple", price: "à partir de 63 €" },
        { name: "Aiselles", price: "à partir de 81 €" },
        { name: "1/2 bras", price: "à partir de 90 €" },
        { name: "Épaules", price: "à partir de 90 €" },
        { name: "Barbe (cou)", price: "à partir de 94,50 €" },
        { name: "Fesses", price: "à partir de 94,50 €" },
        { name: "Abdomen", price: "à partir de 108 €" },
        { name: "Barbe + cou", price: "à partir de 108 €" },
        { name: "Bas du dos", price: "à partir de 108 €" },
        { name: "Haut du dos", price: "à partir de 108 €" },
        { name: "Pectoraux", price: "à partir de 108 €" },
        { name: "Bras entier", price: "à partir de 117 €" },
        { name: "Bras entier + mains", price: "à partir de 135 €" },
        { name: "Fesses + Interfessier", price: "à partir de 135 €" },
        { name: "1/2 Jambes", price: "à partir de 144 €" },
        { name: "Cuisses", price: "à partir de 162 €" },
        { name: "Abdomen + Pectoraux", price: "à partir de 180 €" },
        { name: "Dos entier", price: "à partir de 180 €" },
        { name: "Dos entier + épaules", price: "à partir de 243 €" },
        { name: "Jambes entières", price: "à partir de 306 €" },
        {
          name: "Jambes entières + pieds + orteils",
          price: "à partir de 324 €",
        },
        { name: "Mains", price: "à partir de 360 €" },
        { name: "Corps entier", price: "à partir de 900 €" },
      ],
    },
    {
      id: "soin-visage-spec-led",
      title: "Soin de visage spécifique + Thérapie Led",
      items: [{ name: "Session", price: "à partir de 103,50 €" }],
    },
    {
      id: "massage-corps-crane",
      title: "Massage du corps et crâne",
      items: [{ name: "1 h 30 min", price: "à partir de 117 €" }],
    },
    {
      id: "epilation-cire-femme-maillot-bresilien",
      title: "Femme - Épilation à la cire : Maillot brésilien",
      items: [
        { name: "Maillot Brésilien", price: "25 €" },
        { name: "Maillot Brésilien + SIF", price: "30 €" },
        { name: "Maillot Brésilien + SIF + Fesses", price: "35 €" },
      ],
    },
  ],
  services6: [
    {
      id: "electrolyse",
      title: "Électrolyse",
      thumb:
        "https://customer-assets.emergentagent.com/job_brussels-beauty-cmj/artifacts/l5geduws_gallery-4.jpg",
      items: [
        "Poils résiduels/blonds/roux",
        "Petites zones (lèvre, menton, sourcils)",
        "Finition post‑laser",
      ],
    },
    {
      id: "laser",
      title: "Épilation laser",
      thumb:
        "https://customer-assets.emergentagent.com/job_brussels-beauty-cmj/artifacts/ei6l1c6s_gallery-2.jpg",
      items: [
        "Visage (joues, lèvre, menton)",
        "Aisselles, maillot (classique/échancré/intégral)",
        "Jambes (demi/entières)",
        "Hommes (dos, torse, épaules)",
      ],
    },
    {
      id: "soin-visage",
      title: "Soin du visage",
      thumb:
        "https://customer-assets.emergentagent.com/job_brussels-beauty-cmj/artifacts/wd31zz00_IMG_0094.jpg",
      items: [
        "Nettoyage profond / anti‑imperfections",
        "Hydratant / peau sensible",
        "Éclat / anti‑taches",
        "Microdermabrasion / peeling doux",
        "Microneedling",
        "Visage complet / zones ciblées",
        "Cou & décolleté",
        "Protocoles en cure (3–6)",
      ],
    },
    {
      id: "anti-age",
      title: "Soin anti‑âge",
      thumb:
        "https://customer-assets.emergentagent.com/job_brussels-beauty-cmj/artifacts/l5geduws_gallery-4.jpg",
      items: [
        "Fermeté / lissage rides",
        "Glow & revitalisation",
        "Contour des yeux",
        "Cou & décolleté",
      ],
    },
    {
      id: "massage",
      title: "Massage relaxant",
      thumb:
        "https://customer-assets.emergentagent.com/job_brussels-beauty-cmj/artifacts/ei6l1c6s_gallery-2.jpg",
      items: [
        "Relaxant global / dos‑nuque‑épaules",
        "Deep tissue",
        "Drainage lymphatique",
        "(Option) Pré‑natal selon disponibilité",
      ],
    },
    {
      id: "mains-pieds",
      title: "Mains & Pieds",
      thumb:
        "https://customer-assets.emergentagent.com/job_brussels-beauty-cmj/artifacts/wd31zz00_IMG_0094.jpg",
      items: [
        "Manucure classique",
        "Pédicure esthétique",
        "Vernis semi‑permanent",
        "Beauté des pieds",
      ],
    },
  ],
  testimonials: [
    {
      name: "Client Treatwell",
      rating: 5,
      quote:
        "Service impeccable, équipe très douce et professionnelle. Je recommande !",
    },
    {
      name: "Cliente",
      rating: 5,
      quote:
        "Résultats visibles rapidement, accompagnement sérieux et rassurant.",
    },
    {
      name: "Visiteur",
      rating: 4,
      quote: "Accueil chaleureux et soins de qualité. Très bonne expérience.",
    },
  ],
  faqs: [
    {
      q: "Laser vs Électrolyse — quelle différence ?",
      a: "Le laser traite rapidement de larges zones en ciblant la mélanine du poil ; l’électrolyse détruit le bulbe poil par poil, idéale pour les poils clairs ou résiduels.",
    },
    {
      q: "Phototypes et contre‑indications ?",
      a: "Les technologies actuelles s’adaptent à la plupart des phototypes. Certaines affections cutanées, grossesse ou prise de médicaments photo‑sensibilisants nécessitent un avis préalable.",
    },
    {
      q: "Délais entre séances ?",
      a: "Selon la zone et la méthode : toutes les 4–6 semaines pour le laser en moyenne ; l’électrolyse se planifie selon la repousse ciblée.",
    },
  ],
};
