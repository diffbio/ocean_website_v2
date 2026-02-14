import { SequenceHero } from './components/SequenceHero';
import { HowItWorks } from './components/HowItWorks';
import { BottomDark } from './components/BottomDark';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="w-full">
      <SequenceHero />
      <HowItWorks />
      <BottomDark />
      <Footer />
    </div>
  );
}
