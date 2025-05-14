import { SiteLayout } from "@/components/templates/SiteLayout";
import { PAGE_TITLE_HOME, META_DESCRIPTION } from "@/utils/metadata";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: { default: PAGE_TITLE_HOME + " | civic", template: "%s | civic" },
  description: META_DESCRIPTION,
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <SiteLayout>{children}</SiteLayout>;
}
