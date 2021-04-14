// 1. Notification API Support

if (!('Notification' in window)) {
    alert('Notification API not supported!');
    return;
}

// 2. User Permission

Notification.requestPermission();

// 3. Try/ Catch

try {
} catch (err) {
    alert('Notification API error: ' + err);
}

// 4. Notification with message and onclick function

var notification;
if(this.newMessage == "") {
    notification = new Notification("Default Notification");
} else {
   notification= new Notification(this.newMessage);
}
notification.onclick = function(event) {
    event.preventDefault();
    window.open('/', '_blank');
}

// 5. Notification Delay

var start = new Date().getTime();
for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > this.time){
    break;
    }
}
