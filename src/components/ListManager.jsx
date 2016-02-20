var React = require('react');
var Bootstrap = require('react-bootstrap');
var Button = Bootstrap.Button;
var Col =Bootstrap.Col;
var Row = Bootstrap.Row;
var List = require('./List.jsx')
var ListManager = React.createClass({
    getInitialState: function(){
      return {items:[],newItemText:''};
    },
    onChange:function(e){
      this.setState({newItemText: e.target.value})
    },
    buttonClick: function(e){
      e.preventDefault();

      var currentItems = this.state.items;

      currentItems.push(this.state.newItemText);

      this.setState({items: currentItems, newItemText:''});
    },
    render: function(){
      var panelStyle ={
        title:{color:'#fff'}
      }
      return (
        <Col sm={4}>
          <Row>
            <div className="panel panel-primary">
              <div className="panel-heading">
                <h3 style={panelStyle.title}>{this.props.title}</h3>
              </div>
              <div className="panel-body">
                <form className="row">
                  <div className="col-sm-9">
                    <input className="form-control" onChange={this.onChange} value={this.state.newItemText} />
                  </div>
                  <div className="col-sm-3">
                    <Button bsStyle="primary" onClick={this.buttonClick}><i className="fa fa-plus-circle" active></i> Add</Button>
                  </div>
                </form>
              </div>
              <List items={this.state.items} />
            </div>
            </Row>
        </Col>
      );
    }

});

module.exports = ListManager;
