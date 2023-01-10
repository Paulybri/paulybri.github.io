import { Button, Card, CardContent, CardHeader, CardMedia } from "@mui/material";
import { PlayArrow } from "@mui/icons-material";
import DownloadIcon from '@mui/icons-material/Download';

interface AlbumProps {
    name: string;
    imgUrl: string;
    releaseDate: string;
    presaveUrl: string;
    listenUrl?: string;
    imageLoaded?: React.ReactEventHandler<HTMLImageElement>
}

export default function Album({ name, imgUrl, releaseDate, presaveUrl, listenUrl, imageLoaded }: AlbumProps) {
    const today = new Date()
    const releaseDateObj = new Date(releaseDate)
    const isReleased = releaseDateObj <= today
    const formattedDate = releaseDateObj.toLocaleString('default', { month: 'long', day: 'numeric' })
    if (listenUrl == null) {
        listenUrl = presaveUrl
    }

    return (
        <Card raised={false} sx={{ maxWidth: 420, borderRadius: 5 }}>
            <CardHeader title={name} subheader={isReleased ? "Out Now" : formattedDate} action={
                <Button
                    draggable={false}
                    size='large'
                    sx={{ mt: 1, mr: 1, borderRadius: 5 }}
                    variant="outlined"
                    color="inherit"
                    startIcon={isReleased ? <PlayArrow /> : <DownloadIcon />}
                    href={isReleased ? listenUrl : presaveUrl}
                    target="_blank">
                    {isReleased ? "Listen" : "Pre-Save"}
                </Button>} />
            <CardContent>
                <CardMedia
                    sx={{ borderRadius: 5 }}
                    component="img"
                    alt="green iguana"
                    image={imgUrl}
                    onLoad={imageLoaded}
                />
            </CardContent>
        </Card>

    )
}