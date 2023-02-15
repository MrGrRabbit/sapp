require('dotenv').config();
const app = require('./src/app');
app.listen(process.env.PORT, () => {
    console.warn(`App is listening on http://localhost:${process.env.PORT}`);
});
