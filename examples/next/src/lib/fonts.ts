import { Noto_Sans_JP, Noto_Sans_Mono } from "next/font/google"

export const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-noto-sans-jp",
  adjustFontFallback: false,
})

export const notoSansMono = Noto_Sans_Mono({
  subsets: ["latin"],
  variable: "--font-noto-sans-mono",
  adjustFontFallback: false,
})
