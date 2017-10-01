var fs = require('fs'),
    index = fs.readFileSync(__dirname + '/dist/index.html'),
    express = require('express'),
    app = express();

app.use(express.static('dist'));

app.get('/', function (req, res) {
    res.render(index, {title: 'Hey', message: 'Hello there!'});
});

app.get('/section/', function (req, res) {
    var content = getContent(req.query.id);
    res.send(content);
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

app.listen(5000, function () {
    console.log('EXPRESS Server listening on port 5000!');
    console.log('http://localhost:5000');
});

function getContent(id) {
    var content = fs.readFileSync(__dirname + '/dist/data/' + id + '.html');
    return content;
}
