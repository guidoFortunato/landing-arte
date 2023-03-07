import { Box, Typography } from "@mui/material";
import { useTheme } from '@mui/material/styles';

export const Footer = () => {

  const theme = useTheme();
  const { palette } = theme
  const main = palette.primary.main
  return (
    <Box
      component="footer"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "50px",
        position: "absolute",
        bottom: 0,
        backgroundColor: `${main}`,
      }}
    >
      <Typography variant="h6" color={palette.secondary.contrastText}>
        Footer
      </Typography>
    </Box>
  );
};
