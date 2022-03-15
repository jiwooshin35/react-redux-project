Create Table of Contents
+Debugging
+Command Line
+Github
+Webpage
+Javascript
+React
+Redux

what to learn: JS testing, Netlify, Router, Jest

# +Debugging
read error stack trace and see what type of error it is
use console.log()to see what's going on
read MDN javascript document
search on Stackoverflow


# +Command Line
command line is a text interface for the computer’s operating system. To access the command line, we use the terminal.
```
ls lists
pwd print working directory
cd change directory
cd ../.. [go parent of parent folder ]
mkdir make directory
touch create file
clear clear lines
'tab key' autocomplete commmand
```


# +Github
Git is a software that allows you to keep track of changes made to a project over time
a git project has three parts
`git init`
1 working directory
`git add 'filename you want to make change'`
2 staging area //where i list changes i make to working directory
`git commit`
3 repository

```
git status
git diff 'filename' //shows changes on the file before adding to staging area
git commit -m 'complete new function. //brief msg in present tense'
git log
q to exit
```

branch is made of commits
main branch == master branch

the commit you are currently on is known as the HEAD commit.

  git branch :tells you what branch are you in
  git branch new-branch :create a new branch
  git checkout new-branch :switch to new branch


switch to main branch and merge new-branch //be careful with merge conflict
git merge new-branch
after merge, delete branch
git branch -d branch_name

Create a branch from main branch
Commit changes
Create a pull request
Review pull request
Merge to main branch and delete branch

to load remote project
git clone remote-address(origin) new-name

git remote -v :list the remotes

git fetch : check if changes have been made to the remote and fetch them
those commits are on the origin/master branch.

git merge origin/main(master) :merge origin/main branch to local main branch

Git collaborations typically follows this order:

Fetch and merge changes from the remote
Create a branch to work on a new project feature
Develop the feature on your branch and commit your work
Fetch and merge from the remote again (in case new commits were made while you were working)
Push your branch up to the remote for review

git push origin branch-name


README file is the perfect place to write a description of your project.


