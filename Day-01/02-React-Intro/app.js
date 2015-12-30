var ProductList = React.createClass({
    getInitialState : function(){
        return {
            list : []
        }
    },
    onAddProduct : function(){
        var newProductName = this.refs.txtProductName.value;
        var productList = this.state.list;
        productList.push(newProductName);
        this.setState({list : productList});
    },
    render : function(){
        var productItems = this.state.list.map(function(productName){
            return (
                <ProductItem name={productName}></ProductItem>
            );
        });
        return (
            <div>
                <label>Name :</label>
                <input type="text" ref="txtProductName" />
                <input type="button" value="Add Product" onClick={this.onAddProduct} />
                <ol>
                    {productItems}
                </ol>
                <div>Total Number of Products : {this.state.list.length}</div>
                <h4>Selected Product : [selected Product is displayed here]</h4>
            </div>
        )
    }
});

var ProductItem = React.createClass({
    render : function(){
        return (
            <li>
              <span>{this.props.name}</span>
              <input type="button" value="Select" />
            </li>
        );
    }
})
ReactDOM.render(<ProductList> </ProductList>, document.getElementById("content"));
