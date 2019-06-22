# Challenge: Fizzbuzz

## Questions
1. To explain the meaning of lines 3 and 4 of the spec.helper.js file, lines 1 and 2 must first be considered.

As defined in this [Node.js documentation](https://nodejs.org/api/modules.html#modules_require_id), the ```require('module_name')``` function returns any type of exported module content.  So, the variable ```const chai``` will be assigned the exported content from the 'chai' module.  Equivalently, ```const BrowserHelpers``` will be assigned the exported content from the 'e2e_training_wheels' module.  However, ```BrowserHelpers``` is also a construct, as denoted by its capitalization.

Back to lines 3 and 4.  ```global```, I assume because this [Node.js documentation](https://nodejs.org/api/globals.html#globals_global) is rather opaque to beginners, is a global namespace object which means it can be globally accessed.  Therefore, ```global.browser``` and ```global.expect``` are probably attributes or functions of ```global```.  Linked with the expectations from lines 1 and 2, ```global.browser``` will be a construct that will be populated with the 'e2e...' exports and ```global.expect``` will be an 'expect' function applied to the 'chai' exports.

2. ```let fizzBuzz = new FizzBuzz()``` is creating a new instance of the contructor/class FizzBuzz.  An instance is needed for further tests to use, or else there will be no 'thing' to test.  It is put outside the 'it' tests so that each 'it' test can inherit the properties of the new instance.  It serves a similar purpose as instance_doubles, but instead of being a copy or 'double', it is 'real' thing.



## Authors
Max Aubain