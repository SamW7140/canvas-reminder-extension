document.getElementById("rem-butt").addEventListener("click",()=> {
    console.log("Reminder button clicked");
    //Notification for test
    chrome.notifications.create('', {
        type: "basic",
        iconUrl: "icon.png",
        title: "Reminder",
        message: "Time to do your task"
    });
    console.log("Reminder created");
});
