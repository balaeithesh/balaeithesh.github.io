// hamburger
var hamburger = document.getElementById("hamburger");
var ul = document.getElementById("ul")

hamburger.addEventListener('click', () => {
    ul.classList.toggle("shownav");
});

var navheadings = document.querySelectorAll(".navheadings");

navheadings.forEach(e => e.addEventListener('click', () => {
    ul.classList.remove('shownav');
}))

// time function
function Clock(){
    var date = new Date();
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    var period = "AM";
    
    if(hour==0){
        hour=24;
    }
    if (hour>12){
        hour = hour - 12;
        period = "PM";
     }
    if(hour<10){
        hour = "0" + hour;
    }
    if(min<10){
        min = "0" + min;
    }
    if(sec<10){
        sec = "0" + sec;
    }

    var time = hour + ":" + min + ":" + sec + '-' + period;
    document.getElementById("time").innerHTML = time;
    setTimeout(Clock,1000);
}
Clock()

// like function
function showRatingDialog() {
    const ratingDialog = document.getElementById('ratingDialog');
    ratingDialog.style.display = 'flex';
  }
  
function rateContent(event) {
    const stars = document.querySelectorAll('.star');
    stars.forEach(star => {
    star.classList.remove('rated');
    });

    const selectedStar = event.target;
    const value = selectedStar.dataset.value;
    for (let i = 0; i < value; i++) {
    stars[i].classList.add('rated');
    }
}
