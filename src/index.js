var createMatrix = require('./create-matrix');

// function createMatrix(rowsCount, columnsCount){
//  var matrix =[];

//  for(var i=0; i<rowsCount; i++ ){
//     matrix[i]=[];
//     for(var x=0; x<columnsCount; x++){
//      matrix[i].push(0);
//     }
//   }
// return matrix;
// }

var newmatrix = createMatrix(4,4);
document.getElementById('step-2').innerHTML = newmatrix;

// function renderPlainText(data){

//     var  rows =[];
//     data.forEach(function(columns){
//       var row ='';
//       row = columns.join('') + "<br>";
//       rows.push(row);
//     });
//    var result = rows.join('\n')
//   return result;
// }

var renderPlainText = require('./render-plain-text');

var join = renderPlainText(createMatrix());
document.getElementById("div").innerHTML= join ;

// function renderHTMLTable(matrix){

//     var text = '';

//     matrix.forEach(function(el){
//       text += "<tr>";

//       for(var i=0; i< el.length; i++){
//          text += '<td>' + el[i] + "</td>";
//       }

//       text += "</tr>";
//     })

//     return text;
// }

var renderHTMLTable = require('./render-html-table');

document.getElementById('step-3').innerHTML = renderHTMLTable(createMatrix(4,4));

// function matrixFillsequence(data){

//     var newmatrixx= [];
//     var counter = 0;
//     for(var rownum=0; rownum < data.length ; rownum++){

//       newmatrixx[rownum] = [];
//       var columnscount= data[rownum].length;

//       for(var i=0 ; i < columnscount ; i++){
//         newmatrixx[rownum].push(counter);
//         counter++;
//       }
//     }
//     return newmatrixx;
// }

var matrixFillsequence = require('./matrix-fill-sequence');

var newmatrix= createMatrix(4,4);
var transformed = matrixFillsequence(newmatrix);
document.getElementById('step-4').innerHTML = renderHTMLTable(transformed);

// function matrixFillRowNum (data){

//   var matrixx=[];

//   data.forEach(function(rows, index){
//     matrixx[index]= [];
//     for(var i=0; i<data[index].length; i++){
//       matrixx[index].push(index);
//     }
//   })
//   return matrixx;
// }

var matrixFillRowNum = require('./matrix-fill-row-num');

var newmatrix= createMatrix(5,2);
var fillRow = matrixFillRowNum(newmatrix);
document.getElementById('step-5').innerHTML = renderPlainText(fillRow);

// function matrixFillColNum(data){
//   var matrixx=[];
//   var counter=0;
//   data.forEach(function(col,index){
//      matrixx[index]=[];
//      for(var i=0; i< data[index].length; i++){
//        matrixx[index].push(counter+i);
//      }
//   })
//   return matrixx;
// }

var matrixFillColNum = require('./matrix-fill-col-num');

var newMatrix = createMatrix(2,5);
var fillCol = matrixFillColNum(newMatrix);
document.getElementById('step-6').innerHTML = renderPlainText(fillCol);

// function matrixIncrement(data){

//   var newmatrixx = [];
//   var counter = 0;
//   data.forEach(function(increment, index){
//     newmatrixx[index]=[];
//     for(var i=0; i < data[index].length; i++){
//       counter++;
//       newmatrixx[index].push(counter);
//     }
//   })
//   return newmatrixx;
//}

var matrixIncrement = require('./matrix-increment');

var newmatrix= createMatrix(3,5);
var fillIncrement = matrixIncrement(newmatrix);
document.getElementById('step-7').innerHTML = renderHTMLTable(fillIncrement);


// function matrixFillText(data){

//   var text = 'abcdefghijklmnopqrstuvwxyz';
//   var strToArr = text.split('');
//   var newmatrixx = [];
//   counter = 0;

//   data.forEach(function(txt, index){

//     newmatrixx[index]=[];

//     for(var i=0; i<data[index].length; i++){
//       newmatrixx[index].push(strToArr[counter]);
//       counter++;
//     }
//   })
//   return newmatrixx;
// }

var matrixFillText = require('./matrix-fill-text');

var newMatrix = createMatrix(3,5);
var fillText = matrixFillText(newMatrix);
document.getElementById('step-8').innerHTML = renderHTMLTable(fillText);


// function renderTabelDom(element, data){


//   data.forEach(function(columns, index){

//      var row = document.createElement('tr');

//      for(var i=0; i < data[index].length; i++){

//       var col = document.createElement('td');
//       col.appendChild(document.createTextNode(data[index][i]));
//       // col.textContent=data[index][i];
//       row.appendChild(col);
//      }
//      element.appendChild(row);
//   })
// }

var renderTabelDom = require('./render-table-dom');

var newmatrix= createMatrix(9,9);
var table = document.getElementById("bonus");
renderTabelDom(table,matrixFillsequence(newmatrix));

var tds = document.querySelectorAll('td');

tds.forEach(function(td){
  td.style.border = '1px solid';
});

table.style.borderCollapse = 'collapse';
table.style['background-color']= "#2f3f4f";