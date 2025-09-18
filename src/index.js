const express = require('express');
const { formatResponse } = require('./utils');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());

// Basic health check endpoint
app.get('/health', (req, res) => {
  res.json(formatResponse(true, 'API is running successfully'));
});

// Welcome endpoint
app.get('/', (req, res) => {
  res.json(formatResponse(true, 'Bem-vindo à API do Tutorial TDD com GitHub Copilot!', {
    version: '1.0.0',
    endpoints: [
      'GET /',
      'GET /health'
    ]
  }));
});

// Start server only if this file is run directly (not during testing)
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando na porta ${PORT}`);
    console.log(`📊 Health check: http://localhost:${PORT}/health`);
  });
}

module.exports = app;