import Image from 'next/image'
import NavBar from './components/NavBar'
import Construction from './components/Construction'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Services from './components/Services'
import Resume from './components/Resume'


export default function Home() {
  return (
    <main className="">
      <NavBar />
      {/* <Construction /> */}
      <About />
      <Services />
      <Resume />
      <Portfolio />
      {/* Testimonials */}
      {/* Blog */}
      {/* Connect/Footer */}
    </main>
  )
}
