import { ThemeProvider } from '@mui/system';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import BaseLayout from './components/BaseLayout';
import Homepage from './screens/Homepage';
import JWTDecoder from './screens/JWTDecoder';
import theme from './utils/theme';

const routes = [
  {
    path: '/',
    name: 'Home',
    Component: Homepage,
  },
  {
    path: '/jwt-decoder',
    name: 'JWT Decoder',
    Component: JWTDecoder,
  },
];

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <BaseLayout>
        <Router>
          <Routes>
            {routes.map((route) => (
              <Route
                key={route.name}
                path={route.path}
                element={<route.Component />}
              />
            ))}
          </Routes>
        </Router>
      </BaseLayout>
    </ThemeProvider>
  );
}
