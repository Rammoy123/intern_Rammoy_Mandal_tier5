//here is the targeted website  https://stackoverflow.com/   

//changing the title of the targeted website
document.querySelector("title").innerHTML="Rammoy";
var port12 = chrome.runtime.connect(
    {name: "knock"}
    );
  

let html = `<div class="container_test">
    <div class="row">
      <div class="col-25">
        <label for="title">Notification Title</label>
      </div>
      <div class="col-75">
        <input type="text" placeholder="Notification Title" id="noti_title">
      </div>
    </div>
    <div class="row">
      <div class="col-25">
        <label for="message">Notification Message</label>
      </div>
      <div class="col-75">
        <textarea placeholder="Notification Message" style="height:200px" id="noti_message"></textarea>
      </div>
    </div>
    <div class="row">
      <input type="button" id="submitBut" value="Submit">
    </div>
</div>`;
//injecting form to the targeted website
document.querySelector("body").insertAdjacentHTML("beforeend", html);
let noti_title1=document.getElementById("noti_title")
let noti_message1=document.getElementById("noti_message")
// sending title & msg detail to background js
document.getElementById('submitBut').onclick = function() {
    port12.postMessage({
        heading: "notification",
        title:noti_title1.value,
        message:noti_message1.value
    });
}







