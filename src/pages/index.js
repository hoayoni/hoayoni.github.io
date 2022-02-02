import React from "react";
import {
  AboutSection,
  ArticlesSection,
  ContactSection,
  HeroSection,
  InterestsSection,
  Page,
  ProjectsSection,
  Seo,
} from "gatsby-theme-portfolio-minimal";

export default function IndexPage() {
  return (
    <>
      <Seo title="Michelle Hwayeon Lee" />
      <Page useSplashScreenAnimation>
        <HeroSection sectionId="hero" />
        <ArticlesSection sectionId="articles" heading="Latest Articles" sources={['Medium']} />
        <AboutSection sectionId="about" heading="About Michelle" />
        <InterestsSection sectionId="details" heading="Skills" />
        <ProjectsSection sectionId="product_manager" heading="Product Manager" />
        <ContactSection sectionId="keen" heading="So, what's next?" />
      </Page>
    </>
  );
}
