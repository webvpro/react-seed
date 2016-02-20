var React = require('react');
var Bootstrap = require('react-bootstrap');


var StatPanel = React.createClass({
    render: function(){
      var panelStyle ={
        size:'col-xs-10 col-sm-4 col-md-3 col-xs-offset-1 col-sm-offset-0 col-md-offset-1',
        theme:'panel-default',
        totalStyle:{color:'#000'},
        captionStyle:{color:'#000'},
        bodyStyle:{height:'100', backgound:'blue'},
        headerStyle:{width:'100%'}
      }
      var panelClassList = "panel " + (this.props.theme||panelStyle.theme) + " " + panelStyle.size
        console.log(panelClassList)

      return (
        <div className={panelClassList}>
          <div style={panelStyle.bodyStyle} className="panel-body panel-warning">
            <h3 style={panelStyle.totalStyle}>{this.props.total}</h3>
            <p style={panelStyle.captionStyle}>{this.props.caption}</p>
          </div>
        </div>
      );
    }

});

module.exports = StatPanel;
