/*
The semicolon (;) character is used to separate statements in JavaScript code.

Block statement:
    The most basic statement is a block statement, which is used to group statements. 
    The block is delimited by a pair of curly brackets.
     {
        statement_1;
        statement_2;
        ⋮
        statement_n;
     }
Conditional statements:

    if,else,else if

syntax:
    if (condition_1) {
        statement_1;
    } else if (condition_2) {
        statement_2;
    } else if (condition_n) {
        statement_n;
    } else {
        statement_last;
    } 

Falsy values:
    The following values evaluate to false (also known as Falsy values):

        false
        undefined
        null
        0
        NaN
        the empty string ("")

switch :
    A switch statement allows a program to evaluate an expression and 
    attempt to match the expression's value to a case label. If a match 
    is found, the program executes the associated statement.

switch (expression) {
  case label_1:
    statements_1
    [break;]
  case label_2:
    statements_2
    [break;]
    …
  default:
    statements_def
    [break;]
}
break statements:
    The optional break statement associated with each case clause ensures that the
     program breaks out of switch once the matched statement is executed, and then 
     continues execution at the statement following switch. If break is omitted, the 
     program continues execution inside the switch statement (and will evaluate the 
    next case, and so on).

*/
//example -- switch
fruittype = 'Apples'
switch (fruittype) {
    case 'Oranges':
      console.log('Oranges are $0.59 a pound.');
      break;
    case 'Apples':
      console.log('Apples are $0.32 a pound.');
      break;
    case 'Bananas':
      console.log('Bananas are $0.48 a pound.');
      break;
    case 'Cherries':
      console.log('Cherries are $3.00 a pound.');
      break;
    case 'Mangoes':
      console.log('Mangoes are $0.56 a pound.');
      break;
    case 'Papayas':
      console.log('Mangoes and papayas are $2.79 a pound.');
      break;
    default:
     console.log(`Sorry, we are out of ${fruittype}.`);
  }
  console.log("Is there anything else you'd like?");