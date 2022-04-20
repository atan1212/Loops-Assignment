// 1 to 100

// Event listeners
document.getElementById("imsohappy!").addEventListener("click", countto100);
document.getElementById("multiplesof4").addEventListener("click", mo4)
document.getElementById("oddnum").addEventListener("click", on1155)
document.getElementById("sum1").addEventListener("click", sos1)
document.getElementById("sum2").addEventListener("click", sos2)

// Event Functions
function countto100() {
    for (num = 1; num <= 500; num++){
        console.log("I'm so happy!");
    }
}

function mo4() {
    for (num = 12; num <= 800; num += 4) {
        console.log(num);
    }
}

function on1155() {
    for (num = 11; num <= 55; num += 2) {
        console.log(num);
    }
}

function sos1() {
    let sum = 0;
    for (num = 5; num <= 50; num++) {
        sum = num + sum;
    }
    console.log(sum);
}

function sos2() {
    let sum = 0;
    for (num = 10; num <= 100; num += 10) {
        sum = num + sum;
    }
    console.log(sum);
}
