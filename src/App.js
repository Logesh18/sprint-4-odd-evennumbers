import './App.css';
import react from 'react';
import ReactDOM from 'react-dom';
import GenerateList from './GenerateList.js'

class Numbers extends react.Component{
  constructor(props){
    super(props);
    this.state={value:''};
    this.numberOfInput=this.numberOfInput.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
  } 
 
  generateList(){
    ReactDOM.unmountComponentAtNode(document.getElementById('generatedList'));
    ReactDOM.unmountComponentAtNode(document.getElementById('result'));
    ReactDOM.render(<GenerateList value={this.state.value}/>,document.getElementById('generatedList'));  
  }

  numberOfInput(event){
    this.setState({ value:event.target.value });
  }

  handleSubmit(event){
    document.getElementById("submit").style.border = "3px  solid #000000";
    if( document.getElementById('input').value.length!==0){
      document.getElementById('input').value='';
      this.generateList();
      event.preventDefault();
    }
    else{
      alert('Please provide input');
    }
  }

  render(){
    return(
      <center>
        <div id="container">
            <h1 id="heading" >Number Filter</h1>
            <form onSubmit={this.handleSubmit}>
                <input data-testid="input" id="input" type="text" value={this.state.value} onChange={this.numberOfInput} placeholder="Enter the number of inputs"/>
                <br/>
                <button type="submit" id="submit">Generate Random Numbers</button>
            </form>
            <div id="generatedList" data-testid="generatedList"></div>
            <div id="result"></div>
        </div>
          
      </center>
    )
  }
}

function App() {
  return (
    <Numbers />
  );
}

export default App;
