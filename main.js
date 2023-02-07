require('dotenv').config();
const app = require('./src/sapp');
app.listen(process.env.PORT, () => {
    console.warn(`App is listening on http://localhost:${process.env.PORT}`);
});
