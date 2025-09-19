const http = require('http'); 
const url = require('url'); 
 
http.createServer(function(req, res) {
    console.log(req.url);
    if(url.parse(req.url, true).pathname == "/") {
        var pars = url.parse(req.url, true).query;
        console.log(pars);
        if (pars.operandus1 == undefined || pars.muvelet == undefined || pars.operandus2 == undefined)
            pars = {"operandus1": "", "muvelet": "", "operandus2": ""};
        doHtmlText(pars, (htmlText) => {
            res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
            res.write(htmlText);
            res.end();
        });
    }
}).listen(8080);


function doHtmlText(pars, fuggv) {
    var text = '<form action="/">';
    text += '<input type="text" name="operandus1" value="'+pars.operandus1+'"  pattern="[1-9][0-9]*|0" required>';
    text += '<select name="muvelet" required>';
    text += '<option '+(pars.muvelet === "" ? "selected" : "")+'></option>';
    text += '<option '+(pars.muvelet === "+" ? "selected" : "")+'>+</option>';
    text += '<option '+(pars.muvelet === "-" ? "selected" : "")+'>-</option>';
    text += '<option '+(pars.muvelet === "*" ? "selected" : "")+'>*</option>';
    text += '<option '+(pars.muvelet === "/" ? "selected" : "")+'>/</option>';
    text += '</select>';                    
    text += '<input type="text" name="operandus2" value="'+pars.operandus2+'"  pattern="[1-9][0-9]*|0" required>';
    text += '<input type="submit" name="szamol" value="="> ';
    if(pars.operandus1 != "" && pars.operandus2 != "")
        switch (pars.muvelet) {
            case '+': text += parseInt(pars.operandus1) + parseInt(pars.operandus2); break;
            case '-': text += pars.operandus1 - pars.operandus2; break;
            case '*': text += pars.operandus1 * pars.operandus2; break;
            case '/': text += (pars.operandus2 != 0 ? pars.operandus1 / pars.operandus2 : "Hiba: Nullával való osztás"); break;
        }
    text += '</form>';
    fuggv(text);
} 
