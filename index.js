var express = require('express');
var app = express();

// when url is /whoami then get header
app.get('/whoami', function(req, res) {
  var os = req.headers["user-agent"].match(/\(([^)]+)\)/)[1]; // get specific software info
  var lang = req.headers["accept-language"].split(",")[0]; // get specific language info

  var data = {
    "ipaddress": req.ip,
    "language" : lang,
    "software" : os
  };

  res.write(JSON.stringify(data));
  res.end();
});

app.listen(process.env.PORT || 5000);
