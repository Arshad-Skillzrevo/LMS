import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: "SkillzRevo Learning Portal | Access Courses, Recordings, Assignments & Certificates",
  description:
    "Access your SkillzRevo courses, class recordings, assignments, quizzes, certificates and track your learning progress. 24×7 LMS access for AI, ML, Data Science, Cybersecurity, DevOps and more.",
  keywords: [
    "SkillzRevo LMS",
    "SkillzRevo Learning Portal",
    "SkillzRevo Academy",
    "online learning platform",
    "SkillzRevo dashboard",
    "e-learning",
    "class recordings",
    "AI courses",
    "Machine Learning courses",
    "Data Science courses"
  ],
  openGraph: {
    title: "SkillzRevo Learning Portal",
    description:
      "Login to access your courses, assignments, quizzes, class recordings and certificates.",
    url: "https://tutor.skillzrevo.com/",
    images: [
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80"
    ],
    type: "website"
  },
  alternates: {
    canonical: "https://tutor.skillzrevo.com/"
  }
};


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
