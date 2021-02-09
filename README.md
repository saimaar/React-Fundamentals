# React-Fundamentals

## Difference between React vs ReactDOM
- React is a blueprint 
- React knows how to describe user interface but does not know how to render it to the Browser

- ReactDOM uses the blueprint. 
- It is a target platfrom and aids in rendering into the browser
- You make a React element and a DOM element and rendering it together using ReactDOM

**Example:**
- const reactElement = `<div>Heellllooooo</div>`
- const domElement = `document.getElementById('root')`

## Difference between a Component and an Element
 - A component is bascially a function that returns an element 
 - An Element is something that is created by JSX an an Object 
