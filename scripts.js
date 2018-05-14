function takeQuiz() {
  let name = "";
  while (name !== "silas harger") {
    console.log(`The name is ${name}`);
    name = prompt("What is my name?").toLowerCase();
    if (name !== "silas harger") {
      alert("Try again!");
    } else {
      alert("Correct!");
    }
  }

  let answer = "";
  while (answer !== "11") {
    answer = prompt("How old am I?");
    if (answer !== "11") {
      alert("Try again!");
    } else {
      alert("Correct!");
    }
  }

  let born = "";
  while (born !== "atlanta georgia") {
    born = prompt("Where was I born?")
      .toLowerCase()
      .replace(",", "");
    if (born !== "atlanta georgia") {
      alert("Try again!");
    } else {
      alert("Correct!");
    }
  }

  let disease = "";
  while (disease !== "ee") {
    disease = prompt("What is the disease I have called?")
      .toLowerCase()
      .replace(".", "")
      .replace(".", "");
    if (disease !== "ee") {
      alert("Try again!");
    } else {
      alert("Correct");
    }
  }
}
