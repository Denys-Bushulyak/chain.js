#Chain.JS#

Function for creating looped arrays. Used for menu, rotators, etc..

## Examples ##

###Create###
```javascript
var menu = Chain( [ "New", "Copy", "Edit", "Delete", 1, 2, 3, null ] );
```
 
##Methods##
* next     
* prev     
* current  
* first    
* last     
* reset    
* isEnd    
* isBegin  
* goTo     
* goToEnd  
* getItems 
* beginFrom (return new Chain with shifted list)
* getIndex 

###Add item to chain###

```javascript

menu.getItems().push("new item");

menu.getItems().push(3.14);

menu.getItems().push( { id: 123, name: "John" } );

```

###Moving###

```javascript

menu.current();
//"New"

menu.prev();
// { id: 123, name: "John" }

menu.next();
//"New"

menu.next();
//"Copy"

menu.last();
// { id: 123, name: "John" }

menu.first();
//"New"

```




##Testing code##

For Unit testing using Jasmine.

Just open file /test/test.html.