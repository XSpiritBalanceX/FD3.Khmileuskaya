var Ishop = React.createClass({

    displayName: 'Ishop',
  
    propTypes: {
      label: React.PropTypes.string.isRequired, // текст заголовка
      header:React.PropTypes.shape({
        name: React.PropTypes.string.isRequired,
        price: React.PropTypes.string.isRequired,
        url: React.PropTypes.string.isRequired,
        type: React.PropTypes.string.isRequired,
        count: React.PropTypes.string.isRequired,
        control:React.PropTypes.string.isRequired,
      }),
      //указываем типы для элементов массива
      products:React.PropTypes.arrayOf(
        React.PropTypes.shape({
          namePdoduct: React.PropTypes.string.isRequired,
          code: React.PropTypes.number.isRequired,
          price: React.PropTypes.string.isRequired,
          urlProduct: React.PropTypes.string.isRequired,
          typeScin: React.PropTypes.string,
          count: React.PropTypes.number.isRequired,
          control:React.PropTypes.string.isRequired,
        })
      )      
    },

  getInitialState: function () {
    return {list: this.props.products,
      isSelected: null,
    }
  },

  selectedProduct:function(code){
    this.setState({isSelected:code});
  },

  deleteProduct:function(code){
    var copyArr=this.state.list.slice();
    var inDelElem;
    var questAbDel;
    copyArr.forEach((el,index)=>{
      if (el.code===code){
        inDelElem=index; 
        questAbDel=confirm(`Вы действительно хотите удалить продукт "${el.namePdoduct}" из каталога?`)       
      }      
    });
    if(questAbDel){
      copyArr.splice(inDelElem,1);
      this.setState({list:copyArr});
    }
    
  },
  
    render: function() {
        //здесь содержание таблицы
        var productList=this.state.list.map(element=>{
         return React.createElement(Product, {key:element.code,          
          nameProduct:element.namePdoduct,
          code:element.code,
          price:element.price,
          srcPict:element.urlProduct,
          typeScin:element.typeScin,
          count:element.count,
          control:element.control,
          isSelected:element.code===this.state.isSelected,
          cbSelectedProduct:this.selectedProduct,
          cbDeleteProduct:this.deleteProduct})
        });
      return React.DOM.div( {className:'Ishop'}, 
        React.DOM.div( {className:'LabelText'}, this.props.label ), 
          React.DOM.table({className:'TableProduct'},
          React.DOM.thead(null, React.DOM.tr({className:'TrTable'}, 
          React.DOM.th({className:"ThTable"},this.props.header.name), 
          React.DOM.th({className:"ThTable"},this.props.header.price),
          React.DOM.th({className:"ThTable"},this.props.header.url),
          React.DOM.th({className:"ThTable"},this.props.header.type),
          React.DOM.th({className:"ThTable"},this.props.header.count),
          React.DOM.th({className:"ThTable"},this.props.header.control),
          )),
          React.DOM.tbody(null, productList)),
      );
    },
  
  });