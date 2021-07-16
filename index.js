
var express = require('express')
var app = express()
var Datastore = require('nedb')
var db = new Datastore({
    filename: 'database.db',
    autoload: true
})
app.use(express.static('client'))
app.listen(9080, () => {
    console.log('Listening at port 9080')
})
app.use(express.json())
app.post('/api', (req, res) => {

    console.log(req.body)
    db.insert(req.body, function (err, doc) {
        console.log("Data sent");
    });
})
app.get('/api', (req, res) => {
    db.find({}, (err, data) => {
        if (err) {
            console.log("Error!!!!")
            return;
        }
        res.json(data)
    })
})
