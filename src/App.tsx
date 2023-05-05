import './App.css'
import TodoList from './components/TodoList'
import { ITodo } from './types'

function App() {

  return (
		<div>
			<TodoList defaultTodos={defaultTodos}/>
		</div>
  )
}

const defaultTodos: ITodo[] = [
	{
		label: "What is React?",
		isChecked: false
	},{
		label: "What are the major features of React?",
		isChecked: false
	},{
		label: "What is JSX?",
		isChecked: false
	},{
		label: "What is the difference between Element and Component?",
		isChecked: false
	},{
		label: "How to create components in React?",
		isChecked: false
	},{
		label: "When to use a Class Component over a Function Component?",
		isChecked: false
	},{
		label: "What are Pure Components?",
		isChecked: false
	},{
		label: "What is state in React?",
		isChecked: false
	},{
		label: "What are props in React?",
		isChecked: false
	},{
		label: "What is the difference between state and props?",
		isChecked: false
	},{
		label: "Why should we not update the state directly?",
		isChecked: false
	},{
		label: "What is the purpose of callback function as an argument of setState()?",
		isChecked: false
	},{
		label: "What is the difference between HTML and React event handling?",
		isChecked: false
	},{
		label: "How to bind methods or event handlers in JSX callbacks?",
		isChecked: false
	},{
		label: "How to pass a parameter to an event handler or callback?",
		isChecked: false
	},{
		label: "What are synthetic events in React?",
		isChecked: false
	},{
		label: "What are inline conditional expressions?",
		isChecked: false
	},{
		label: "What is \"key\" prop and what is the benefit of using it in arrays of elements?",
		isChecked: false
	},{
		label: "What is the use of refs?",
		isChecked: false
	},{
		label: "How to create refs?",
		isChecked: false
	},{
		label: "What are forward refs?",
		isChecked: false
	},{
		label: "Which is preferred option with in callback refs and findDOMNode()?",
		isChecked: false
	},{
		label: "Why are String Refs legacy?",
		isChecked: false
	},{
		label: "What is Virtual DOM?",
		isChecked: false
	},{
		label: "How Virtual DOM works?",
		isChecked: false
	},{
		label: "What is the difference between Shadow DOM and Virtual DOM?",
		isChecked: false
	},{
		label: "What is React Fiber?",
		isChecked: false
	},{
		label: "What is the main goal of React Fiber?",
		isChecked: false
	},{
		label: "What are controlled components?",
		isChecked: false
	},{
		label: "What are uncontrolled components?",
		isChecked: false
	},{
		label: "What is the difference between createElement and cloneElement?",
		isChecked: false
	},{
		label: "What is Lifting State Up in React?",
		isChecked: false
	},{
		label: "What are the different phases of component lifecycle?",
		isChecked: false
	},{
		label: "What are the lifecycle methods of React?",
		isChecked: false
	},{
		label: "What are Higher-Order components?",
		isChecked: false
	},{
		label: "How to create props proxy for HOC component?",
		isChecked: false
	},{
		label: "What is context?",
		isChecked: false
	},{
		label: "What is children prop?",
		isChecked: false
	},{
		label: "How to write comments in React?",
		isChecked: false
	},{
		label: "What is the purpose of using super constructor with props argument?",
		isChecked: false
	},{
		label: "What is reconciliation?",
		isChecked: false
	},{
		label: "How to set state with a dynamic key name?",
		isChecked: false
	},{
		label: "What would be the common mistake of function being called every time the component renders?",
		isChecked: false
	},{
		label: "Is lazy function supports named exports?",
		isChecked: false
	},{
		label: "Why React uses className over class attribute?",
		isChecked: false
	},{
		label: "What are fragments?",
		isChecked: false
	},{
		label: "Why fragments are better than container divs?",
		isChecked: false
	},{
		label: "What are portals in React?",
		isChecked: false
	},{
		label: "What are stateless components?",
		isChecked: false
	},{
		label: "What are stateful components?",
		isChecked: false
	},{
		label: "How to apply validation on props in React?",
		isChecked: false
	},{
		label: "What are the advantages of React?",
		isChecked: false
	},{
		label: "What are the limitations of React?",
		isChecked: false
	},{
		label: "What are error boundaries in React v16",
		isChecked: false
	},{
		label: "How are error boundaries handled in React v15?",
		isChecked: false
	},{
		label: "What are the recommended ways for static type checking?",
		isChecked: false
	},{
		label: "What is the use of react-dom package?",
		isChecked: false
	},{
		label: "What is the purpose of render method of react-dom?",
		isChecked: false
	},{
		label: "What is ReactDOMServer?",
		isChecked: false
	},{
		label: "How to use InnerHtml in React?",
		isChecked: false
	},{
		label: "How to use styles in React?",
		isChecked: false
	},{
		label: "How events are different in React?",
		isChecked: false
	},{
		label: "What will happen if you use setState in constructor?",
		isChecked: false
	},{
		label: "What is the impact of indexes as keys?",
		isChecked: false
	},{
		label: "Is it good to use setState() in componentWillMount() method?",
		isChecked: false
	},{
		label: "What will happen if you use props in initial state?",
		isChecked: false
	},{
		label: "How do you conditionally render components?",
		isChecked: false
	},{
		label: "Why we need to be careful when spreading props on DOM elements??",
		isChecked: false
	},{
		label: "How you use decorators in React?",
		isChecked: false
	},{
		label: "How do you memoize a component?",
		isChecked: false
	},{
		label: "How you implement Server-Side Rendering or SSR?",
		isChecked: false
	},{
		label: "How to enable production mode in React?",
		isChecked: false
	},{
		label: "What is CRA and its benefits?",
		isChecked: false
	},{
		label: "What is the lifecycle methods order in mounting?",
		isChecked: false
	},{
		label: "What are the lifecycle methods going to be deprecated in React v16?",
		isChecked: false
	},{
		label: "What is the purpose of getDerivedStateFromProps() lifecycle method?",
		isChecked: false
	},{
		label: "What is the purpose of getSnapshotBeforeUpdate() lifecycle method?",
		isChecked: false
	},{
		label: "Do Hooks replace render props and higher order components?",
		isChecked: false
	},{
		label: "What is the recommended way for naming components?",
		isChecked: false
	},{
		label: "What is the recommended ordering of methods in component class?",
		isChecked: false
	},{
		label: "What is a switching component?",
		isChecked: false
	},{
		label: "Why we need to pass a function to setState()?",
		isChecked: false
	},{
		label: "What is strict mode in React?",
		isChecked: false
	},{
		label: "What are React Mixins?",
		isChecked: false
	},{
		label: "Why is isMounted() an anti-pattern and what is the proper solution?",
		isChecked: false
	},{
		label: "What are the Pointer Events supported in React?",
		isChecked: false
	},{
		label: "Why should component names start with capital letter?",
		isChecked: false
	},{
		label: "Are custom DOM attributes supported in React v16?",
		isChecked: false
	},{
		label: "What is the difference between constructor and getInitialState?",
		isChecked: false
	},{
		label: "Can you force a component to re-render without calling setState?",
		isChecked: false
	},{
		label: "What is the difference between super() and super(props) in React using ES6 classes?",
		isChecked: false
	},{
		label: "How to loop inside JSX?",
		isChecked: false
	},{
		label: "How do you access props in attribute quotes?",
		isChecked: false
	},{
		label: "What is React PropType array with shape?",
		isChecked: false
	},{
		label: "How to conditionally apply class attributes?",
		isChecked: false
	},{
		label: "What is the difference between React and ReactDOM?",
		isChecked: false
	},{
		label: "Why ReactDOM is separated from React?",
		isChecked: false
	},{
		label: "How to use React label element?",
		isChecked: false
	},{
		label: "How to combine multiple inline style objects?",
		isChecked: false
	},{
		label: "How to re-render the view when the browser is resized?",
		isChecked: false
	},{
		label: "What is the difference between setState and replaceState methods?",
		isChecked: false
	},{
		label: "How to listen to state changes?",
		isChecked: false
	},{
		label: "What is the recommended approach of removing an array element in react state?",
		isChecked: false
	},{
		label: "Is it possible to use React without rendering HTML?",
		isChecked: false
	},{
		label: "How to pretty print JSON with React?",
		isChecked: false
	},{
		label: "Why you can't update props in React?",
		isChecked: false
	},{
		label: "How to focus an input element on page load?",
		isChecked: false
	},{
		label: "What are the possible ways of updating objects in state?",
		isChecked: false
	},{
		label: "How can we find the version of React at runtime in the browser?",
		isChecked: false
	},{
		label: "What are the approaches to include polyfills in your create-react-app?",
		isChecked: false
	},{
		label: "How to use https instead of http in create-react-app?",
		isChecked: false
	},{
		label: "How to avoid using relative path imports in create-react-app?",
		isChecked: false
	},{
		label: "How to add Google Analytics for react-router?",
		isChecked: false
	},{
		label: "How to update a component every second?",
		isChecked: false
	},{
		label: "How do you apply vendor prefixes to inline styles in React?",
		isChecked: false
	},{
		label: "How to import and export components using react and ES6?",
		isChecked: false
	},{
		label: "What are the exceptions on React component naming?",
		isChecked: false
	},{
		label: "Why is a component constructor called only once?",
		isChecked: false
	},{
		label: "How to define constants in React?",
		isChecked: false
	},{
		label: "How to programmatically trigger click event in React?",
		isChecked: false
	},{
		label: "Is it possible to use async/await in plain React?",
		isChecked: false
	},{
		label: "What are the common folder structures for React?",
		isChecked: false
	},{
		label: "What are the popular packages for animation?",
		isChecked: false
	},{
		label: "What is the benefit of styles modules?",
		isChecked: false
	},{
		label: "What are the popular React-specific linters?",
		isChecked: false
	},{
		label: "How to make AJAX call and In which component lifecycle methods should I make an AJAX call?",
		isChecked: false
	},{
		label: "What are render props?",
		isChecked: false
	},{
		label: "What is React Router?",
		isChecked: false
	},{
		label: "How React Router is different from history library?",
		isChecked: false
	},{
		label: "What are the \<Router> components of React Router v4?",
		isChecked: false
	},{
		label: "What is the purpose of push and replace methods of history?",
		isChecked: false
	},{
		label: "How do you programmatically navigate using React router v4?",
		isChecked: false
	},{
		label: "How to get query parameters in React Router v4",
		isChecked: false
	},{
		label: "Why you get \"Router may have only one child element\" warning?",
		isChecked: false
	},{
		label: "How to pass params to history.push method in React Router v4?",
		isChecked: false
	},{
		label: "How to implement default or NotFound page?",
		isChecked: false
	},{
		label: "How to get history on React Router v4?",
		isChecked: false
	},{
		label: "How to perform automatic redirect after login?",
		isChecked: false
	},{
		label: "What is React-Intl?",
		isChecked: false
	},{
		label: "What are the main features of React Intl?",
		isChecked: false
	},{
		label: "What are the two ways of formatting in React Intl?",
		isChecked: false
	},{
		label: "How to use FormattedMessage as placeholder using React Intl?",
		isChecked: false
	},{
		label: "How to access current locale with React Intl",
		isChecked: false
	},{
		label: "How to format date using React Intl?",
		isChecked: false
	},{
		label: "What is Shallow Renderer in React testing?",
		isChecked: false
	},{
		label: "What is TestRenderer package in React?",
		isChecked: false
	},{
		label: "What is the purpose of ReactTestUtils package?",
		isChecked: false
	},{
		label: "What is Jest?",
		isChecked: false
	},{
		label: "What are the advantages of Jest over Jasmine?",
		isChecked: false
	},{
		label: "Give a simple example of Jest test case",
		isChecked: false
	},{
		label: "What is Flux?",
		isChecked: false
	},{
		label: "What is Redux?",
		isChecked: false
	},{
		label: "What are the core principles of Redux?",
		isChecked: false
	},{
		label: "What are the downsides of Redux compared to Flux?",
		isChecked: false
	},{
		label: "What is the difference between mapStateToProps() and mapDispatchToProps()?",
		isChecked: false
	},{
		label: "Can I dispatch an action in reducer?",
		isChecked: false
	},{
		label: "How to access Redux store outside a component?",
		isChecked: false
	},{
		label: "What are the drawbacks of MVW pattern",
		isChecked: false
	},{
		label: "Are there any similarities between Redux and RxJS?",
		isChecked: false
	},{
		label: "How to dispatch an action on load?",
		isChecked: false
	},{
		label: "How to use connect from React Redux?",
		isChecked: false
	},{
		label: "How to reset state in Redux?",
		isChecked: false
	},{
		label: "Whats the purpose of at symbol in the redux connect decorator?",
		isChecked: false
	},{
		label: "What is the difference between React context and React Redux?",
		isChecked: false
	},{
		label: "Why are Redux state functions called reducers?",
		isChecked: false
	},{
		label: "How to make AJAX request in Redux?",
		isChecked: false
	},{
		label: "Should I keep all component's state in Redux store?",
		isChecked: false
	},{
		label: "What is the proper way to access Redux store?",
		isChecked: false
	},{
		label: "What is the difference between component and container in React Redux?",
		isChecked: false
	},{
		label: "What is the purpose of the constants in Redux? ",
		isChecked: false
	},{
		label: "What are the different ways to write mapDispatchToProps()?",
		isChecked: false
	},{
		label: "What is the use of the ownProps parameter in mapStateToProps() and mapDispatchToProps()?",
		isChecked: false
	},{
		label: "How to structure Redux top level directories?",
		isChecked: false
	},{
		label: "What is redux-saga?",
		isChecked: false
	},{
		label: "What is the mental model of redux-saga?",
		isChecked: false
	},{
		label: "What are the differences between call and put in redux-saga",
		isChecked: false
	},{
		label: "What is Redux Thunk?",
		isChecked: false
	},{
		label: "What are the differences between redux-saga and redux-thunk",
		isChecked: false
	},{
		label: "What is Redux DevTools?",
		isChecked: false
	},{
		label: "What are the features of Redux DevTools?",
		isChecked: false
	},{
		label: "What are Redux selectors and Why to use them?",
		isChecked: false
	},{
		label: "What is Redux Form?",
		isChecked: false
	},{
		label: "What are the main features of Redux Form?",
		isChecked: false
	},{
		label: "How to add multiple middlewares to Redux?",
		isChecked: false
	},{
		label: "How to set initial state in Redux?",
		isChecked: false
	},{
		label: "How Relay is different from Redux?",
		isChecked: false
	},{
		label: "What is an action in Redux?",
		isChecked: false
	},{
		label: "What is the difference between React Native and React?",
		isChecked: false
	},{
		label: "How to test React Native apps?",
		isChecked: false
	},{
		label: "How to do logging in React Native?",
		isChecked: false
	},{
		label: "How to debug your React Native?",
		isChecked: false
	},{
		label: "What is reselect and how it works?",
		isChecked: false
	},{
		label: "What is Flow?",
		isChecked: false
	},{
		label: "What is the difference between Flow and PropTypes?",
		isChecked: false
	},{
		label: "How to use font-awesome icons in React?",
		isChecked: false
	},{
		label: "What is React Dev Tools?",
		isChecked: false
	},{
		label: "Why is DevTools not loading in Chrome for local files?",
		isChecked: false
	},{
		label: "How to use Polymer in React?",
		isChecked: false
	},{
		label: "What are the advantages of React over Vue.js?",
		isChecked: false
	},{
		label: "What is the difference between React and Angular?",
		isChecked: false
	},{
		label: "Why React tab is not showing up in DevTools?",
		isChecked: false
	},{
		label: "What are styled components?",
		isChecked: false
	},{
		label: "Give an example of Styled Components?",
		isChecked: false
	},{
		label: "What is Relay?",
		isChecked: false
	},{
		label: "How to use TypeScript in create-react-app application?",
		isChecked: false
	},{
		label: "What are the main features of reselect library?",
		isChecked: false
	},{
		label: "Give an example of reselect usage?",
		isChecked: false
	},{
		label: "Does the statics object work with ES6 classes in React?",
		isChecked: false
	},{
		label: "Can Redux only be used with React?",
		isChecked: false
	},{
		label: "Do you need to have a particular build tool to use Redux?",
		isChecked: false
	},{
		label: "How Redux Form initialValues get updated from state?",
		isChecked: false
	},{
		label: "How React PropTypes allow different type for one prop?",
		isChecked: false
	},{
		label: "Can I import an SVG file as react component?",
		isChecked: false
	},{
		label: "Why are inline ref callbacks or functions not recommended?",
		isChecked: false
	},{
		label: "What is render hijacking in React?",
		isChecked: false
	},{
		label: "What are HOC factory implementations?",
		isChecked: false
	},{
		label: "How to pass numbers to React component?",
		isChecked: false
	},{
		label: "Do I need to keep all my state into Redux? Should I ever use react internal state?",
		isChecked: false
	},{
		label: "What is the purpose of registerServiceWorker in React?",
		isChecked: false
	},{
		label: "What is React memo function?",
		isChecked: false
	},{
		label: "What is React lazy function?",
		isChecked: false
	},{
		label: "How to prevent unnecessary updates using setState?",
		isChecked: false
	},{
		label: "How do you render Array, Strings and Numbers in React 16 Version?",
		isChecked: false
	},{
		label: "How to use class field declarations syntax in React classes?",
		isChecked: false
	},{
		label: "What are hooks?",
		isChecked: false
	},{
		label: "What rules need to be followed for hooks?",
		isChecked: false
	},{
		label: "How to ensure hooks followed the rules in your project?",
		isChecked: false
	},{
		label: "What are the differences between Flux and Redux?",
		isChecked: false
	},{
		label: "What are the benefits of React Router V4?",
		isChecked: false
	},{
		label: "Can you describe about componentDidCatch lifecycle method signature?",
		isChecked: false
	},{
		label: "In which scenarios error boundaries do not catch errors?",
		isChecked: false
	},{
		label: "Why do you not need error boundaries for event handlers?",
		isChecked: false
	},{
		label: "What is the difference between try catch block and error boundaries?",
		isChecked: false
	},{
		label: "What is the behavior of uncaught errors in react 16?",
		isChecked: false
	},{
		label: "What is the proper placement for error boundaries?",
		isChecked: false
	},{
		label: "What is the benefit of component stack trace from error boundary?",
		isChecked: false
	},{
		label: "What is the required method to be defined for a class component?",
		isChecked: false
	},{
		label: "What are the possible return types of render method?",
		isChecked: false
	},{
		label: "What is the main purpose of constructor?",
		isChecked: false
	},{
		label: "Is it mandatory to define constructor for React component?",
		isChecked: false
	},{
		label: "What are default props?",
		isChecked: false
	},{
		label: "Why should not call setState in componentWillUnmount?",
		isChecked: false
	},{
		label: "What is the purpose of getDerivedStateFromError?",
		isChecked: false
	},{
		label: "What is the methods order when component re-rendered?",
		isChecked: false
	},{
		label: "What are the methods invoked during error handling?",
		isChecked: false
	},{
		label: "What is the purpose of displayName class property?",
		isChecked: false
	},{
		label: "What is the browser support for react applications?",
		isChecked: false
	},{
		label: "What is the purpose of unmountComponentAtNode method?",
		isChecked: false
	},{
		label: "What is code-splitting?",
		isChecked: false
	},{
		label: "What is the benefit of strict mode?",
		isChecked: false
	},{
		label: "What are Keyed Fragments?",
		isChecked: false
	},{
		label: "Does React support all HTML attributes?",
		isChecked: false
	},{
		label: "What are the limitations with HOCs?",
		isChecked: false
	},{
		label: "How to debug forwardRefs in DevTools?",
		isChecked: false
	},{
		label: "When component props defaults to true?",
		isChecked: false
	},{
		label: "What is NextJS and major features of it?",
		isChecked: false
	},{
		label: "How do you pass an event handler to a component?",
		isChecked: false
	},{
		label: "Is it good to use arrow functions in render methods?",
		isChecked: false
	},{
		label: "How to prevent a function from being called multiple times?",
		isChecked: false
	},{
		label: "How JSX prevents Injection Attacks?",
		isChecked: false
	},{
		label: "How do you update rendered elements?",
		isChecked: false
	},{
		label: "How do you say that props are read only?",
		isChecked: false
	},{
		label: "How do you say that state updates are merged?",
		isChecked: false
	},{
		label: "How do you pass arguments to an event handler?",
		isChecked: false
	},{
		label: "How to prevent component from rendering?",
		isChecked: false
	},{
		label: "What are the conditions to safely use the index as a key?",
		isChecked: false
	},{
		label: "Is it keys should be globally unique?",
		isChecked: false
	},{
		label: "What is the popular choice for form handling?",
		isChecked: false
	},{
		label: "What are the advantages of formik over redux form library?",
		isChecked: false
	},{
		label: "Why do you not required to use inheritance?",
		isChecked: false
	},{
		label: "Can I use web components in react application?",
		isChecked: false
	},{
		label: "What is dynamic import?",
		isChecked: false
	},{
		label: "What are loadable components?",
		isChecked: false
	},{
		label: "What is suspense component?",
		isChecked: false
	},{
		label: "What is route based code splitting?",
		isChecked: false
	},{
		label: "Give an example on How to use context?",
		isChecked: false
	},{
		label: "What is the purpose of default value in context?",
		isChecked: false
	},{
		label: "How do you use contextType?",
		isChecked: false
	},{
		label: "What is a consumer?",
		isChecked: false
	},{
		label: "How do you solve performance corner cases while using context?",
		isChecked: false
	},{
		label: "What is the purpose of forward ref in HOCs?",
		isChecked: false
	},{
		label: "Is it ref argument available for all functions or class components?",
		isChecked: false
	},{
		label: "Why do you need additional care for component libraries while using forward refs?",
		isChecked: false
	},{
		label: "How to create react class components without ES6?",
		isChecked: false
	},{
		label: "Is it possible to use react without JSX?",
		isChecked: false
	},{
		label: "What is diffing algorithm?",
		isChecked: false
	},{
		label: "What are the rules covered by diffing algorithm?",
		isChecked: false
	},{
		label: "When do you need to use refs?",
		isChecked: false
	},{
		label: "Is it prop must be named as render for render props?",
		isChecked: false
	},{
		label: "What are the problems of using render props with pure components?",
		isChecked: false
	},{
		label: "How do you create HOC using render props?",
		isChecked: false
	},{
		label: "What is windowing technique?",
		isChecked: false
	},{
		label: "How do you print falsy values in JSX?",
		isChecked: false
	},{
		label: "What is the typical use case of portals?",
		isChecked: false
	},{
		label: "How do you set default value for uncontrolled component?",
		isChecked: false
	},{
		label: "What is your favorite React stack?",
		isChecked: false
	},{
		label: "What is the difference between Real DOM and Virtual DOM?",
		isChecked: false
	},{
		label: "How to add Bootstrap to a react application?",
		isChecked: false
	},{
		label: "Can you list down top websites or applications using react as front end framework?",
		isChecked: false
	},{
		label: "Is it recommended to use CSS In JS technique in React?",
		isChecked: false
	},{
		label: "Do I need to rewrite all my class components with hooks?",
		isChecked: false
	},{
		label: "How to fetch data with React Hooks?",
		isChecked: false
	},{
		label: "Is Hooks cover all use cases for classes?",
		isChecked: false
	},{
		label: "What is the stable release for hooks support?",
		isChecked: false
	},{
		label: "Why do we use array destructuring (square brackets notation) in useState?",
		isChecked: false
	},{
		label: "What are the sources used for introducing hooks?",
		isChecked: false
	},{
		label: "How do you access imperative API of web components?",
		isChecked: false
	},{
		label: "What is formik?",
		isChecked: false
	},{
		label: "What are typical middleware choices for handling asynchronous calls in Redux?",
		isChecked: false
	},{
		label: "Do browsers understand JSX code?",
		isChecked: false
	},{
		label: "Describe about data flow in react?",
		isChecked: false
	},{
		label: "What is react scripts?",
		isChecked: false
	},{
		label: "What are the features of create react app?",
		isChecked: false
	},{
		label: "What is the purpose of renderToNodeStream method?",
		isChecked: false
	},{
		label: "What is MobX?",
		isChecked: false
	},{
		label: "What are the differences between Redux and MobX?",
		isChecked: false
	},{
		label: "Should I learn ES6 before learning ReactJS?",
		isChecked: false
	},{
		label: "What is Concurrent Rendering?",
		isChecked: false
	},{
		label: "What is the difference between async mode and concurrent mode?",
		isChecked: false
	},{
		label: "Can I use javascript urls in react16.9?",
		isChecked: false
	},{
		label: "What is the purpose of eslint plugin for hooks?",
		isChecked: false
	},{
		label: "What is the difference between Imperative and Declarative in React?",
		isChecked: false
	},{
		label: "What are the benefits of using typescript with reactjs?",
		isChecked: false
	},{
		label: "How do you make sure that user remains authenticated on page refresh while using Context API State Management?",
		isChecked: false
	},{
		label: "What are the benefits of new JSX transform?",
		isChecked: false
	},{
		label: "How is the new JSX transform different from old transform?",
		isChecked: false
	},{
		label: "How do you get redux scaffolding using create-react-app?",
		isChecked: false
	},{
		label: "What are React Server components?",
		isChecked: false
	},{
		label: "What is prop drilling?",
		isChecked: false
	},{
		label: "What is state mutation and how to prevent it?",
		isChecked: false
	},{
		label: "What is the difference between useState and useRef hook?",
		isChecked: false
	},{
		label: "What is a wrapper component ",
		isChecked: false
	},{
		label: "What are the differences between useEffect and useLayoutEffect hooks",
		isChecked: false
	},{
		label: "What are the differences between Functional and Class Components ",
		isChecked: false
	},{
		label: "Why does strict mode render twice in React?",
		isChecked: false
	}]

export default App
