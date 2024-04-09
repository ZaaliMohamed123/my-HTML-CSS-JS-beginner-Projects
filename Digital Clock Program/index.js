//Digital Clock Program

function updateClock(){
    let now = new Date();
    let hours = now.getHours();
    const meridiem = hours>=12?"PM":"AM";
    hours = hours%12 || 12 ;//if hours%12 =0 then hours =12
    hours = hours.toString().padStart(2,0);
    const minutes = now.getMinutes().toString().padStart(2,0);
    //The padStart() method is a string method in JavaScript that pads the current 
    //string with another string (repeated as necessary) 
    //so that the resulting string reaches a specified length.
    //Syntax : string.padStart(targetLength [, padString]);
    const seconds = now.getSeconds().toString().padStart(2,0);
    const timeString = `${hours}:${minutes}:${seconds} ${meridiem}`;
    document.getElementById("clock").textContent = timeString ;
}
//setInteval function call a function repeadetly 
setInterval(updateClock,1000);//it will call updateclock every 1s