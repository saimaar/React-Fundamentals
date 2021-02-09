# React-Fundamentals
- React is a library and not a framework!

## Difference between React vs ReactDOM
- React is a blueprint 
- React knows how to describe user interface but does not know how to render it to the Browser

- ReactDOM uses the blueprint. 
- It is a target platfrom and aids in rendering into the browser
- You make a React element and a DOM element and rendering it together using ReactDOM

**Example:**
- const reactElement = `<div>Hello</div>` (this is JSX)
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
- Note: Whenever we are wrting some JSX, we are basically writng pure javascript code under the hood.

**JSX: Short for Javascript XML, like a template (not HTML or String) but HTML like tags**

## Difference between a Component and an Element
***Element***
 - An Element is something that is created by JSX an an Object 
 - const reactElement = `<div>Hello</div>`. This is the return value of React.createElement. But it is not reusable!

 ***Component***
- A component is bascially a function that returns an element 
- It is reuseable
- We can convert this **element** reactElement = `<div>Hello</div>` to a **component** by just turning it into a function. 
- const reactElement = () => `<div>{text}</div> `
- ReactDOM.render(`<div> <reactElement>/ </div>`, domElement)

Note: Children is also a prop. Rendering by position or value 
- [RenderingProps.js](src/RenderingProps.js)
