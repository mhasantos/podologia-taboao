import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

console.log("🚀 Podologia Pirajussara: Sistema iniciado.");

const rootElement = document.getElementById('root');

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error("❌ Erro Crítico: Elemento #root não encontrado.");
}