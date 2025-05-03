
import { Sarabun } from "next/font/google";
import "./globals.css";

const sarabun = Sarabun({
  subsets:["thai"],
  weight:["400","700"]
})

export const metadata = {
  title: "ระบบศิษย์เก่า มหาวิทยาลัยราชภัฏมหาสารคาม",
  description: "ระบบศิษย์เก่า มหาวิทยาลัยราชภัฏมหาสารคาม RMU-ALUMNI",
};

export default function RootLayout({
  children,
}){
  return (
    <html lang="en">
      <body
        className={`${sarabun.className}`}
      >
        {children}
      </body>
    </html>
  );
}
