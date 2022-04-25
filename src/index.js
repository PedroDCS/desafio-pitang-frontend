import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Router from './Router'
import { NotificationsProvider } from "@mantine/notifications";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NotificationsProvider>
          <Router />

    </NotificationsProvider>
  </React.StrictMode>
);

