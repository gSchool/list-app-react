require('dotenv').config();
const port = 80;
const App = require('./app');

const app = App();

app.listen(port, () => {
  console.log(`Server is running, listening on port ${port}`);
});