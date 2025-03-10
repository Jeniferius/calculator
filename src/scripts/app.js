(function() {
  // Shortcut to get elements
  var el = function(element) {
    if (element.charAt(0) === "#") {
      // If passed an ID...
      return document.querySelector(element); // ... returns single element
    }

    return document.querySelectorAll(element); // Otherwise, returns a nodelist
  };

  // Variables
  var viewer = el("#calculateViewer"), // Calculator screen where result is displayed
    equals = el("#btnEquals"), // Equal button
    nums = el(".btnNumber"), // List of numbers
    ops = el(".btnOperation"), // List of operators
    theNum = "", // Current number
    oldNum = "", // First number
    resultNum, // Result
    operator; // Batman

  let maxLength = function(number, maxLength) {
      if (number.length > maxLength) {
        number = number.substring(0, maxLength);
      }
      return number;
    }
    // When: Number is clicked. Get the current number selected
  var setNum = function() {
    if (resultNum) {
      // If a result was displayed, reset number
      theNum = this.getAttribute("data-num");
      resultNum = "";
    } else {
      // Otherwise, add digit to previous number (this is a string!)
      theNum = maxLength(theNum, 15);
      theNum += this.getAttribute("data-num");
    }
    viewer.innerHTML = theNum; // Display current number
  };

  // When: Operator is clicked. Pass number to oldNum and save operator
  var moveNum = function() {
    oldNum = theNum;
    theNum = "";
    operator = this.getAttribute("data-ops");

    equals.setAttribute("data-result", ""); // Reset result in attr
  };

  // When: Equals is clicked. Calculate result
  var displayNum = function() {
    // Convert string input to numbers
    oldNum = parseFloat(oldNum);
    theNum = parseFloat(theNum);

    // Perform operation
    switch (operator) {
      case "plus":
        resultNum = oldNum + theNum;
        break;
      case "minus":
        resultNum = oldNum - theNum;
        break;
      case "multiply":
        resultNum = oldNum * theNum;
        break;
      case "division":
        resultNum = oldNum / theNum;
        break;

        // If equal is pressed without an operator, keep number and continue
      default:
        resultNum = theNum;
    }

    // If result is too long
    // If NaN or Infinity returned
    if (!isFinite(resultNum)) {
      if (isNaN(resultNum)) {
        // If result is not a number; set off by, eg, double-clicking operators
        resultNum = "You broke it!";
      } else {
        // If result is infinity, set off by dividing by zero
        resultNum = "Broken";
      }
    }
    if (resultNum.toString().length > 15) {
      if (resultNum.toString().indexOf('.') != -1) {
        resultNum = maxLength(resultNum.toString(), 15)
      } else {
        resultNum = "Too long";
      }
    }

    // Display result, finally!
    viewer.innerHTML = resultNum;
    equals.setAttribute("data-result", resultNum);

    // Now reset oldNum & keep result
    oldNum = 0;
    theNum = resultNum;
  };

  // When: Clear button is pressed. Clear everything
  var clearAll = function() {
    oldNum = "";
    theNum = "";
    viewer.innerHTML = "0";
    equals.setAttribute("data-result", resultNum);
  };

  /* The click events */

  // Add click event to numbers
  for (var i = 0, l = nums.length; i < l; i++) {
    nums[i].onclick = setNum;
  }

  // Add click event to operators
  for (var i = 0, l = ops.length; i < l; i++) {
    ops[i].onclick = moveNum;
  }

  // Add click event to equal sign
  equals.onclick = displayNum;

  // Add click event to clear button
  el("#btnClear").onclick = clearAll;

  /* The key events */

  function onKeyDown(event) {
    let e = event || window.event;
    let keyCode = e.key;
    console.log(keyCode);

    if ((keyCode >= "0" && keyCode <= "9") || keyCode === ".") {
      for (let i = 0; i < nums.length; i++) {
        if (nums[i].getAttribute("data-num") === keyCode) {
          nums[i].click();
          break;
        }
      }
    } else {
      switch (keyCode) {
        case "+":
          operator = "plus";
          ops[3].click();
          break;
        case "-":
          operator = "minus";
          ops[2].click();
          break;
        case "*":
          operator = "multiply";
          ops[1].click();
          break;
        case "/":
          operator = "division";
          ops[0].click();
          break;
        case "Enter":
          equals.click();
          break;
        case "c" || "C":
          el("#btnClear").click();
          break;
      }
    }
  }

  el("#body").onkeydown = onKeyDown;
})();