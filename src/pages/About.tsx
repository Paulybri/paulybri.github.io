import { Box, Card, CardContent, CardMedia, Container, Typography } from "@mui/material";

type ContourProps = {
  color: string,
  padding: number
  children: React.ReactNode
};


function AboutCard() {
  return (
    <Card raised={false} sx={{ maxWidth: 600, borderRadius: 5 }}>
      <CardMedia
        sx={{ height: 350 }}
        image="/images/cailloux.jpg"
        title="Cute P-Side"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Who dat boy?
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
          Ever since <b>P-Side</b> dropped his first drum loop in GarageBand on his friend’s iMac in 2009, he was instantly hooked. He immediately proceeded to beg his mom for an acoustic guitar that christmas. Slowly, his janky beats and clumsy strumming fledged themselves out. His musical horizons grew with his desire to create and perform.
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Now that his instrumental and production skills are cohesive, he crafts colorful multifaceted music from his constantly expanding inspirations. All this from the comfort of his tiny Montreal apartment.
        </Typography>
      </CardContent>
    </Card>
  )
}

const ContourBox: React.FC<ContourProps> = ({
  color,
  padding,
  children
}) => <Box border={{ xs: 'none', md: '2px solid' }} color={color} sx={{
  borderRadius: 5,
  width: 'auto',
  p: { xs: 'none', md: padding }
}}> {children}</Box >

interface AboutProps {

  onAllImagesLoaded: (() => void)
}

export function About({ onAllImagesLoaded }: AboutProps) {
  onAllImagesLoaded()
  return (
    <Container sx={{ height: "", my: 4, display: 'flex', flexDirection: 'column', gap: 7, alignItems: 'center' }}>
      <ContourBox color='rgba(255, 255, 255, 0.1)' padding={0.5}>
        <ContourBox color='rgba(255, 255, 255, 0.3)' padding={1}>
          <ContourBox color='#FFF8E7' padding={2.5}>
            <AboutCard />
          </ContourBox>
        </ContourBox>
      </ContourBox>
    </Container>
  )
}