# +Webpage
enter url
server process the request and sends the HTML file back
browser request additional http for external resources used by html file. (CSS


The DOM is a logical tree-like Model that organizes a web page’s HTML Document as an Object.
The DOM is a language-agnostic structure implemented by browsers to allow for web scripting languages, like JavaScript, to access, modify, and update the structure of an HTML web page in an organized way.
For this reason, we like to think of the DOM as the link between an HTML web page and scripting languages.

We define a node as an intersecting point in a tree that contains data.

The DOM tree follows similar logic to that of a family tree.
In computer science, we would call each family member a node.
We define a node as an intersecting point in a tree that contains data.

document (root node)
|
html-
|	|
head	body----
|	|	|
title	h1	div
...

HTML <form> element is responsible for collecting information to send somewhere else

An Application Programming Interface (API) is a software tool that makes it easier for developers to interact with another application to use some of that application’s functionality

After we make a successful API request, the API sends back data. Many APIs format their data using JavaScript Object Notation (JSON) which looks like a JavaScript object.



# +Javascript

function without parentheses is reference


Keywords are words that are built into the JavaScript language, so the computer will recognize them and treats them specially.

A block is the code found inside a set of curly braces ``{}``

Scope is the context in which our variables are declared. 

When you declare global variables, they go to the global namespace. The global namespace allows the variables to be accessible from anywhere in the program.

Scope pollution is when we have too many global variables

cmd opt j -> console on chrome

The console recognizes ``$()`` as an alias for ``document.querySelector()``

console works great for testing purposes when you don’t want to modify the actual code



-A runtime environment is where your program will be executed
Front-end JavaScript applications are executed in a browser’s runtime environment and have access to the 'window' object.
Back-end JavaScript applications are executed in the Node runtime environment and have access to the file system, databases, and networks attached to the server.

Node.js is a JavaScript runtime, or an environment which runs JavaScript code outside of the browser. A “runtime” converts code written in a high-level, human-readable, programming language and compiles it down to code the computer can execute.

on terminal with command node,  you can run javascript




Now the convention is to put the ``<script>`` tag in the ``<head>`` element and to use the defer and async attributes.

``document.querySelector('')`` //to select element by name of the tag, a class, or an ID.
``document.getElementById('')``//another option with id

```
.createElement
.appendChild
.removeChild
.firstChild
```

``.innerHTML = 'The cat loves the dog.';`` //reassigns the inner HTML 

JavaScript stores events as Event objects with their related data and functionalities as properties and methods.

It’s essential to validate the data submitted through forms to keep websites secure and to make sure they function correctly. use Regex, front-end validation, back-end validation


### Module
Modules are reusable pieces of code that can be exported and then imported for use in another file.

node runtime environment: ``module.export, require()``
browser runtime environment: ``import, export``

`Named exports` are useful to export several values. During the import, it is mandatory to import them within curly braces with the same name of the corresponding object.
`default export` can be imported with any name. and only One per module


Named Export Syntax

``export { toggleHiddenElement, changeToFunkyColor };``

``import { toggleHiddenElement, changeToFunkyColor } from '...'``

//to import, use add module type
``<script type="module" src="./secret-messages.js"> </script>``

``import { exportedResource as newlyNamedResource } from '/path/to/module'``

the default export value is an object containing the entire set of functions and/or data values of a module.
//when import default choose any name
import anyName from 'exportDefault.js'

when you import, If your filepath doesn’t have a file extension, then “.js” is assumed


// apple.js:

```
export const apple={
..
}
```

//App.js:
``import {apple} from './apple.js'``

### try throw catch

``throw Error('error. program will stop')``

-try,catch
```
try{
	...
	throw Error("error")
} catch (e){..}
```
//if error is thrown, catch block execute
//program doesn't stop




-when accessing object key, use `[] `when index is 
a String or a variable that references a String.


 

Getters are methods that get and return the internal properties of an object.

?? no parentheses when invoking getter, setter?
how about class methods?




An object is a collection of properties, and a property is an association between a key and a value. A property's value can be a function, in which case the property is known as a method. 

Classes are a template for creating objects.

Properties in objects are separated using commas. This is not the case when using the class syntax. Methods in classes do not have any separators between them.





callback function is a function that is passed into another function as an argument.

in JavaScript, functions are objects




### HTTP requests
GET: you get information from some source (usually a website).
POST: you post information to a source that will process the information and send it back.

Asynchronous programming is a technique that enables your program to start a potentially long-running task, and then rather than having to wait until that task has finished, to be able to continue to be responsive to other events while the task runs. Once the task is completed, your program is presented with the result.

JavaScript uses an event loop to handle asynchronous function calls.

XML :Extensible Markup Language
AJAX: Asynchronous JavaScript And XML 
XHR: XML Http Request

Since ``fetch()`` is a browser API, older browsers may not support it
run'npm install whatwg-fetch --save' to install the 'whatwg-fetch' polyfill and add it to your package.json file.

Your fetch() will currently not function correctly due to CORS restrictions.
We can bypass this restriction with an API called CORS Anywhere. 

When we make requests to the Yelp API, we have to present a form of identification for the browser. This is because the Yelp API wants to know that we are authorized to access the API.

you should assign the return value of filter method of array


-http request cheatsheet
JSON: JavaScript Object Notation is a data format suitable for transporting data to and from a server.

It is essentially a slightly stricter version of a Javascript object. A JSON object should be enclosed in curly braces and may contain one or more property-value pairs. JSON names require double quotes, while standard Javascript objects do not.

### Promise

Promises are objects that represent the eventual outcome of an asynchronous operation. A Promise object can be in one of three states:

Pending: The initial state— the operation has not completed yet.
Fulfilled: The operation has completed successfully and the promise now has a resolved value. For example, a request’s promise might resolve with a JSON object as its value.
Rejected: The operation has failed and the promise has a reason for the failure. This reason is usually an Error of some kind.
We refer to a promise as settled if it is no longer pending— it is either fulfilled or rejected.

The Promise constructor method takes a function parameter called the executor function which runs automatically when the constructor is called. The executor function generally starts an asynchronous operation and dictates how the promise should be settled.
The executor function has two function parameters
resolve() will change the promise’s status from pending to fulfilled, and the promise’s resolved value will be set to the argument passed into resolve().
reject() will change the promise’s status from pending to rejected, and the promise’s rejection reason will be set to the argument passed into reject()

once a promise is fulfilled or rejected, you can chain an additional method to the original promise.

//
```
const myProm = () =>
  new Promise (  (resolve, reject) => 
    { .... if (condition) {... resolve('resolvedVal')} 
      else { ... reject('rejectedVal')}  } )
```

```
myProm
	.then( (resolved1)=> myProm2(resolved1) )
	.then( (resolved2)=> { ...} )
	.catch( (rejectedAny)=> { ..} )
```

Rather than constructing promises, you’ll be handling Promise objects returned to you as the result of an asynchronous operation

“I have a promise, when it settles, then here’s what I want to happen…”
.then() always returns a promise
.then() takes two callback functions as arguments. 
onFulfilled, onRejected (success handler, failure handler)


``prom.then(handleSuccess).then(handleFailure)``

``prom.then(handleSuccess).catch(handleFailure)`` //same thing different word

When asynchronous operations depend on each other or execution order matters,
the process of chaining promises together is called composition.
```
prom1()
	.then( (resolved1)=> prom2(resolved1) )
	.then( (resolved2)=> { ...} )
```
**don't nest .then()s, don't forget to return second promise function

When don’t care about the order, use  Promise.all()

```
promArr=[ prom1, prom2, prom3]
Promise.all( promArr )
	.then(onFulfill)
	.catch(onReject)
```


### async...await 
the easier way to handle asynchronous actions.
always return a promise with resolved value that the function returns

Await operator waits until the promise function is settled.
The await keyword can only be used inside an async function. 
it returns the resolved value of a promise.

```
async function announceDinner() {
  let meal=await brainstormDinner() //promise function
  console.log( ``I'm going to make ${meal} for dinner.`` )
}
announceDinner()
```

-try,catch
we can also catch both synchronous and asynchronous errors

```
async function usingTryCatch() {
 try {
   let resolveValue = await asyncFunction('thing that will fail');
   let secondValue = await secondAsyncFunction(resolveValue);
 } catch (err) {
   // Catches any errors in the try block
   console.log(err);
 }
}
```
 
``usingTryCatch();``

-concurrent asynchronous functions
```
async function concurrent() {
 const firstPromise = firstAsyncThing();
 const secondPromise = secondAsyncThing();
console.log(await firstPromise, await secondPromise);
}
```



```
const func=async()=>{
const resultArr= await Promise.all( [prom1(), prom2().. )
}
```
Promise.all() is a good choice if multiple asynchronous tasks are all required, but none must wait for any other before executing.



fetch() uses promises to handle requests.
async and await simplify requests

The fetch() function
Creates a request object that contains relevant information that an API needs.
Sends that request object to the API endpoint provided.
Returns a promise that ultimately resolves to a response object, which contains the status of the promise with information the API sent back.

```
const fetchFunc=async()=>{
	try{
		let response=await fetch('http..')
		return response.json()
		
	} catch (err)
	
}
```

fetchFunc


REST, or REpresentational State Transfer, is an architectural style for providing standards between computer systems on the web, making it easier for systems to communicate with each other.

```
const xhr = new XMLHttpRequest();
const url = 'https://api-to-call.com/endpoint';
xhr.responseType = 'json';
xhr.onreadystatechange = () => {
  if (xhr.readyState === XMLHttpRequest.DONE){
    return xhr.response;
  }
}
```

```
xhr.open('GET', url);
xhr.send();
```


# +React

ReactDOM.render() is the most common way to render JSX. It takes a JSX expression, creates a corresponding tree of DOM nodes, and adds that tree to the DOM. That is the way to make a JSX expression appear onscreen.

The first argument is appended to whatever element is selected by the second argument. (in html file)

One special thing about ReactDOM.render() is that it only updates DOM elements that have changed.

Any code in between the tags of a JSX element will be read as JSX, not as regular JavaScript! JSX doesn’t add numbers - it reads them as text, just like HTML.

Everything inside of the curly braces will be treated as regular JavaScript.

When writing JSX, it’s common to use variables to set attributes.

Programming in React means constantly working with event listeners.

you can not inject an if statement into a JSX expression.


In a JSX element, that capitalized first letter says, “I will be a component instance and not an HTML tag.”

JSX elements can be either HTML-like, or component instances.


You have learned that a component class needs a set of instructions, which tell the component class how to build components. When you make a new component class, these instructions are the body of your class declaration

a multi-line JSX expression should always be wrapped in parentheses! 

A render() function can also be a fine place to put simple calculations that need to happen right before a component renders.

```
ReactDOM.render(
  <MyComponentClass />,
  document.getElementById('app')
);
```
``ReactDOM.render()`` will tell `<MyComponentClass />` to call its render method.

`<MyComponentClass />` will call its render method, which will return the JSX element `<h1>Hello world</h1>`. ReactDOM.render() will then take that resulting JSX element, and add it to the virtual DOM. This will make “Hello world” appear on the screen.

'this' keyword references the calling object which provides access to the calling object’s properties.


In React, you define event handlers as methods on a component class.

What makes React special is the ways in which components interact.


By nesting components inside of other components, you can build infinitely complex architectures, even if each component is relatively simple.

Information that gets passed from one component to another is known as “props.”

Every component has something called props.
A component’s props is an object. It holds information about that component. It can get passed from one component to another.

you can pass information to a React component
by giving that component an attribute

`<Example message="This is some top secret info." />`

to pass information that isn’t a string, then wrap that information in curly braces.

convention:If you are listening for a “click” event, then you name your event handler handleClick
Your prop name should be the word on, plus your event type. If you are listening for a “click” event, then you name your prop onClick.

??Names like onClick only create event listeners if they’re used on HTML-like JSX elements. Otherwise (component instance), they’re just ordinary prop names.

this.props.children will return everything in between a component’s opening and closing JSX tags.


```
class Example extends React.Component {
  render() {
    return <h1>{this.props.text}</h1>;
  }
}
 
Example.defaultProps = { text: 'yo' }; 
```
//if prop is not passed, instance uses defaultProps


Dynamic information is information that can change.
There are two ways for a component to get dynamic information: props and state. Besides props and state, every value used in a component should always stay exactly the same.

Unlike props, a component’s state is not passed in from the outside. A component decides its own state.

```
class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = { mood: 'decent' };
  }
  render() {
    return <div></div>;
  }
}
 
<Example />
```


### setState
A component changes its state by calling the function this.setState().

this.setState() takes two arguments: an object that will update the component’s state, and a callback. You basically never need the callback.

When you write a component class method that uses this, then you need to bind that method inside of your constructor function!
this.classMethod = this.classMethod.bind(this);


this.setState() AUTOMATICALLY calls .render() as soon as the state has changed.
That is why you can’t call this.setState() from inside of the .render() method!


###The component lifecycle 
has three high-level parts:
Mounting, when the component is being initialized and put into the DOM for the first time
Updating, when the component updates as a result of changed state or changed props
Unmounting, when the component is being removed from the DOM

Mounting : constructor() -> render() -> componentDidMount()

componentWillUnmount(): holds functions to clear up things after unmounting

setState() //don't forget (). it's function

If you want to set up side-effects when a component mounts, use componentDidMount()

### Function components 
offer a more elegant, concise way of creating React components.

```
const functionComponent = (props) => {
return <h1> {props.property} </h1>
}
```


###stateless component
Breaking down complex logic into separate classes that each have one job to do helps with testing and makes code more reusable.


Rendering is the only way for a component to pass props to another component.


A React component should use props to store information that can be changed, but can only be changed by a different component.

A React component should use state to store information that the component itself can change.

###Child Components Update Their Parents' state
bind a method in parent. pass down the method to child as prop



###Hook

Only call Hooks at the top level, to be sure that Hooks are called in the same order each time a component renders. don't call hooks inside of loops, conditions, or nested functions. instead use condition inside hook.
Only call hooks from React functions


### State Hook
```
import {useState} from 'react'
useState returns [current state, state setter]
const [state1, setState1] = useState(null); 
```
//null is default initializing convention. can give other value

when passing function to prop, pass function name, or ()=>{} like this, not like function()


Calling the state setter signals to React that the component needs to re-render, so the whole function defining the component is called again


event handler is defined inside of the definition for our function component, but outside of our JSX.
it’s a good idea to separate that logic from everything else going on in our JSX.

```
  const handleChange = (event) => {
  const newEmail = event.target.value;
  setEmail(newEmail);
}
```
//complicated

`const handleChange = ({target}) => setEmail(target.value);`
//concise grammar




when the next value of our state is calculated using the current state, it is best practice to update state with a callback function.
ex)setCount(prevCount => prevCount + 1)
We can just call setCount(count +1) and it would work the same in this example… but for reasons that are out of scope for this lesson, it is safer to use the callback method.

