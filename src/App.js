import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Page from './component/Page'

class App extends Component {
  state = { 
    person:[
      {
        name:"Harry"
      },
      {
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
           name:"Voldemote"
         }
       ]
     })

    //  **** Not allowed*****
    //  this.state.person[0].name='Nagini';
    //  this.state.person[1].name="Voldemort";  
   }

   namechangeHandler= (event) =>{
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



  render() { 
    return ( 
      <div className="App">
      <button onClick={this.toggleHandler}>Change</button>
      { this.state.showPerson === true ? 
        <div>
        <Page name={this.state.person[0].name}
          change={this.namechangeHandler}/>
          <Page name={this.state.person[1].name}
          click={this.textChangeOnClick.bind(this, 'nagini')}> am wizard at Hogwarts</Page>
      </div> : null}
      
    </div>
     );
  }
}
 
export default App;
