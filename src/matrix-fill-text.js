module.exports = function matrixFillText(data){

  var text = 'abcdefghijklmnopqrstuvwxyz';
  var strToArr = text.split('');
  var newmatrixx = [];
  counter = 0;

  data.forEach(function(txt, index){

    newmatrixx[index]=[];

    for(var i=0; i<data[index].length; i++){
      newmatrixx[index].push(strToArr[counter]);
      counter++;
    }
  })
  return newmatrixx;
}
