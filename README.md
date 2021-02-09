# React-Fundamentals

## Difference between React vs ReactDOM
- React is a blueprint 
- React knows how to describe user interface but does not know how to render it to the Browser

- ReactDOM uses the blueprint. 
- It is a target platfrom and aids in rendering into the browser
- You make a React element and a DOM element and rendering it together using ReactDOM

**Example:**
- const reactElement = `<div>Hello</div>`
- const domElement = `document.getElementById('root')`
- ReactDOM.render(reactElement, domElement) 
- The above code should print "hello" to the browser

**So what is actually happenning?**
- The `<div>Hello</div>` under the hood transpiles to Javascript like this: 
- const reactElement = React.createElement('div', null, 'Hello') 
- It is taking it three parameters:
1. The HTML element 
2. Null is where the attribute (className etc) goes for the html.
3. Child, which could be a string,function or a variable

## Difference between a Component and an Element
 - A component is bascially a function that returns an element 
 - An Element is something that is created by JSX an an Object 
