import { notFound } from "next/navigation";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { Services } from "@/components/sections/Services";
import { Why } from "@/components/sections/Why";
import { Materials } from "@/components/sections/Materials";
import { Process } from "@/components/sections/Process";
import { Capabilities } from "@/components/sections/Capabilities";
import { CallToAction } from "@/components/sections/CallToAction";
import { StructuredData } from "@/components/seo/StructuredData";
import { getDictionary, isLocale } from "@/lib/i18n";

export default async function LandingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const dict = getDictionary(locale);

  return (
    <>
      <StructuredData locale={locale} dict={dict} />
      <Hero dict={dict} />
      <TrustBar dict={dict} locale={locale} />
      <Services dict={dict} />
      <Why dict={dict} />
      <Materials dict={dict} />
      <Process dict={dict} />
      <Capabilities dict={dict} />
      <CallToAction dict={dict} />
    </>
  );
}
