import { ThemeProvider } from '@mui/system';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BaseLayout from './components/BaseLayout';
import ToolLayout from './components/ToolLayout';
import routes from './constants/routes';
import Homepage from './screens/Homepage';
import theme from './utils/theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <BaseLayout>
          <Routes>
            <Route path="/" element={<Homepage />} />
            {routes.map((route) => {
              return route.items.map((child) => {
                return (
                  <Route
                    key={child.path}
                    path={child.path}
                    element={
                      <ToolLayout
                        component={child.component}
                        title={child.title}
                      />
                    }
                  />
                );
              });
            })}
          </Routes>
        </BaseLayout>
      </Router>
    </ThemeProvider>
  );
}
