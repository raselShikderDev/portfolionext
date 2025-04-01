import About from "@/components/about";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Services from "@/components/services";
import Works from "@/components/works";

export default function Home() {
  return (
    <>
      <Header />
      <About />
      <Services />
      <Works />
      <Contact/>
      <Footer/>
    </>
  );
}
