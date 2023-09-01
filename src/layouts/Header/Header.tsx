import { Menu } from '@/layouts/Header/components/Menu';
import { SwitchButtonLanguage } from '@/layouts/Header/components/SwitchButtonLanguage';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import MenuIcon from '@mui/icons-material/Menu';
import { Drawer, Grid, Hidden, IconButton, Link } from '@mui/material';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import { styled, useTheme } from '@mui/material/styles';
import React from 'react';
import * as i18n from 'react-i18next';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { Banner, Image, ImageMobile } from './styles';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    imgPath:
      'images/Banner.png',
  },
  {
    imgPath:
      'images/Banner.png',
  },
];

const drawerWidth = 100;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export function Header() {  
  const { t } = i18n.useTranslation('MENU')
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = images.length;
  
    const handleNext = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
  
    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
  
    const handleStepChange = (step: number) => {
      setActiveStep(step);
    };

  return (
    <>
      <Hidden lgUp>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
            },
          }}
          variant="persistent"
          anchor="left"
          open={open}
        >
          <DrawerHeader>
            <Grid container justifyContent='space-between'>
              <Grid>
                <ImageMobile src='images/fertisoil.png' alt='Logo'/>
              </Grid>
            </Grid>
            <Grid>
              <IconButton onClick={handleDrawerClose}>
                <ChevronLeftIcon/>
              </IconButton>
            </Grid>
          </DrawerHeader>
          <Divider />
          <List>
            <Link href="#quem-somos" underline='none' sx={{color: 'black', }}>
              <ListItem disablePadding>
                <ListItemButton>
                  {t('QUEM_SOMOS')}
                </ListItemButton>
              </ListItem>
            </Link>
            <Link href="#planos" underline='none' sx={{color: 'black', }}>
              <ListItem disablePadding>
                  <ListItemButton>
                    {t('PLANOS')}
                  </ListItemButton>
              </ListItem>
            </Link>
            <Link href="#treinamento" underline='none' sx={{color: 'black', }}>
              <ListItem disablePadding>
                <ListItemButton>
                  {t('TREINAMENTO')}
                </ListItemButton>
              </ListItem>
            </Link>
            <Link href="#fale-conosco" underline='none' sx={{color: 'black', }}>
              <ListItem disablePadding>
                <ListItemButton>
                  {t('FALE_CONOSCO')}
                </ListItemButton>
              </ListItem>
            </Link>
          </List>
        </Drawer>
      </Hidden>
      <Grid className="itensCenter" container px={3} justifyContent='space-between' alignItems='center'>
        <Hidden lgUp>
          <Grid>
            <IconButton
              color="inherit"
              onClick={handleDrawerOpen}
              sx={{ ...(open && { display: 'none' }) }}
            >
              <MenuIcon />
            </IconButton>
          </Grid>
        </Hidden>
        <Grid>
          <Image src='images/fertisoil.png' alt='Logo'></Image>
        </Grid>
        <Hidden lgDown>
          <Grid>
            <Menu />
          </Grid>
        </Hidden>
        <Grid>
          <SwitchButtonLanguage />
        </Grid>
      </Grid>
      <Banner container>
        <AutoPlaySwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {images.map((step, index) => (
            <div key={step.label}>
              {Math.abs(activeStep - index) <= 2 ? (
                <Box
                  component="img"
                  sx={{
                    minHeight: '120vh',
                    display: 'block',
                    overflow: 'hidden',
                    width: '100%',
                  }}
                  src={step.imgPath}
                />
              ) : null}
            </div>
          ))}
        </AutoPlaySwipeableViews>
      </Banner>
    </>
  )
}
