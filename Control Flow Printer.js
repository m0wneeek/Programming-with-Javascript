// (* The program needs to provide four different feedback messages to the user depending on the condition and the value assigned to the three variables.

//   The four feedback messages are:

// If the printer has enough paper, and also has ink:
//   Log the following message to the console: "Paper and ink detected."
// If the printer has enough paper but does not have any  ink:
//   Log the following message: "Printer ink empty, please refill."
// If the printer does not have enough paper, but has ink:
//   Log this message: "Not enough paper, please add."
// If your printer does not have ink or enough paper:
//   Log this message: "Not enough paper or ink, please add paper and refill ink."  *)

let ink = true;
let pagesInPrinter = 8;
let pagesToPrint = 7;


if (pagesInPrinter >= pagesToPrint) {
    if (!ink) {
        console.log("Printer ink empty. Please refill.");
    } else {
        console.log("Paper and ink detected.");
    }
} else {
    if (!ink) {
        console.log("Not neough paper or ink. Please add paper and refill ink");
    } else {
        console.log("Not enough paper. Please add");
    }
}
   
