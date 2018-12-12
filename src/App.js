import React, { Component } from 'react';
import Navbar from './components/navbar';
import './App.css';
import Counters from './components/counters';

class App extends Component {
  state={
    counters:[{id:1,value:3},
    {id:2,value:0},
    {id:3,value:2},
    {id:4,value:0}
  ]

  };

handleIncrement=(counter)=>{

  const counters=[...this.state.counters];
  const index=counters.indexOf(counter);
  counters[index]={...counter};
  counters[index].value++;
  this.setState({counters});
  }

handleReset = ()=>{
  const counters=this.state.counters.map(counter=>{
    counter.value=0;
    return counter;
  });
  this.setState({counters});
}

handleDelete = (counterId)=>{
  const counters=this.state.counters.filter(c => c.id !== counterId)
  this.setState({counters});

};

  render() {
    return (
      <div>
      <Navbar totalCounters={this.state.counters.length} />
      <main className="container">
        <Counters counters={this.state.counters} onDelete={this.handleDelete} onIncrement={this.handleIncrement} onReset={this.handleReset}/>
      </main>
      </div>
    );
  }
}

export default App;
