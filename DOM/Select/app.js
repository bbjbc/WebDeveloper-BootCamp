// const allImages = document.getElementsByTagName('img');

// for (let img of allImages) {
//     img.src = 'file:///C:/Users/jobc4/OneDrive/%EB%B0%94%ED%83%95%20%ED%99%94%EB%A9%B4/%EC%A1%B0%EB%B6%95%EB%9E%80/%EC%9B%B9developer/DOM/DOM_files/440px-Silky_bantam.jpg'
// }

// const squreImages = document.getElementsByClassName('square');
// for (let img of squreImages) {
//     img.src = 'file:///C:/Users/jobc4/OneDrive/%EB%B0%94%ED%83%95%20%ED%99%94%EB%A9%B4/%EC%A1%B0%EB%B6%95%EB%9E%80/%EC%9B%B9developer/DOM/DOM_files/440px-Silky_bantam.jpg'
// }

const links = document.querySelectorAll('p a');

for (let link of links) {
    console.log(link.href)
}