const today = new Date();

const todayDate = today.getDate();
const todayMonth = today.getMonth() + 1;
const todayYear = today.getFullYear();

const lastMonth = todayMonth - 1;

const dayIn = document.getElementById("dayinp");
const monthIn = document.getElementById("monthinp");
const yearIn = document.getElementById("yearinp");
const go = document.getElementById("go");
const head = document.getElementsByTagName("h3");

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

  head[0].style.color = "#6c6c6c";
  head[1].style.color = "#6c6c6c";
  head[2].style.color = "#6c6c6c";

  const notYet = () => {
    if (
      lastMonth === 4 ||
      lastMonth === 6 ||
      lastMonth === 9 ||
      lastMonth === 11
    ) {
      const dayDiff = Math.abs(todayDate + (30 - dayValue));
      dayOut.textContent = dayDiff.toFixed(0);
    } else if (lastMonth === 2) {
      if (yearValue % 100 !== 0 && yearValue % 4 === 0) {
        const dayDiff = Math.abs(todayDate + (29 - dayValue));
        dayOut.textContent = dayDiff.toFixed(0);
      } else {
        const dayDiff = Math.abs(todayDate + (28 - dayValue));
        dayOut.textContent = dayDiff.toFixed(0);
      }
    } else {
      const dayDiff = Math.abs(todayDate + (31 - dayValue));
      dayOut.textContent = dayDiff.toFixed(0);
    }
  };

    //   Day Calculation
    if (isNaN(dayValue)) {
        dayError.textContent = "Input a Number";
        head[0].style.color = "red";
        return;
      } else if (dayValue < 1 || dayValue > 31) {
        dayError.textContent = "Please enter a valid day (1-31)";
        head[0].style.color = "red";
        return;
      } else if (
        monthValue === 4 ||
        monthValue === 6 ||
        monthValue === 9 ||
        monthValue === 11
      ) {
        if (dayValue > 30) {
          dayError.textContent = "Please enter a valid day (1-30)";
          head[0].style.color = "red";
          return;
        }
      } else if (monthValue === 2) {
        if (yearValue % 100 !== 0 && yearValue % 4 === 0) {
          if (dayValue > 29) {
            dayError.textContent = "Please enter a valid day (1-29)";
            head[0].style.color = "red";
            return;
          }
        } else {
          if (dayValue > 28) {
            dayError.textContent = "Please enter a valid day (1-28)";
            head[0].style.color = "red";
            return;
          }
        }
      }

  //   Month Calculation
  if (isNaN(monthValue)) {
    monthError.textContent = "Input a Number";
    head[1].style.color = "red";
    return;
  } else if (monthValue < 1 || monthValue > 12) {
    monthError.textContent = "Please enter a valid month (1-12)";
    head[1].style.color = "red";
    return;
  } else {
    if (monthValue > todayMonth) {
      if (dayValue <= todayDate) {
        const monthDiff = Math.abs(todayMonth - monthValue + 12);
        monthOut.textContent = monthDiff.toFixed(0) + " ";

        const dayDiff = Math.abs(todayDate - dayValue);
        dayOut.textContent = dayDiff.toFixed(0);
      } else if (dayValue > todayDate) {
        const monthDiff = Math.abs(todayMonth - monthValue + 12 - 1);
        monthOut.textContent = monthDiff.toFixed(0) + " ";

        notYet();
      }
    } else if (monthValue < todayMonth) {
      if (dayValue <= todayDate) {
        const monthDiff = Math.abs(todayMonth - monthValue);
        monthOut.textContent = monthDiff.toFixed(0) + " ";

        const dayDiff = Math.abs(todayDate - dayValue);
        dayOut.textContent = dayDiff.toFixed(0);
      } else {
        const monthDiff = Math.abs(todayMonth - monthValue - 1);
        monthOut.textContent = monthDiff.toFixed(0) + "  ";

        notYet();
      }
    } else if (monthValue == todayMonth) {
      if (dayValue <= todayDate) {
        const monthDiff = Math.abs(todayMonth - monthValue);
        monthOut.textContent = monthDiff.toFixed(0) + " ";

        const dayDiff = Math.abs(todayDate - dayValue);
        dayOut.textContent = dayDiff.toFixed(0);
      } else if (dayValue > todayDate) {
        const monthDiff = 11;
        monthOut.textContent = monthDiff.toFixed(0) + " ";

        notYet();
      }
    }
  }

  //   Year Calculation
  if (isNaN(yearValue)) {
    yearError.textContent = "Input a Number";
    head[2].style.color = "red";
    return;
  } else if (yearValue > todayYear) {
    yearError.textContent = "Year cannot be in the future";
    head[2].style.color = "red";
    return;
  } else if (yearValue < 1900) {
    yearError.textContent = "Minimum year is 1900";
    head[2].style.color = "red";
    return;
  } else if (yearValue == todayYear) {
    if (monthValue > todayMonth) {
      monthError.textContent = "Month is in the future";
      return;
    } else if (monthValue < todayMonth) {
      if (dayValue <= todayDate) {
        const monthDiff = Math.abs(todayMonth - monthValue);
        monthOut.textContent = monthDiff.toFixed(0);

        const dayDiff = Math.abs(todayDate - dayValue);
        dayOut.textContent = dayDiff.toFixed(0);
      } else if (dayValue > todayDate) {
        const monthDiff = Math.abs(todayMonth - monthValue);
        monthOut.textContent = monthDiff.toFixed(0);
      }
    }
    const yearDiff = Math.abs(todayYear - yearValue);
    yearOut.textContent = yearDiff.toFixed(0);
  } else {
    if (monthValue > todayMonth) {
      const yearDiff = Math.abs(todayYear - yearValue - 1);
      yearOut.textContent = yearDiff.toFixed(0) + " ";
    } else if (monthValue < todayMonth) {
      const yearDiff = Math.abs(todayYear - yearValue);
      yearOut.textContent = yearDiff.toFixed(0) + " ";
    } else {
      if (dayValue <= todayDate) {
        const yearDiff = Math.abs(todayYear - yearValue);
        yearOut.textContent = yearDiff.toFixed(0) + " ";
      } else {
        const yearDiff = Math.abs(todayYear - yearValue - 1);
        yearOut.textContent = yearDiff.toFixed(0) + " ";
      }
    }
  }
};

go.addEventListener("click", () => {
  calculations();
});