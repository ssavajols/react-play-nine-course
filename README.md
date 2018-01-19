# react-play-nine-course

React training course with play nine game

- Démonstration : [https://ssavajols.github.io/react-play-nine-course/](https://ssavajols.github.io/react-play-nine-course/)

## Install
```shell
npm install
```

## Run

```shell
# default: http://localhost:8080
npm start
```

### React component function and class

React components can be native javascript functions or native (transpiled) javascript classes.

```jsx
// Native function
function MyComponent(props) {
  return (
    <div>{props.content} world !</div>
  );
}

// ES6 function
const MyComponent = (props) => (
  <div>{props.content} world !</div>
);

// ES6 class
class MyComponent extends React.Component {
  props = {
    content: ''
  };
  render() {
    return (<div>{this.props.content} world !</div>);
  }
}

// Call
ReactDOM.render(
  <MyComponent content='Hello'>,
  document.getElementById('app'));
```

## Component typscript type checking

With typescript, we can add type checking support to components.

Declaring an interface and associating it with the props or state properties on a class component or function argument component.

It helps to get code completion and documentation for developers.

```jsx

interface IMyComponentProps {
  content: string;
}

// ES6 function
const MyComponent = (props: IMyComponentProps) => (
  <div>{props.content} world !</div>
);

// ES6 class
class MyComponent extends React.Component {
  props: IMyComponentProps;

  render() {
    return (<div>{this.props.content} world !</div>);
  }
}

// Cause compile error
ReactDOM.render(
  <MyComponent>,
  document.getElementById('app'));

// Cause compile error
ReactDOM.render(
  <MyComponent content={1}>,
  document.getElementById('app')); // 

// Compile OK
ReactDOM.render(
  <MyComponent content='Hello'>,
  document.getElementById('app'));
```

## Component state and props

Each component got a state and  props. All can be updated and will update components rendering. But, purpose of props are to not being modified. To get dynamic datas for components, we use states. 

Each time we call setState method from a component, we are updating the component rendering, if necessary. We can get the last state of the component by using a function instead of an object with the setState methods. This can resolve concurrency async calls of setState methods.

```jsx
// ES6 class
class MyComponent extends React.Component {

  state: IMyComponentState = {
    content: 'Hello'
  };

  updateContent = () => {
    this.setState((prevState: IMyComponentState) => ({
      content: `${prevState.content} - ${Math.random()} - `,
    }));
  }

  render() {
    return (<div onClick={this.updateContent}>{this.state.content} world !</div>);
  }
}
```

## Initial state

We can set a static method initialState to set the default state of a component. We can reset the state of the component by call setState with initialState.

```jsx
// ES6 class
class MyComponent extends React.Component {

  static initialState (): IMyComponentState => ({
    content: 'Hello'
  });

  state = MyComponent.initialState();

  render() {
    ...
  }
}
```

## Event handling

Event listeners must be declared as DOM event listeners.
To be sure of event content we can declare event handler method as arrow function. This is to avoiding bind method.

Without arrow function

```jsx
// ES6 class
class MyComponent extends React.Component {

  clickHandler{
    ...
  }

  render() {
    <button onClick={this.clickHandler.bind(this)}>Click me !</button>
  }
}
```

With arrow function

```jsx
// ES6 class
class MyComponent extends React.Component {

  clickHandler = (event) => {
    ...
  }

  render() {
    <button onClick={this.clickHandler}>Click me !</button>
  }
}
```