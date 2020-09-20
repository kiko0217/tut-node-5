var express = require('express')

var app = express()
// GET
// POST
// PUT
// DELETE
app.set('view engine', 'ejs')
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html')
})
app.get('/about', function(req, res) {
    res.send('this is about page')
})
app.get('/contect', function(req, res) {
    res.send('this is contect page')
})
var students = {
    1 : 'Mark',
    2 : 'tom',
    3 : 'john'
}
app.get('/students/:id', function(req, res) {
    res.render('students', { 
        name : students[req.params.id],
        id : req.params.id
    })
    // res.send('you have requested to see the student name: '+ students[req.params.id])
})
app.listen(3000, function() {
    console.log('our server is live on port 3000')
})