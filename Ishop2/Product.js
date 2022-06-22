var Product= React.createClass({

    displayName: 'Product',

    propTypes:{
        nameProduct:React.PropTypes.string.isRequired,
        code:React.PropTypes.number.isRequired,
        price:React.PropTypes.string.isRequired,
        srcPict:React.PropTypes.string.isRequired,
        typeScin:React.PropTypes.string.isRequired,
        count:React.PropTypes.number.isRequired,
        control:React.PropTypes.string.isRequired,
        isSelected:React.PropTypes.bool,
        cbSelectedProduct:React.PropTypes.func,
        cbDeleteProduct:React.PropTypes.func,
    },

    selectedProd:function(){
      this.props.cbSelectedProduct(this.props.code);
      
    },

    deleteProd:function(){
       this.props.cbDeleteProduct(this.props.code);
    },

    render:function(){
        return React.DOM.tr({style:{backgroundColor:this.props.isSelected? 'rgb(113, 188, 253)':'transparent'},
                            onClick:this.selectedProd},
                React.DOM.td({className:'TdTable'}, React.DOM.p({className:'PName'},this.props.nameProduct) ),
                React.DOM.td({className:'TdTable'}, this.props.price),
                React.DOM.td({className:'TdTable'}, React.DOM.img({className:'Img', src:this.props.srcPict, title:this.props.nameProduct})),
                React.DOM.td({className:'TdTable'}, this.props.typeScin),
                React.DOM.td({className:'TdTable'}, this.props.count),
                React.DOM.td({className:'TdTable'}, React.DOM.input({type:'button', value:this.props.control, onClick:this.deleteProd, className:'ButtCon'})),)
    }

});