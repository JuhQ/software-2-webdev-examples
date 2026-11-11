async function main() {
  const data = await fetchData(); // Odotetaan, että fetchData-funktion palauttama lupaus ratkeaa
  console.log("Data fetchData-funktiolta:", data);
}
main();

try {
  const response = await fetch(
    "https://api.tvmaze.com/search/shows?q=emmerdale",
  );
  if (!response.ok) {
    // Tarkistetaan, onnistuiko pyyntö (tilakoodi 200–299)
    throw new Error("HTTP-virhe! Tilakoodi: " + response.status);
  }
  const data = await response.json();
  console.log("Haettu data:", data);
  return data; // Palauttaa lupauksen, joka ratkeaa dataksi
} catch (error) {
  console.error("Virhe datan haussa:", error);
}

fetch("https://api.tvmaze.com/search/shows?q=emmerdale")
  .then((response) => response.json()) // Jäsennetään vastaus JSON-muodosta
  .then((data) => {
    console.log("Haettu data:", data); // Tulostetaan haettu data
  })
  .catch((error) => {
    console.error("Virhe datan haussa:", error); // Käsitellään haun aikana syntyneet virheet
  });
