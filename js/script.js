function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
    x.style.display = "none";
    } else {
    x.style.display = "block";
    }
}


const readMoreBtn = document.querySelector('.read-more-btn');
function myFunction2() {
    var x = document.getElementById("moreText");
    if (x.style.display === "block") {
    x.style.display = "none";
    readMoreBtn.textContent = 'Read More';
    } else {
    x.style.display = "block";
    readMoreBtn.textContent = 'Read Less';
    }
}