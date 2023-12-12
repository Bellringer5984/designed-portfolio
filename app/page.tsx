import NavBar from './components/NavBar'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Services from './components/Services'
import ConnectFooter from './components/ConnectFooter'


export default function Home() {
  return (
    <main className="">
      <NavBar />
      <About />
      <Services />
      <Portfolio />
      <ConnectFooter />
    </main>
  )
}
