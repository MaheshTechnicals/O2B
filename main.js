let input = document.querySelector("#input")
let output = document.querySelector("#output")
let btn = document.querySelector("#btn")
let copy = document.querySelector("#copy")
let display = document.querySelector("#display")




// On Click Activity On Get Code Button.

btn.addEventListener("click", () => {

  show()
})







// Function for Geting HTML Data and show in the display.

let show = () => {
  display.innerHTML = input.value


  // Select All Li.
  let lilist = document.querySelectorAll("li")


  // Create One Array For store all li strings.
  let arr1 = []

  //Console all li strings.

  lilist.forEach((each) => {

    arr1.push(each.innerHTML)

  })


  // Remove That strings which don't have "."" or "!".









}