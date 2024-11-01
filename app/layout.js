import { GoogleTagManager } from "@next/third-parties/google";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import "./css/card.scss";
import "./css/globals.scss";
import ScrollToTop from "./components/helper/scroll-to-top";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio of Ahmed U - DevOps Engineer",
  description:
    "My name is AHMED U, a dedicated and results-oriented DevOps Engineer with 4.5 years of experience. I thrive in dynamic environments, always eager to learn and tackle challenges. I have a strong foundation in infrastructure automation, containerization, and cloud services. Skilled in AWS, Kubernetes, Terraform, and Jenkins, I am passionate about building efficient, scalable solutions. I aim to bridge development and operations with streamlined CI/CD pipelines and effective monitoring. I am open to job opportunities that align with my skills and enthusiasm for continuous improvement in the DevOps space.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastContainer />
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
          <Navbar />
          {children}
          <ScrollToTop />
        </main>
        <Footer />
      </body>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
    </html>
  );
}
