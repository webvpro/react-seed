
var React = require("react");
var EmailInput = require('./EmailInput.jsx');
var Bootstrap = require('react-bootstrap');

var TheForm = React.createClass({
  getInitialState: function(){
    return {items:[]};
  },
  render : function(){
    return (
      <form className="col-sm-4 col-sm-offset-4 form-group well well-lg" style={{marginTop:'1em'}}>
        <EmailInput />
        <Bootstrap.Button bsStyle="primary pull-right" active>Submit</Bootstrap.Button>
      </form>
    )
  }
});


module.exports = TheForm;
