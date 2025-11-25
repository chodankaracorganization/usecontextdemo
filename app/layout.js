import GlobalProviders from "./providers";

export const metadata = {
  title: "Props Example",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <GlobalProviders>{children}</GlobalProviders>
      </body>
    </html>
  );
}
