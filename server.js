const express = require('express');

const app = express();

app.use(express.static('./dist/spaceX-app/browser'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/spaceX-app/browser/'}),
);

app.listen(process.env.PORT || 8080);