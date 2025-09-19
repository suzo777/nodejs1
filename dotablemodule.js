var mysql = require("mysql");

exports.doTable = function(databaseName, tableName, fv1) {
    var con = mysql.createConnection({
        host: "sql.freedb.tech",
        user: "freedb_proba1",
        password: "FEFF@4hQ7&8Tmzt",
        database: databaseName
     });
    
    con.connect(function(err) {
        if (err) throw err;
        con.query("select * from "+tableName, function (err, result, fields) {
          if (err) throw err;
          var columns = [];
          for(var x in fields)
            columns.push(fields[x].name);
          getHtmlText(columns, result, fv1);
        });
    });
}

function getHtmlText(columns, rows, fv2) {
    var text = "<table>";
    text += "<tr>";
    for(var i=0; i<columns.length; i++)
        text += "<th>"+columns[i]+"</th>";
    text += "</tr>";
    for(i=0; i<rows.length; i++) {
        text += "<tr>";
        for(var j in rows[i]) {
            text += "<td>"+rows[i][j]+"</td>";
        }
        text += "</tr>";
    }
    text += "</table>";
    fv2(text);     
}
