import '@/shared/styles/global.css';
import App from './App.js';

document.addEventListener('DOMContentLoaded', () => {
  const rootElement = document.getElementById('app');

  if (rootElement) {
    App.init(rootElement);
  } else {
    console.error("Root element with ID 'app' not found in index.html.");
  }
});
