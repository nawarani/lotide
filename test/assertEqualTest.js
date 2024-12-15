const assertEqual = require("../assertEqual");

// TEST CODE
//     Comparing non-identical strings
assertEqual("Lighthouse Labs", "Bootcamp");
//     Comparing identical numbers
assertEqual(1, 1);
//     Comparing identical strings
assertEqual("Lighthouse Labs", "Lighthouse Labs");
//     Comparing non-identical numbers
assertEqual(1, 4);
assertEqual();
assertEqual(1);
assertEqual(1,);