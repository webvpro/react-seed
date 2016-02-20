var React = require('react');
var ListItem = require('./ListItem.jsx');

var genres = [{"id":1,"text":"Fantasy"},{"id":2,"text":"Sci-Fi"},{"id":3,"text":"Horror"}];

var List = React.createClass({
   render: function(){
     var createItem = function(text, index){
       return <ListItem key={index + text} text={text} />;
     };
     return (<ul>{this.props.items.map(createItem)}</ul>);
   }
});

module.exports = List;
