const today = new Date();

const todayDate = today.getDate();
const todayMonth = today.getMonth() + 1;
const todayYear = today.getFullYear();

console.log(todayDate, todayMonth, todayYear);

const dayIn = document.getElementById("dayinp");
const monthIn = document.getElementById("monthinp");
const yearIn = document.getElementById("yearinp");
const go = document.getElementById("go");

const dayError = document.getElementById("dayerror");
const monthError = document.getElementById("montherror");
const yearError = document.getElementById("yearerror");

const dayOut = document.getElementById("days");
const monthOut = document.getElementById("months");
const yearOut = document.getElementById("years");

const calculations = () => {
  const dayValue = parseInt(dayIn.value);
  const monthValue = parseInt(monthIn.value);
  const yearValue = parseInt(yearIn.value);

  dayError.textContent = "";
  monthError.textContent = "";
  yearError.textContent = "";

  //   Day Calculation
  if (isNaN(dayValue)) {
    dayError.textContent = "Input a Number";
    return;
  } else if (dayValue < 1 || dayValue > 31) {
    dayError.textContent = "Please enter a valid day (1-31)";
    return;
  } else if (
    monthValue === 4 ||
    monthValue === 6 ||
    monthValue === 9 ||
    monthValue === 11
  ) {
    if (dayValue > 30) {
      dayError.textContent = "Please enter a valid day (1-30)";
      return;
    }
  } else if (monthValue === 2) {
    if (yearValue % 4 === 0) {
      if (dayValue > 29) {
        dayError.textContent = "Please enter a valid day (1-29)";
        return;
      }
    } else {
      if (dayValue > 28) {
        dayError.textContent = "Please enter a valid day (1-28)";
        return;
      }
    }
  } else {
    if (dayValue < today.getDate()) {
      const dayDiff = Math.abs(today.getDate() - dayValue);
      dayOut.textContent = dayDiff.toFixed(0) + " ";
    } else {
      if (
        (dayValue >= today.getDate() && today.getMonth() !== 2) ||
        today.getMonth() !== 4 ||
        today.getMonth() !== 6 ||
        today.getMonth() !== 9 ||
        today.getMonth() !== 11
      ) {
        const dayDiff = Math.abs(31 - dayValue + today.getDate());
        dayOut.textContent = dayDiff.toFixed(0) + " ";
      } else if (
        dayValue >= today.getDate() &&
        (today.getMonth() === 2 ||
          today.getMonth() === 4 ||
          today.getMonth() === 6 ||
          today.getMonth() === 9 ||
          today.getMonth() === 11)
      ) {
        if (
          today.getMonth() === 4 ||
          today.getMonth() === 6 ||
          today.getMonth() === 9 ||
          today.getMonth() === 11
        ) {
          const dayDiff = Math.abs(30 - dayValue + today.getDate());
          dayOut.textContent = dayDiff.toFixed(0) + " ";
        } else if (today.getMonth() === 2) {
          if (yearValue % 4 === 0) {
            const dayDiff = Math.abs(29 - dayValue + today.getDate());
            dayOut.textContent = dayDiff.toFixed(0) + " ";
          } else if (!yearValue % 4 === 0) {
            const dayDiff = Math.abs(28 - dayValue + today.getDate());
            dayOut.textContent = dayDiff.toFixed(0) + " ";
          }
        }
      }
    }
  }

  //   Month Calculation
  if (isNaN(monthValue)) {
    monthError.textContent = "Input a Number";
    return;
  } else if (monthValue < 1 || monthValue > 12) {
    monthError.textContent = "Please enter a valid month (1-12)";
    return;
  } else {
    if (monthValue > today.getMonth() + 1) {
      if (dayValue < today.getDate()) {
        const monthDiff = Math.abs(today.getMonth() + 1 - monthValue + 12);
        monthOut.textContent = monthDiff.toFixed(0) + " ";
      } else if (dayValue >= today.getDate()) {
        const monthDiff = Math.abs(today.getMonth() + 1 - monthValue + 12 - 1);
        monthOut.textContent = monthDiff.toFixed(0) + " ";
      }
    } else if (monthValue < today.getMonth() + 1) {
      if (dayValue < today.getDate()) {
        const monthDiff = Math.abs(today.getMonth() + 1 - monthValue);
        monthOut.textContent = monthDiff.toFixed(0) + " ";
      } else {
        const monthDiff = Math.abs(today.getMonth() + 1 - monthValue - 1);
        monthOut.textContent = monthDiff.toFixed(0) + "  ";
      }
    } else {
      if (dayValue <= today.getDate()) {
        const monthDiff = Math.abs(today.getMonth() + 1 - monthValue);
        monthOut.textContent = monthDiff.toFixed(0) + " ";
      } else {
        const monthDiff = 11;
        monthOut.textContent = monthDiff.toFixed(0) + " ";
      }
    }
  }

  //   Year Calculation
  if (isNaN(yearValue)) {
    yearError.textContent = "Input a Number";
    return;
  } else if (yearValue < 1900) {
    yearError.textContent = "Minimum year is 1900";
    let yearValue = 1900;
  } else {
    if (monthValue > today.getMonth() + 1) {
      const yearDiff = Math.abs(today.getFullYear() - yearValue - 1);
      yearOut.textContent = yearDiff.toFixed(0) + " ";
    } else if (monthValue < today.getMonth() + 1) {
      const yearDiff = Math.abs(today.getFullYear() - yearValue);
      yearOut.textContent = yearDiff.toFixed(0) + " ";
    } else {
      if (dayValue <= today.getDate()) {
        const yearDiff = Math.abs(today.getFullYear() - yearValue);
        yearOut.textContent = yearDiff.toFixed(0) + " ";
      } else {
        const yearDiff = Math.abs(today.getFullYear() - yearValue - 1);
        yearOut.textContent = yearDiff.toFixed(0) + " ";
      }
    }
  }

  //   Giving the Results
  // dayOut.textContent = dayDiff;
  // monthOut.textContent = monthDiff;
  // yearOut.textContent = yearDiff;
};

go.addEventListener("click", () => {
  calculations();
});
