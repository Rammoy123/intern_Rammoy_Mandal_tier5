let q=document.getElementById("searchName")
console.log(q);
var port = chrome.runtime.connect(
    {name: "knock"}
    );
  //searching the entered text
document.getElementById('clickMe').onclick = function() {
// if nothing entered to search, it will alert u!!!
    if(q.value=="")
    {
        alert(" enter some thing to search")
    }
    else{
          chrome.tabs.create({
            url: ('http://google.com/search?q='+q.value),
            
          });
          notify();
} 
};   
//sending a msg & searching key value to background.js  
function notify(){
     port.postMessage({
        msg_org: "lol!!",
        key:q.value
    });
}  
//sending msg to background js to trigger printing
document.getElementById('clickMe12').onclick =()=>{
    port.postMessage({
      printing:true
    });

}


