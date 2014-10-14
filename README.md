#Chain.JS#

Function for creating looped arrays. Used for menu, rotators, etc..

## Examples ##

###Create###
```javascript
var menu = Chain( [ "New", "Copy", "Edit", "Delete", 1, 2, 3, null ] );
```
 
##Methods##
-next     
-prev     
-current  
-first    
-last     
-reset    
-isEnd    
-isBegin  
-goTo     
-goToEnd  
-getItems 
-beginFrom
-getIndex 

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

<a rel="license" href="http://creativecommons.org/licenses/by/4.0/"><img alt="Лицензия Creative Commons" style="border-width:0" src="https://i.creativecommons.org/l/by/4.0/88x31.png" /></a><br />Произведение «<span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">Chain.js</span>» созданное автором по имени <a xmlns:cc="http://creativecommons.org/ns#" href="https://bitbucket.org/denys-bushulyak/chain.js" property="cc:attributionName" rel="cc:attributionURL">Denys Bushulyak</a>, публикуется на условиях <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">лицензии Creative Commons «Attribution» («Атрибуция») 4.0 Всемирная</a>.