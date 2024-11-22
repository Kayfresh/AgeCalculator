// const today = new Date();

// const todayDate = today.getDate();
// const todayMonth = today.getMonth() + 1;
// const todayYear = today.getFullYear();

// console.log(todayDate, todayMonth, todayYear);

// const dayIn = document.getElementById("dayinp");
// const monthIn = document.getElementById("monthinp");
// const yearIn = document.getElementById("yearinp");
// const go = document.getElementById("go");
// const head = document.getElementsByTagName("h3");

// const dayError = document.getElementById("dayerror");
// const monthError = document.getElementById("montherror");
// const yearError = document.getElementById("yearerror");

// const dayOut = document.getElementById("days");
// const monthOut = document.getElementById("months");
// const yearOut = document.getElementById("years");

// const calculations = () => {
//   const dayValue = parseInt(dayIn.value);
//   const monthValue = parseInt(monthIn.value);
//   const yearValue = parseInt(yearIn.value);

//   dayError.textContent = "";
//   monthError.textContent = "";
//   yearError.textContent = "";

//   head[0].style.color = "#6c6c6c";
//   head[1].style.color = "#6c6c6c";
//   head[2].style.color = "#6c6c6c";

//   //   Day Calculation
//   if (isNaN(dayValue)) {
//     dayError.textContent = "Input a Number";
//     head[0].style.color = "red";
//     return;
//   } else if (dayValue < 1 || dayValue > 31) {
//     dayError.textContent = "Please enter a valid day (1-31)";
//     head[0].style.color = "red";
//     return;
//   } else if (
//     monthValue === 4 ||
//     monthValue === 6 ||
//     monthValue === 9 ||
//     monthValue === 11
//   ) {
//         if (dayValue > 30) {
//             dayError.textContent = "Please enter a valid day (1-30)";
//             head[0].style.color = "red";
//             return;
//         }
//   } else if (monthValue === 2) {
//     if (yearValue % 400 === 0) {
//       if (dayValue > 29) {
//         dayError.textContent = "Please enter a valid day (1-29)";
//         head[0].style.color = "red";
//         return;
//       }
//     } else {
//       if (dayValue > 28) {
//         dayError.textContent = "Please enter a valid day (1-28)";
//         head[0].style.color = "red";
//         return;
//       }
//     }
//   } else {
//         if (monthValue === 4 || monthValue === 6 || monthValue === 9 || monthValue === 11) {
//             if (dayValue <= today.getDate()) {
//                 const dayDiff = Math.abs(today.getDate() - dayValue)
//                 dayOut.textContent = dayDiff.toFixed(0);
//             } else {
//                 const dayDiff = Math.abs(today.getDate() + (31 - dayValue))
//                 dayOut.textContent = dayDiff.toFixed(0);
//             }
//         } else if (monthValue === 2) {
//             if (dayValue <= today.getDate()) {
//                 const dayDiff = Math.abs(today.getDate() - dayValue)
//                 dayOut.textContent = dayDiff.toFixed(0);
//             } else {
//                 const dayDiff = Math.abs(today.getDate() + (31 - dayValue))
//                 dayOut.textContent = dayDiff.toFixed(0);
//             }
//         } else {
//             if (today.getMonth() === 4 || today.getMonth() === 6 || today.getMonth() === 9 || today.getMonth() === 11) {
//                 if (dayValue <= today.getDate()) {
//                     const dayDiff = Math.abs(today.getDate() - dayValue)
//                     dayOut.textContent = dayDiff.toFixed(0);
//                 } else {
//                     const dayDiff = Math.abs(today.getDate() + (30 - dayValue))
//                     dayOut.textContent = dayDiff.toFixed(0);
//                 }
//             }
//         }
//     }

//   //   Month Calculation
//   if (isNaN(monthValue)) {
//     monthError.textContent = "Input a Number";
//     head[1].style.color = "red";
//     return;
//   } else if (monthValue < 1 || monthValue > 12) {
//     monthError.textContent = "Please enter a valid month (1-12)";
//     head[1].style.color = "red";
//     return;
//   } else {
//     if (monthValue > today.getMonth() + 1) {
//       if (dayValue < today.getDate()) {
//         const monthDiff = Math.abs(today.getMonth() + 1 - monthValue + 12);
//         monthOut.textContent = monthDiff.toFixed(0) + " ";
//       } else if (dayValue >= today.getDate()) {
//         const monthDiff = Math.abs(today.getMonth() + 1 - monthValue + 12 - 1);
//         monthOut.textContent = monthDiff.toFixed(0) + " ";
//       }
//     } else if (monthValue < today.getMonth() + 1) {
//       if (dayValue < today.getDate()) {
//         const monthDiff = Math.abs(today.getMonth() + 1 - monthValue);
//         monthOut.textContent = monthDiff.toFixed(0) + " ";
//       } else {
//         const monthDiff = Math.abs(today.getMonth() + 1 - monthValue - 1);
//         monthOut.textContent = monthDiff.toFixed(0) + "  ";
//       }
//     } else {
//       if (dayValue <= today.getDate()) {
//         const monthDiff = Math.abs(today.getMonth() + 1 - monthValue);
//         monthOut.textContent = monthDiff.toFixed(0) + " ";
//       } else {
//         const monthDiff = 11;
//         monthOut.textContent = monthDiff.toFixed(0) + " ";
//       }
//     }
//   }

