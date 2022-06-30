const express = require("express");
const { createProxyMiddleware } = require('http-proxy-middleware');
const cors = require('cors');

module.exports = function App() {
  const app = express();

  app.use(cors());
  app.use(express.json());

  app.use(express.static("./build"))
  app.use(createProxyMiddleware({ target: process.env.REACT_APP_API_URL, changeOrigin: true }));

  return app;
};