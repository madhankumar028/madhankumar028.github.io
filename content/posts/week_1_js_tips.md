---
title: JS Tips/Tricks.
date: "2018-03-25T23:46:37.121Z"
slug: week 1 js tips.
template: "post"
draft: false
category: "JS tricks and tips"
description: No more lodash.
tags: 
  - "JS tricks and tips"
socialImage: https://cdn-images-1.medium.com/max/1600/1*crLKLey8B6JrJOuXbIPS_w.jpeg
---

![](https://cdn-images-1.medium.com/max/2000/1*Y0N17E1MPW8iUvmm8brd1A.gif)

## Week 1 Tips #JavaScript

Here I am going to share you a few cool tips and tricks in JavaScript, which I have learned and using it in my daily job. This will help you to write clean JavaScript.

This is going to be a series of posts weekly. This is the first week. No more wait, lets pitch in.

**Note:** If you are an ace JavaScript developer you can skip this **now.**

 1. **Checking array’s length:**

 ```
var person = ['Madhan', 'kumar', 1, 3, 5];

// Bad approach
if (person.length > 0) {
  // do something
}

// Good approach
if (person.length) { // zero is already falsy statement
  // do something
}
 ```

**2. Copying an array into another array:**
>  Note: Please don’t try to loop the array and push each element into new array. This would be costlier operation, if the array’s length is more.
```
// Bad Approach

var person = ['Madhan', 'kumar', 1, 3, 5];

// shallow copy
var clonedPerson = person;
clonedPerson[0] = 9;

console.log(clonedPerson); // [9, 'kumar', 1, 3, 5];
console.log(person); // [9, 'kumar', 1, 3, 5];
```

```
// Good Approach

var person = ['Madhan', 'kumar', 1, 3, 5];

// deep copy
var clonedPerson = [...person];
clonedPerson[0] = 9;

console.log(clonedPerson); // [9, 'kumar', 1, 3, 5];
console.log(person); // ['Madhan', 'kumar', 1, 3, 5];
```

**3. Checking a string for undefined and null:**

```
var name = 'Madhan';

// Bad approach
if (name !== undefined && name !== null) {
  // do something
}

// Good approach
if (name) {
  // do something
}
```
