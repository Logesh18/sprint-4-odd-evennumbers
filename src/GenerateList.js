import react from 'react';
import ReactDOM from 'react-dom';
import Result from './Result.js'

class GenerateList extends react.Component{
    constructor(props){
      super(props);
      this.state={buttontype:'',value:this.props.value,random_numbers:[]};
      this.odd=this.odd.bind(this);
      this.even=this.even.bind(this);
      this.generateNumber();
    }

    generateNumber(){
      this.state.random_numbers=[];
      for (var i=0; i <this.state.value ;) {
        var number = Math.floor(Math.random() * (1000));
        if(this.state.random_numbers.indexOf(number) === -1){
          this.state.random_numbers[i]=number;
          i++;
        } 
      }
    }

    odd(event){
      document.getElementById("submit").style.border = "1px  solid #000000";
      document.getElementById("evenbutton").style.border = "1px  solid #000000";
      document.getElementById("oddbutton").style.border = "3px  solid #000000";
      this.state.buttontype='1';
      ReactDOM.unmountComponentAtNode(document.getElementById('result'));
      ReactDOM.render(<Result values={this.state}/>,document.getElementById('result')); 
      event.preventDefault();
    }

    even(event){
      document.getElementById("submit").style.border = "1px  solid #000000";
      document.getElementById("evenbutton").style.border = "3px  solid #000000";
      document.getElementById("oddbutton").style.border = "1px  solid #000000";
      this.state.buttontype='0';
      ReactDOM.unmountComponentAtNode(document.getElementById('result'));
      ReactDOM.render(<Result values={this.state}/>,document.getElementById('result')); 
      event.preventDefault();
    }

    render(){
      return( 
        <center>
        <div className="flex-container">
            {(()=>{
              var flexboxes=[];
              for(let i=0;i<this.state.random_numbers.length;i++){
                flexboxes.push(<div data-testid="originalList" key={this.state.random_numbers[i].toString()}>{this.state.random_numbers[i]}</div>);
              } 
              return flexboxes;
            })()}
          </div>
          <div id="flex-buttons">
              <button data-testid="oddbutton" id="oddbutton" value='1' onClick={this.odd}>ODD</button>
              <button data-testid="evenbutton" id="evenbutton" value='0' onClick={this.even}>EVEN</button>
          </div>
        </center>
      )
    }
  }
  
  export default GenerateList;