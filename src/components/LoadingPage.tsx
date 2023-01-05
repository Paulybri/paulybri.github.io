
import { Backdrop, Box, CircularProgress, Theme } from "@mui/material"
import { ReactComponent as SiteLogo } from '../icons/P-Side-Logo-500px.svg';

interface LoadingPageProps {
    open: boolean
    theme: Theme
}

export default function LoadingPage({ open, theme }: LoadingPageProps) {
    return (
        <Backdrop
            sx={{
                backgroundColor: theme.palette.background.paper,
                zIndex: (theme) => theme.zIndex.drawer + 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: "center"
            }}
            open={open}
        >
            <Box pl={1} mb={4}>
                <SiteLogo width="90px" height='90px' />
            </Box>
            <CircularProgress color="inherit" />
        </Backdrop>
    )
}