JavaScript arrays are the best data model for managing and rendering JSX lists


Hook state setter with callback function (using previous state)
const eventHandler = ( arg ) => {
	setState1( prev => { do something and return new state } )
}


when updating the state with setFormState() inside a function component, we do not modify the same object. We must copy over the values from the previous object when setting the next value of state. Thankfully, the spread syntax makes this super easy to do!

It’s best to split state into multiple state variables based on which values tend to change together. Managing dynamic data with separate state variables has many advantages

### Effect Hook
`useEffect( effectFunc, dependencyArr )`
calls effectFunc after each time the component renders
if dependencyArr is passed, calls effectFunc first time, and after variable in the arr changes.

In class components, side effects are managed with lifecycle methods. 
In function components, we manage side effects with the Effect Hook.
side effects Ex: fetching data from a server, interval timers, and directly interacting with the DOM. etc

when the Effect Hook can be utilized:

When the component is mounted to the DOM and renders
When the state or props change, causing the component to re-render
When the component is unmounted from the DOM.


```
import {useState, useEffect} from 'react'

const Component1 =()=>{
const [name, setName]=useState('')
useEffect( myEffect )
const myEffect=()=>{}
//my Effect gets called after each time the component renders
}
```

If our effect returns a function, then the useEffect() Hook always treats that as a cleanup function. React will call this cleanup function before the component re-renders or unmounts.

