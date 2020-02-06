import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Page from './component/Page'

class App extends Component {
  state = { 
    person:[
      {
        id:"1",
        name:"Harry"
      },
      {
        id:"2",
        name:"Ron"
      }],

      showPerson : false 
   }

   textChangeOnClick =(newName) =>{
     this.setState({
       person:[
         {
           name:newName
         },
         {
           name:"Voldemort"
         }
       ]
     })

    //  **** Not allowed*****
    //  this.state.person[0].name='Nagini';
    //  this.state.person[1].name="Voldemort";  
   }

   namechangeHandler= (event ) =>{

    // const personIndex = this.state.person.findIndex(p=>{
    //   return p.id = id;
    // })

    // const person = {
    //   ...this.state.person[personIndex]
    // }

    // person = event.target.value;

    // const person = [...this.state.person]

    // person[personIndex] = person;
  
    this.setState({
      person:[
        {
          name:event.target.value
        },
        {
          name:"Voldemort"
        }
      ]
    })
   }

   toggleHandler =() =>{
     const doesShow = this.state.showPerson;
     this.setState({showPerson : !doesShow});
     
   }

   deleteHandler = (personIndex) =>{
     const person = this.state.person
     person.splice(personIndex,1)
     this.setState({person:person})

   }



  render() { 
    let person = null

    if(this.state.showPerson){
      person = (
        <div>
          {this.state.person.map((person,index) =>{
            return <Page name={person.name}
            click={()=> this.deleteHandler(index)}
            key={person.id}
          />
            
          }
          )}
          {/* <Page name={this.state.person[0].name}
          change={this.namechangeHandler}/>
          <Page name={this.state.person[1].name}
          click={this.textChangeOnClick.bind(this, 'nagini')}> am wizard at Hogwarts</Page> */}
      </div>
      );
    }

    return ( 
      <div className="App">
      <button onClick={this.toggleHandler}>Change</button>
      {/* { this.state.showPerson === true ? 
        <div>
          <Page name={this.state.person[0].name}
          change={this.namechangeHandler}/>
          <Page name={this.state.person[1].name}
          click={this.textChangeOnClick.bind(this, 'nagini')}> am wizard at Hogwarts</Page>
      </div> : null} */}
      {person}
      
    </div>
     );
  }
}
 
export default App;
