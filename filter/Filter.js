var Filter=React.createClass({
    displayName: 'Filter',
  
    propTypes: {
      list:React.PropTypes.arrayOf(
        React.PropTypes.string.isRequired)
    },
  
    getInitialState: function() {
      return {iniValue:this.props.list,
      checkInp:false,
      defInp:''};
    },
  
    filterState:function(EO) { 
      this.setState({defInp:EO.target.value}, this.createNewList);
    },
    
    sortState:function(EO){        
      this.setState({checkInp: EO.target.checked}, this.createNewList);         
    },

    resetAll: function(){ 
      this.setState({checkInp:false, defInp:''}, 
        this.createNewList);
    },

    createNewList:function(){
      var newArrWords;
      if(!this.state.defInp){
        newArrWords=this.props.list.slice();
      }
      else{
        newArrWords=[];
        this.props.list.forEach(elem => {
        if (elem.includes(this.state.defInp)) {
          newArrWords.push(elem);
        }
      });
      } 
      if(this.state.checkInp) {
        newArrWords.sort();
      } 
      this.setState({iniValue: newArrWords});
    },

    render: function() {
  
      var wordList=this.state.iniValue.map( el =>
            React.DOM.div( {key:[el]},el),
      );
      return React.DOM.div( {className:'Filter'}, 
        React.DOM.input({className:'InputFil', type:'checkbox',checked:this.state.checkInp, onClick:this.sortState}),
        React.DOM.input( {className:'InputFil',type:'text',value:this.state.defInp,onChange:this.filterState } ),        
        React.DOM.input( {className:'InputFil',type:'button',value:'Сброс',onClick:this.resetAll} ),
        React.DOM.div( {className:'ListWords',}, wordList),
      );
    },
  
  });