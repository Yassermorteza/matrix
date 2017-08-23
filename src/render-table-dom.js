module.exports = function renderTabelDom(element, data){


  data.forEach(function(columns, index){

     var row = document.createElement('tr');

     for(var i=0; i < data[index].length; i++){

      var col = document.createElement('td');
      col.appendChild(document.createTextNode(data[index][i]));
      // col.textContent=data[index][i];
      row.appendChild(col);
     }
     element.appendChild(row);
  })
}