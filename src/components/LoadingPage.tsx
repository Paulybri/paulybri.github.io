
import { Backdrop, Box, CircularProgress, useTheme } from "@mui/material"
import { ReactComponent as SiteLogo } from '../icons/P-Side-Logo-500px.svg';

interface LoadingPageProps {
    open: boolean}

export default function LoadingPage({ open }: LoadingPageProps) {
    const theme = useTheme()
    return (
        <Backdrop
            sx={{
                backgroundColor: theme.palette.background.paper,
                zIndex: theme.zIndex.drawer + 2,
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