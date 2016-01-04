var BugsList = React.createClass({
    fetchBugsFromServer : function(){
        return fetch("http://localhost:3000/bugs")
                    .then(function(response){
                        return response.json();
                    });
    },
    componentDidMount : function(){
        this.fetchBugsFromServer()
            .then(function(bugs){
                this.setState({list : bugs})
            }.bind(this))
    },
    getInitialState : function(){
        return {
            list : []
        }
    },
    onAddBug : function(){
        console.log("onAddBug triggered");
        var bugName = this.refs.txtBugName.value;
        var bugsList = this.state.list;
        $.ajax({
            url : "http://localhost:3000/bugs",
            method : "post",
            dataType : "json",
            contentType : "application/json",
            data : JSON.stringify({name : bugName, isClosed : false})
        }).then(function(newBug){
            bugsList.push(newBug);
            this.setState({list : bugsList});
        }.bind(this));
    },
    render : function(){
        var BugItems = this.state.list.map(function(bug){
            return (
                <BugItem bug={bug} key={bug.id}></BugItem>
            );
        }.bind(this));
        return (
            <div>
               <h3>Bugs</h3>
                <hr />
                <label>Bug :</label>
                <input type="text" ref="txtBugName"/>
                <input type="button" onClick={this.onAddBug} value="Add Bug"/>
                <hr/>
                <ol>
                    {BugItems}
                </ol>
                <div>Total Number of Bugs : {this.state.list.length}</div>

            </div>
        )
    }
});

var BugItem = React.createClass({
    toggleBug : function(){
        var bug = this.props.bug;
        bug.isClosed = !bug.isClosed;
        $.ajax({
            url : "http://localhost:3000/bugs/" + this.props.bug.id,
            data : JSON.stringify(bug),
            method : 'PUT',
            dataType : "json",
            contentType : "application/json"
        }).then(function(data){
            console.log(data);
        }.bind(this))
    },
    render : function(){
        return (
            <li>
              <span>{this.props.bug.name} - <i>{this.props.bug.isClosed.toString()}</i>
                <input type="button" value="Toggle" onClick={this.toggleBug}/>
              </span>
            </li>
        );
    }
})
ReactDOM.render(<BugsList> </BugsList>, document.getElementById("content"));
