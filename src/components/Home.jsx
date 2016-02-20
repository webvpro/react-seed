var React = require('react');
var Bootstrap = require('react-bootstrap');
var Row = Bootstrap.Row;
var Grid = Bootstrap.Grid;
var Col = Bootstrap.Col;
var TheForm = require('./TheForm.jsx');
var Home = React.createClass({
  render: function(){
    return (
     <Row>
       <header>
         <Grid className="container">
           <Row>
             <Col className="col-lg-12">
               <div className="intro-text">
                 <span className="name">FatePtz</span>
                 <span className="skills">Fate Session Tool</span>
                 <hr className="star-light" />
               </div>
               <img className="img-responsive" src="img/Powered-by-Fate-Final-Dark-BG.png" alt="" />
               <hr className="fort-cap" />
             </Col>
           </Row>
           <Row>
             <Col className="col-sm-3" style={{fontSize:'6.33em'}}>
               <i className="fate-icon action-attack"></i>
             </Col>
             <Col className="col-sm-3" style={{fontSize:'6.33em'}}>
               <i className="fate-icon action-advantage"></i>
             </Col>
             <Col className="col-sm-3" style={{fontSize:'6.33em'}}>
               <i className="fate-icon action-defend"></i>
             </Col>
             <Col className="col-sm-3" style={{fontSize:'6.33em'}}>
               <i className="fate-icon action-overcome"></i>
             </Col>
           </Row>
         </Grid>
       </header>
       <TheForm />
     </Row>


   )
 }
});

module.exports = Home