//   //   Year Calculation
//   if (isNaN(yearValue)) {
//     yearError.textContent = "Input a Number";
//     head[2].style.color = "red";
//     return;
//   } else if (yearValue > today.getFullYear()) {
//     yearError.textContent = "Year cannot be in the future";
//     head[2].style.color = "red";
//     return;
//   } else if (yearValue < 1900) {
//     yearError.textContent = "Minimum year is 1900";
//     head[2].style.color = "red";
//     return;
//   } else if (yearValue == today.getFullYear()) {
//   } else {
//     if (monthValue > today.getMonth() + 1) {
//       const yearDiff = Math.abs(today.getFullYear() - yearValue - 1);
//       yearOut.textContent = yearDiff.toFixed(0) + " ";
//     } else if (monthValue < today.getMonth() + 1) {
//       const yearDiff = Math.abs(today.getFullYear() - yearValue);
//       yearOut.textContent = yearDiff.toFixed(0) + " ";
//     } else {
//       if (dayValue <= today.getDate()) {
//         const yearDiff = Math.abs(today.getFullYear() - yearValue);
//         yearOut.textContent = yearDiff.toFixed(0) + " ";
//       } else {
//         const yearDiff = Math.abs(today.getFullYear() - yearValue - 1);
//         yearOut.textContent = yearDiff.toFixed(0) + " ";
//       }
//     }
//   }
// };

// go.addEventListener("click", () => {
//   calculations();
// });


const today = new Date();
const todayDate = today.getDate();
const todayMonth = today.getMonth() + 1; // Months are 0-indexed
const todayYear = today.getFullYear();

const MIN_YEAR = 1900;
const MONTHS_WITH_30_DAYS = [4, 6, 9, 11];
const MONTHS_WITH_31_DAYS = [1, 3, 5, 7, 8, 10, 12];

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

const clearErrors = () => {
    dayError.textContent = "";
    monthError.textContent = "";
    yearError.textContent = "";
    Array.from(head).forEach(h => h.style.color = "#6c6c6c");
};

const validateDay = (day, month, year) => {
    if (isNaN(day) || day < 1 || day > 31) return "Please enter a valid day (1-31)";
    if (MONTHS_WITH_30_DAYS.includes(month) && day > 30) return "Please enter a valid day (1-30)";
    if (month === 2) {
        const isLeapYear = (year % 400 === 0) || (year % 100 !== 0 && year % 4 === 0);
        if (day > (isLeapYear ? 29 : 28)) return "Please enter a valid day (1-28 or 1-29)";
    }
    return "";
};

const validateMonth = (month) => {
    if (isNaN(month) || month < 1 || month > 12) return "Please enter a valid month (1-12)";
    return "";
};

const validateYear = (year) => {
    if (isNaN(year)) return "Input a Number";
    if (year < MIN_YEAR) return "Minimum year is 1900";
    if (year > todayYear) return "Year cannot be in the future";
    return "";
};

const calculateDifference = (dayValue, monthValue, yearValue) => {
    const dayDiff = Math.abs(todayDate - dayValue);
    const monthDiff = Math.abs(todayMonth - monthValue);
    const yearDiff = Math.abs(todayYear - yearValue);

    dayOut.textContent = dayDiff.toFixed(0);
    monthOut.textContent = monthDiff.toFixed(0);
    yearOut.textContent = yearDiff.toFixed(0);
};

const calculations = () => {
    clearErrors();
    
    const dayValue = parseInt(dayIn.value);
    const monthValue = parseInt(monthIn.value);
    const yearValue = parseInt(yearIn.value);

    const dayErrorMessage = validateDay(dayValue, monthValue, yearValue);
    const monthErrorMessage = validateMonth(monthValue);
    const yearErrorMessage = validateYear(yearValue);

    if (dayErrorMessage) {
        dayError.textContent = dayErrorMessage;
        head[0].style.color = "red";
        return;
    }
    if (monthErrorMessage) {
        monthError.textContent = monthErrorMessage;
        head[1].style.color = "red";
        return;
    }
    if (yearErrorMessage) {
        yearError.textContent = yearErrorMessage;
        head[2].style.color = "red";
        return;
    }

    calculateDifference(dayValue, monthValue, yearValue);
};

go.addEventListener("click", calculations);