`useEffect( ()=>{ ... return ()=>{ cleanup }  }`


`useEffect( myEffectFunc, dependepcyArray )`

//to call effect only after the first render, pass empty array to 2nd argument

### Style

inline CSS
```
const styleObj={
  color:'blue'
  background:'sky'
  fontSize:20      //font-size=20px in CSS
}
<div style={styleObj}> Hi </div>
```

### Divide components
common pattern to have two components
Container components: contain business logic (methods) and handle state. 
Presentational components: render that behavior and state to the user.

```
const Container=()=>{
    const [count, setCount]=useState(0)
    const increment=()=>{
        setCount(prev=>prev+1)
    }
    return <Counter increment={increment} count={count}/>
} 

const Counter =(props)=>{
    return (
        <div>
            <p>Count:{props.count}</p>
            <button onClick={props.increment}>increment</button>
        </div>
    )
}
```

### .propTypes
To run typechecking on the props for a component, you can assign the special propTypes property

```
import PropTypes from 'prop-types';

const Component1 =(props)=>{
  return <h1>{props.age} {props.name}</h1>
}

Component1.propTypes={
  age: Component1.number
  name: Component1.string
}
```

### .isRequired
To indicate that a prop is required by the component

```
Component1.propTypes={
  age: Component1.number.isRequired
  name: Component1.string
}
```

