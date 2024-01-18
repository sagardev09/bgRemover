import Image from 'next/image'
import Navbar from './components/Navbar'
import RemoveBackground from './components/RemoveBackground'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className='flex flex-col bg-[#DBE7C9]'>
      <Navbar />
      <RemoveBackground />
      <Footer />
    </main>
  )
}
