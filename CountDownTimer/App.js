const endDate = "18 May 2023 10:00 PM"
const inputs = document.querySelectorAll("input")

document.getElementById("end-date").innerHTML = endDate;

function clock() {
    const end = new Date(endDate);
    const now = new Date();
    const diff = (end - now) /1000;  //convert milisecond to seconds
    
    if (diff < 0) return;

    inputs[0].value = Math.floor(diff/ 3600 / 24);
    inputs[1].value = Math.floor(diff/ 3600) % 24;
    inputs[2].value = Math.floor(diff / 60 )% 60;
    inputs[3].value = Math.floor(diff) % 60 ;
}

clock();

setInterval (
    () => {
        clock();
    }
)