import react from 'react';

class Result extends react.Component{
    constructor(props){
      super(props);
      this.result=[];
      this.state={value:this.props.values.value,random_numbers:this.props.values.random_numbers,buttontype:this.props.values.buttontype};
      this.filteredList();
    }

    filteredList(){
      this.result=[];
      if(this.state.buttontype==='0'){
        this.result=this.state.random_numbers.filter(n => n%2===0);
      }
      else{
        this.result=[];
        this.result=this.state.random_numbers.filter(n => n%2);
      }
    }

    render(){
      return(
        <center>
            <h1 id="result-heading">Filtered Array</h1>
            <div className="flex-container">
                {(()=>{
                var flexboxes=[];
                for(let i=0;i<this.result.length;i++){
                    flexboxes.push(<div data-testid="filteredList" key={this.result[i].toString()}>{this.result[i]}</div>);
                } 
                return flexboxes;
                })()}
            </div>
        </center>
      )
    }
  }
  
  export default Result;