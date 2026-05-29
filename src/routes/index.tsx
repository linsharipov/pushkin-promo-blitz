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
      { title: "Жара в Театре Пушкина — скидки до 50% в июне по промокоду ЖАРА" },
      {
        name: "description",
        content:
          "Летняя акция Театра имени Пушкина: скидки до 50% на спектакли со 2 по 18 июня по промокоду ЖАРА.",
      },
      { property: "og:title", content: "Жара в Театре Пушкина — скидки до 50%" },
      {
        property: "og:description",
        content: "Промокод ЖАРА: скидки до 50% на спектакли июня в Театре имени Пушкина.",
      },
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