### Controlled/Uncontrolled
Form fields are considered either 
uncontrolled: they maintain their own state
controlled: some parent maintains their state and passes it to them to display.

```
const uncontrolledInput = <input />; //uncontrolled
 
const controlledInput = (
  <input value={this.state.value} onChange={this.handleInputChange} />
); //controlled
```

### Router Library
Routing is the process by which a web application uses the current browser URL to determine what content to show a user
React Router library is front-end routing solution designed specifically for React applications.

```
import { BrowserRouter as Router } from "react-router-dom";
```

### Jest Library
Jest is a JS library for testing JS code

# +Redux Library
 Redux is a state management library that follows a pattern known as the Flux architecture
used to manage application state.
good for when app is very large and has lots of moving parts.

How data flows in Redux: actions are dispatched to the store, where they are processed by reducers that produce new state; that new state becomes accessible to all the components that reference it, causing those components update.

Redux works well with applications that have a large amount of global state that is accessed by many of the application’s components. The goal of Redux is to provide scaleable and predictable state management.

In Redux, a store is a container that holds and manages your application’s global state.

`store` is the center of every Redux application. It has the ability to update the global state and subscribes elements of an application’s UI to changes in the state. Accessing the state should never be done directly and is achieved through functions provided by the store.

`action` object represents an intention to change the store’s state. Action objects must have a type property with a user-defined string value that describes the action being taken.
`payload` is optional property which is used to supply data necessary to perform the desired action.
```
//for a shopping list
const clearItems = {
  type: 'shopping/clear' //'sliceName/actionDescriptor'
}

const addItem = {
  type: 'shopping/addItem', 
  payload: 'Chocolate Cake'
}
```

`reducer` is a function that accepts the store's current state and an action and returns the new state.
Rules of reducers
1.They should be pure function. : it will always have the same outputs given the same inputs.
(They should only calculate the new state value based on the state and action arguments.
&They must not do any asynchronous logic or have other “side effects”.)
2.They must make immutable updates
(They are not allowed to modify the existing state. Instead, they must copy the existing state and make changes to the copied values.
)

By asynchronous logic or “side effects”, we mean anything that the function does aside from returning a value, e.g. logging to the console, saving a file, setting a timer, making an HTTP request, generating random numbers.

```
const store = createStore(countReducer);
store.dispatch({type:'increment'});

console.log(store.getState())

store.dispatch({type:'decrement'});
console.log(store.getState())
```

```
const increment=()=>{
  return {type:'increment'}
}
store.dispatch(increment());
```

```
//subscribe
const printCountStatus=()=>{
  console.log(`The count is ${store.getState()}`);
}

store.subscribe(printCountStatus)
//it is called each time the state changes.

```


