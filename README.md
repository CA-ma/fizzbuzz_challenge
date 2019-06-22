# Challenge: Fizzbuzz

## Questions
1. To explain the meaning of lines 3 and 4 of the spec.helper.js file, lines 1 and 2 must first be considered.

As defined in this [Node.js documentation](https://nodejs.org/api/modules.html#modules_require_id), the ```require('module_name')``` function returns any type of exported module content.  So, the variable ```const chai``` will be assigned the exported content from the 'chai' module.  Equivalently, ```const BrowserHelpers``` will be assigned the exported content from the 'e2e_training_wheels' module.  However, ```BrowserHelpers``` is also a construct, as denoted by its capitalization.

Back to lines 3 and 4.  ```global```, I assume because this [Node.js documentation](https://nodejs.org/api/globals.html#globals_global) is rather opaque to beginners, is a global namespace object which means it can be globally accessed.  Therefore, ```global.browser``` and ```global.expect``` are probably attributes or functions of ```global```.  Linked with the expectations from lines 1 and 2, ```global.browser``` will be a construct that will be populated with the 'e2e...' exports and ```global.expect``` will be an 'expect' function applied to the 'chai' exports.

2. 

## Authors
Max Aubain