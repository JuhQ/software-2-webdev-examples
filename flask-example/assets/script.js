document.querySelector("h1").innerText = "My grades";

const getGrades = async () => {
  const response = await fetch("/api/grades");
  const data = await response.json();

  console.log("response", response);
  console.log("data", data);

  const ul = document.querySelector("ul");

  let total = 0;
  for (let grade of data) {
    console.log("grade", grade);

    total += grade;

    const li = `<li>${grade}</li>`;

    // += is shorthand for ul.innerHTML = ul.innerHTML + li;
    ul.innerHTML += li;
    // ul.innerHTML = ul.innerHTML + li;
  }

  const average = total / data.length;
  const gradeRounded = Math.round(average);
  const gradeFloored = Math.floor(average);
  const gradeCeiled = Math.ceil(average);

  console.log("total", total);
  console.log("average", average);
  console.log("gradeRounded", gradeRounded);
  console.log("gradeFloored", gradeFloored);
  console.log("gradeCeiled", gradeCeiled);

  document.querySelector(".grade-average").innerText =
    `Average: ${gradeRounded}`;

  // different ways to do the same loop
  // data.forEach((grade) => {
  //   const li = `<li>${grade}</li>`;
  //   ul.innerHTML += li;
  // });

  // let i = 0;
  // while (i < data.length) {
  //   const grade = data[i];
  //   const li = `<li>${grade}</li>`;

  //   ul.innerHTML += li;

  //   i++;
  // }

  // for (let i = 0; i < data.length; i++) {
  //   const grade = data[i];
  //   const li = `<li>${grade}</li>`;

  //   ul.innerHTML += li;
  // }
};

getGrades();

// examples of async keyword in different function declarations

const getGradesArrow = async () => {
  const response = await fetch("/api/grades");
};

const getGradesUnnamedFunction = async function () {
  const response = await fetch("/api/grades");
};

async function getGradesNamedFunction() {
  const response = await fetch("/api/grades");
}
