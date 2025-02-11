import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Links from './Links';
import Logo from './Logo';  
import { ThemeProvider, createTheme } from '@mui/material/styles';

interface Props {
  window?: () => Window;
  children?: React.ReactNode;
}
export default function ElevateAppBar(props: Props) {
  return (
    <React.Fragment>
      <CssBaseline />
        <AppBar>
          <Toolbar>
            <Box display="flex" alignItems="center" width="100%">
              <Logo />
              <Box flexGrow={1} />
              <Links />
            </Box>
          </Toolbar>
        </AppBar>
      <Toolbar />
    </React.Fragment>
  );
}