---
title: Don't depend on lodash.
date: "2018-10-15T23:46:37.121Z"
slug: Don't depend on lodash.
template: "post"
draft: false
category: "JS tricks/tips"
description: No more lodash.
tags: 
  - "JS tricks and tips"
  - "Avoid Lodash"
socialImage: https://cdn-images-1.medium.com/max/1600/1*crLKLey8B6JrJOuXbIPS_w.jpeg
---

## Don’t depend on Lodash when JavaScript has the same — Part 1

![We don’t need Lodash.](https://cdn-images-1.medium.com/max/2000/1*yeS0NBl5R0mxQzQRaVjoDA.jpeg)

Here I am continuing with the JavaScript tips and tricks only, but today it’s more than the tips and tricks. That’s the reason I titled my blog as the above.

As a JavaScript developer, everyone might have used or come to know about the Lodash library. Here I am not going to talk about the comparison of the speed or weight of the library instead, I am going to take you about the things which we can be done with our JavaScript itself. And also I am not going to explain all the possible alternatives.

## **Object**

* **_.omit** (to omit certain {key, value} pairs):

```
var employee = {
   id: 1193,
   name: 'Madhan',
   tempAddress: '',
   permanentAddress: ''
};

#lodash (loaded it as _)

var result = _.omit(employee, ['tempAddress']);
console.log(result); //{id:1193, name:"Madhan", permanentAddress:""}

#Native

//by_using_delete_operator (we can delete single property):
console.log(delete employee.tempAddress); // true
console.log(employee);//{id:1193,name:"Madhan", permanentAddress:""}

var {tempAddress, permanentAddress, ...result} = employee;
console.log(result);// {id: 1193, name: "Madhan"}
```

**. _.assign** (to clone an object):

```
var employee = {
   id: 1193,
   name: 'Madhan',
   tempAddress: '',
};

#lodash

var clonedEmployee = {};
var result = _.assign(employee, clonedEmployee);
console.log(result);// {id: 1193, name: "Madhan", tempAddress: ""}

#Native
var clonedEmployee = Object.assign({}, employee);
console.log(clonedEmployee); {id:1193,name:"Madhan",tempAddress:""}
```

With the above native approach, there is a drawback if the copying is like long nested data. Then it will act as ***Value as Reference***. It (Object.assign) will work for only a flat structure object.

Don’t worry we have one more way to do the deep clone by using the native approach.

```
var clonedEmployee = {...employee};
console.log(clonedEmployee); {id:1193,name:"Madhan",**tempAddress:""}**
```

**.** **_.isUndefined **(Checks if a value is undefined):

```
#lodash
var employee;
console.log(_.isUndefined(employee)); // true

#Native
var employee;
console.log(typeOf a === 'undefined'); // true
if (employee) {
  console.log('exists');//prints nothing since if loop fails
}
```

**.** **_.toPairs** (Retrieves all the given object’s property as[ key, value ] pairs):

```
var employee = {id: 1193, name: 'Madhan'};

#lodash
var result = _.toPairs(employee);
console.log(result); // [['id', 1193], ['name', 'Madhan']]

#Native
var result = Object.entires(employee);
console.log(result); // [['id', 1193], ['name', 'Madhan']]
```

**. _.values **(Retrieves all the given object’s property values):

```
var employee = {id: 1193, name: 'Madhan'};

#lodash
var empValues = _.values(employee);
console.log(empValues); // [1193, 'Madhan']

#Native
var empValues = Object.values(employee);
console.log(empValues); // [1193, 'Madhan']
```

**Conclusion**

To know more about the speed and composition, I would recommend you all to go through this [link](https://codeburst.io/why-you-shouldnt-use-lodash-anymore-and-use-pure-javascript-instead-c397df51a66), that blog inspired me to write this one.

So far we have seen all the alternative ways to *Lodash* to achieve the same result by using **vanilla JS **in Objects. In the next part will take you all through the Array methods.
