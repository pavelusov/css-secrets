var fs = require('fs'),
    index = fs.createReadStream(__dirname + '/dist/index.html'),
    express = require('express'),
    app = express(),
    port = process.env.PORT || 5000;

app.use(express.static('dist'));

app.get('/', function (req, res) {
    index.pipe(res);
});

app.get('/section/', function (req, res) {
    var content = getContent(req.query.id);
	content.pipe(res);
});

app.post('/forms/', function (req, res) {
    // TO-DO check request
    res.set({
        'Content-Type': 'application/json',
    });
    res.status(200).send({
        "message": "Выше сообщение полученно!",
        "response": "true"
    });
});

app.listen(port, function () {
    console.log('EXPRESS Server listening on port 5000!');
    console.log('http://localhost:5000');
});

function getContent(id) {
    var content = fs.createReadStream(__dirname + '/dist/data/' + id + '.html');
    return content;
}
