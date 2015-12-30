var App = React.createClass({
    render : function(){
        console.log("rendering App");
        return (
            <div>
                <h1>React App Demo</h1>
                <Spinner></Spinner>
            </div>
        )
    }
});

var Spinner = React.createClass({
    getInitialState : function(){
        return { count : 0};
    },
    increment : function(){
        this.setState({count : ++this.state.count});
        console.log(this.state);
    },
    decrement : function(){

    },
    render : function(){
        console.log("rendering Spinner");
        return (
            <div>
                <h3>Spinner</h3>
                <input type="button" value="Up" onClick={this.increment}/>
                <input type="button" value="Down" />
                <div>{this.state.count}</div>
            </div>
        )
    }
})
ReactDOM.render(<App> </App>, document.getElementById("content"));
