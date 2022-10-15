document.querySelector('#check').addEventListener('click', check)

function check() {

  const hour = document.querySelector('#hour').value

  if (hour === "6am" || hour === "7am"){
    alert("ARIES RISING")
  }else if (hour === "8am" || hour === "9am"){
    alert("TAURUS RISING")
  }else if (hour === "10am" || hour === "11am"){
    alert("GEMINI RISING")
  }else if (hour === "12pm" || hour === "1pm"){
    alert("CANCER RISING")
  }else if (hour === "2pm" || hour === "3pm"){
    alert("LEO RISING")
  }else if (hour === "4pm" || hour === "5pm"){
    alert("VIRGO RISING")
  }else if (hour === "6pm" || hour === "7pm"){
    alert("LIBRA RISING")
  }else if (hour === "8pm" || hour === "9pm"){
    alert("SCORPIO RISING")
  }else if (hour === "10pm" || hour === "11pm"){
    alert("SAGGITARIUS RISING")
  }else if (hour === "12am" || hour === "1am"){
    alert("AQUARIUS RISING")
  }else if (hour === "2am" || hour === "3am"){
    alert("CAPRICORN RISING")
  }else if (hour === "4am" || hour === "5am"){
    alert("PISCES RISING")
  }else{
    alert("INCORRECT FORMAT!!! IE 6am")
  }


}
