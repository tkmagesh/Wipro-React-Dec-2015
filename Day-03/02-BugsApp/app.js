var bugStore = (function(){
    var list = [];
    function loadData(){
        return fetch("http://localhost:3000/bugs")
            .then(function(response){
                return response.json();
            }).then(function(bugs){
                list = list.concat(bugs);
                console.log(list);
                return list;
            });
    }
    function getAll(){
        var deferred = Promise.defer();
        if (!list.length){
            return loadData().then(function(){
                return list;
            });
        } else {
            deferred.resolve(list);
            onChange();
            return deferred.promise;
        }
    }
    function save(bug){
        if (bug.id){
          return $.ajax({
            url : "http://localhost:3000/bugs/" + bug.id,
            method : "put",
            dataType : "json",
            contentType : "application/json",
            data : JSON.stringify(bug)
            });
        } else {
            $.ajax({
                url : "http://localhost:3000/bugs",
                method : "post",
                dataType : "json",
                contentType : "application/json",
                data : JSON.stringify(bug)
            }).then(function(data){
                list.push(data);
                onChange();
            })
        }
    }
    var callbacks = [];
    function addOnChange (callbackFn){
        callbacks.push(callbackFn);
    }
    function onChange(){
        for(var i=0; i<callbacks.length; i++){
            callbacks[i](list);
        }
    }
    return {
        save : save,
        getAll : getAll,
        addOnChange : addOnChange
    }
})();
var BugsList = React.createClass({
    updateList : function(list){
        this.props.store.getAll()
            .then(function(bugs){
                this.setState({list : bugs})
            }.bind(this))
    },
    componentDidMount : function(){
        console.log(this.props.store);
        this.props.store.addOnChange(this.updateList.bind(this));
        this.updateList();
    },
    getInitialState : function(){
        return {
            list : []
        }
    },
    onAddBug : function(){
        console.log("onAddBug triggered");
        var bugName = this.refs.txtBugName.value;
        this.props.store.save({name : bugName, isClosed : false});
    },
    render : function(){
        var BugItems = this.state.list.map(function(bug){
            return (
                <BugItem bug={bug} key={bug.id} store={this.props.store}></BugItem>
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
        this.props.store.save(bug);
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
ReactDOM.render(<BugsList store={bugStore}> </BugsList>, document.getElementById("content"));
