import { Choreographies } from "./components/Choreographies/Choreographies";
import { Classes } from "./components/Classes/Classes";
import { Contact } from "./components/Contact/Contact";
import { Footer } from "./components/Footer/Footer";
import { Home } from "./components/Home/Home";
import { Navbar } from "./components/Navbar/Navbar";
import { Testimonies } from "./components/Testimonies/Testimonies";

export default function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Classes />
      <Choreographies />
      <Testimonies />
      <Contact />
      <Footer />
    </>
  );
}