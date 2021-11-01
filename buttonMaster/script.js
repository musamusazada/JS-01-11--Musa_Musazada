// const mercButton = document.querySelector("#mercury");
// const venButton = document.querySelector("#venus");
// const marsButton = document.querySelector("#mars");
// const plutoButton = document.querySelector("#pluto");
const vid = document.querySelector("video");
const p = document.querySelector("p")

const buttonArr = document.querySelectorAll("button");

const mercButton = document.querySelector("#merc");
const venusButton = document.querySelector("#venus");
const marsButton = document.querySelector("#mars");
const plutoButton = document.querySelector("#pluto");

let speech = new SpeechSynthesisUtterance();
speech.lang = 'en'

speech.rate = 0.8;
speech.pitch = 0.3;


buttonArr.forEach(button => button.addEventListener('click', function() {
    const siblingArr = [];
    let sibling;
    this.classList.add("default-inset");
    sibling = this.nextElementSibling;
    while (sibling) {
        siblingArr.push(sibling);
        sibling = sibling.nextElementSibling;
    }
    sibling = this.previousElementSibling;
    while (sibling) {
        siblingArr.push(sibling);
        sibling = sibling.previousElementSibling;
    }
    siblingArr.forEach(el => el.classList.remove("default-inset"))
}))

marsButton.addEventListener('click', function() {
    p.textContent = `The red planet Mars, named for the Roman god of war, has long been an omen in the night sky. And in its own way, the planet’s rusty red surface tells a story of destruction. Billions of years ago, the fourth planet from the sun could have been mistaken for Earth’s smaller twin, with liquid water on its surface—and maybe even life.

    Now, the world is a cold, barren desert with few signs of liquid water. But after decades of study using orbiters, landers, and rovers, scientists have revealed Mars as a dynamic, windblown landscape that could—just maybe—harbor microbial life beneath its rusty surface even today.`
    vid.currentTime = '80'
    speech.text = p.textContent;
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(speech);

})
venusButton.addEventListener('click', function() {
    p.textContent = `Venus orbits at an average distance of only 108 million km from the Sun, while Mars is an average of 228 million km. Venus gets as close to Earth as 38 million km, and Mars gets as close as 55.7 million km.

    In terms of size, Venus is almost a twin planet of Earth. Its diameter is 12,104 km, which is 95% the diameter of Earth. Mars is much smaller, with a diameter of only 6,792 km. And again, in terms of mass, Venus is almost Earth’s twin. It has 81% the mass of Earth, while Mars only has 10% the mass of Earth.`
    vid.currentTime = '41'
    speech.text = p.textContent;
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(speech);

})
mercButton.addEventListener('click', function() {
    p.textContent = `Along with Venus, Earth, and Mars, Mercury is one of the rocky planets. It has a solid surface that is covered with craters. It has no atmosphere, and it doesn’t have any moons. Mercury likes to keep things simple.

    This small planet spins around slowly compared to Earth, so one day lasts a long time. Mercury takes 59 Earth days to make one full rotation. A year on Mercury goes by fast. Because it’s the closest planet to the sun, it doesn’t take very long to go all the way around. It completes one revolution around the sun in just 88 Earth days. If you lived on Mercury, you’d have a birthday every three months!`
    vid.currentTime = '26'
    speech.text = p.textContent;
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(speech);

})
plutoButton.addEventListener('click', function() {
    p.textContent = `Pluto is a dwarf planet. A dwarf planet travels around, or orbits, the sun just like other planets. But it is much smaller.

    Clyde Tombaugh discovered Pluto in 1930. He was an astronomer from the United States. An astronomer is a scientist who studies stars and other objects in space. Venetia Burney named Pluto that same year. She was an 11-year-old girl from England.
    
    Pluto is not very big. It is only half as wide as the United States. Pluto is smaller than Earth's moon. This dwarf planet takes 248 Earth years to go around the sun. If you lived on Pluto, you would have to wait 248 Earth years to celebrate your first birthday. One day on Pluto is about 6 1/2 days on Earth.`
    vid.currentTime = '160'
    speech.text = p.textContent;
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(speech);

})












// mercButton.addEventListener('click', function() {
//     p.textContent = "Mercury";
// })

// venButton.addEventListener('click', function() {
//     p.textContent = "Venus";
// })
// marsButton.addEventListener('click', function() {
//     p.textContent = "Mars";
// })
// plutoButton.addEventListener('click', function() {
//     p.textContent = "Pluto";
// })