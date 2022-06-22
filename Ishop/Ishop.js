var Ishop = React.createClass({

    displayName: 'Ishop',
  
    propTypes: {
      label: React.PropTypes.string.isRequired, // текст заголовка
      products: React.PropTypes.array.isRequired, // список товаров
      //указываем типы для элементов массива
      products:React.PropTypes.arrayOf(
        React.PropTypes.shape({
          namePdoduct: React.PropTypes.string.isRequired,
          code: React.PropTypes.number.isRequired,
          price: React.PropTypes.string.isRequired,
          urlProduct: React.PropTypes.string.isRequired,
          typeScin: React.PropTypes.string,
          count: React.PropTypes.number.isRequired,
        })
      )      
    },
  
    render: function() {    
      var produsctsList=React.DOM.table({className:'TableProduct'},
        //здесь делаем шапку таблицы
        React.DOM.thead(null, React.DOM.tr({className:'TrTable'}, 
            React.DOM.th({className:"ThTable"},'Наименование товара'), 
            React.DOM.th({className:"ThTable"},'Цена'),
            React.DOM.th({className:"ThTable"}),
            React.DOM.th({className:"ThTable"},'Тип кожи'),
            React.DOM.th({className:"ThTable"},'Остаток на складе'),
            )
        ),
        //здесь содержание таблицы
        React.DOM.tbody(null, this.props.products.map( el =>
          React.DOM.tr({key:el.code,className:'TrTable'},
             React.DOM.td({className:'TdTable'}, React.DOM.p({className: 'PName'}, el.namePdoduct)),
             React.DOM.td({className:'TdTable'}, React.DOM.p(null, el.price)),
             React.DOM.td({className:'TdTable'}, React.DOM.img({src:el.urlProduct, title: el.namePdoduct, className:'Img'} )),
             React.DOM.td({className:'TdTable'}, React.DOM.p(null, el.typeScin)),
             React.DOM.td({className:'TdTable'}, React.DOM.p(null, el.count)),
             )
            )
        )        
      );
      return React.DOM.div( {className:'Ishop'}, 
        React.DOM.div( {className:'LabelText'}, this.props.label ),
        React.DOM.div( null, produsctsList ),
      );
    },
  
  });