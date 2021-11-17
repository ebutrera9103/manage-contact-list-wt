import {
  Box,
  Typography,
  Container,
} from '@mui/material';

import { styled } from '@mui/material/styles';

const MainContent = styled(Box)(
  ({ theme }) => `
    height: 100%;
    display: flex;
    flex: 1;
    overflow: auto;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
);

function Status404() {

  return (
    <>
      <title>Status - 404</title>
      <MainContent>
        <Container maxWidth="md">
          <Box textAlign="center">
            <img alt="404" height={180} src="https://www.pngitem.com/pimgs/m/255-2550411_404-error-images-free-png-transparent-png.png" />
            <Typography variant="h2" sx={{ my: 2 }}>
              404
            </Typography>

          </Box>
        </Container>
      </MainContent>
    </>
  );
}

export default Status404;
