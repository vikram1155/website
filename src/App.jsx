import './App.css'
import HeroSection from './components/sections/HeroSection'
import EventDetailsSection from './components/sections/EventDetailsSection'
import CountdownSection from './components/sections/CountdownSection'
import RsvpSection from './components/sections/RsvpSection'
import VenueDressCodeSection from './components/sections/VenueDressCodeSection'
import MaduraiGuideSection from './components/sections/MaduraiGuideSection'
import MaduraiTriviaSection from './components/sections/MaduraiTriviaSection'
import PhotoShareSection from './components/sections/PhotoShareSection'
import PhotoMissionsSection from './components/sections/PhotoMissionsSection'
import MemoryWallSection from './components/sections/MemoryWallSection'
import MessageTo2036Section from './components/sections/MessageTo2036Section'
import RandomUsSection from './components/sections/RandomUsSection'
import MoiPrankSection from './components/sections/MoiPrankSection'
import EasterEggSection from './components/sections/EasterEggSection'
import FinalSection from './components/sections/FinalSection'

function App() {
  return (
    <div className="app-shell">
      <HeroSection />

      <main className="page-shell">
        <EventDetailsSection />
        <CountdownSection />
        <RsvpSection />
        <VenueDressCodeSection />
        <MaduraiGuideSection />
        <MaduraiTriviaSection />
        <PhotoShareSection />
        <PhotoMissionsSection />
        <MemoryWallSection />
        <MessageTo2036Section />
        <RandomUsSection />
        <MoiPrankSection />
        <EasterEggSection />
        <FinalSection />
      </main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div>
            <p className="eyebrow footer-kicker">Contact</p>
            <h3>Vikram & Monica</h3>
            <p>Phone: +91 98765 43210</p>
            <p>Email: hello@vikramandmonica.com</p>
          </div>

          <div>
            <p className="eyebrow footer-kicker">Planner</p>
            <p>For travel plans, hotel help, or any last-minute chaos.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
