const haeLottorivi = async () => {
  // haetaan rajapinnasta data
  const response = await fetch("/viikon-lottorivi");

  console.log("response", response);

  // muutetaan data jsoniksi
  const data = await response.json();

  // tämän jälkeen data muuttuja on sisältää json muotoista käytettävää dataa
  console.log("data", data);

  console.log("Ensimmäinen rivi", data[0]);
  console.log("Toinen rivi", data[1]);
  console.log("Viimeinen rivi", data[data.length - 1]);

  document.querySelector("h1").innerText = data.join(" 👏 ");

  document.querySelector("h1").innerHTML += "<br>Viikon lottorivi:<br>";
  document.querySelector("h1").innerText += data.join(", ");

  document.querySelector("h1").innerHTML += "<br>Rivit:<br>";
  for (let rivi of data) {
    document.querySelector("h1").innerHTML += rivi + "<br>";
  }

  // kuvitellaan tässä että rivit ovatkin arvosanoja
  let total = 0;

  for (let rivi of data) {
    total += rivi;
  }

  console.log("total", total);

  const keskiarvo = total / data.length;
  const keskiarvoRounded = Math.round(keskiarvo);
  const keskiarvoFloored = Math.floor(keskiarvo);
  const keskiarvoCeiled = Math.ceil(keskiarvo);

  console.log("keskiarvo", keskiarvo);
  console.log("keskiarvoRounded", keskiarvoRounded);
  console.log("keskiarvoFloored", keskiarvoFloored);
  console.log("keskiarvoCeiled", keskiarvoCeiled);

  console.log({ keskiarvo });
};

haeLottorivi();

// async avainsanan sijainti vaihtelee hieman funktioiden määrittelyjen mukaan
const anonyymiFunktio = async function () {
  const response = await fetch("/viikon-lottorivi");
};

async function nimettyFunktio() {
  const response = await fetch("/viikon-lottorivi");
}

const arrowFunction = async () => {
  const response = await fetch("/viikon-lottorivi");
};
