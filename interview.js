//jsx nothing but html like syntex in react
//const elem=<h1>hello world</h1>
//functional components basic 
// function Greet(props)
// {
//     return <h1>hello,{props.name}</h1>
// }
//but with hooks we can now manage state and sideeffects
// function greetcount(){
//    const [cnt,setCnt]=new useState(0)
//    return(
//       <div>
//          <p>{cnt}</p>
//          <button onClick={()=>{
//             setCnt(cnt+1);
//          }
//       </div>
//    )
// }

const { lazy, Suspense } = require("react");

// const React = require("react")

// // props 
// function app(){
//    return <Greeting name="adnan"/>
// }
// function Greeting(props){
//    return <h1>
//       hiii,{props.name}!
//    </h1>
// }
//states
// const [cnt,setCnt]=useState(0)
// useEffect(() => {
//    // Effect logic here
//  }, [dependencies]);
// Components can accept props (properties) and manage their own state, making it easy to build complex UIs from simple, isolated pieces.
// const context=React.createContext()
// function Display() {
//    const value = useContext(MyContext); // Consumes context value
//    return <h1>Value from Context: {value}</h1>;
//  }
// function App() {
//    return (
//      <MyContext.Provider value="Hello, Context!">
//        <Display />
//      </MyContext.Provider>
//    );
//  } raps Dispay component easy to pass props hello world to each raped componoent
//hoc
// use hoc for diff color counter
// function App()=>{
//    return (
//       <div className="App">
//       <h1>HOC</h1>
//       <HOC comp={counter}/>
//       </div>
//    )
// }
// function HOC(props)=>{

// }
// function counter(){
//    const [cnt,setCnt]=useState(0)
//    return(
//       <div>
//          <p>{cnt}</p>
//          <button onClick={()=>setCnt(cnt+1)}>
//             Update
//          </button>
//       </div>
//    )
// }
//prop drilling nothing just passing props to finl no need in bw use context api
//lazy loading
// import React {lazy,Suspense} from 'react';
// const Home=Lazy(()=>import('./Home'))
// const About=lazy(()=>import('./About')) getting this code to load a little late
// function App()=>{
// return(
//    <div>
//    <h1>Lazy Loading</h1> the h1 will load while inside suspense it will show a dive of loading a late
//    <Suspense fallback={<div>Loading...</div>}>
//    <Home/>
//    </Suspense>
//    </div>
// )
// }
//Promises
// doSomething(function(result) {
//    doSomethingElse(result, function(newResult) {
//      doAnotherThing(newResult, function(finalResult) {
//        console.log(finalResult);
//      });
//    }); something like this
//  });
//javascript

 