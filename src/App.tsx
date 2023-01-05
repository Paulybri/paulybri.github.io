import ResponsiveAppBar from "./components/ResponsiveAppBar"
import { Page } from "./components/Page"
import { ThemeProvider } from "@emotion/react"
import { createTheme } from "@mui/material/styles"
import { Container, Divider, Box } from "@mui/material"
import { Home } from "./pages/Home"
import { Music } from "./pages/Music"
import { About } from "./pages/About"
import { Contact } from "./pages/Contact"
import { useLocation } from "react-router-dom"
import { useEffect, useState } from "react"
import LoadingPage from "./components/LoadingPage"

export const APP_BAR_HEIGHT = 80

const theme = createTheme({
  typography: {
    fontFamily: `'Quicksand', sans-serif`,
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        draggable: false
      }
    }
  },
  palette: {
    background: {
      paper: 'rgb(255 248 231)',
    },
    primary: {
      main: 'rgb(255 220 132)'
    },
    secondary: {
      main: 'rgb(240 204 255)'
    }
  }
})


function App() {

  const [loading, setLoading] = useState(true);

  const location = useLocation();

  useEffect(() => {
    // DISGUSTING CODE TO SUPPORT LEGACY
    switch (location.pathname) {
      case '/studio':
        window.location.replace('/studio.html')
        break
      case '/portfolio':
        window.location.replace('https://muelmuel.notion.site/Paul-Bri-re-P-Side-4963602657f94fa383ee73cb0d6877ce')
        break
      case '/epk':
        window.location.replace('https://muelmuel.notion.site/P-Side-151795fcfe004ff4bd392319625e5214')
        break
    }

    if (loading) {
      return
    }
    scrollToLocation()
  }, [location])

  const imagesLoaded = () => {
    setLoading(false)
    scrollToLocation()
  }
  function scrollToLocation() {
    let id = location.pathname.split('/').at(-1)
    if (!id) {
      id = 'home'
    }
    var elementPosition = document.getElementById(id)?.getBoundingClientRect().top
    var offsetPosition = (elementPosition ? elementPosition : 0) + window.pageYOffset - APP_BAR_HEIGHT

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <LoadingPage theme={theme} open={loading} />
        <Home id='home' />
        <ResponsiveAppBar />
        <Box
          sx={{
            backgroundImage: `linear-gradient(0deg, rgb(255 244 216) 0%, ${theme.palette.primary.main} 100%)`,
            backgroundRepeat: 'no-repeat',
          }}>
          <Container id='body'>
            <Page title="Music" id="music">
              <Music onAllImagesLoaded={() => imagesLoaded()} />
            </Page>
            <Divider />
            <Page title="About" id="about">
              <About />
            </Page>
            <Divider />
            <Page title="Contact" id="contact">
              <Contact />
            </Page>
          </Container>
        </Box>
      </ThemeProvider>
    </>
  )
}

export default App