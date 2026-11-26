"use client";

import { useEffect, useState } from "react";
import { listProviders, setProviderConsent, type Provider } from "@/lib/api";
import { useI18n } from "@/lib/i18n";

/** Asks once whether to use the free Kilo models (no account). What is typed to them goes to a third party, so it is a question, not a default. */
export function KiloConsent({ onAnswered }: { onAnswered: () => void }) {
  const { t } = useI18n();
  const [kilo, setKilo] = useState<Provider | null>(null);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    listProviders()
      .then((r) => setKilo(r.providers.find((p) => p.id === "kilo" && p.keyless && !p.consent) ?? null))
      .catch(() => setKilo(null));
  }, []);

  if (!kilo) return null;

  async function answer(value: "yes" | "no") {
    setBusy(true);
    try {
      await setProviderConsent("kilo", value);
      setKilo(null);
      onAnswered();
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="mb-3 rounded-xl border border-line bg-card p-3 text-sm">
      <div className="font-medium">{t("Use free models from Kilo?")}</div>
      <p className="mt-1 text-soft">
        {t("Kilo Gateway gives free models with no account. What you type is sent to Kilo and to the model's maker. Use it for everyday questions, not for unpublished research or patient data. You can change this later in Settings, Models.")}
      </p>
      <div className="mt-2 flex gap-2">
        <button type="button" disabled={busy} onClick={() => answer("yes")} className="rounded-lg bg-accent px-3 py-1.5 text-white disabled:opacity-60">
          {t("Use Kilo free models")}
        </button>
        <button type="button" disabled={busy} onClick={() => answer("no")} className="rounded-lg border border-line px-3 py-1.5 disabled:opacity-60">
          {t("Not now")}
        </button>
      </div>
    </div>
  );
}
