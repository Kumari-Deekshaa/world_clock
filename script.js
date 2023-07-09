const updatetime = ()=>{
    let d = new Date();
    india.innerHTML = d.toLocaleString('en-US',{timeZone: 'Asia/Kolkata',}).split(", ")[1];      //split for just time not data
    usa.innerHTML = d.toLocaleString('en-US',{timeZone: 'America/Los_Angeles',}).split(", ")[1];
    china.innerHTML = d.toLocaleString('en-US',{timeZone: 'Asia/Shanghai',}).split(", ")[1]; 
    
    let alarmhour = alarm.value.split(":")[0];
    let alarmmin = alarm.value.split(":")[1];
    if(d.getHours()==alarmhour && d.getMinutes()==alarmmin){
        console.log("alarm");
        let audio = new Audio('https://file-examples.com/storage/fede3f30f864a1f979d2bf0/2017/11/file_example_MP3_700KB.mp3');
        audio.play();
    }
}

setInterval(() => {
    updatetime();
}, 1000);