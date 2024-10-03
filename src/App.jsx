import { useEffect, useState } from 'react'
import Home from './pages/Home'
import Footer from './pages/Footer'
import About from './pages/About '
import Maps from './pages/Maps'
import ImageSlider from './pages/ImageSlider'
import Contact from './pages/Contact'
import Spinner from './pages/Spinner'

function App() {
  const [loading, setLoding] = useState(true)

  useEffect(() => {
    const loadData = setTimeout(() => {
      setLoding(false)
    }, 4000);

    return () => clearTimeout(loadData)
  }, [])

  if (loading) {
    return <Spinner />
  }
  return (
    <>
      <Home />
      <Maps />
      <ImageSlider />
      <About />
      <Contact />
      <Footer />
    </>
  )
}

export default App
