function animateValue(id, limit) {
    const obj = document.getElementById(id);
    let current = parseInt(obj.textContent);
    const interval = setInterval(function () {
        obj.textContent = current++;
        if (current > limit) {
            clearInterval(interval)
        }
    }, 1);
}
animateValue('value1', 984);
animateValue('value2', 920);
animateValue('value3', 802);
animateValue('value4', 900);


// const count = document.getElementById('funfacts');
// const showPosition = count.getBoundingClientRect().y + window.scrollY - window.innerHeight / 2;
// const counting = document.querySelectorAll('.value');
// let showed = false;
// window.addEventListener('scroll', () => {
//     if (window.scrollY > showPosition && !showed) {


//         function animateValue(id, limit) {
//             const obj = document.getElementById(id);
//             let current = parseInt(obj.textContent);
//             const interval = setInterval(function () {
//                 obj.textContent = current++;
//                 if (current > limit) {
//                     clearInterval(interval)
//                 }
//             }, 1);
//         }
//         animateValue('value1', 984);
//         animateValue('value2', 920);
//         animateValue('value3', 802);
//         animateValue('value4', 1000);

//     }
// })


