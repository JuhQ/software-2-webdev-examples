const name = prompt("name pls");

document.querySelector("#target").innerHTML = "Hello, " + name + "!";
document.querySelector("#target").innerHTML = `Hello, ${name}!`;
