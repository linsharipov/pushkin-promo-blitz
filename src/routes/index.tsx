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
      { title: "Чёрная пятница в Театре Пушкина — скидка 30% по промокоду ПУШКА30" },
      {
        name: "description",
        content:
          "Чёрная пятница в Театре имени Пушкина: скидка 30% на избранные спектакли ноября и декабря 2026 по промокоду ПУШКА30.",
      },
      { property: "og:title", content: "Чёрная пятница в Театре Пушкина — −30%" },
      {
        property: "og:description",
        content: "Промокод ПУШКА30: скидка 30% на спектакли ноября и декабря в Театре имени Пушкина.",
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
