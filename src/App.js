import React from 'react';
import './App.css';

const App = ()=> <PersonList/>;


const PersonList = () => {
const people = [
  {
    img:22,
    name:'john',
    job:'developer'
  },
  {
    img:75,
    name:'bob',
    job:'designer'
  },
  {
    img:77,name:'doe',job:'artist'
  }
]

  return (<section>
  <Person person = {people[0]} />
  <Person person = {people[1]} >
    lorem  lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.
  </Person>
  <Person person = {people[2]} />
  </section>) 
}

const Person = (props) =>{
  const {img, name, job,} = props.person;
  const {children} = props;
  const url =
  `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`
   return (
      <div className="person">
     <img src={url} alt="" />
     <div>
       <h4>{name}</h4>
       <h4>{job}</h4>
       {children}
     </div>
   </div>
   );
};







export default App;
