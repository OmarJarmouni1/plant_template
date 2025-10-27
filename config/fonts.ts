import { Fira_Code as FontMono, Inter as FontSans } from "next/font/google";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
});

// export const fontKarla = Karla({
//   subsets: ["latin"],
//   weight: ["400", "700"], // Specify the font weights you need
//   style: "normal",
//   variable: "--font-karla", // Custom CSS variable if required
// });

interface FontKarlaOptions {
  subsets: string[];
  variable: string;
  weight: number | string; // Define the weight as needed
}

export const FontKarla = ({ subsets, variable, weight }: FontKarlaOptions) => {
  return {
    fontFamily: '"Karla", sans-serif',
    fontOpticalSizing: "auto",
    fontWeight: weight,
    fontStyle: "normal",
    subsets,
    variable,
  };
};

// Usage
export const fontKarla = FontKarla({
  subsets: ["latin"],
  variable: "--font-karla",
  weight: 400, // Adjust weight as needed
});
