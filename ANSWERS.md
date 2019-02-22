1. What are PropTypes used for? Please describe why it's important to type check our data in JavaScript.
PropTypes are being used to make the type assertions during the runtime, based on the properties that component require to render properly. JavaScript is a weakly typed language and type checking reduces the chance for getting an error because of passing the wrong object during the runtime.

2. Describe a life-cycle event in React?

React component life-cycle contains of three phases. There is a 

3. Explain the details of a Higher Order Component?
Higher Order Component (HOC) is a technique for building reusable components that provide the business logic. They act like a wrapper for the classical components. HOCs are present in the popular React libraries such as React Router (`withRouter`) or Redux (`connect`).

4. What are three different ways to style components in React? Explain some of the benefits of each.

To style components in React, you can use:
- CSS,
- style props, 
- CSS in JS (styled-components).

CSS is one of the easiest way to add styles. Some of the benefits of using CSS with React include:
1) CSS styles are not being attached to the component itself, they are being added to the DOM, so you can reuse them without importing them in the number of components.
2) Ability to set the right placement of element on a page (i.e. proper margin and display properties).
3) Superior performance to CSS in JS.

Style properties (inline styles) are the second way to style the components. Some of their benefits include:
1) They require no additional CSS files or JS libraries.
2) They allow you to pass the styles properties objects as a prop to the component.
3) They allow to make CSS manipulatons with JS, i.e. using constants or state.

Styled-components are very good way to add styles to your components. Some of their benefits include:
1) They allow you to make CSS manipulations with JS - using constants, state - making your CSS dynamic.
2) They remove the vendor prefixing, so you do not need to think of adding `-moz` or `-webkit` prefixes.
3) They isolate your CSS - with that, you are not going to have global conflicts and you reduce the number of specificity issues.
4) They make the whole package smaller, because you do not need to build excessive stylesheets and normalizers.
5) They make it easier to remove generic code.
6) They allow you to use all the benefits of SASS in JS.

You can also style your components using CSS modules.