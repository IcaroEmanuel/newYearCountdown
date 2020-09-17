const secondsContainer = document.querySelector('#seconds')
const minutesContainer = document.querySelector('#minutes')
const hoursContainer = document.querySelector('#hours')
const daysContainer = document.querySelector('#days')
const nextYearContainer = document.querySelector('#year')
const spinnerLoading = document.querySelector('#loading')
const countdownContainer = document.querySelector('#countdown')

const nextYear = new Date().getFullYear() + 1

const newYear = new Date(`01-01-${nextYear} 00:00:00`)

nextYearContainer.textContent = nextYear

const getTimeUnit = unit => unit < 10 ? '0' + unit : unit

const insertCountDownValues = ({ days, hours, minutes, seconds }) => {
  secondsContainer.textContent = getTimeUnit(seconds)
  minutesContainer.textContent = getTimeUnit(minutes)
  hoursContainer.textContent = getTimeUnit(hours)
  daysContainer.textContent = getTimeUnit(days)
}

const UpdateCountDow = () => {
  const currentTime = new Date()
  const difference = newYear - currentTime //Get the difference in milliseconds between the hour of the first day of 2021 and the current date
  const days = Math.floor(difference / 1000 / 60 / 60 / 24)//Get the difference in days between the hour of the first day of 2021 and the current date
  const hours = Math.floor(difference / 1000 / 60 / 60) % 24//Get the difference in hours between the hour of the first day of 2021 and the current date
  const minutes = Math.floor(difference / 1000 / 60) % 60//Get the difference in minutes between the hour of the first day of 2021 and the current date
  const seconds = Math.floor(difference / 1000) % 60//Get the difference in seconds between the hour of the first day of 2021 and the current date

  insertCountDownValues({ days, hours, minutes, seconds })
}

const handleCountdownDisplay = () => {
  spinnerLoading.remove()
  countdownContainer.style.display = 'flex'
}

setTimeout(handleCountdownDisplay, 1000)

setInterval(UpdateCountDow, 1000)
