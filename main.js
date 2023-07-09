
// function changerImg () {
//     var i = 0;
//     if (document.getElementsByClassName('info__rom-changer--left')) {
//         var number = document.getElementById('img1').getAttribute('src')
//         var changer = document.getElementById('info__rom-large1').setAttribute('src', number)
//         return console.log(changer)
//     } else if (document.getElementsByClassName('info__rom-changer--right')) {
//         var number = document.getElementById('img3').getAttribute('src')
//         var changer = document.getElementById('info__rom-large1').setAttribute('src', number)
//         return console.log(0)
//     }
// }

let image = [
    'https://3mhotelphutho.com/images/phong-don-vip-1.png',
    'https://3mhotelphutho.com/images/room-1_2.png',
    'https://3mhotelphutho.com/images/phong-don-vip-3.png',
    'https://3mhotelphutho.com/images/room-1_3.png'
];

var number = 0;

function changerImgRight () {
    var next = document.getElementById('info__rom-large1');
    number++;
    if (number >= image.length) { 
        number = 0;
        next.src = image[number]
    } else {
        next.src = image[number]
    }
} 

function changerImgLeft () {
    var next = document.getElementById('info__rom-large1');
    number--;
    if (number < 0) { 
        number = image.length - 1;
        next.src = image[number]
    } else {
        next.src = image[number]
    }
} 