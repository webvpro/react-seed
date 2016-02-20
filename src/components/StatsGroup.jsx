var React = require('react');
var Bootstrap = require('react-bootstrap');
var Button = Bootstrap.Button;
var Grid = Bootstrap.Grid;
var Col =Bootstrap.Col;
var Row = Bootstrap.Row;
var StatPanel = require('./StatPanel.jsx');

var StatsGroup = React.createClass({
    render:function(){
      var gid = this.props.groupId
      var size = this.props.size||''
      var createPanel = function(settings,index){

        var totalText = settings.total.text||''
        var totalStyle = settings.total.style||''
        var captionText = settings.caption.text||''
        var captionStyle = settings.caption.style||''
        var bodyStyle = settings.bodyStyle||undefined
        var panelTheme = settings.theme||'panel-defualt'
        return <StatPanel key={index + gid} theme={panelTheme} size={size} bodyStyle={bodyStyle} total={totalText} totalStyle={totalStyle} caption={captionText} captionStyle={captionStyle} />;
      }

      return (
      <Grid id={this.props.groupId}>
        <Row>
          {this.props.stats.map(createPanel)}
        </Row>
      </Grid>)
    }
});

module.exports = StatsGroup;
