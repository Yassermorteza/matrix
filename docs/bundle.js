(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){module.exports=function createMatrix(rowsCount,columnsCount){var matrix=[];for(var i=0;i<rowsCount;i++){matrix[i]=[];for(var x=0;x<columnsCount;x++){matrix[i].push(0)}}return matrix}},{}],2:[function(require,module,exports){var createMatrix=require("./create-matrix");var newmatrix=createMatrix(4,4);document.getElementById("step-2").innerHTML=newmatrix;var renderPlainText=require("./render-plain-text");var join=renderPlainText(createMatrix());document.getElementById("div").innerHTML=join;var renderHTMLTable=require("./render-html-table");document.getElementById("step-3").innerHTML=renderHTMLTable(createMatrix(4,4));var matrixFillsequence=require("./matrix-fill-sequence");var newmatrix=createMatrix(4,4);var transformed=matrixFillsequence(newmatrix);document.getElementById("step-4").innerHTML=renderHTMLTable(transformed);var matrixFillRowNum=require("./matrix-fill-row-num");var newmatrix=createMatrix(5,2);var fillRow=matrixFillRowNum(newmatrix);document.getElementById("step-5").innerHTML=renderPlainText(fillRow);var matrixFillColNum=require("./matrix-fill-col-num");var newMatrix=createMatrix(2,5);var fillCol=matrixFillColNum(newMatrix);document.getElementById("step-6").innerHTML=renderPlainText(fillCol);var matrixIncrement=require("./matrix-increment");var newmatrix=createMatrix(3,5);var fillIncrement=matrixIncrement(newmatrix);document.getElementById("step-7").innerHTML=renderHTMLTable(fillIncrement);var matrixFillText=require("./matrix-fill-text");var newMatrix=createMatrix(3,5);var fillText=matrixFillText(newMatrix);document.getElementById("step-8").innerHTML=renderHTMLTable(fillText);var renderTabelDom=require("./render-table-dom");var newmatrix=createMatrix(9,9);renderTabelDom(document.getElementById("bonus"),matrixFillsequence(newmatrix));document.getElementById("bonus").setAttribute("border","4");document.getElementById("bonus").setAttribute("style","background-color: #2f3f4f")},{"./create-matrix":1,"./matrix-fill-col-num":3,"./matrix-fill-row-num":4,"./matrix-fill-sequence":5,"./matrix-fill-text":6,"./matrix-increment":7,"./render-html-table":8,"./render-plain-text":9,"./render-table-dom":10}],3:[function(require,module,exports){module.exports=function matrixFillColNum(data){var matrixx=[];var counter=0;data.forEach(function(col,index){matrixx[index]=[];for(var i=0;i<data[index].length;i++){matrixx[index].push(counter+i)}});return matrixx}},{}],4:[function(require,module,exports){module.exports=function matrixFillRowNum(data){var matrixx=[];data.forEach(function(rows,index){matrixx[index]=[];for(var i=0;i<data[index].length;i++){matrixx[index].push(index)}});return matrixx}},{}],5:[function(require,module,exports){module.exports=function matrixFillsequence(data){var newmatrixx=[];var counter=0;for(var rownum=0;rownum<data.length;rownum++){newmatrixx[rownum]=[];var columnscount=data[rownum].length;for(var i=0;i<columnscount;i++){newmatrixx[rownum].push(counter);counter++}}return newmatrixx}},{}],6:[function(require,module,exports){module.exports=function matrixFillText(data){var text="abcdefghijklmnopqrstuvwxyz";var strToArr=text.split("");var newmatrixx=[];counter=0;data.forEach(function(txt,index){newmatrixx[index]=[];for(var i=0;i<data[index].length;i++){newmatrixx[index].push(strToArr[counter]);counter++}});return newmatrixx}},{}],7:[function(require,module,exports){module.exports=function matrixIncrement(data){var newmatrixx=[];var counter=0;data.forEach(function(increment,index){newmatrixx[index]=[];for(var i=0;i<data[index].length;i++){counter++;newmatrixx[index].push(counter)}});return newmatrixx}},{}],8:[function(require,module,exports){module.exports=function renderHTMLTable(matrix){var text="";matrix.forEach(function(el){text+="<tr>";for(var i=0;i<el.length;i++){text+="<td>"+el[i]+"</td>"}text+="</tr>"});return text}},{}],9:[function(require,module,exports){module.exports=function renderPlainText(data){var rows=[];data.forEach(function(columns){var row="";row=columns.join("")+"<br>";rows.push(row)});var result=rows.join("\n");return result}},{}],10:[function(require,module,exports){module.exports=function renderTabelDom(element,data){data.forEach(function(columns,index){var row=document.createElement("tr");for(var i=0;i<data[index].length;i++){var col=document.createElement("td");col.appendChild(document.createTextNode(data[index][i]));row.appendChild(col)}element.appendChild(row)})}},{}]},{},[2]);