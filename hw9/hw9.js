let myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Привет, мир!");
    }, 2000);
})

.then((resolve) => {
     console.log(resolve)
    }
)

let uncertainPromise = new Promise((resolve, reject) => {
    if (Math.random() > 0.5) {
        resolve(10);
    } else {
        reject("Ошибка!");
    }
})

.then((success)=>{console.log(success)})
    .then((decline)=>{console.log(decline)})

let promises = [
    Promise.resolve(1),
    Promise.resolve(2),
    Promise.resolve(3)
];

Promise.all([promises]).then((all)=>{console.log(all)})


let myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Привет, мир!");
    }, 2000);
})

    .then((resolve) => {
            console.log(resolve)
        }
    )
async function waitForHello() {
    let message = await myPromise
    console.log(message);
}

waitForHello()