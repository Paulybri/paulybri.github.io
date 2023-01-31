import { Grid } from "@mui/material"
import Album from "../components/Album"

interface MusicProps {

  onAllImagesLoaded: (() => void)
}

export function Music({ onAllImagesLoaded }: MusicProps) {
  const albums = [
    {
      title: 'The Distance',
      imgUrl: '/images/cover_art/The Distance Cover.jpg',
      releaseDate: '09-11-2022',
      presaveUrl: 'https://distrokid.com/hyperfollow/pside1/the-distance-2'
    },
    {
      title: 'Bottle Vision',
      imgUrl: '/images/cover_art/bottle-vision-500px.jpg',
      releaseDate: '09-11-2021',
      presaveUrl: 'https://bfan.link/bottle-vision'
    },
    {
      title: 'Summer in Disguise',
      imgUrl: '/images/cover_art/summer-in-disguise-500px.jpg',
      releaseDate: '08-21-2021',
      presaveUrl: 'https://distrokid.com/hyperfollow/pside1/summer-in-disguise'
    },
    {
      title: 'Ramen Shop',
      imgUrl: '/images/cover_art/ramen-shop-500px.jpg',
      releaseDate: '07-01-2021',
      presaveUrl: 'https://distrokid.com/hyperfollow/pside/ramen-shop'
    },
    {
      title: 'Paper, Picture',
      imgUrl: '/images/cover_art/paper-picture-500px.jpg',
      releaseDate: '04-27-2021',
      presaveUrl: 'https://push.fm/fl/paper'
    },
  ]

  let loadedImageCount = 0
  const imageLoaded = () => {
    loadedImageCount++
    if (loadedImageCount >= albums.length) {
      onAllImagesLoaded()
    }
  }

  return (
    <Grid
      container
      my={7}
      direction="row"
      justifyContent="center"
      alignItems="flex-start"
      gap={7}
    >
      {albums.map((album) =>
        <Album name={album.title}
          imgUrl={album.imgUrl}
          releaseDate={album.releaseDate}
          presaveUrl={album.presaveUrl}
          imageLoaded={imageLoaded} />
      )}
    </Grid>
  )
}