// app/page.tsx
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Skills from '@/components/Skills'
import Education from '@/components/Education'
import Contact from '@/components/Contact'
import BackToTop from '@/components/BackToTop'

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Education />
      <Contact />
      <BackToTop />
    </main>
  )
}
