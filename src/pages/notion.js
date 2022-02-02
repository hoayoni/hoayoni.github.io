import React from "react";
import { AboutSection, Page, Seo } from "gatsby-theme-portfolio-minimal";

export default function NotionPage() {
  return (
    <>
      <Seo title="Notion articles" useTitleTemplate={true} noIndex={true} />
      <Page>
        <AboutSection sectionId="about" heading="About Michelle" />
      </Page>
    </>
  );
}
