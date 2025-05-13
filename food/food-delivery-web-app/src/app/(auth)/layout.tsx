"use client";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-screen h-screen flex  items-center">
      <div className="w-[50%] h-full flex justify-center items-center ">
        {children}
      </div>
      <div className="w-[50%] h-full ">
        <img src="/images/DeliveryMan.png" className="w-full h-full" />
      </div>
    </div>
  );
}
