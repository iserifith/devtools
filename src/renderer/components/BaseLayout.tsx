import { useTheme, styled } from '@mui/material/styles';
import {
  CssBaseline,
  Divider,
  Drawer as MuiDrawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar as MuiToolbar,
  Box,
  ListItemIcon,
  Theme,
  Collapse,
  Icon,
  Typography,
} from '@mui/material';
import { ReactNode, FC, useState, useEffect, Fragment } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { useNavigate } from 'react-router-dom';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import { CSSObject } from '@emotion/react';
import routes from 'renderer/constants/routes';

const drawerWidth = 280;

type BaseLayoutProps = {
  children: ReactNode;
};

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  // backgroundColor: '#141E30',
  // background: 'linear-gradient(to right, #24243e, #141E30, #0f0c29)',
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
}));

const Toolbar = styled(MuiToolbar)(() => ({
  WebkitAppRegion: 'drag',
  WebkitUserSelect: 'none',
}));

const AppTitle = styled(Typography)(() => ({
  textTransform: 'uppercase',
  fontFamily: 'Rubik, sans-serif',
  fontSize: '2rem',
  color: '#E4E5E6',
  position: 'relative',
  backgroundImage:
    'linear-gradient( 105.5deg,  rgba(31,212,248,1) 11%, rgba(218,15,183,1) 74.9% )',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  ':before': {
    content: 'attr(data-text)',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: -1,
    textShadow: '0 0 10px #000',
  },
  ':after': {
    content: 'attr(data-text)',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: -2,
    textShadow:
      '10px 10px 10px rgba(0,0,0,.5), 20px 20px 20px rgba(0,0,0,.4), 30px 30px 30px rgba(0,0,0,.1)',
    mixBlendMode: 'multiply',
  },
}));

const MenuButton = styled(IconButton)(() => ({
  WebkitAppRegion: 'no-drag',
}));

const BaseLayout: FC<BaseLayoutProps> = ({ children }) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [collapse, setCollapse] = useState<[] | any>([]);

  useEffect(() => {
    const arr: any[] = Array(routes.length).fill(false);
    setCollapse(arr);
  }, []);

  const handleDrawerOpen = () => {
    setOpen(true);
    setCollapse(Array(routes.length).fill(false));
  };

  const handleDrawerClose = () => {
    setOpen(false);
    setCollapse(Array(routes.length).fill(false));
  };

  const setCollapseByIndex = (index: number) => {
    const newCollapse: any[] = Array(routes.length).fill(false);
    newCollapse[index] = !collapse[index];
    setCollapse(newCollapse);
    setOpen(true);
  };

  const renderRoutes = () => {
    return routes.map((route, index) => {
      const { title, icon, items } = route;

      return (
        <Fragment key={route.title}>
          <List>
            <ListItem disableGutters disablePadding>
              <ListItemButton onClick={() => setCollapseByIndex(index)}>
                <ListItemIcon>
                  <Icon>{icon}</Icon>
                </ListItemIcon>
                <ListItemText
                  sx={{
                    textTransform: 'capitalize',
                  }}
                  primary={title}
                />
              </ListItemButton>
            </ListItem>
          </List>
          {items && items.length > 0 && (
            <Collapse in={collapse[index]} timeout="auto" unmountOnExit>
              <List component="div">
                {items.map((child) => {
                  return (
                    <ListItem
                      onClick={() => navigate(child.path)}
                      button
                      key={child.title}
                    >
                      <ListItemText primary={child.title} />
                    </ListItem>
                  );
                })}
              </List>
            </Collapse>
          )}
        </Fragment>
      );
    });
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <MenuButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </MenuButton>
          <AppTitle noWrap>devtools</AppTitle>
        </Toolbar>
      </AppBar>
      <Drawer open={open} variant="permanent">
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText primary="All Tools" />
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />
        {renderRoutes()}
        <Divider />
        <List
          sx={{
            position: 'absolute',
            bottom: 0,
            width: '100%',
            backgroundColor: '#121212',
          }}
        >
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Icon>settings</Icon>
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        {children}
      </Box>
    </Box>
  );
};

export default BaseLayout;
