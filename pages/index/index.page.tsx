import type { Component } from 'solid-js'

import Hero from './_components/Hero'
import Footer from './_components/Footer'

const documentProps = {
  title: 'jojo',
  description: 'jojo. All is for consistent.'
}

const Page: Component = () => {
  return (
    <main class="px-6 py-[8vh] max-w-[76ch] mx-auto xl:text-lg dark:prose-invert">
      <Hero />
      <Footer />
    </main>
  )
}

export { Page, documentProps }
