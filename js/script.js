const mass = [2, 3, 4, "Tima the best"];

function quadro(massive) {
    if (Array.isArray(massive)) {
        for (key in massive) {
            if (typeof massive[key] === "number") {
                massive[key] = massive[key] ** 2
            }
        }

    } else {
        console.log("Incorrect value");
    }
}
quadro(mass)
console.log(mass);