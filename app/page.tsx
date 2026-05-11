// app/page.tsx
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Experience from '@/components/Experience'
import Skills from '@/components/Skills'
import Education from '@/components/Education'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Experience />
      <Skills />
      <Education />
      <Contact />
    </main>
  )
}
