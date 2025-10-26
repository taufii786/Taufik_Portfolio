const display = document.getElementById("display");

// Button click functionality
document.querySelectorAll(".btn").forEach(button => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (value === "C") {
      display.value = "";
    } else if (value === "⌫") {
      display.value = display.value.slice(0, -1);
    } else if (value === "=") {
      try {
        let expression = display.value.replace('^', '**').replace('×', '*').replace('÷', '/').replace('−', '-').replace('√', 'Math.sqrt');
        display.value = eval(expression);
      } catch {
        display.value = "Error";
      }
    } else if (value === "sin") {
      display.value += "Math.sin(";
    } else if (value === "cos") {
      display.value += "Math.cos(";
    } else if (value === "√") {
      display.value += "Math.sqrt(";
    } else {
      display.value += value;
    }
  });
});

// Keyboard support
document.addEventListener("keydown", (e) => {
  const allowedKeys = "0123456789+-*/().";
  
  if (allowedKeys.includes(e.key)) {
    display.value += e.key;
  } else if (e.key === "Enter") {
    try {
      let expression = display.value.replace('^', '**').replace('×', '*').replace('÷', '/').replace('−', '-').replace('√', 'Math.sqrt');
      display.value = eval(expression);
    } catch {
      display.value = "Error";
    }
  } else if (e.key === "Backspace") {
    display.value = display.value.slice(0, -1);
  } else if (e.key === "Escape") {
    display.value = "";
  }
});
