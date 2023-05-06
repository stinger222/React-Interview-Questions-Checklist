import { IRawTodo } from "../types"

export const LS_KEY = 'interview_questions'

export const rawTodos: IRawTodo[] = [
	{
		label: "What is React?",
		link: "#what-is-react"
	},{
		label: "What are the major features of React?",
		link: "#what-are-the-major-features-of-react"
	},{
		label: "What is JSX?",
		link: "#what-is-jsx"
	},{
		label: "What is the difference between Element and Component?",
		link: "#what-is-the-difference-between-element-and-component"
	},{
		label: "How to create components in React?",
		link: "#how-to-create-components-in-react"
	},{
		label: "When to use a Class Component over a Function Component?",
		link: "#when-to-use-a-class-component-over-a-function-component"
	},{
		label: "What are Pure Components?",
		link: "#what-are-pure-components"
	},{
		label: "What is state in React?",
		link: "#what-is-state-in-react"
	},{
		label: "What are props in React?",
		link: "#what-are-props-in-react"
	},{
		label: "What is the difference between state and props?",
		link: "#what-is-the-difference-between-state-and-props"
	},{
		label: "Why should we not update the state directly?",
		link: "#why-should-we-not-update-the-state-directly"
	},{
		label: "What is the purpose of callback function as an argument of setState()?",
		link: "#what-is-the-purpose-of-callback-function-as-an-argument-of-setstate"
	},{
		label: "What is the difference between HTML and React event handling?",
		link: "#what-is-the-difference-between-html-and-react-event-handling"
	},{
		label: "How to bind methods or event handlers in JSX callbacks?",
		link: "#how-to-bind-methods-or-event-handlers-in-jsx-callbacks"
	},{
		label: "How to pass a parameter to an event handler or callback?",
		link: "#how-to-pass-a-parameter-to-an-event-handler-or-callback"
	},{
		label: "What are synthetic events in React?",
		link: "#what-are-synthetic-events-in-react"
	},{
		label: "What are inline conditional expressions?",
		link: "#what-are-inline-conditional-expressions"
	},{
		label: "What is \"key\" prop and what is the benefit of using it in arrays of elements?",
		link: "#what-is-key-prop-and-what-is-the-benefit-of-using-it-in-arrays-of-elements"
	},{
		label: "What is the use of refs?",
		link: "#what-is-the-use-of-refs"
	},{
		label: "How to create refs?",
		link: "#how-to-create-refs"
	},{
		label: "What are forward refs?",
		link: "#what-are-forward-refs"
	},{
		label: "Which is preferred option with in callback refs and findDOMNode()?",
		link: "#which-is-preferred-option-with-in-callback-refs-and-finddomnode"
	},{
		label: "Why are String Refs legacy?",
		link: "#why-are-string-refs-legacy"
	},{
		label: "What is Virtual DOM?",
		link: "#what-is-virtual-dom"
	},{
		label: "How Virtual DOM works?",
		link: "#how-virtual-dom-works"
	},{
		label: "What is the difference between Shadow DOM and Virtual DOM?",
		link: "#what-is-the-difference-between-shadow-dom-and-virtual-dom"
	},{
		label: "What is React Fiber?",
		link: "#what-is-react-fiber"
	},{
		label: "What is the main goal of React Fiber?",
		link: "#what-is-the-main-goal-of-react-fiber"
	},{
		label: "What are controlled components?",
		link: "#what-are-controlled-components"
	},{
		label: "What are uncontrolled components?",
		link: "#what-are-uncontrolled-components"
	},{
		label: "What is the difference between createElement and cloneElement?",
		link: "#what-is-the-difference-between-createelement-and-cloneelement"
	},{
		label: "What is Lifting State Up in React?",
		link: "#what-is-lifting-state-up-in-react"
	},{
		label: "What are the different phases of component lifecycle?",
		link: "#what-are-the-different-phases-of-component-lifecycle"
	},{
		label: "What are the lifecycle methods of React?",
		link: "#what-are-the-lifecycle-methods-of-react"
	},{
		label: "What are Higher-Order components?",
		link: "#what-are-higher-order-components"
	},{
		label: "How to create props proxy for HOC component?",
		link: "#how-to-create-props-proxy-for-hoc-component"
	},{
		label: "What is context?",
		link: "#what-is-context"
	},{
		label: "What is children prop?",
		link: "#what-is-children-prop"
	},{
		label: "How to write comments in React?",
		link: "#how-to-write-comments-in-react"
	},{
		label: "What is the purpose of using super constructor with props argument?",
		link: "#what-is-the-purpose-of-using-super-constructor-with-props-argument"
	},{
		label: "What is reconciliation?",
		link: "#what-is-reconciliation"
	},{
		label: "How to set state with a dynamic key name?",
		link: "#how-to-set-state-with-a-dynamic-key-name"
	},{
		label: "What would be the common mistake of function being called every time the component renders?",
		link: "#what-would-be-the-common-mistake-of-function-being-called-every-time-the-component-renders"
	},{
		label: "Is lazy function supports named exports?",
		link: "#is-lazy-function-supports-named-exports"
	},{
		label: "Why React uses className over class attribute?",
		link: "#why-react-uses-classname-over-class-attribute"
	},{
		label: "What are fragments?",
		link: "#what-are-fragments"
	},{
		label: "Why fragments are better than container divs?",
		link: "#why-fragments-are-better-than-container-divs"
	},{
		label: "What are portals in React?",
		link: "#what-are-portals-in-react"
	},{
		label: "What are stateless components?",
		link: "#what-are-stateless-components"
	},{
		label: "What are stateful components?",
		link: "#what-are-stateful-components"
	},{
		label: "How to apply validation on props in React?",
		link: "#how-to-apply-validation-on-props-in-react"
	},{
		label: "What are the advantages of React?",
		link: "#what-are-the-advantages-of-react"
	},{
		label: "What are the limitations of React?",
		link: "#what-are-the-limitations-of-react"
	},{
		label: "What are error boundaries in React v16",
		link: "#what-are-error-boundaries-in-react-v16"
	},{
		label: "How are error boundaries handled in React v15?",
		link: "#how-are-error-boundaries-handled-in-react-v15"
	},{
		label: "What are the recommended ways for static type checking?",
		link: "#what-are-the-recommended-ways-for-static-type-checking"
	},{
		label: "What is the use of react-dom package?",
		link: "#what-is-the-use-of-react-dom-package"
	},{
		label: "What is the purpose of render method of react-dom?",
		link: "#what-is-the-purpose-of-render-method-of-react-dom"
	},{
		label: "What is ReactDOMServer?",
		link: "#what-is-reactdomserver"
	},{
		label: "How to use InnerHtml in React?",
		link: "#how-to-use-innerhtml-in-react"
	},{
		label: "How to use styles in React?",
		link: "#how-to-use-styles-in-react"
	},{
		label: "How events are different in React?",
		link: "#how-events-are-different-in-react"
	},{
		label: "What will happen if you use setState in constructor?",
		link: "#what-will-happen-if-you-use-setstate-in-constructor"
	},{
		label: "What is the impact of indexes as keys?",
		link: "#what-is-the-impact-of-indexes-as-keys"
	},{
		label: "Is it good to use setState() in componentWillMount() method?",
		link: "#is-it-good-to-use-setstate-in-componentwillmount-method"
	},{
		label: "What will happen if you use props in initial state?",
		link: "#what-will-happen-if-you-use-props-in-initial-state"
	},{
		label: "How do you conditionally render components?",
		link: "#how-do-you-conditionally-render-components"
	},{
		label: "Why we need to be careful when spreading props on DOM elements??",
		link: "#why-we-need-to-be-careful-when-spreading-props-on-dom-elements"
	},{
		label: "How you use decorators in React?",
		link: "#how-you-use-decorators-in-react"
	},{
		label: "How do you memoize a component?",
		link: "#how-do-you-memoize-a-component"
	},{
		label: "How you implement Server-Side Rendering or SSR?",
		link: "#how-you-implement-server-side-rendering-or-ssr"
	},{
		label: "How to enable production mode in React?",
		link: "#how-to-enable-production-mode-in-react"
	},{
		label: "What is CRA and its benefits?",
		link: "#what-is-cra-and-its-benefits"
	},{
		label: "What is the lifecycle methods order in mounting?",
		link: "#what-is-the-lifecycle-methods-order-in-mounting"
	},{
		label: "What are the lifecycle methods going to be deprecated in React v16?",
		link: "#what-are-the-lifecycle-methods-going-to-be-deprecated-in-react-v16"
	},{
		label: "What is the purpose of getDerivedStateFromProps() lifecycle method?",
		link: "#what-is-the-purpose-of-getderivedstatefromprops-lifecycle-method"
	},{
		label: "What is the purpose of getSnapshotBeforeUpdate() lifecycle method?",
		link: "#what-is-the-purpose-of-getsnapshotbeforeupdate-lifecycle-method"
	},{
		label: "Do Hooks replace render props and higher order components?",
		link: "#do-hooks-replace-render-props-and-higher-order-components"
	},{
		label: "What is the recommended way for naming components?",
		link: "#what-is-the-recommended-way-for-naming-components"
	},{
		label: "What is the recommended ordering of methods in component class?",
		link: "#what-is-the-recommended-ordering-of-methods-in-component-class"
	},{
		label: "What is a switching component?",
		link: "#what-is-a-switching-component"
	},{
		label: "Why we need to pass a function to setState()?",
		link: "#why-we-need-to-pass-a-function-to-setstate"
	},{
		label: "What is strict mode in React?",
		link: "#what-is-strict-mode-in-react"
	},{
		label: "What are React Mixins?",
		link: "#what-are-react-mixins"
	},{
		label: "Why is isMounted() an anti-pattern and what is the proper solution?",
		link: "#why-is-ismounted-an-anti-pattern-and-what-is-the-proper-solution"
	},{
		label: "What are the Pointer Events supported in React?",
		link: "#what-are-the-pointer-events-supported-in-react"
	},{
		label: "Why should component names start with capital letter?",
		link: "#why-should-component-names-start-with-capital-letter"
	},{
		label: "Are custom DOM attributes supported in React v16?",
		link: "#are-custom-dom-attributes-supported-in-react-v16"
	},{
		label: "What is the difference between constructor and getInitialState?",
		link: "#what-is-the-difference-between-constructor-and-getinitialstate"
	},{
		label: "Can you force a component to re-render without calling setState?",
		link: "#can-you-force-a-component-to-re-render-without-calling-setstate"
	},{
		label: "What is the difference between super() and super(props) in React using ES6 classes?",
		link: "#what-is-the-difference-between-super-and-superprops-in-react-using-es6-classes"
	},{
		label: "How to loop inside JSX?",
		link: "#how-to-loop-inside-jsx"
	},{
		label: "How do you access props in attribute quotes?",
		link: "#how-do-you-access-props-in-attribute-quotes"
	},{
		label: "What is React PropType array with shape?",
		link: "#what-is-react-proptype-array-with-shape"
	},{
		label: "How to conditionally apply class attributes?",
		link: "#how-to-conditionally-apply-class-attributes"
	},{
		label: "What is the difference between React and ReactDOM?",
		link: "#what-is-the-difference-between-react-and-reactdom"
	},{
		label: "Why ReactDOM is separated from React?",
		link: "#why-reactdom-is-separated-from-react"
	},{
		label: "How to use React label element?",
		link: "#how-to-use-react-label-element"
	},{
		label: "How to combine multiple inline style objects?",
		link: "#how-to-combine-multiple-inline-style-objects"
	},{
		label: "How to re-render the view when the browser is resized?",
		link: "#how-to-re-render-the-view-when-the-browser-is-resized"
	},{
		label: "What is the difference between setState and replaceState methods?",
		link: "#what-is-the-difference-between-setstate-and-replacestate-methods"
	},{
		label: "How to listen to state changes?",
		link: "#how-to-listen-to-state-changes"
	},{
		label: "What is the recommended approach of removing an array element in react state?",
		link: "#what-is-the-recommended-approach-of-removing-an-array-element-in-react-state"
	},{
		label: "Is it possible to use React without rendering HTML?",
		link: "#is-it-possible-to-use-react-without-rendering-html"
	},{
		label: "How to pretty print JSON with React?",
		link: "#how-to-pretty-print-json-with-react"
	},{
		label: "Why you can't update props in React?",
		link: "#why-you-cant-update-props-in-react"
	},{
		label: "How to focus an input element on page load?",
		link: "#how-to-focus-an-input-element-on-page-load"
	},{
		label: "What are the possible ways of updating objects in state?",
		link: "#what-are-the-possible-ways-of-updating-objects-in-state"
	},{
		label: "How can we find the version of React at runtime in the browser?",
		link: "#how-can-we-find-the-version-of-react-at-runtime-in-the-browser"
	},{
		label: "What are the approaches to include polyfills in your create-react-app?",
		link: "#what-are-the-approaches-to-include-polyfills-in-your-create-react-app"
	},{
		label: "How to use https instead of http in create-react-app?",
		link: "#how-to-use-https-instead-of-http-in-create-react-app"
	},{
		label: "How to avoid using relative path imports in create-react-app?",
		link: "#how-to-avoid-using-relative-path-imports-in-create-react-app"
	},{
		label: "How to add Google Analytics for react-router?",
		link: "#how-to-add-google-analytics-for-react-router"
	},{
		label: "How to update a component every second?",
		link: "#how-to-update-a-component-every-second"
	},{
		label: "How do you apply vendor prefixes to inline styles in React?",
		link: "#how-do-you-apply-vendor-prefixes-to-inline-styles-in-react"
	},{
		label: "How to import and export components using react and ES6?",
		link: "#how-to-import-and-export-components-using-react-and-es6"
	},{
		label: "What are the exceptions on React component naming?",
		link: "#what-are-the-exceptions-on-react-component-naming"
	},{
		label: "Why is a component constructor called only once?",
		link: "#why-is-a-component-constructor-called-only-once"
	},{
		label: "How to define constants in React?",
		link: "#how-to-define-constants-in-react"
	},{
		label: "How to programmatically trigger click event in React?",
		link: "#how-to-programmatically-trigger-click-event-in-react"
	},{
		label: "Is it possible to use async/await in plain React?",
		link: "#is-it-possible-to-use-asyncawait-in-plain-react"
	},{
		label: "What are the common folder structures for React?",
		link: "#what-are-the-common-folder-structures-for-react"
	},{
		label: "What are the popular packages for animation?",
		link: "#what-are-the-popular-packages-for-animation"
	},{
		label: "What is the benefit of styles modules?",
		link: "#what-is-the-benefit-of-styles-modules"
	},{
		label: "What are the popular React-specific linters?",
		link: "#what-are-the-popular-react-specific-linters"
	},{
		label: "How to make AJAX call and In which component lifecycle methods should I make an AJAX call?",
		link: "#how-to-make-ajax-call-and-in-which-component-lifecycle-methods-should-i-make-an-ajax-call"
	},{
		label: "What are render props?",
		link: "#what-are-render-props"
	},{
		label: "What is React Router?",
		link: "#what-is-react-router"
	},{
		label: "How React Router is different from history library?",
		link: "#how-react-router-is-different-from-history-library"
	},{
		label: "What are the \<Router> components of React Router v4?",
		link: "#what-are-the-router-components-of-react-router-v4"
	},{
		label: "What is the purpose of push and replace methods of history?",
		link: "#what-is-the-purpose-of-push-and-replace-methods-of-history"
	},{
		label: "How do you programmatically navigate using React router v4?",
		link: "#how-do-you-programmatically-navigate-using-react-router-v4"
	},{
		label: "How to get query parameters in React Router v4",
		link: "#how-to-get-query-parameters-in-react-router-v4"
	},{
		label: "Why you get \"Router may have only one child element\" warning?",
		link: "#why-you-get-router-may-have-only-one-child-element-warning"
	},{
		label: "How to pass params to history.push method in React Router v4?",
		link: "#how-to-pass-params-to-historypush-method-in-react-router-v4"
	},{
		label: "How to implement default or NotFound page?",
		link: "#how-to-implement-default-or-notfound-page"
	},{
		label: "How to get history on React Router v4?",
		link: "#how-to-get-history-on-react-router-v4"
	},{
		label: "How to perform automatic redirect after login?",
		link: "#how-to-perform-automatic-redirect-after-login"
	},{
		label: "What is React-Intl?",
		link: "#what-is-react-intl"
	},{
		label: "What are the main features of React Intl?",
		link: "#what-are-the-main-features-of-react-intl"
	},{
		label: "What are the two ways of formatting in React Intl?",
		link: "#what-are-the-two-ways-of-formatting-in-react-intl"
	},{
		label: "How to use FormattedMessage as placeholder using React Intl?",
		link: "#how-to-use-formattedmessage-as-placeholder-using-react-intl"
	},{
		label: "How to access current locale with React Intl",
		link: "#how-to-access-current-locale-with-react-intl"
	},{
		label: "How to format date using React Intl?",
		link: "#how-to-format-date-using-react-intl"
	},{
		label: "What is Shallow Renderer in React testing?",
		link: "#what-is-shallow-renderer-in-react-testing"
	},{
		label: "What is TestRenderer package in React?",
		link: "#what-is-testrenderer-package-in-react"
	},{
		label: "What is the purpose of ReactTestUtils package?",
		link: "#what-is-the-purpose-of-reacttestutils-package"
	},{
		label: "What is Jest?",
		link: "#what-is-jest"
	},{
		label: "What are the advantages of Jest over Jasmine?",
		link: "#what-are-the-advantages-of-jest-over-jasmine"
	},{
		label: "Give a simple example of Jest test case",
		link: "#give-a-simple-example-of-jest-test-case"
	},{
		label: "What is Flux?",
		link: "#what-is-flux"
	},{
		label: "What is Redux?",
		link: "#what-is-redux"
	},{
		label: "What are the core principles of Redux?",
		link: "#what-are-the-core-principles-of-redux"
	},{
		label: "What are the downsides of Redux compared to Flux?",
		link: "#what-are-the-downsides-of-redux-compared-to-flux"
	},{
		label: "What is the difference between mapStateToProps() and mapDispatchToProps()?",
		link: "#what-is-the-difference-between-mapstatetoprops-and-mapdispatchtoprops"
	},{
		label: "Can I dispatch an action in reducer?",
		link: "#can-i-dispatch-an-action-in-reducer"
	},{
		label: "How to access Redux store outside a component?",
		link: "#how-to-access-redux-store-outside-a-component"
	},{
		label: "What are the drawbacks of MVW pattern",
		link: "#what-are-the-drawbacks-of-mvw-pattern"
	},{
		label: "Are there any similarities between Redux and RxJS?",
		link: "#are-there-any-similarities-between-redux-and-rxjs"
	},{
		label: "How to dispatch an action on load?",
		link: "#how-to-dispatch-an-action-on-load"
	},{
		label: "How to use connect from React Redux?",
		link: "#how-to-use-connect-from-react-redux"
	},{
		label: "How to reset state in Redux?",
		link: "#how-to-reset-state-in-redux"
	},{
		label: "Whats the purpose of at symbol in the redux connect decorator?",
		link: "#whats-the-purpose-of-at-symbol-in-the-redux-connect-decorator"
	},{
		label: "What is the difference between React context and React Redux?",
		link: "#what-is-the-difference-between-react-context-and-react-redux"
	},{
		label: "Why are Redux state functions called reducers?",
		link: "#why-are-redux-state-functions-called-reducers"
	},{
		label: "How to make AJAX request in Redux?",
		link: "#how-to-make-ajax-request-in-redux"
	},{
		label: "Should I keep all component's state in Redux store?",
		link: "#should-i-keep-all-components-state-in-redux-store"
	},{
		label: "What is the proper way to access Redux store?",
		link: "#what-is-the-proper-way-to-access-redux-store"
	},{
		label: "What is the difference between component and container in React Redux?",
		link: "#what-is-the-difference-between-component-and-container-in-react-redux"
	},{
		label: "What is the purpose of the constants in Redux? ",
		link: "#what-is-the-purpose-of-the-constants-in-redux"
	},{
		label: "What are the different ways to write mapDispatchToProps()?",
		link: "#what-are-the-different-ways-to-write-mapdispatchtoprops"
	},{
		label: "What is the use of the ownProps parameter in mapStateToProps() and mapDispatchToProps()?",
		link: "#what-is-the-use-of-the-ownprops-parameter-in-mapstatetoprops-and-mapdispatchtoprops"
	},{
		label: "How to structure Redux top level directories?",
		link: "#how-to-structure-redux-top-level-directories"
	},{
		label: "What is redux-saga?",
		link: "#what-is-redux-saga"
	},{
		label: "What is the mental model of redux-saga?",
		link: "#what-is-the-mental-model-of-redux-saga"
	},{
		label: "What are the differences between call and put in redux-saga",
		link: "#what-are-the-differences-between-call-and-put-in-redux-saga"
	},{
		label: "What is Redux Thunk?",
		link: "#what-is-redux-thunk"
	},{
		label: "What are the differences between redux-saga and redux-thunk",
		link: "#what-are-the-differences-between-redux-saga-and-redux-thunk"
	},{
		label: "What is Redux DevTools?",
		link: "#what-is-redux-devtools"
	},{
		label: "What are the features of Redux DevTools?",
		link: "#what-are-the-features-of-redux-devtools"
	},{
		label: "What are Redux selectors and Why to use them?",
		link: "#what-are-redux-selectors-and-why-to-use-them"
	},{
		label: "What is Redux Form?",
		link: "#what-is-redux-form"
	},{
		label: "What are the main features of Redux Form?",
		link: "#what-are-the-main-features-of-redux-form"
	},{
		label: "How to add multiple middlewares to Redux?",
		link: "#how-to-add-multiple-middlewares-to-redux"
	},{
		label: "How to set initial state in Redux?",
		link: "#how-to-set-initial-state-in-redux"
	},{
		label: "How Relay is different from Redux?",
		link: "#how-relay-is-different-from-redux"
	},{
		label: "What is an action in Redux?",
		link: "#what-is-an-action-in-redux"
	},{
		label: "What is the difference between React Native and React?",
		link: "#what-is-the-difference-between-react-native-and-react"
	},{
		label: "How to test React Native apps?",
		link: "#how-to-test-react-native-apps"
	},{
		label: "How to do logging in React Native?",
		link: "#how-to-do-logging-in-react-native"
	},{
		label: "How to debug your React Native?",
		link: "#how-to-debug-your-react-native"
	},{
		label: "What is reselect and how it works?",
		link: "#what-is-reselect-and-how-it-works"
	},{
		label: "What is Flow?",
		link: "#what-is-flow"
	},{
		label: "What is the difference between Flow and PropTypes?",
		link: "#what-is-the-difference-between-flow-and-proptypes"
	},{
		label: "How to use font-awesome icons in React?",
		link: "#how-to-use-font-awesome-icons-in-react"
	},{
		label: "What is React Dev Tools?",
		link: "#what-is-react-dev-tools"
	},{
		label: "Why is DevTools not loading in Chrome for local files?",
		link: "#why-is-devtools-not-loading-in-chrome-for-local-files"
	},{
		label: "How to use Polymer in React?",
		link: "#how-to-use-polymer-in-react"
	},{
		label: "What are the advantages of React over Vue.js?",
		link: "#what-are-the-advantages-of-react-over-vuejs"
	},{
		label: "What is the difference between React and Angular?",
		link: "#what-is-the-difference-between-react-and-angular"
	},{
		label: "Why React tab is not showing up in DevTools?",
		link: "#why-react-tab-is-not-showing-up-in-devtools"
	},{
		label: "What are styled components?",
		link: "#what-are-styled-components"
	},{
		label: "Give an example of Styled Components?",
		link: "#give-an-example-of-styled-components"
	},{
		label: "What is Relay?",
		link: "#what-is-relay"
	},{
		label: "How to use TypeScript in create-react-app application?",
		link: "#how-to-use-typescript-in-create-react-app-application"
	},{
		label: "What are the main features of reselect library?",
		link: "#what-are-the-main-features-of-reselect-library"
	},{
		label: "Give an example of reselect usage?",
		link: "#give-an-example-of-reselect-usage"
	},{
		label: "Does the statics object work with ES6 classes in React?",
		link: "#does-the-statics-object-work-with-es6-classes-in-react"
	},{
		label: "Can Redux only be used with React?",
		link: "#can-redux-only-be-used-with-react"
	},{
		label: "Do you need to have a particular build tool to use Redux?",
		link: "#do-you-need-to-have-a-particular-build-tool-to-use-redux"
	},{
		label: "How Redux Form initialValues get updated from state?",
		link: "#how-redux-form-initialvalues-get-updated-from-state"
	},{
		label: "How React PropTypes allow different type for one prop?",
		link: "#how-react-proptypes-allow-different-types-for-one-prop"
	},{
		label: "Can I import an SVG file as react component?",
		link: "#can-i-import-an-svg-file-as-react-component"
	},{
		label: "Why are inline ref callbacks or functions not recommended?",
		link: "#why-are-inline-ref-callbacks-or-functions-not-recommended"
	},{
		label: "What is render hijacking in React?",
		link: "#what-is-render-hijacking-in-react"
	},{
		label: "What are HOC factory implementations?",
		link: "#what-are-hoc-factory-implementations"
	},{
		label: "How to pass numbers to React component?",
		link: "#how-to-pass-numbers-to-react-component"
	},{
		label: "Do I need to keep all my state into Redux? Should I ever use react internal state?",
		link: "#do-i-need-to-keep-all-my-state-into-redux-should-i-ever-use-react-internal-state"
	},{
		label: "What is the purpose of registerServiceWorker in React?",
		link: "#what-is-the-purpose-of-registerserviceworker-in-react"
	},{
		label: "What is React memo function?",
		link: "#what-is-react-memo-function"
	},{
		label: "What is React lazy function?",
		link: "#what-is-react-lazy-function"
	},{
		label: "How to prevent unnecessary updates using setState?",
		link: "#how-to-prevent-unnecessary-updates-using-setstate"
	},{
		label: "How do you render Array, Strings and Numbers in React 16 Version?",
		link: "#how-do-you-render-array-strings-and-numbers-in-react-16-version"
	},{
		label: "How to use class field declarations syntax in React classes?",
		link: "#how-to-use-class-field-declarations-syntax-in-react-classes"
	},{
		label: "What are hooks?",
		link: "#what-are-hooks"
	},{
		label: "What rules need to be followed for hooks?",
		link: "#what-rules-need-to-be-followed-for-hooks"
	},{
		label: "How to ensure hooks followed the rules in your project?",
		link: "#how-to-ensure-hooks-followed-the-rules-in-your-project"
	},{
		label: "What are the differences between Flux and Redux?",
		link: "#what-are-the-differences-between-flux-and-redux"
	},{
		label: "What are the benefits of React Router V4?",
		link: "#what-are-the-benefits-of-react-router-v4"
	},{
		label: "Can you describe about componentDidCatch lifecycle method signature?",
		link: "#can-you-describe-about-componentdidcatch-lifecycle-method-signature"
	},{
		label: "In which scenarios error boundaries do not catch errors?",
		link: "#in-which-scenarios-error-boundaries-do-not-catch-errors"
	},{
		label: "Why do you not need error boundaries for event handlers?",
		link: "#why-do-you-not-need-error-boundaries-for-event-handlers"
	},{
		label: "What is the difference between try catch block and error boundaries?",
		link: "#what-is-the-difference-between-try-catch-block-and-error-boundaries"
	},{
		label: "What is the behavior of uncaught errors in react 16?",
		link: "#what-is-the-behavior-of-uncaught-errors-in-react-16"
	},{
		label: "What is the proper placement for error boundaries?",
		link: "#what-is-the-proper-placement-for-error-boundaries"
	},{
		label: "What is the benefit of component stack trace from error boundary?",
		link: "#what-is-the-benefit-of-component-stack-trace-from-error-boundary"
	},{
		label: "What is the required method to be defined for a class component?",
		link: "#what-is-the-required-method-to-be-defined-for-a-class-component"
	},{
		label: "What are the possible return types of render method?",
		link: "#what-are-the-possible-return-types-of-render-method"
	},{
		label: "What is the main purpose of constructor?",
		link: "#what-is-the-main-purpose-of-constructor"
	},{
		label: "Is it mandatory to define constructor for React component?",
		link: "#is-it-mandatory-to-define-constructor-for-react-component"
	},{
		label: "What are default props?",
		link: "#what-are-default-props"
	},{
		label: "Why should not call setState in componentWillUnmount?",
		link: "#why-should-not-call-setstate-in-componentwillunmount"
	},{
		label: "What is the purpose of getDerivedStateFromError?",
		link: "#what-is-the-purpose-of-getderivedstatefromerror"
	},{
		label: "What is the methods order when component re-rendered?",
		link: "#what-is-the-methods-order-when-component-re-rendered"
	},{
		label: "What are the methods invoked during error handling?",
		link: "#what-are-the-methods-invoked-during-error-handling"
	},{
		label: "What is the purpose of displayName class property?",
		link: "#what-is-the-purpose-of-displayname-class-property"
	},{
		label: "What is the browser support for react applications?",
		link: "#what-is-the-browser-support-for-react-applications"
	},{
		label: "What is the purpose of unmountComponentAtNode method?",
		link: "#what-is-the-purpose-of-unmountcomponentatnode-method"
	},{
		label: "What is code-splitting?",
		link: "#what-is-code-splitting"
	},{
		label: "What is the benefit of strict mode?",
		link: "#what-is-the-benefit-of-strict-mode"
	},{
		label: "What are Keyed Fragments?",
		link: "#what-are-keyed-fragments"
	},{
		label: "Does React support all HTML attributes?",
		link: "#does-react-support-all-html-attributes"
	},{
		label: "What are the limitations with HOCs?",
		link: "#what-are-the-limitations-with-hocs"
	},{
		label: "How to debug forwardRefs in DevTools?",
		link: "#how-to-debug-forwardrefs-in-devtools"
	},{
		label: "When component props defaults to true?",
		link: "#when-component-props-defaults-to-true"
	},{
		label: "What is NextJS and major features of it?",
		link: "#what-is-nextjs-and-major-features-of-it"
	},{
		label: "How do you pass an event handler to a component?",
		link: "#how-do-you-pass-an-event-handler-to-a-component"
	},{
		label: "Is it good to use arrow functions in render methods?",
		link: "#is-it-good-to-use-arrow-functions-in-render-methods"
	},{
		label: "How to prevent a function from being called multiple times?",
		link: "#how-to-prevent-a-function-from-being-called-multiple-times"
	},{
		label: "How JSX prevents Injection Attacks?",
		link: "#how-jsx-prevents-injection-attacks"
	},{
		label: "How do you update rendered elements?",
		link: "#how-do-you-update-rendered-elements"
	},{
		label: "How do you say that props are read only?",
		link: "#how-do-you-say-that-props-are-read-only"
	},{
		label: "How do you say that state updates are merged?",
		link: "#how-do-you-say-that-state-updates-are-merged"
	},{
		label: "How do you pass arguments to an event handler?",
		link: "#how-do-you-pass-arguments-to-an-event-handler"
	},{
		label: "How to prevent component from rendering?",
		link: "#how-to-prevent-component-from-rendering"
	},{
		label: "What are the conditions to safely use the index as a key?",
		link: "#what-are-the-conditions-to-safely-use-the-index-as-a-key"
	},{
		label: "Is it keys should be globally unique?",
		link: "#is-it-keys-should-be-globally-unique"
	},{
		label: "What is the popular choice for form handling?",
		link: "#what-is-the-popular-choice-for-form-handling"
	},{
		label: "What are the advantages of formik over redux form library?",
		link: "#what-are-the-advantages-of-formik-over-redux-form-library"
	},{
		label: "Why do you not required to use inheritance?",
		link: "#why-do-you-not-required-to-use-inheritance"
	},{
		label: "Can I use web components in react application?",
		link: "#can-i-use-web-components-in-react-application"
	},{
		label: "What is dynamic import?",
		link: "#what-is-dynamic-import"
	},{
		label: "What are loadable components?",
		link: "#what-are-loadable-components"
	},{
		label: "What is suspense component?",
		link: "#what-is-suspense-component"
	},{
		label: "What is route based code splitting?",
		link: "#what-is-route-based-code-splitting"
	},{
		label: "Give an example on How to use context?",
		link: "#give-an-example-on-how-to-use-context"
	},{
		label: "What is the purpose of default value in context?",
		link: "#what-is-the-purpose-of-default-value-in-context"
	},{
		label: "How do you use contextType?",
		link: "#how-do-you-use-contexttype"
	},{
		label: "What is a consumer?",
		link: "#what-is-a-consumer"
	},{
		label: "How do you solve performance corner cases while using context?",
		link: "#how-do-you-solve-performance-corner-cases-while-using-context"
	},{
		label: "What is the purpose of forward ref in HOCs?",
		link: "#what-is-the-purpose-of-forward-ref-in-hocs"
	},{
		label: "Is it ref argument available for all functions or class components?",
		link: "#is-it-ref-argument-available-for-all-functions-or-class-components"
	},{
		label: "Why do you need additional care for component libraries while using forward refs?",
		link: "#why-do-you-need-additional-care-for-component-libraries-while-using-forward-refs"
	},{
		label: "How to create react class components without ES6?",
		link: "#how-to-create-react-class-components-without-es6"
	},{
		label: "Is it possible to use react without JSX?",
		link: "#is-it-possible-to-use-react-without-jsx"
	},{
		label: "What is diffing algorithm?",
		link: "#what-is-diffing-algorithm"
	},{
		label: "What are the rules covered by diffing algorithm?",
		link: "#what-are-the-rules-covered-by-diffing-algorithm"
	},{
		label: "When do you need to use refs?",
		link: "#when-do-you-need-to-use-refs"
	},{
		label: "Is it prop must be named as render for render props?",
		link: "#is-it-prop-must-be-named-as-render-for-render-props"
	},{
		label: "What are the problems of using render props with pure components?",
		link: "#what-are-the-problems-of-using-render-props-with-pure-components"
	},{
		label: "How do you create HOC using render props?",
		link: "#how-do-you-create-hoc-using-render-props"
	},{
		label: "What is windowing technique?",
		link: "#what-is-windowing-technique"
	},{
		label: "How do you print falsy values in JSX?",
		link: "#how-do-you-print-falsy-values-in-jsx"
	},{
		label: "What is the typical use case of portals?",
		link: "#what-is-the-typical-use-case-of-portals"
	},{
		label: "How do you set default value for uncontrolled component?",
		link: "#how-do-you-set-default-value-for-uncontrolled-component"
	},{
		label: "What is your favorite React stack?",
		link: "#what-is-your-favorite-react-stack"
	},{
		label: "What is the difference between Real DOM and Virtual DOM?",
		link: "#what-is-the-difference-between-real-dom-and-virtual-dom"
	},{
		label: "How to add Bootstrap to a react application?",
		link: "#how-to-add-bootstrap-to-a-react-application"
	},{
		label: "Can you list down top websites or applications using react as front end framework?",
		link: "#can-you-list-down-top-websites-or-applications-using-react-as-front-end-framework"
	},{
		label: "Is it recommended to use CSS In JS technique in React?",
		link: "#is-it-recommended-to-use-css-in-js-technique-in-react"
	},{
		label: "Do I need to rewrite all my class components with hooks?",
		link: "#do-i-need-to-rewrite-all-my-class-components-with-hooks"
	},{
		label: "How to fetch data with React Hooks?",
		link: "#how-to-fetch-data-with-react-hooks"
	},{
		label: "Is Hooks cover all use cases for classes?",
		link: "#is-hooks-cover-all-use-cases-for-classes"
	},{
		label: "What is the stable release for hooks support?",
		link: "#what-is-the-stable-release-for-hooks-support"
	},{
		label: "Why do we use array destructuring (square brackets notation) in useState?",
		link: "#why-do-we-use-array-destructuring-square-brackets-notation-in-usestate"
	},{
		label: "What are the sources used for introducing hooks?",
		link: "#what-are-the-sources-used-for-introducing-hooks"
	},{
		label: "How do you access imperative API of web components?",
		link: "#how-do-you-access-imperative-api-of-web-components"
	},{
		label: "What is formik?",
		link: "#what-is-formik"
	},{
		label: "What are typical middleware choices for handling asynchronous calls in Redux?",
		link: "#what-are-typical-middleware-choices-for-handling-asynchronous-calls-in-redux"
	},{
		label: "Do browsers understand JSX code?",
		link: "#do-browsers-understand-jsx-code"
	},{
		label: "Describe about data flow in react?",
		link: "#describe-about-data-flow-in-react"
	},{
		label: "What is react scripts?",
		link: "#what-is-react-scripts"
	},{
		label: "What are the features of create react app?",
		link: "#what-are-the-features-of-create-react-app"
	},{
		label: "What is the purpose of renderToNodeStream method?",
		link: "#what-is-the-purpose-of-rendertonodestream-method"
	},{
		label: "What is MobX?",
		link: "#what-is-mobx"
	},{
		label: "What are the differences between Redux and MobX?",
		link: "#what-are-the-differences-between-redux-and-mobx"
	},{
		label: "Should I learn ES6 before learning ReactJS?",
		link: "#should-i-learn-es6-before-learning-reactjs"
	},{
		label: "What is Concurrent Rendering?",
		link: "#what-is-concurrent-rendering"
	},{
		label: "What is the difference between async mode and concurrent mode?",
		link: "#what-is-the-difference-between-async-mode-and-concurrent-mode"
	},{
		label: "Can I use javascript urls in react16.9?",
		link: "#can-i-use-javascript-urls-in-react169"
	},{
		label: "What is the purpose of eslint plugin for hooks?",
		link: "#what-is-the-purpose-of-eslint-plugin-for-hooks"
	},{
		label: "What is the difference between Imperative and Declarative in React?",
		link: "#what-is-the-difference-between-imperative-and-declarative-in-react"
	},{
		label: "What are the benefits of using typescript with reactjs?",
		link: "#what-are-the-benefits-of-using-typescript-with-reactjs"
	},{
		label: "How do you make sure that user remains authenticated on page refresh while using Context API State management",
		link: "#how-do-you-make-sure-that-user-remains-authenticated-on-page-refresh-while-using-context-api-state-management"
	},{
		label: "What are the benefits of new JSX transform?",
		link: "#what-are-the-benefits-of-new-jsx-transform"
	},{
		label: "How is the new JSX transform different from old transform?",
		link: "#how-is-the-new-jsx-transform-different-from-old-transform"
	},{
		label: "How do you get redux scaffolding using create-react-app?",
		link: "#how-do-you-get-redux-scaffolding-using-create-react-app"
	},{
		label: "What are React Server components?",
		link: "#what-are-react-server-components"
	},{
		label: "What is prop drilling?",
		link: "#what-is-prop-drilling"
	},{
		label: "What is state mutation and how to prevent it?",
		link: "#what-is-state-mutation-and-how-to-prevent-it"
	},{
		label: "What is the difference between useState and useRef hook?",
		link: "#what-is-the-difference-between-usestate-and-useref-hook"
	},{
		label: "What is a wrapper component ",
		link: "#what-is-a-wrapper-component"
	},{
		label: "What are the differences between useEffect and useLayoutEffect hooks",
		link: "#what-are-the-differences-between-useEffect-and-useLayoutEffect-hooks"
	},{
		label: "What are the differences between Functional and Class Components ",
		link: "#what-are-the-differences-between-functional-and-class-components"
	},{
		label: "Why does strict mode render twice in React?",
		link: "#why-does-strict-mode-render-twice-in-react"
	}
]