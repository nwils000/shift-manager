import LandingPageNavbar from '../layout/LandingPageNavbar';
import '../styles/landing-page.css';
import '../styles/navbar.css';

export default function LandingPage() {
  return (
    <>
      <LandingPageNavbar />
      <div className="landing-page"></div>
    </>
  );
}
