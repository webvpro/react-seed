var React = require('react');
var Bootstrap = require('react-bootstrap');
var Validator = require("email-validator");

var EmailInput = React.createClass({
  getInitialState:function(){
    return {valid:true, value: ''}
  },
  onChange: function(e){

     if (Validator.validate(e.target.value)){
       this.setState({valid:true, value:e.target.value});
     } else {
       console.log('what')
       this.setState({valid:false,value:e.target.value});
     }
  },
  render:function(){
    var inputClass = 'warning';
    if (this.state.value != ''){
      inputClass = this.state.valid ? "success" : "error";
    }
    return(
      <Bootstrap.Input type="email" bsStyle={inputClass} label="Email@Address.com" placeholder="Enter email" onChange={this.onChange} value={this.state.value}  hasFeedback></Bootstrap.Input>
    )
  }

});

module.exports = EmailInput;
