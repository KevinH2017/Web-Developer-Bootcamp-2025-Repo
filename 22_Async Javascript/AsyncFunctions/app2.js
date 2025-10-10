// async functions will always return a Promise / value or throw error
async function hello() {
    console.log("Hello")
}
hello();

const sing = async () => {
    // throw new Error("A problem has occurred!")
    throw "A problem has occurred!"         // Ignores everything below
    return "FA LA LA LA"
}
sing()
    .then(data => {
        console.log("Promise Resolved With:", data)
    })
    .catch(err => {
        console.log("The promise was rejected!")
        console.log(err)
    })
 

const login = async (username, password) => {
    if (!username || !password) throw "Missing Username / Password"     // the || is 'or'
    if (password == "password") return "Welcome!"
    throw "Invalid Password, Try Again"
}
login("kevin", "password")
    .then(msg => {
        console.log("Login Successful!")
        console.log(msg)
    })
    .catch(err => {
        console.log("Error, incorrect password!")
        console.log(err)
    })

// Changes background color after a delay
const delayedColorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay)
    })
}

async function rainbow() {
    await delayedColorChange('red', 1000)               // await execution until the promise is resolved
    await delayedColorChange('orange', 1000)
    await delayedColorChange('yellow', 1000)
    await delayedColorChange('green', 1000)
    await delayedColorChange('blue', 1000)
    await delayedColorChange('indigo', 1000)
    await delayedColorChange('violet', 1000)
    return "All Finished!"
}

// rainbow().then(() => console.log("END OF RAINBOW"))
// Does the above as an async function
async function printRainbow() {
    await rainbow();
    console.log("END OF RAINBOW")
}
printRainbow();
const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * (4500)) + 500;
        setTimeout(() => {
            if (delay > 2000) {
                reject("Connection Timed Out")
            } else {
                resolve(`Here is your fake data from ${url}`)
            }
        }, delay)
    })
}

async function makeTwoRequests() {
    try {
        let data1 = await fakeRequest('/page1');
        console.log(data1);
        let data2 = await fakeRequest('/page2');
        console.log(data2);
    } catch (e) {
        console.log("Caught an error!")
        console.log("Error is:", e)
    }
}