export type Lang = "de" | "fr";

export const defaultLang: Lang = "de";

export const languageNames: Record<Lang, string> = {
  de: "DE",
  fr: "FR",
};

export const ui = {
  de: {
    "meta.title": "Friseur Kopfsache · Damen, Herren & Kinder in Walhorn",
    "meta.description":
      "Friseursalon Kopfsache in Walhorn: Damen, Herren und Kinder, nur auf Termin. Persönliche Beratung, Hausbesuche auf Vereinbarung.",

    "nav.leistungen": "Leistungen",
    "nav.ueber": "Über mich",
    "nav.kontakt": "Kontakt",
    "nav.termin": "Termin",
    "nav.menuLabel": "Menü öffnen",

    "hero.kicker": "Herzlich willkommen",
    "hero.titleLine1": "bei Kopfsache",
    "hero.titleLine2": "in Walhorn",
    "hero.text":
      "Damen, Herren und Kinder — in einem Salon, in dem man sich wirklich hinsetzen mag. Termine gibt es telefonisch oder per Nachricht.",
    "hero.ctaPrimary": "Termin anfragen",

    "badges.termin": "Nur auf Termin",
    "badges.hausbesuch": "Hausbesuche auf Vereinbarung",
    "badges.sprachen": "Deutsch · Français",
    "badges.adresse": "Lindenweg 8, Walhorn",

    "leistungen.title": "Leistungen",
    "leistungen.meta": "Preise als Richtwerte, inkl. Beratung",

    "service.damen.title": "Damen",
    "service.damen.text":
      "Schnitt, Farbe, Strähnen und Pflege — mit ehrlicher Beratung vorweg.",
    "service.damen.price": "ab 38 €",
    "service.herren.title": "Herren",
    "service.herren.text": "Klassisch oder modern, auf Wunsch mit Bart.",
    "service.herren.price": "ab 22 €",
    "service.kinder.title": "Kinder",
    "service.kinder.text": "Geduldig, schnell und ohne Drama. Auch beim ersten Mal.",
    "service.kinder.price": "ab 16 €",
    "service.anlass.title": "Anlass",
    "service.anlass.text": "Hochsteckfrisuren, Braut-Styling und Pflege-Rituale.",
    "service.anlass.price": "auf Anfrage",

    "banner.kicker": "Denkt dran",
    "banner.text": "Zeitig Termine buchen — die Woche ist schnell voll.",
    "banner.cta": "Termin anfragen",

    "ueber.kicker": "Über mich",
    "ueber.text":
      "Ich bin Friseurin aus Leidenschaft und führe Kopfsache allein — das heißt: du bekommst meine ganze Zeit. Wir reden erst, dann schneide ich. Und wer nicht in den Salon kommen kann, für den mache ich Hausbesuche nach Vereinbarung.",
    "ueber.quote": "„Schön ist, was sich auch morgen früh noch gut anfühlt.“",

    "booking.title": "Termin anfragen",
    "booking.name": "Name",
    "booking.kontakt": "Telefon oder E-Mail",
    "booking.service": "Gewünschte Leistung",
    "booking.termin": "Wunschtermin",
    "booking.nachricht": "Nachricht (optional)",
    "booking.nachrichtPlaceholder": "z. B. Wunschfarbe, Referenzbild folgt, o. Ä.",
    "booking.submit": "Anfrage senden",
    "booking.thanks": "Danke, {name}! Deine Anfrage ist vorbereitet — dein E-Mail-Programm sollte sich jetzt öffnen.",
    "booking.thanksFallbackName": "und herzlich willkommen",
    "booking.fallbackPrefix": "Hat sich nichts getan? ",
    "booking.fallbackLink": "Hier klicken",
    "booking.fallbackSuffix": ", um die E-Mail manuell zu öffnen.",
    "booking.mailSubject": "Terminanfrage",
    "booking.mailName": "Name",
    "booking.mailKontakt": "Kontakt",
    "booking.mailLeistung": "Leistung",
    "booking.mailTermin": "Wunschtermin",
    "booking.mailFlexibel": "flexibel",
    "booking.mailNachricht": "Nachricht",
    "booking.mailKeine": "–",

    "kontakt.salonTitle": "Salon",
    "kontakt.kontaktTitle": "Kontakt",
    "kontakt.oeffnungszeitenTitle": "Öffnungszeiten",
    "kontakt.zeile1": "Di – Fr 9:00 – 18:00",
    "kontakt.zeile2": "Sa 8:00 – 14:00",
    "kontakt.zeile3": "So & Mo geschlossen",
    "kontakt.note": "Nur auf Termin",

    "footer.impressum": "Impressum",
    "footer.datenschutz": "Datenschutz",
  },
  fr: {
    "meta.title": "Coiffeur Kopfsache · Femmes, Hommes & Enfants à Walhorn",
    "meta.description":
      "Salon de coiffure Kopfsache à Walhorn : femmes, hommes et enfants, uniquement sur rendez-vous. Conseil personnalisé, visites à domicile sur demande.",

    "nav.leistungen": "Services",
    "nav.ueber": "À propos",
    "nav.kontakt": "Contact",
    "nav.termin": "Rendez-vous",
    "nav.menuLabel": "Ouvrir le menu",

    "hero.kicker": "Bienvenue",
    "hero.titleLine1": "chez Kopfsache",
    "hero.titleLine2": "à Walhorn",
    "hero.text":
      "Femmes, hommes et enfants — dans un salon où l'on se sent vraiment bien assis. Rendez-vous par téléphone ou par message.",
    "hero.ctaPrimary": "Demander un rendez-vous",

    "badges.termin": "Uniquement sur rendez-vous",
    "badges.hausbesuch": "Visites à domicile sur demande",
    "badges.sprachen": "Allemand · Français",
    "badges.adresse": "Lindenweg 8, Walhorn",

    "leistungen.title": "Services",
    "leistungen.meta": "Tarifs indicatifs, conseil inclus",

    "service.damen.title": "Femmes",
    "service.damen.text":
      "Coupe, couleur, mèches et soins — avec un conseil honnête au préalable.",
    "service.damen.price": "à partir de 38 €",
    "service.herren.title": "Hommes",
    "service.herren.text": "Classique ou moderne, avec barbe sur demande.",
    "service.herren.price": "à partir de 22 €",
    "service.kinder.title": "Enfants",
    "service.kinder.text": "Patient, rapide et sans drame. Même la première fois.",
    "service.kinder.price": "à partir de 16 €",
    "service.anlass.title": "Occasions",
    "service.anlass.text": "Chignons, coiffure de mariée et rituels de soin.",
    "service.anlass.price": "sur demande",

    "banner.kicker": "Un conseil",
    "banner.text": "Réservez tôt — la semaine est vite complète.",
    "banner.cta": "Demander un rendez-vous",

    "ueber.kicker": "À propos de moi",
    "ueber.text":
      "Je suis coiffeuse par passion et je dirige Kopfsache seule — ce qui veut dire que tu as tout mon temps. On discute d'abord, puis je coupe. Et si tu ne peux pas venir au salon, je me déplace à domicile sur demande.",
    "ueber.quote": "« Est beau ce qui reste agréable, même le lendemain matin. »",

    "booking.title": "Demander un rendez-vous",
    "booking.name": "Nom",
    "booking.kontakt": "Téléphone ou e-mail",
    "booking.service": "Prestation souhaitée",
    "booking.termin": "Date souhaitée",
    "booking.nachricht": "Message (optionnel)",
    "booking.nachrichtPlaceholder": "p. ex. couleur souhaitée, photo à suivre, etc.",
    "booking.submit": "Envoyer la demande",
    "booking.thanks": "Merci, {name} ! Ta demande est prête — ton programme e-mail devrait s'ouvrir maintenant.",
    "booking.thanksFallbackName": "et bienvenue",
    "booking.fallbackPrefix": "Rien ne s'est passé ? ",
    "booking.fallbackLink": "Clique ici",
    "booking.fallbackSuffix": " pour ouvrir l'e-mail manuellement.",
    "booking.mailSubject": "Demande de rendez-vous",
    "booking.mailName": "Nom",
    "booking.mailKontakt": "Contact",
    "booking.mailLeistung": "Prestation",
    "booking.mailTermin": "Date souhaitée",
    "booking.mailFlexibel": "flexible",
    "booking.mailNachricht": "Message",
    "booking.mailKeine": "–",

    "kontakt.salonTitle": "Salon",
    "kontakt.kontaktTitle": "Contact",
    "kontakt.oeffnungszeitenTitle": "Horaires",
    "kontakt.zeile1": "Ma – Ve 9h00 – 18h00",
    "kontakt.zeile2": "Sa 8h00 – 14h00",
    "kontakt.zeile3": "Dim & lun fermé",
    "kontakt.note": "Uniquement sur rendez-vous",

    "footer.impressum": "Mentions légales",
    "footer.datenschutz": "Confidentialité",
  },
} as const satisfies Record<Lang, Record<string, string>>;

export function useTranslations(lang: Lang) {
  return function t(key: keyof (typeof ui)["de"]): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

export function altPath(lang: Lang, path: "/" | "/impressum" | "/datenschutz"): string {
  if (lang === defaultLang) return path;
  return path === "/" ? `/${lang}/` : `/${lang}${path}`;
}
