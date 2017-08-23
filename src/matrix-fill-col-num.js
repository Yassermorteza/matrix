module.exports = function matrixFillColNum(data){
  var matrixx=[];
  var counter=0;
  data.forEach(function(col,index){
     matrixx[index]=[];
     for(var i=0; i< data[index].length; i++){
       matrixx[index].push(counter+i);
     }
  })
  return matrixx;
}
