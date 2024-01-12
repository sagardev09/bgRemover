import Image from 'next/image'
import Navbar from './components/Navbar'
import RemoveBackground from './components/RemoveBackground'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <RemoveBackground />
      <Footer />
    </main>
  )
}
