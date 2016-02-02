var React = require('react');
var ListItem = require('./ListItem.jsx');

var genres = [{"id":1,"text":"Fantasy"},{"id":2,"text":"Sci-Fi"},{"id":3,"text":"Horror"}];

var List = React.createClass({
   render: function(){
     var listItems = genres.map(function(item){
       return <ListItem key={item.id} genre={item.text} />;
     });

     return (<ul>{listItems}</ul>);
   }
});

module.exports = List;
