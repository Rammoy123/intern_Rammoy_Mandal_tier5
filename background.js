
chrome.runtime.onConnect.addListener((obj)=>{
    obj.onMessage.addListener(function(msg) {
        console.log(msg);
        if (msg.msg_org == "lol!!")
        {
            console.log(msg.key)
            
           // console.log(msg.title)
            chrome.alarms.create("alarm1",{delayInMinutes:1});
            console.log("rang once twice");
              // after 1 minute the alarm will ring & will close the Tab
            chrome.alarms.onAlarm.addListener((data)=>
             {
                if(data.name==="alarm1"){
                console.log("rang once");
                let p=msg.key;
                chrome.tabs.query({ url:'https://www.google.com/search?q='+p }, function(tabs){
                console.log(tabs)
                chrome.tabs.remove(tabs[0].id);
        })
    }
    })
         }
         //printing the active tab
    
         if(msg.printing)
         {
             function print()
         {
             window.print()
         }
             console.log("this is for printing");
            chrome.tabs.query({ active: true,currentWindow: true }, function(tabs) {  
                console.log(tabs);
                 let  current=tabs[0].id;
                chrome.scripting.executeScript({
                target: {tabId: current},
                function: print,
                });

            });
            // console.log("this is for printing");
         }
       })

     
    
// Notification which will show title & msg from content js
obj.onMessage.addListener(function(request) {

    if(request.heading==="notification")
    {
        console.log(request.title)
        console.log(request.message)
        chrome.notifications.create("notifyTest",{
            iconUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Flat_tick_icon.svg/1200px-Flat_tick_icon.svg.png",
             type:"basic",
             title:request.title,
             message:request.message
        }) 
    }

})

})

