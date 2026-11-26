import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/promo/Header";
import { Hero } from "@/components/promo/Hero";
import { HowItWorks } from "@/components/promo/HowItWorks";
import { ShowsGrid } from "@/components/promo/ShowsGrid";
import { Faq } from "@/components/promo/Faq";
import { Footer } from "@/components/promo/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Чёрная пятница в Театре Пушкина — скидки до 50% по промокодам ПУШКА30, ПУШКА40 и ПУШКА50" },
      {
        name: "description",
        content:
          "Чёрная пятница в Театре имени Пушкина: скидка 30% на спектакли ноября–декабря по промокоду ПУШКА30 40% на спектакли января по промокоду ПУШКА40 и 50% на спектакли февраля по промокоду ПУШКА50.",
      },
      { property: "og:title", content: "Чёрная пятница в Театре Пушкина — до −50%" },
      {
        property: "og:description",
        content: "ПУШКА30 — −30% на ноябрь и декабрь, ПУШКА40 — −40% на январь, ПУШКА50 — −50% на февраль в Театре имени Пушкина.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PromoLanding,
});

function PromoLanding() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <ShowsGrid />
        <HowItWorks />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}
