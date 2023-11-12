import App from 'App';
import React from 'react';
// import 'common.css';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import rootReducer from './reducers';
import { createStore } from 'redux';
import { ThemeProvider } from 'styled-components';
import { theme } from 'styles/theme';
import GlobalStyles from 'styles/GlobalStyles';

const store = createStore(rootReducer);

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
);
