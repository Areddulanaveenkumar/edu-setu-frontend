import Hero from "../sections/Hero";
import StatsBar from "../sections/StatsBar";
import About from "../sections/About";
import TopStates from "../sections/TopStates";
import Services from "../sections/Services";
import EntranceExams from "../sections/EntranceExams";
import News from "../sections/News";
import EnquiryForm from "../sections/EnquiryForm";
import Testimonials from "../sections/Testimonials";
import Partners from "../sections/Partners";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBar />
      <About />
      <TopStates />
      <Services />
      <EntranceExams />
      <News />
      <EnquiryForm />
      <Testimonials />
      <Partners />
    </>
  );
}