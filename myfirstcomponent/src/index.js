import React from 'react';//import react from dependancies
import reactDom from 'react-dom';//injects this component into the root div (ReactDOM does this)
import './index.css' //attach css file. file in same folder

//ADD THIS FUNCTIONALITY INTO INDEX.HTML(it has the div with the id of root that houses the whole app) 


//++++++++++++++++++++++++++++++BASIC RENDER+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//We want to take the components functionality and injects it into the root div (ReactDOM does this)
//this is a stateless componenet- it doesnt have state (dumb component) Always need to return something
// //Always returns JSX
// function Greeting() {//Always cap the functions names
//   return <h1>HELLO WORLD!!!!!!!!!!!!!!!! 
//             My first component.... very shiney</h1>;// this is JSX not HTML
// }


//+++++++++++++++++++++++++++ARROW FUNC BASIC RENDER++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Create arrow function rafce 
// const Greeting = () => {
//   //function looking for three thingsL
//   //1)element to be created, it uses HTML elements in ""
//   //2)props object
//   //3)what rendered inside element. pass in children
//   return React.createElement('h1', {}, 'hello world')
// }

//JSX Must return a single element. dive/ section/ article/ frag.
//class = className 
//att must be in camelcase

//++++++++++++++++++++++++++++++++++++NESTED COMPONENTS++++++++++++++++++++++++++++++++

//Nested components
// function Profile() {//Always cap the functions names
//   return (//used the person arrow function to add it to retun statement.
//     <div>
//       <Person/>
//       <Title/>
//     </div>
//     );
// }
// // doing this allows us to spit our app up into different chuncks
// const Person = () => <h1>Asia Gault</h1>
// const Title = () => <p>Title of Jr Dev</p>

//+++++++++++++++++++++++++++++++++BASIC BOOKLIST ++++++++++++++++++++++++++++++++++++++++++++++++++
//multi components 
// function BookList() {//Always cap the functions names
//   return (//used the person arrow function to add it to retun statement.
//     //can add mutiple instances of book
//     <section>
//       <Book/>
//     </section>
//     );
// }
// //exlicit arrow function uses {}
// const Book = () => {
//   return <article>
//     <Image/>
//     <Title/>
//     <Author/>
//   </article>
// }
// const Image = () => <img src="https://m.media-amazon.com/images/I/51ZaRaeSoaL.jpg"/>
// const Title = () => <h2>100 Year old man</h2>
// const Author = () => <h4>Jonas Jonasson</h4>

//+++++++++++++++++++++++BOOKLIST CSS ADDED++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//import the style sheet on top


function BookList() {//Always cap the functions names
  return (//used the person arrow function to add it to retun statement.
    //can add mutiple instances of book
    
    <section className="booklist">
      <Book/>
      <Book/>
      <Book/>
      <Book/>
      <Book/>
      <Book/>
    </section>
    );
}
//exlicit arrow function uses {}
const Book = () => {
  return <article className="book">
    <Image/>
    <Title/>
    <Author/>
  </article>
}
const Image = () => <img src="https://m.media-amazon.com/images/I/51ZaRaeSoaL.jpg"/>
const Title = () => <h2>100 Year old man</h2>
const Author = () => <h4>Jonas Jonasson</h4>

//Render method looks for 2 things 1) what we are going to render "Greetings" component 2)Where to render
reactDom.render(<BookList />, document.getElementById('root'))//To pass in Greeting must close tag "/>"... if u pass in img u must close it