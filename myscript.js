

var url = window.location.href;
var file = url.split('?')[0];
var pathanddomain = file.split('/');
var path = pathanddomain.splice(1, pathanddomain.length-1);
var pathIndexToGet = 3;
var pathIndexToGet2 = 4;
var roop=path[pathIndexToGet];
alert("this page of \t"+path[pathIndexToGet2]+" "+"is archived by wayback machine at: \n"+roop.slice(6,8)+"-"+roop.slice(4,6)+"-"+roop.substr(0,4)+"  "+roop.slice(8,10)+"hrs"+roop.slice(10,12)+"min"+roop.slice(12)+"sec");


