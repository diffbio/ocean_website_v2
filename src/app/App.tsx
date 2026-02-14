import { StickyNav } from './components/StickyNav';
import { SequenceHero } from './components/SequenceHero';
import { HowItWorks } from './components/HowItWorks';
import { BottomDark } from './components/BottomDark';
import { Footer } from './components/Footer';
import { Team } from './components/Team';
import { ContactForm } from './components/ContactForm';

export default function App() {
  return (
    <div className="w-full">
      <StickyNav />
      <SequenceHero />
      <HowItWorks />
      <BottomDark />
      <Team />
      <ContactForm />
      <Footer />
    </div>
  );
}
