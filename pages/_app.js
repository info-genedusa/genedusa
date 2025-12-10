import { HeroUIProvider } from "@heroui/react";
import { ThemeProvider } from "next-themes";
import "~/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <HeroUIProvider>
      <ThemeProvider defaultTheme="system" attribute="class">
        <Component
          className="dark text-foreground bg-background"
          {...pageProps}
        />
      </ThemeProvider>
    </HeroUIProvider>
  );
}
