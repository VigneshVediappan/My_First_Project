function updateClock() {
    const now = new Date();

    const time = now.toLocaleTimeString();

    document.getElementById("clock").textContent = time;
}

setInterval(updateClock, 1000);

updateClock();

function sayHello() {
    alert("Welcome to my developer world! 🚀");
}