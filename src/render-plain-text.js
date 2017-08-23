module.exports = function renderPlainText(data){

    var  rows =[];
    data.forEach(function(columns){
      var row ='';
      row = columns.join('') + "<br>";
      rows.push(row);
    });
   var result = rows.join('\n')
  return result;
}
