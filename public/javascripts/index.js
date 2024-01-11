document.addEventListener("DOMContentLoaded", function() {
    const follower = document.getElementById("follower");
    const about = document.getElementById("about");
    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true,
    });

    document.addEventListener("mousemove", function(e) {
        const x = e.clientX;
        const y = e.clientY + locoScroll.scroll.instance.scroll.y;

        // Set the position fixed for the follower element
        follower.style.position = "fixed";
        follower.style.left = x + "px";
        follower.style.top = y + "px";
    });
   
    // Rest of your code...
    

    // Use querySelectorAll to get a NodeList of elements with the class "al"
    const alElements = document.querySelectorAll(".al");
    const p = document.querySelector('p');

    // Loop through each element and attach a mouseover event listener
    alElements.forEach(function(element) {
        element.addEventListener("mouseover", function() {
            follower.style.height = "25px";
            follower.style.width = "40px";
            p.style.display = "block";
        });

        element.addEventListener("mouseleave", function() {
            follower.style.height = "10px";
            follower.style.width = "10px";
            p.style.display = "none";
        });
    });

})