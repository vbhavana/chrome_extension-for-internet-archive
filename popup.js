var getSegment = function (url, index) {
   return url.replace(/^https?:\/\//, '').split('/')[index];
}

chrome.tabs.query({
active: true,
lastFocusedWindow: true
}, function(tabs) {
// and use that tab to fill in out title and url
var tab = tabs[0];
if(
getSegment(tab.url,0)=="web-beta.archive.org"
)
{
var roop=getSegment(tab.url, 2);
alert("This page of"+getSegment(tab.url, 3)+"is archived by wayback machine at:\n"+roop.slice(6,8)+"-"+roop.slice(4,6)+"-"+roop.substr(0,4)+"  "+roop.slice(8,10)+"hrs"+roop.slice(10,12)+"min"+roop.slice(12)+"sec");
document.write("This page of"+getSegment(tab.url, 3)+"is archived by wayback machine at:\n"+roop.slice(6,8)+"-"+roop.slice(4,6)+"-"+roop.substr(0,4)+"  "+roop.slice(8,10)+"hrs"+roop.slice(10,12)+"min"+roop.slice(12)+"sec");
 }
else{
  document.write("Archived time can be obtained only while replaying archived pages through wayback machine");
  
}});