`npm install redux`
```
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

// REDUX CODE
///////////////////////////////////

const toggle = () => {
  return {type: 'toggle'} 
}
//action creater

const initialState = 'off';
const lightSwitchReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'toggle':
      return state === 'on' ? 'off' : 'on';
    default:
      return state; 
  }
} 
 
const store = createStore(lightSwitchReducer);

// REACT CODE
///////////////////////////////////
 
// Pass the store's current state as a prop to the LightSwitch component.
const render = () => {
  ReactDOM.render(
    <LightSwitch 
      state={store.getState()}
    />,
    document.getElementById('root')
  )
}

render(); // Execute once to render with the initial state.
store.subscribe(render); // Re-render in response to state changes.

// Receive the store's state as a prop.
function LightSwitch(props) {
  const state = props.state; 

  // Adjust the UI based on the store's current state.
  const bgColor = state === 'on' ? 'white' : 'black';
  const textColor = state === 'on' ? 'black' : 'white';  
 
  // The click handler dispatches an action to the store.
  const handleLightSwitchClick = () => {
    store.dispatch(toggle());
  }
 
  return (  
    <div style={{background : bgColor, color: textColor}}>
      <button onClick={handleLightSwitchClick}>
        {state}
      </button>
    </div>
  )
}
 
```

### Slice
the top-level state properties
Each slice typically represents a different feature of the entire application. Notice that a slice can be any data value

As a best practice, most Redux applications begin with an initialState that allows the programmer to do two key things:

Plan out the general structure of the state
Provide an initial state value to the reducer function

```
const initialState = {
  todos: [],
  visibilityFilter: 'SHOW_ALL'
};
const todosReducer = (state = initialState, action) => {
  // rest of todosReducer logic omitted
};
```

action's `type`
'sliceName/actionDescriptor'

```
import { createStore } from 'redux';
import allRecipesData from './data.js';

const initialState = {
  allRecipes: [],
  favoriteRecipes: [],
  searchTerm: ''
};

const setSearchTerm = (term) => {
  return {
    type: 'searchTerm/setSearchTerm',
    payload: term
  };
}

const clearSearchTerm = () => {
  return {
    type: 'searchTerm/clearSearchTerm'
  }; 
};

const loadData = () => {
  return { 
    type: 'allRecipes/loadData', 
    payload: allRecipesData
  };
};

const addRecipe = (recipe) => {
  return { 
    type: 'favoriteRecipes/addRecipe', 
    payload: recipe 
  };
};

const removeRecipe = (recipe) => {
  return { 
    type: 'favoriteRecipes/removeRecipe', 
    payload: recipe 
  };
};

/* Complete this reducer */
const recipesReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'allRecipes/loadData':
      return { 
        ...state,
        allRecipes: action.payload
      }
    case 'searchTerm/clearSearchTerm':
      return {
        ...state,
        searchTerm: ''
      }
    
    case 'searchTerm/setSearchTerm':
      return {
        ...state,
        searchTerm:action.payload
      } // fix me!

    case 'favoriteRecipes/addRecipe':
      return {
        ...state,
        favoriteRecipes:[...state.favoriteRecipes, action.payload]
      } // fix me!

    case 'favoriteRecipes/removeRecipe':
      return {
        ...state,
        favoriteRecipes:state.favoriteRecipes.filter(
          (rec)=>{
            return rec.id===action.payload.id ? false : true 
          })
      } // fix me!

    default:
      return state;
  }
};

const store = createStore(recipesReducer);

/* DO NOT DELETE */
printTests();
function printTests() {
  store.dispatch(loadData());
  console.log('Initial State after loading data');
  console.log(store.getState());
  console.log();
  store.dispatch(addRecipe(allRecipesData[0]));
  store.dispatch(addRecipe(allRecipesData[1]));
  store.dispatch(setSearchTerm('cheese'));
  console.log("After favoriting Biscuits and Bulgogi and setting the search term to 'cheese'")
  console.log(store.getState());
  console.log();
  store.dispatch(removeRecipe(allRecipesData[1]));
  store.dispatch(clearSearchTerm());
  console.log("After un-favoriting Bulgogi and clearing the search term:")
  console.log(store.getState());
}
```

### Reducer composition
In this pattern, individual slice reducers are responsible for updating only one slice of the application’s state, and their results are recombined by a rootReducer to form a single state object.

```
//reducers omitted
const rootReducer = (state = {}, action) => {
  const nextState = {
    allRecipes: allRecipesReducer(state.allRecipes, action),
    searchTerm: searchTermReducer(state.searchTerm, action),
    favoriteRecipes: favoriteRecipesReducer(state.favoriteRecipes, action)
  } 
  return nextState;
}

const store = createStore(rootReducer);

```
or
```

import { createStore, combineReducers } from 'redux'
 
 
const reducers = {
    todos: todosReducer,
    filter: filterReducer
};
const rootReducer = combineReducers(reducers);
const store = createStore(rootReducer);
```

or

