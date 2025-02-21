# Recap

1. Explain the four types of function binding in JavaScript: implicit binding, explicit binding, new binding, and default binding. How do they differ from each other?
	
	1. Implicit binding: occurs when a function is called as a method of an object. Then, `this` will refer to the object of the function.
	2. Explicit binding:  occurs when setting the value of `this` using methods like `call`.
	3. New binding: occurs when a function is called with `new` which sets `this` to the created object.
	4. Default binding: refers to the global object (occurs when `this` is called outside an object) which is `global` in Node.js.
2. What will be the output of this code and why?
   
   ```javascript
let student = { 
   name: "Saleh",
   subjects = ["Math","Science","English"]
}
console.log(typeof typeof student)
```
	- 'string' because the return of typeof type is always string and the type of string is string.
3.  
	1. Modules are packages that help the developer to not reinvent the wheel.
	2. ES Modules are imported with `import module from 'module'`.
	3. CommonJS modules are imported with `const module = require('module');`.
4.  `scripts` are shortcut commands for routine jobs like running the node.js http server.
# Express
1. 