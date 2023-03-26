import { Box, Button, Card, Container, styled } from '@mui/material';
import { ReactElement } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Logo from 'src/components/Logo';
import LanguageSwitcher from 'src/layouts/BottomNavigationLayout/BottomBar/LanguageSwitcher';

const HeaderWrapper = styled(Card)(
  ({ theme }) => `
        width: 100%;
        display: flex;
        align-items: center;
        height: ${theme.spacing(10)};
        margin-bottom: ${theme.spacing(10)};
    `
);

export default function Navbar({ t }: { t: any }): ReactElement {
  return (
    <HeaderWrapper>
      <Container maxWidth="lg">
        <Box display="flex" alignItems="center">
          <Logo />

          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            flex={1}
            gap={2}
          >

            <Box />

            <Box display="flex" alignItems="end" justifyContent="flex-end">
              <Button
                component={RouterLink}
                to="/404"
                variant="contained"
                sx={{
                  ml: 2
                }}
              >
                {t('Login')}
              </Button>
              <Button
                component={RouterLink}
                to="/404"
                variant="outlined"
                sx={{
                  ml: 2
                }}
              >
                {t('Sign up')}
              </Button>

              <LanguageSwitcher />
            </Box>
          </Box>
        </Box>
      </Container>
    </HeaderWrapper>
  );
}