```
const store = createStore(combineReducers({
    todos: todosReducer,
    filter: filterReducer
}));
```


### redux structure 

//slice1 file
```
//action creators
const addData = (data) =>{
  return {
    type:'slice1/addData',
    payload: data
  }
}

//reducers
export const slice1Reducer=(slice1=initialSlice1,action)=>{
  switch(action.type){
    case 'slice1/addData':
      return { newSlice1 }
    
    default:
      return slice1
  }
}
```

```
//make rootReducer and make store
//store.js
import {slice1Reducer} from '...'
import { combineReducers, createStore } from 'redux';

export const store= createStore( combineReducers({
  slice1: slice1Reducer,
  slice2: slice2Reducer
}))
```


### redux file structure
```
src/
|-- index.js
|-- app/
    |-- store.js
|-- features/
    |-- featureA/
        |-- featureASlice.js //reducer and action creators for the slice are in the file
    |-- featureB/
        |-- featureBSlice.js
```

### No prop drilling
The `<Provider>` component from the react-redux library gives the components of an application access to the Redux store without the need to pass the store directly to the React components through props.
```
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
); 
//no need to subscribe anymore
```

A selector is a 'pure' function that selects data from the Redux store’s state.
Takes state as an argument.
Returns what is needed by the component from state.

export const selectSomeState = state => state.SomeState;

The `useSelector()` hook extracts state data from the Redux store using a selector function each time the state is updated. Any component nested within `<Provider />` may access state using useSelector()

import { useSelector } from 'react-redux';

