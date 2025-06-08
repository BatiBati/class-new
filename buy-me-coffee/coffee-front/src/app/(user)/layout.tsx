import { Header } from "../_components/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-screen h-screen">
      <Header />
      <div className="w-full h-full flex justify-center items-center">
        {children}
      </div>
    </div>
  );
}
