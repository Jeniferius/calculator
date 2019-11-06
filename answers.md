# Payvision calculator

## Answers

- Code review: please list all good/bad practices you find in this application.
    1. **Good practices:**
        - CSS with SASS preprocessor. More agile and visual.
        - Attributes data in the HTML. It facilitates passing information between HTML and JS.
        - Good EM measure if we want to use relative measures.
        - Use self-executing function, which makes them available after initialization.
        - Shorten recurring functions such as querySelector or querySelectorAll.
        - Order of the script. Set functions and then execute them.
    2. **Bad practices:**
        - Have CSS, JS and HTML in the same file.
        - Do not implement HTML5 with your tags.
        - There are repeated IDs. An ID must be unique in the HTML.
        - Better not to add classes in HTML that are not going to be used.
        - CSS encapsulation can be improved.
        - The buttons of the calculator are kept in place by a width, this gives error in small resolutions. Better to use other methods like flex.
        - There are no defined media queries for small resolutions.
        - In the given index.html, lines 48 and 53 the pseudo-element _after_ is repeated.
        - The name of the variables in JS can be improved to be more explanatory.
        - If not necessary we can avoid the use of var and work with let and const.
        - The for loop on lines 186 and 191 can be refactored to define it more easily.
        - ES6 functions, arrow functions, ternary conditioners, etc. can be used. to speed up tasks, improve visibility and maintenance.
        - It is not necessary to write so many comments. These should be explanatory but the code should be easy to read.

- It seems the app is buggy... Could you fix it?
    - The numbers 0 and 3 are changed in the HTML.
    - The cases of addition and subtraction are changed in the displayNum function of the script.
    - When you run "broken" delete the calculator, better show "broken" on the screen.
    - There is no maximum number of numbers to be displayed on the screen, this causes it to be dismantled.

- Add divide and multiply operations.
    - _Done._
    - I would upgrade to version 2.0.0 because the new features have relevant changes. In addition to changing the design greatly would move to a new major version.

- How would do you test this app?
    - I have not previously worked with a test, I would need more time to investigate its operation and implementation.

- Can you improve the UI/UX?
    - I have studied advertising graphic design, which although they are not directly related to web design if it gives me design patterns and perspective that can help me with the UX/UI.

- **Bonus:** Configure the application to allow use of keyboard numpad.
    - _Done._

## Notes to Payvision

- My English is bad as I commented in the video interview. I hope you have patience with it and understand my clarifications well (I help myself as a translator).
- I have not worked with a test, therefore I still don't know how it works. I would love to and I promise to learn about it.
- According to the good and bad practices discussed above I have refactorized the HTML and SASS to work the design in a more elegant, encapsulated and maintainable way.
- I did not refactor javascript because it requires more time and did not affect the functionality.
- For the design I used the colors of Payvision.


## To do

I would like to improve the project and add features that I didn't have time.

- Learn about test.
- Implement new tests.
- Refactor javascript.
- Add more functions to calculator, ex: square root, percentages, etc.