const App = (props) => {
const posts = useSelector(selectPosts);//pre-defined selector

Inline selectors can be useful if you need to use props for data retrieval.

export const Todo = (props) => {
const todo = useSelector(state => state.todos[props.id]);

When called within a React component useSelector(selector) accomplishes two things:

Returns the data retrieved by the selector
Subscribes the React component to changes in the store and forces a re-render if the selector’s result changes

`useDispatch()`
```
import { useSelector, useDispatch } from 'react-redux';
import { selectTodo } from './todoSlice.js';
import { removeTodo } from './todoSlice.js';
 
const Todo = () => {
  const todo = useSelector(selectTodo);
  const dispatch = useDispatch(); //Create reference to the Redux store dispatch function.
 
  return (
    <button onClick={() => dispatch(removeTodo(todo))}>
      {todo}
    </button>
  )
}
```
The useDispatch hook allows you to dispatch actions from any component that is a descendent of the `<Provider>` component, therefore avoiding passing a reference to store.dispatch through props. 


### Redux Toolkit RTK
to simplify redux
`npm install @reduxjs/toolkit`


`createSlice()`  //simply make slice
takes options object.
```
const options={
  name: 'random',
  initialState: [],
  reducers: {
    action1: (state)=> [],
    action2: (state, action)=>[...state, action.payload]
  }
}

const randomSlice=createSlice(options)
```

No need to write switch statemnt,
no need to write action creators
no need to write default handler

accidentally mutating state in reducers is the single most common mistake Redux users make!

Redux Toolkit’s createSlice() function uses a library called `Immer` inside of it.
we can just mutate state.

object returned by randomSlice
```
{
 name: 'random',
 reducer: (state, action) => newState,
 actions: {
   action1: (payload) => ({type: 'random/action1', payload}),
   action2: (payload) => ({type: 'random/action2', payload})
 },
 // case reducers field omitted
}
```

Ducks pattern suggests to use named exports for the action creators and export them separately from the reducer.

`export const { action1, action2 } = randomSlice.actions`

`export default todosSlice.reducer` // to pass to the store


`configureStore()` simplifies the store setup process
//store.js
```
export default configureStore({
  reducer: {
    favoriteRecipes: favoriteRecipesReducer,
    searchTerm: searchTermReducer,
    allRecipes: allRecipesReducer
  },
});
```

### Redux DevTools
chrome ext: redux devtools

npx create-react-app my-app --template redux (--use-npm //if u use yarn)

chrome console redux

### Redux Asynchronous
Redux-thunk is a middleware which is included with Redux Toolkit by default
(by importing configureStore)

Middleware: code that runs between framework(library) and application
Thunk: higher-order function that wraps the computation we want to perform later

Thunk example:
```
const add = (x,y) => {
  return () => {
    return x + y; 
  } 
}

const delayedAddition = add(2,2) //add returns function
delayedAddition()

```

why use Thunk?
1 asynchronous logic returns promises, and store.dispatch expects to receive a plain object with a type property
2 asynchronous operations create side effects. but reducers must be pure functions.

action dispatched to middleware -> Middleware(request to server, get response)
-> action passed to reducer

If dispatch receives a function, the middleware invokes it; if it receives a plain object, then it passes that action along to reducers to trigger state updates.

async try error example.
```
import { fetchUser } from './api'
const fetchUserById = (id) => {
  return async (dispatch, getState) => {
    dispatch({type: 'users/requestPending'})
    try {
      const payload = await fetchUser(id)
      dispatch({type: 'users/addUser', payload: payload})
    } catch(err) {
      dispatch({type: 'users/error', payload: err})
    }
  }
}
```

To perform asynchronous operations (such as making API calls) and update the state based on the results

const asyncAction=createAsyncThunk('slice/actionType', 
    async()=>{
      try{
        //async operation
        //return payload
      }catch(err){
        console.log(err)
      }
    })

// in slice
extraReducers:{
      [actionType.fulfilled]: (state, action) => action.payload
      //.pending, .rejected
    }


# +React Router v5
to handle the requests coming into your server
React Router : front-end routing solution for react app


![alt text](https://static-assets.codecademy.com/Courses/Learn-Node/http/url-dark.png)

Every URL is essentially a request for some resource and each component of the URL serves to specify which resource is desired.

Query parameters appear in URLs beginning with a question mark (?) and are followed by a parameter name assigned to a value. They are optional and are most often used to search, sort and/or filter resources.


```
npm install
npm install --save react-router-dom@5.2.0
```

```
import { BrowserRouter as Router} from ‘react-router-dom’
//BrowserRouter is the most common option
export default function App () {
  return (
    <Router>
      {/* Application views are rendered here */
    </Router>
  )
}
```
Render a Router component as the top-level component in your application to prevent URL changes from causing the page to reload. URL changes will allow the Router to determine which of its child components to render while passing along information about the current URL’s path as props.

The Route component is designed to render (or not render) a component based on the current URL path. Each Route component should:

be rendered inside a Router.
have a path prop indicating the URL path that will cause the route to render.
wrap the component that we want to display in the event that the path prop matches.

Route renders the About component when the URL path matches '/about':
Home will be rendered ony exactly the path is '/'
```
<Router>
  <Route path='/about'>
    <About />
  </Route>
  <Route exact path='/'>
    <Home/>
  </Route>
</Router>
```

Route with no path prop will always be rendered

React Router is more dynamic and flexible.

nest routes in hierarchy.

<Link to='/home'> go to home </Link>

<Redirect>
<NavLink>
<Switch>

### dynamic route
use URL parameter
a colon (:) followed by a variable name
```
<Route path='/articles/:title'>
  <Article />
</Route>
```

```
//when title is optional
<Route path='/articles/:title?'>
  <Article />
</Route>
```

React Router hooks let you access the state of the router and perform navigation from inside your components.


### useParams

```
import { useParams } from "react-router-dom";

const App=()=>{
  const {paramName} = useParams()
  return(
    <p>
      value of paramName is {paramName}
    </p>
  )
}
```

### useRouteMatch()

```
export default function App () {
  return (
    <Router>
      <Route path="/users/:userId">
        <UserProfile />
      </Route>
    </Router>
  )
}

import { Route, Link, useRouteMatch } from "react-router-dom";

 
export default function UserProfile () {
  const { path, url } = useRouteMatch();
  const { param } = useParams()
  //path== '/users/:userId'
  //url== '/users/123'
  //param== '123'

  return (
    <div>
      <SomeUserProfileInformation/>
    
      {/* Redirects to '/users/123/friends' */}
      <Link to={`${url}/friends`}>Friends</Link>
      
      {/* Renders <FriendList/> for the path '/users/:userId/friends' */}
      <Route path={`${path}/friends`}>
        <FriendList/>
      </Route>
    </div>
  )
}
```

### useHistory()
returns user’s session history stack 

history.push(location) - imperatively redirects the user to the specified location
go(n) - Moves the pointer in the history stack by n entries
goBack() - Equivalent to go(-1)
goForward() - Equivalent to go(1)”


```
export default function Footer () {
  const history = useHistory();
  
  return (
    <footer>
      <button onClick={() => history.goBack()}>
        Back
      </button>
      <button onClick={() => history.goForward()}>
        Forward
      </button>
      <button onClick={() => history.push('/about')}>
        About
      </button>
    </footer>
  )
}
```




### useLocation()
returns current location obj
```
// If the user visits /search/?term=codecademy...
const { search } = useLocation();
// The value of search would be '?term=codecademy'
const queryParams = new URLSearchParams(search);
// queryParams is an object with a .get() method...
const termValue = queryParams.get('term');
// ... and termValue would be 'codecademy'
```