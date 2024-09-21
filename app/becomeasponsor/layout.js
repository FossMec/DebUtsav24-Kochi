import "../globals.css";
import 'aos/dist/aos.css';
import AOSInit from "@/utils/AOSInit";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AOSInit />
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
