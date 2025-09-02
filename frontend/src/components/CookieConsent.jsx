import React from "react";

const CONSENT_KEY = "cmj_consent";

function readConsent() {
  try {
    return JSON.parse(localStorage.getItem(CONSENT_KEY) || "null");
  } catch (_) {
    return null;
  }
}

function saveConsent(consent) {
  localStorage.setItem(
    CONSENT_KEY,
    JSON.stringify({
      necessary: true,
      analytics: !!consent.analytics,
      ts: Date.now(),
    })
  );
}

export default function CookieConsent() {
  const [open, setOpen] = React.useState(false);
  const [analytics, setAnalytics] = React.useState(false);

  React.useEffect(() => {
    // Afficher le bandeau à chaque visite/rafraîchissement
    setOpen(true);
  }, []);

  const acceptAll = () => {
    saveConsent({ analytics: true });
    try {
      window.__initPosthog && window.__initPosthog();
    } catch (_) {}
    setOpen(false);
  };

  const refuseAll = () => {
    saveConsent({ analytics: false });
    setOpen(false);
  };

  const saveCustom = () => {
    saveConsent({ analytics });
    try {
      if (analytics) {
        window.__initPosthog && window.__initPosthog();
      }
    } catch (_) {}
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-4">
      <style>{`@keyframes cmj-slide-up{0%{opacity:0;transform:translateY(12px)}100%{opacity:1;transform:translateY(0)}}`}</style>
      <div
        className="absolute inset-0 bg-black/30 backdrop-blur-[2px]"
        onClick={refuseAll}
      />
      <div
        className="relative w-full max-w-3xl rounded-xl border shadow-2xl bg-white/95 backdrop-blur-md p-5 sm:p-6"
        style={{
          borderColor: "var(--accent-gold)",
          animation: "cmj-slide-up .28s ease-out both",
        }}
      >
        <div className="sm:flex sm:items-start sm:gap-6">
          <div className="sm:flex-1 space-y-2">
            <h3
              className="text-lg font-semibold"
              style={{ fontFamily: "Playfair Display" }}
            >
              Nous respectons votre vie privée
            </h3>
            <p className="text-sm text-[color:var(--text-secondary)]">
              Nous utilisons des cookies <strong>nécessaires</strong> au bon
              fonctionnement du site et, avec votre accord, des cookies{" "}
              <strong>d’analyse</strong> (PostHog) pour mesurer l’audience.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
              <div className="rounded-md border p-3 bg-white/70">
                <div className="text-sm font-medium mb-1">Nécessaires</div>
                <div className="text-xs text-[color:var(--text-secondary)]">
                  Toujours actifs
                </div>
              </div>
              <div className="rounded-md border p-3 bg-white/70 flex items-center justify-between">
                <div>
                  <div className="text-sm font-medium">Analytics</div>
                  <div className="text-xs text-[color:var(--text-secondary)]">
                    Mesure d’audience
                  </div>
                </div>
                <label className="inline-flex items-center cursor-pointer select-none">
                  <input
                    type="checkbox"
                    className="hidden"
                    checked={analytics}
                    onChange={(e) => setAnalytics(e.target.checked)}
                  />
                  <span
                    className={`w-10 h-5 rounded-full transition-colors ${
                      analytics
                        ? "bg-[color:var(--accent-gold)]"
                        : "bg-gray-300"
                    }`}
                  >
                    <span
                      className={`block w-5 h-5 bg-white rounded-full shadow transform transition-transform ${
                        analytics ? "translate-x-5" : "translate-x-0"
                      }`}
                    ></span>
                  </span>
                </label>
              </div>
            </div>
            <a
              href="#privacy"
              className="text-xs underline text-[color:var(--text-secondary)]"
            >
              Politique de confidentialité
            </a>
          </div>
          <div className="sm:w-56 mt-4 sm:mt-0 flex flex-col gap-2">
            <button
              onClick={acceptAll}
              className="btn-rect btn-rect--gold rounded-none w-full py-2"
            >
              Tout accepter
            </button>
            <button
              onClick={saveCustom}
              className="btn-rect rounded-none border w-full py-2"
            >
              Enregistrer
            </button>
            <button
              onClick={refuseAll}
              className="btn-rect rounded-none border w-full py-2"
            >
              Tout refuser
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
