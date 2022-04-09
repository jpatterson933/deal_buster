import './index.css';
import { LandingPage } from './views/landingPage';
import { DailyBanner } from './views/banner';
import { Faq } from './components/Faq';
import { Contact } from './components/Contact';

function App() {
  return (
    <>
      <LandingPage />
      <DailyBanner />
      <div id="footer">
        <Faq />
        <Contact />
      </div>
    </>
  );
}
export default App;