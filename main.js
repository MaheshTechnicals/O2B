let input = document.querySelector("#input")
let output = document.querySelector("#output")
let btn = document.querySelector("#btn")
let btn2 = document.querySelector("#copy")
let display = document.querySelector("#display")




// On Click Activity On Get Code Button.

btn.addEventListener("click", () => {

  if (input.value == "") {
    input.style.border = "2px solid red"
  }

  else {
    show()
  }


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


  // Remove That strings which don't have "."" or "!" or "।".


  const removeExtras = arr1.filter(str => {
    const lastChar = str.slice(-1);
    return lastChar === "." || lastChar === "!" || lastChar === "|" || lastChar === "।";
  });





  // Remove Duplicate Strings From above array.

  const uniqueStrings = Array.from(new Set(removeExtras));



  // Display all your filtered array of strings in output box.

  uniqueStrings.forEach((every) => {


    let c = `<blockquote class="mycard">${every}</blockquote>`

    output.value += c
  })



  // copy code Button function.

  btn2.addEventListener("click", () => {

    if (output.value == "") {


      btn2.innerHTML = `<i class="fa-solid fa-circle-xmark"></i>`
      btn2.style.background = "red"
      btn2.style.color = "white"

      setTimeout(() => {

        btn2.innerHTML = "Copy Code"
        btn2.style.background = "transparent"
        btn2.style.color = "black"
      }, 2000)


    }

    else {
      navigator.clipboard.writeText(output.value)

      btn2.innerHTML = `<i class="fa-solid fa-check"></i>`
      btn2.style.background = "green"
      btn2.style.color = "white"

      setTimeout(() => {

        btn2.innerHTML = "Copy Code"
        btn2.style.background = "transparent"
        btn2.style.color = "black"
        output.value = ""
      }, 2000)
    }
  })


  // Added Numbeeer of Shayaries we have :
  count.innerHTML = uniqueStrings.length






}