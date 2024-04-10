const floatingRects = document.querySelectorAll('.floating-rectangle');
let moveSpeed = 1;

function setSpeed(speed) {
    switch (speed) {
        case 'normal':
            moveSpeed = 1;
            break;
        case 'turbo':
            moveSpeed = 2;
            break;
        case 'mojo':
            moveSpeed = 9;
            break;
    }
}

document.addEventListener('mousemove', (event) => {
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    floatingRects.forEach((rect) => {
        const rectX = rect.getBoundingClientRect().left;
        const rectY = rect.getBoundingClientRect().top;
        const rectWidth = rect.offsetWidth;
        const rectHeight = rect.offsetHeight;

        const centerX = rectX + rectWidth / 2;
        const centerY = rectY + rectHeight / 2;

        const distanceX = mouseX - centerX;
        const distanceY = mouseY - centerY;

        const moveX = (distanceX > 0 ? Math.min(distanceX, 400) : Math.max(distanceX, -400)) * moveSpeed;
        const moveY = (distanceY > 0 ? Math.min(distanceY, 400) : Math.max(distanceY, -400)) * moveSpeed;

        const newX = Math.max(10, Math.min(rectX - moveX, window.innerWidth - rectWidth - 10));
        const newY = Math.max(10, Math.min(rectY - moveY, window.innerHeight - rectHeight - 10));

        rect.style.transform = `translate(${newX - rectX}px, ${newY - rectY}px)`;
    });
});

function showPopup(id) {
    document.getElementById(id).style.display = "block";
}

function hidePopup(id) {
    document.getElementById(id).style.display = "none";
}

document.addEventListener("click", function(event) {
    if (!event.target.matches(".icon") && !event.target.closest(".popup")) {
        var popups = document.getElementsByClassName("popup");
        for (var i = 0; i < popups.length; i++) {
            popups[i].style.display = "none";
        }
    }
});