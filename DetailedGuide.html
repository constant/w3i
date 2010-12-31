<html>
<body>
<h1>w3i</h1>
<i>Strictly a cross browser JS library</i>
<h2>Introduction</h2>
<p>
<b>w3i</b> is a library that aims to solve Javascript and HTML DOM crossbrowser compatibility problems and <i>just that</i>. It also aims to not burden the programmer with learning new commands, but be able to use it without needing to study beyond the standard Javascript language. 
</p>
<p>
There's a multitude of great libraries that solve cross browser compatibility problems, but they offer new command names and syntax and a heap of other useful but not immediately needed functionalities. Sometimes a programmer just needs to solve a cross browser problem and nothing more.
</p>
<p>
<b>w3i</b>, which stands for <b>W3</b>c <b>I</b>nterface, aims to maintain the syntax of the W3C specification (though a couple of exception were made: Node.contains is not w3c, and Select.add was implemented to accomodate IE paramaters also)It is also non-obtrusive in that no Javascript or DOM objects are changed. Nothing is happening under the hood. 
</p>

<h2>Usage</h2>
<p>
The library just needs to be imported with the standard script tag.<br/>
<code>&lt;script type="text/javascript" src="somepath/w3i.js"&gt; &lt;/script&gt;</code><br/>
All function are then referred to through the w3i object. For example: <br/>
<code>w3i.getInnerHeight(window);</code>
</p>
<p>
Since this is a library that implements the W3C interface cross-browser, it assumes that the developer has set the <code>DOCTYPE</code> accordingly and is not running the browser in quirks mode. The library is aiming to function on browsers in <i>strict</i> or <i>almost strict</i> modes. For more information on doctypes and browser modes refer to the following excellent resources.
</p>
<ul>
<li><a href="http://hsivonen.iki.fi/doctype/#handling">hsivonen.iki.fi - Activating Browser Modes with Doctype</a></li>
<li><a href="http://www.quirksmode.org/css/quirksmode.html">quirksmode.org - Quirks mode and strict mode</a></li>
</ul>

<h2>Naming Scheme</h2>
<p>
As said the library aims to have no learning code for the developer using it. This is done by having the compatibility functions have a predictable name based on a simple scheme. This has the additional advantage that even for non-implemented functions we already know what the function will be called, based on the following rules:
</p>
<ul>
<li><b>Functions:</b> for any W3C function someObj.someFunc(param1, param2) that does not work cross-browser, there is an equivalent w3i function which is called as follows: <code> w3i.someFunc(someObj, param1, param2)</code><br/>
Eg: <code>myElem.firstElementChild() ==> w3i.firstElementChild(myElem)</code>
</li>
<li><b>Properties:</b> non cross-browser variables are implemented in w3i with getter and setter methods (or getter only if read-only)<br/>
Eg: <code>str = myElem.textContent; ==> str = w3i.getTextContent(myElem);</code><br/>
<code>myElem.textContent = str; ==> w3i.setTextContent(myElem, str);</code>
</li>
<li><b>Object construction:</b> A non cross-browser object is constructed through a factory function with a create prefix and the object name as suffix. The only example of this so far is for AJAX:
<code>new XMLHttpRequest() ==> createXMLHttpRequest()</code>
</li>
<li><b>HTML controls functions:</b> Even though replacement function for objects like <i>document</i> and <i>window</i> reside directly under the <i>w3i</i> object, function for HTML controls are enclosed within nested objects which have the control's name. The only example so far is the Select control's add function, which gets converted as follows:<br/>
<code>mySelect.add(newItem, prevItem) ==> w3i.Select.add(mySelect, newItem, prevItem)</code><br/>
(The w3i namespace didn't get as crowded as I expected so for now at least, the function placement logic is as follows: IF is a control THEN use nested object ELSE use w3i namespace)<br/>
</li>
</ul>
<p>
In short, with this naming scheme the object on which the function is called, is the first parameter of the replacement function, which is now called from the w3i object. This reduces object orientated notation but ensures that the library remains non-obtrusive, instead of making it override existing functions, risking unknown side effects.
</p>

<h2>Consolidation of Knowledge</h2>
<p>
Similar function implementations can be found elsewhere on on the web, however, I have been unable to find a library that collects all this knowledge in one place and furthermore without modifying (even if it is for the better) the behaviour of the functions and their naming.
</p>
<p>
The library can be said to be a consolidation of known but scattered solutions. For this reason I would like to make the accompanying documentation as important as the library, so that it can double as cross browser incompatibility reference.
</p>
<p>
Finally, each function implementation for now does not call any other functions. The library is non-minified and a developer can, if he chooses, just copy a specific function into his code. This is in line with the above, of a) not forcing the developer to adopt a library to solve one specific problem and b) not providing not only a solution but information on the solution.
<p>
There are already fantastic resources on cross browser incompatibilities on the net. By far the one most referenced when developing this library was <a href="http://www.quirksmode.org">quirksmode.org</a>. 
</p>

<h2>TODOs</h2>
<p>
The library is still in alpha. Briefly, the functions/properties already implemented in w3i are, in alphabetical order:
<pre>add (Select)
addEventListener
compareDocumentPosition
computedStyle
contains
cssRules
getChildElementCount
getFirstElementChild
getElementsByClassName
getLastElementChild
getNextElementSibling
getPreviousElementSibling
hasAttribute
hasAttributes
innerWidth/Height
keyCode
pageX/pageY
pageXOffset/pageYOffset
relatedTarget
removeEventListener
target
textContent</pre>
</p>
<p>
On the TODO list are still:
</p>
<ul>
<li>creating detailed documentation that doubles as web reference for javascript incompatilibities.</li>
<li>Creating unit testing suites.</li>
<li>Aiming for IE6+ compatiblity preferably, IE7+ otherwise. Firefox 3.0+ plus compatibility, 3.5+ otherwise. Ensure Safari, Chrome and Opera compatibility - specific oldest versions are yet to be determined.</li>
</ul>

Feel free to contact me with any comments, questions, issues on my github account.
</body>
</html>




