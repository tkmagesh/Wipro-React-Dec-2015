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
Any - [homework]
All - [homework]
Min - [homework]
Max - [homework]
Sum - [homework]
Aggregate - [homework]
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
    function filter(list, criteriaFn){
        var result = [];
        for(var i=0; i<list.length; i++)
            if (criteriaFn(list[i]) )
                result.push(list[i]);
        return result;
    }
    function negate(fn){
        return function(){
            return !fn.apply(this, arguments);
        }
    }
    var category1ProductCriteria = function(product){
        return product.category === 1;
    }
    //Filter all category-1 products
    print("Category 1 products", function(){
        var category1Products = filter(products, category1ProductCriteria);
        console.table(category1Products);
    });
    print("Non Category 1 products", function(){
        /*var nonCategory1ProductCriteria = function(product){
            return !category1ProductCriteria(product);
        }*/
        var nonCategory1ProductCriteria = negate(category1ProductCriteria);
        var nonCategory1Products = filter(products, nonCategory1ProductCriteria);
        console.table(nonCategory1Products);
    });
    //Filter all costly products (cost > 50)
    var costlyProductCriteria = function(product){
        return product.cost > 50;
    }
    print("Costly products (cost > 50)", function(){

        var costlyProducts = filter(products, costlyProductCriteria);
        console.table(costlyProducts);
    });
    print("affordable products (!costly )", function(){
        /*var affordableProductCriteria = function(product){
            return !costlyProductCriteria(product);
        }*/
        var affordableProductCriteria = negate(costlyProductCriteria);
        var affordableProducts = filter(products, affordableProductCriteria);
        console.table(affordableProducts);
    });
});

print("GroupBy", function(){
    function groupBy(list, keySelector){
        var result = {};
        for(var i=0; i<list.length; i++){
            var item = list[i];
            var key = keySelector(item);
            result[key] = result[key] || [];
            result[key].push(item);
        }
        return result;
    };
    function printGroup(groupedObj){
        for(var key in groupedObj){
            print("Key - " + key, function(){
                console.table(groupedObj[key]);
            });
        }
    }
    print("Products By Category", function(){
        var categoryKeySelector = function(product){
            return product.category;
        };
        var productsByCategory = groupBy(products, categoryKeySelector);
        printGroup(productsByCategory);
    });

    print("Products By Cost", function(){
        var keySelectorByCost = function(product){
            return product.cost > 50 ? "costly" : "affordable";
        }
        var productsByCost = groupBy(products, keySelectorByCost);
        printGroup(productsByCost);
    });
});
