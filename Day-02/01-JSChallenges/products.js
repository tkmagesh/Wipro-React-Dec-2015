var products = [
    {id : 3, name : "Pen", cost : 10, units : 20, category : 1},
    {id : 7, name : "Hen", cost : 80, units : 70, category : 2},
    {id : 4, name : "Den", cost : 90, units : 30, category : 1},
    {id : 2, name : "Ten", cost : 10, units : 60, category : 2},
    {id : 9, name : "Zen", cost : 100, units : 10, category : 1},
]

function print(title, fn){
    console.group(title);
    fn();
    console.groupEnd();
}

/*
Sort
Filter
Any
All
Min
Max
Sum
Aggregate
GroupBy
*/

print("Default List", function(){
    console.table(products);
});

print("Sort", function(){
   print("Default Sort [products by id]", function(){
       //Sorting products by id
       for(var i=0; i<products.length-1; i++){
           for(var j=i+1; j<products.length; j++)
                if (products[i].id > products[j].id){
                    var temp = products[i];
                    products[i] = products[j];
                    products[j] = temp;
                }
       }
       console.table(products);
   });
   print("Any list by any attribute", function(){
        function Sort(list, attrName){
            for(var i=0; i<list.length-1; i++){
               for(var j=i+1; j<list.length; j++)
                    if (list[i][attrName] > list[j][attrName]){
                        var temp = list[i];
                        list[i] = list[j];
                        list[j] = temp;
                    }
           }
        };
        print("Products By cost", function(){
            //Use the 'Sort' function above to sort the products by cost
            Sort(products, "cost");
            console.table(products);
        });
        print("Products By units", function(){
            //Use the 'Sort' function above to sort the products by units
            Sort(products, "units");
            console.table(products);
        });
   });
   print("Any list by any logic", function(){
        function Sort(list, compareFn){
            for(var i=0; i<list.length-1; i++){
               for(var j=i+1; j<list.length; j++)
                    if (compareFn(list[i], list[j]) > 0 ){
                        var temp = list[i];
                        list[i] = list[j];
                        list[j] = temp;
                    }
           }
        };
        print("Products By value [value = cost * units]", function(){
            //Use the 'Sort' function above to sort the products by cost
            var productComparerByValue = function(p1, p2){
                var p1Value = p1.units * p1.cost,
                    p2Value = p2.units * p2.cost;
                if (p1Value < p2Value) return -1;
                if (p1Value === p2Value) return 0;
                return 1;
            }
            Sort(products, productComparerByValue);
            console.table(products);
        });
   });
});

print("Filter", function(){
    //Filter all category-1 products
    //Filter all costly products (cost > 50)
})
