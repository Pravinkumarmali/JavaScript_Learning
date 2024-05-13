const clock = document.getElementById("clock");
// const clock = document.querySelector('#clock')

// Syntex:- setInterval(function () {}, Interval);

setInterval(function () {
  let date = new Date();
  //   console.log(date.toLocaleTimeString());
  // isse console par har 1 second me time update hoga but hame console par nahi print karna hai, hame to frontend par chahiye.
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);
