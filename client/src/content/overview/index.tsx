import { Box, Container } from '@mui/material';


import { styled } from '@mui/material/styles';
import Home from './Home';

const OverviewWrapper = styled(Box)(
  () => `
    overflow: auto;
    flex: 1;
    overflow-x: hidden;
    align-items: center;
`
);

function Overview() {

  return (
    <OverviewWrapper>
      <Container maxWidth="lg">
        <Home />
      </Container>
    </OverviewWrapper>
  );
}

export default Overview;
