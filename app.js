const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "public")));

const sendFile = (res, fileName) => {
    res.sendFile(path.join(__dirname, "public", fileName));
};

const routes = [
    { path: '/welcome', file: 'welcompage.html' },
    { path: '/login', file: 'login.html' },
    { path: '/signup', file: 'signup.html' },
    { path: '/cooking-blog', file: 'Cooking.html' }
];

routes.forEach(route => {
    app.get(route.path, (req, res) => sendFile(res, route.file));
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});