module.exports = function renderHTMLTable(matrix){

    var text = '';

    matrix.forEach(function(el){
      text += "<tr>";

      for(var i=0; i< el.length; i++){
         text += '<td>' + el[i] + "</td>";
      }

      text += "</tr>";
    })

    return text;
}