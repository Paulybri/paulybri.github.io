import { Box, Typography } from "@mui/material"
import { APP_BAR_HEIGHT } from '../App'
import { useSyncPagePath } from "../hooks/useSyncPagePath";

type PageProps = {
  title: string,
  id: string,
  children: React.ReactNode
};

export const Page: React.FC<PageProps> = ({
  title,
  id,
  children
}) => {
  const topRef = useSyncPagePath(id);
  const bottomRef = useSyncPagePath(id);

  return <Box

    id={id}
    style={{
      minHeight: `calc(100dvh - ${APP_BAR_HEIGHT}px)`,
    }}>
    <Box py={7}>
      <Typography ref={topRef} gutterBottom variant="h2" textAlign={{ xs: 'center', md: 'left' }}>
        {title}
      </Typography>
      {children}
      <Box ref={bottomRef} />
    </Box>
  </Box>;
}