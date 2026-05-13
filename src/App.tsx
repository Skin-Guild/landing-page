import './App.css'
import Hero from './components/Hero'
import AboutAcne from './components/AboutAcne'
import Team from './components/Team'
import Resources from './components/Resources'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className="app">
      <Hero />
      <AboutAcne />
      <Team />
      <Resources />
      <Footer />
    </div>
  )
}

export default App
