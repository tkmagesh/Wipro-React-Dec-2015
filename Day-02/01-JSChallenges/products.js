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
       console.table(products);
   });
   print("Any list by any attribute", function(){
        function Sort(/*...*/){

        };
        print("Products By cost", function(){
            //Use the 'Sort' function above to sort the products by cost
            console.table(products);
        });
        print("Products By units", function(){
            //Use the 'Sort' function above to sort the products by units
            console.table(products);
        });
   });
   print("Any list by any logic", function(){
        function Sort(/*...*/){

        };
        print("Products By value [value = cost * units]", function(){
            //Use the 'Sort' function above to sort the products by cost
            console.table(products);
        });
   });
});
