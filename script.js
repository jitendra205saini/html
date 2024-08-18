document.addEventListener('DOMContentLoaded', () => {
    // Initialize LocomotiveScroll
    const scroll = new LocomotiveScroll({
        el: document.querySelector('.hello'),
        smooth: true
    });
});



document.getElementById('Toggle').addEventListener('change', function() {
    document.body.classList.toggle('dark-mode');
  });
  
var cursor = document.getElementById("cursor");
document.addEventListener("mousemove", function(e) {
    // var x = e.clientX;
    // var y = e.clientY;
    cursor.style.left = (e.pageX.cursor.offsetHeight/2) + "px";
    cursor.style.top  = (e.pagey.cursor.offsetHeight/2) + "px";
});    