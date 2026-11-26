"use client";

import { useEffect, useState } from "react";

type ShareButtonsProps = {
  shareLabel: string;
  copiedLabel: string;
  emailLabel: string;
  emailSubject: string;
  emailBodyIntro: string;
  subscribeText: string;
};

const pillClass =
  "inline-flex items-center gap-2 rounded-full border border-ssj-gold-soft/70 px-4 py-2 text-sm font-semibold text-ssj-gold-soft transition-colors hover:bg-ssj-gold-soft/10 hover:text-ssj-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ssj-gold-soft";

function ShareIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4" aria-hidden="true">
      <circle cx="15" cy="5" r="2.1" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="5" cy="10" r="2.1" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="15" cy="15" r="2.1" stroke="currentColor" strokeWidth="1.2" />
      <path
        d="M6.85 8.95 13.15 6.05M6.85 11.05l6.3 2.9"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4" aria-hidden="true">
      <rect x="2.5" y="4.5" width="15" height="11" rx="1.5" stroke="currentColor" strokeWidth="1.2" />
      <path
        d="M3.5 5.5 10 11l6.5-5.5"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ShareButtons({
  shareLabel,
  copiedLabel,
  emailLabel,
  emailSubject,
  emailBodyIntro,
  subscribeText,
}: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);
  const [mailtoHref, setMailtoHref] = useState<string>("#");

  useEffect(() => {
    // Se calcula en el cliente porque necesita la URL real de esta página.
    // Un <a href="mailto:..."> nativo es más confiable que disparar la
    // navegación desde JS (window.location.href), que en algunos
    // navegadores/perfiles sin cliente de mail configurado no hace nada
    // visible y confunde con el botón de "Compartir".
    const url = window.location.href;
    const body = `${emailBodyIntro}\n\n${url}\n\n${subscribeText}`;
    setMailtoHref(
      `mailto:?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(body)}`
    );
  }, [emailSubject, emailBodyIntro, subscribeText]);

  async function handleShare() {
    const url = window.location.href;
    const title = document.title;
    // Mismo mensaje que usamos en el mail de invitación, más el link
    // para suscribirse a futuras crónicas, para que el texto que se
    // comparte (por WhatsApp o al copiarlo) no sea solo el link pelado.
    const text = `${emailBodyIntro}\n\n${subscribeText}`;

    if (typeof navigator !== "undefined" && "share" in navigator) {
      try {
        await navigator.share({ title, text, url });
        return;
      } catch {
        // El usuario canceló el share nativo o falló: seguimos con copiar al portapapeles.
      }
    }

    try {
      await navigator.clipboard.writeText(`${text}\n\n${url}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Sin acceso al portapapeles: no hacemos nada más.
    }
  }

  return (
    <div className="flex flex-col items-center gap-2 sm:items-end">
      <div className="flex flex-wrap items-center justify-center gap-3 sm:justify-end">
        <button type="button" onClick={handleShare} className={pillClass}>
          <ShareIcon />
          {shareLabel}
        </button>
        <a href={mailtoHref} className={pillClass}>
          <MailIcon />
          {emailLabel}
        </a>
      </div>
      <span
        className={`text-xs font-medium text-ssj-gold-soft transition-opacity ${
          copied ? "opacity-100" : "opacity-0"
        }`}
        role="status"
      >
        {copiedLabel}
      </span>
    </div>
  );
}
