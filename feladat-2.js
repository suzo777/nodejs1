var http = require("http"),
    url = require("url"),
    dtm = require("./dotablemodule");
    
http.createServer(function (req, res) {
      switch(req.method) {
        case "GET":
            var pars = (url.parse(req.url).pathname).split('/');
            switch (pars[1]) {
                case "showtable":
                    dtm.doTable(pars[2], pars[3], (text) => {
                        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
                        res.write(text);
                        res.end();
                    });
                    break;
                case "proba":
                    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
                    res.write("<h1>Ez a próba oldal!</h1>");
                    res.end();
                    break;
                default:
                    res.writeHead(404, {'Content-Type': 'text/html; charset=utf-8'});
                    res.write("<h1>404-es hiba: Az oldal nem létezik!</h1>");
                    res.end();
            }
            break;
        default:
            res.writeHead(404, {'Content-Type': 'text/html; charset=utf-8'});
            res.write("<h1>A http kérelem "+ req.method +" metódusa nem megengedett!</h1>");
            res.end();
      }
}).listen(8080);

