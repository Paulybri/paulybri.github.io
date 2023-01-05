import { Box, Container, IconButton, Typography } from "@mui/material";
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const contactEmail = 'info@pside.ca'

export function Contact() {
  return (
    <Container sx={{my: 4, display: 'flex', flexDirection: 'column', gap: 7, alignItems: 'center'}}>
      <Box display='flex' flexDirection='column' alignItems='center'>
        <IconButton href={"mailto:" + contactEmail}>
          <MailOutlineIcon fontSize="large" />
        </IconButton>
        <Typography gutterBottom variant="h5" component="div">
          {contactEmail}
        </Typography>
      </Box>
    </Container>
  )
}