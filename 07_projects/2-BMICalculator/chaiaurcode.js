const form = document.querySelector("form");

// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener("submit", function (e) {
  e.preventDefault(); // form ko prevent karane ke liye use hota hai.

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");
  const range = document.querySelector("#range");

  //   Note:- " .value " ka use DOM me value lene ke liye hota hai. But se jo value aayegi vo "string" mai aayegi.

  // Isliye hame "parseInt" ka use karege jisse value string se integer me convert hogi. And hum iska use decimal value ko integer me convert karne ke liye bhi karte hai.

  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result
    results.innerHTML = `<span>${bmi}</span>`;
    if (bmi < 18.6) {
      range.innerHTML = "Under Weight";
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      range.innerHTML = "Normal Range";
    } else {
      range.innerHTML = "Greater than 24.9";
    }
  }
});

18.6 >= bmi <= 24.9;
// Note:-
// height != NaN; old technique ,
// isNaN(heigth) if iska result true aata hai to ye number me convertable hogi , nahi to false aayega.
// ye new method hai or Documantation me recommended bhi hai.
