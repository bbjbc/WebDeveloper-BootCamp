// let totalEggs = 0;
// function collectEggs(){
//     let totalEggs = 6;
// }
// console.log(totalEggs);
// collectEggs();
// console.log(totalEggs);

// let bird = 'Scarlet Macaw';
// function birdWatch() {
//     let bird = 'Great Blue Heron';
//     console.log(bird);
// }
// birdWatch();

// let radius = 8;
// if (radius > 0) {
//     const PI = 3.14159;
//     let msg = 'HOHOO!';
// }
// console.log(radius);
// console.log(PI);

// for (let i = 0; i < 5; i++) {
//     var msg = "ASDASFFAGS";
//     console.log(msg)
// }

function bankRobbery() {
    const heroes = ['Spiderman', 'Wolverine', 'Black Panther', 'Ironman'];
    function cryForHelp() {
        function inner() {
            for (let hero of heroes) {
                console.log(`Please help us, ${hero.toUpperCase()}`);
            }
        }
        inner();
    }
    cryForHelp();
}