<html>
<body>
<p>
<b>w3i</b> is a library that aims to solve Javascript and HTML DOM crossbrowser compatibility problems and <i>just that</i>. It also aims to not burden the programmer with learning new commands, but be able to use it without needing to study beyond the standard Javascript language. 
</p>
<p>
There's a multitude of great libraries that solve cross browser compatibility problems, but they offer new command names and syntax and a heap of other useful but not immediately needed functionalities. Sometimes a programmer just needs to solve a cross browser problem and nothing more.
</p>
<p>
<b>w3i</b>, which stands for <b>W3</b>c <b>I</b>nterface, aims to maintain the syntax of the W3C specification (there are a couple of non-standard functions which are widely used among browsers). It is also non-obtrusive in that no Javascript or DOM objects are changed. Nothing is happening under the hood. 
</p>
<p>
In a nutshell, the way it handles the above goals is that for any W3C function someObj.someFunc(param1, param2) that does not work cross-browser, there is an equivalent w3i function which is called as follows: <code>w3i.someFunc(someObj, param1, param2)</code> <br/>
E.g: <code>myElem.firstElementChild() ==> w3i.firstElementChild(myElem) </code>
</p>
<p>
The library is still in <i>alpha</i>. On the TODO list are still: 
<ul>
<li>creating detailed documentation that doubles as web reference for javascript incompatilibities.</li>
<li>Creating unit testing suites.</li>
<li>Aiming for IE6+ compatiblity preferably, IE7+ otherwise. Firefox 3.0+ plus compatibility, 3.5+ otherwise. Ensure Safari, Chrome and Opera compatibility - specific oldest versions are yet to be determined.</li>
</p>
<p>
You can find more details on usage and assumptions, main references, similar libraries of interest, implemented and non implemented function, in the Detailed Guide.
</p>
</body>
</html>






