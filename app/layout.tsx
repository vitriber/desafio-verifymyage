import "./globals.css";

export const metadata = {
  title: "Verify My Age",
  description: "SignUp",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body>
       {children}
      </body>
    </html>
  );
}
