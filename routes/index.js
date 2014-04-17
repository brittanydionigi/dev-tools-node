module.exports = function (app) {
    app.get('/', index);
    app.post('/submit-order', submitOrder);
};

var index = function (req, res) {
    res.render('index', { title: 'Node Boilerplate' });
};

var submitOrder = function(req, res) {
  var obj = {};
  var type = Function.prototype.call.bind(Object.prototype.toString);
  console.log('body: ' + JSON.stringify(req.body));
  console.log(type(req.body.hats));
  if (type(req.body.hats) !== "[object Object]" || type(req.body.coats) !== "[object Object]") {
    res.send(400, { "request": req.body, "errorResponse": 'Style data malformed for one or more items. An item with associated style information should be an object with each selected style as the keys, and each quantity as values.' });
    req.connection.destroy();
  }

  if (!req.body.user) {
    res.send(400,  { "request": req.body, "errorResponse": "No user associated with this order!" });
  }

  else {
    res.send(req.body);
  }
}
