#Chain.JS#

Function for creating looped arrays. Used for menu, rotators, etc..

## Examples ##

###Create###
```javascript
var menu = Chain( [ "New", "Copy", "Edit", "Delete", 1, 2, 3, null ] );
``` 

###Add item to chain###

```javascript
menu.push("new item");
menu.push(3.14);
menu.push( { id: 123, name: "John" } );
```