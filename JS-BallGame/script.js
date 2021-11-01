const element = document.querySelector(".ball")
const coords = element.getBoundingClientRect()
let eye = getComputedStyle(document.querySelector('.ball'), ':before')
let posTop = 55;
let posLeft = 50;

document.addEventListener("keypress", function(e) {
    switch (e.key) {
        case "w":
            coords.y -= 15
            posTop += 1;
            break;
        case "a":
            coords.x -= 15
            posLeft += 1;
            break;
        case "d":
            coords.x += 15
            posLeft -= 1;
            break;
        case "s":
            coords.y += 15
            posTop -= 1;
            break;

    }
    // if (element.style.top == 0) {
    //     console.log("hi")
    //     element.style.top = `-20px`
    // } else {
    //     element.style.top = `${coords.y}px`

    // }
    if (coords.y <= 0) {
        PlaySound("boing")
        coords.y = 40;
        element.style.top = `${coords.y+35}px`
    } else if (coords.x <= 0) {
        PlaySound("boing")
        coords.x = 40;
        element.style.left = `${coords.x+35}px`
    } else if (coords.y >= window.innerHeight - 90) {
        PlaySound("boing")
        coords.y = window.innerHeight - 175;
        element.style.top = `${coords.y}px`
    } else if (coords.x >= window.innerWidth - 100) {
        PlaySound("boing")
        coords.x = window.innerWidth - 175;
        element.style.top = `${coords.y}px`
    } else {
        element.style.top = `${coords.y}px`
        element.style.left = `${coords.x}px`
        if (posTop >= 60) {
            posTop = 60;
            document.documentElement.style.setProperty('--top', posTop + 'px');
        } else if (posTop <= 38) {
            posTop = 38;
            document.documentElement.style.setProperty('--top', posTop + 'px');

        } else {
            document.documentElement.style.setProperty('--top', posTop + 'px');
        }
        if (posLeft <= 38) {
            posLeft = 38;
            document.documentElement.style.setProperty('--left', posLeft + 'px');

        } else if (posLeft >= 64) {
            posLeft = 64;
            document.documentElement.style.setProperty('--left', posLeft + 'px');
        } else {
            document.documentElement.style.setProperty('--left', posLeft + 'px');
        }


    }




})