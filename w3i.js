var w3i = {
	createXMLHttpRequest : function (){
		if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
			return new XMLHttpRequest();
		}
		else {// code for IE6, IE5
			return new ActiveXObject("Microsoft.XMLHTTP");
		}
	},
	/**
	 * Based on info from
	 * http://www.howtocreate.co.uk/tutorials/javascript/browserwindow
	 * http://bunnyherolabs.com/dhtml/browser-dimensions-table.html
	 */
	getInnerWidth : function(winObj) {
		//w3c
		if (winObj.innerWidth) return winObj.innerWidth;
		//IE
		return winObj.document.documentElement.clientWidth;		
	},
	getInnerHeight : function(winObj) {
		//w3c
		if (winObj.innerHeight) return winObj.innerHeight;
		//Microsoft
		return winObj.document.documentElement.clientHeight;		
	},
	getPageXOffset : function(winObj) {
		//w3c
		if (winObj.pageXOffset) return winObj.pageXOffset;
		//IE
		return winObj.document.documentElement.scrollLeft;
	},
	getPageYOffset : function(winObj) {
		//w3c
		if (winObj.pageYOffset) return winObj.pageYOffset;
		//Microsoft
		return winObj.document.documentElement.scrollTop;
	},
	/**
	 * Based on info from
	 * http://javascript.about.com/library/bldom08.htm
	 */
	getElementsByClassName : function(docObj, clName) {
		//w3c
		if (docObj.getElementsByClassName) {
			return docObj.getElementsByClassName(clName);
		}
		//IE
		var matchingElems = [];
		var classRegExp = new RegExp('\\b'+clName+'\\b');
		//get all elements then check the class on each one
		var allElems = docObj.getElementsByTagName('*');
		for (var i = 0; i < allElems.length; i++) {
			var elemClasses = allElems[i].className;
			if (classRegExp.test(elemClasses)) matchingElems.push(allElems[i]);
		}
		return matchingElems;
	},
	/**
	 * Based on info from
	 * http://www.quirksmode.org/blog/archives/2006/01/contains_for_mo.html
	 * not a w3c function. However, used widely.
	 */
	contains : function (obj1, obj2) {
		//w3c
		if (obj1.contains) {
			return obj1.contains(obj2);
		}
		//Mozilla
		if ((obj1.compareDocumentPosition(obj2) & 16) == 16) return true;
		
		return false;
	},
	/**
	 * Based on info from
	 * http://www.quirksmode.org/blog/archives/2006/01/contains_for_mo.html
	 */
	compareDocumentPosition : function(obj1, obj2) {
		//w3c
		if (obj1.compareDocumentPosition) {
			return obj1.compareDocumentPosition(obj2);
		}
		//IE
		if (obj1 == obj2) return 0;
		
		var bitmask = 0;
		if (obj1.contains(obj2)) bitmask+=16;
		if (obj2.contains(obj1)) bitmask+=8;
		if (obj1.sourceIndex > obj2.sourceIndex ) bitmask+=2;
		if (obj1.sourceIndex < obj2.sourceIndex ) bitmask+=4;
		
		var allElems = document.getElementsByTagName('*');
		if (!(allElems[obj1.id] || allElems[obj2.id])) {
			bitmask = 1;
		}
		return bitmask;
	},
	/**
	 * useful info at:
	 * http://reference.sitepoint.com/javascript/Node/hasAttributes
	 */
	
	/**
	 * Useful info at:
	 * http://tobielangel.com/2007/1/11/attribute-nightmare-in-ie.html
	 * and Dean Edwards code at
	 * http://andrewdupont.net/2007/01/10/code-hasattribute-for-ie/
	 * NOTE: if DOCTYPE is defined in IE, then hasAttribute is available
	 * Also attributes behaves correctly
	 */
	hasAttribute : function(obj, attrName) {
		//w3c
		if (obj.hasAttribute) return obj.hasAttribute(attrName);
		//IE
		if (obj.getAttribute(attrName)){
			return true;
		}
		return false;
		
	},
	hasAttributes : function(obj) {
		//w3c
		if (obj.hasAttributes) {
			return obj.hasAttributes();
		}
		//IE
		return (obj.attributes.length > 0);
	},
	/**
	 * Based on info from:
	 * http://help.dottoro.com/ljsfamht.php
	 */
	getChildElementCount : function(obj) {
		//w3c
		if (obj.childElementCount) {
			return obj.childElementCount;
		}
		//cross browser
		var descendants = (obj.children || obj.childNodes); //FF3.0 doesn't recognize children
		var numChildElems = descendants.length;
		for (var i=0; i<descendants.length; i++) {
			//if (descendants=obj.children) looking specifically for comment nodes in IE
			if (descendants[i].nodeType != 1) {// 1==ELEMENT_NODE
				numChildElems--;
			}
		}
		return numChildElems;
	},
	/**
	 * Based on info from:
	 * http://help.dottoro.com/ljsfamht.php
	 */
	getFirstElementChild : function(obj) {
		//w3c
		if (obj.firstElementChild) {
			return obj.firstElementChild;
		}
		//cross browser
		var descendants = (obj.children || obj.childNodes); //FF3.0 doesn't recognize children
		for (var i=0; i<descendants.length; i++) {
			//if (descendants=obj.children) looking specifically for comment nodes in IE
			if (descendants[i].nodeType == 1) {// 1==ELEMENT_NODE
				return descendants[i];
			}
		}
		return null;
	},
	/**
	 * Based on info from:
	 * http://help.dottoro.com/ljmltphr.php
	 */
	getLastElementChild : function(obj) {
		//w3c
		if (obj.lastElementChild) {
			return obj.lastElementChild;
		}
		//cross browser
		var descendants = (obj.children || obj.childNodes); //FF3.0 doesn't recognize children
		for (var i=descendants.length-1; i>=0; i--) {
			//if (descendants=obj.children) looking specifically for comment nodes in IE
			if (descendants[i].nodeType == 1) {// 1==ELEMENT_NODE
				return descendants[i];
			}
		}
		return null;
	},
	/**
	 * 
	 */
	getNextElementSibling : function(obj) {
		//w3c
		if (obj.nextElementSibling) {
			return obj.nextElementSibling;
		}
		//cross browser
		var nextES = obj.nextSibling;
		while (nextES && nextES.nodeType != 1) {
			nextES = nextES.nextSibling;
		}
		//ensure that null is returned and not 'undefined'
		if (!nextES) return null;
		
		return nextES;
	},
	/**
	 * 
	 */
	getPreviousElementSibling : function(obj) {
		//w3c
		if (obj.previousElementSibling) {
			return obj.previousElementSibling;
		}
		//cross browser
		var previousES = obj.previousSibling;
		while (previousES && previousES.nodeType != 1) {
			previousES = previousES.previousSibling;
		}
		//esnsure that null is returned and not 'undefined'
		if (!previousES) return null;
		
		return previousES;
	},
	/**
	 * Based on info from:
	 * http://stackoverflow.com/questions/9434/how-do-i-add-an-additional-window-onload-event-in-javascript
	 * NB: events should not contain 'on' prefix, eg not 'onload', just 'load'
	 * NB: events should be lowercase
	 * Does not handle the third addEventListener param on how to manage
	 * event bubbling, as this is not available in IE
	 */
	addEventListener : function (obj, event, fn){
		//w3c
		if (obj.addEventListener) { 
		  obj.addEventListener(event, fn, false); 
		}
		//IE
		else if (obj.attachEvent) {
		  obj.attachEvent('on' + event, fn);
		}
	},
	/**
	 * Based on info from:
	 * http://www.scottandrew.com/weblog/articles/cbs-events (the below is paired down)
	 */ 
	removeEventListener : function(obj, event, fn){
		//w3c
		if (obj.removeEventListener){ 
			obj.removeEventListener(event, fn, false);
		}
		//IE
		else if (obj.detachEvent){
			obj.detachEvent('on'+event, fn);
		}
	},
	/**
	 * Based on info from:
	 * http://www.quirksmode.org/js/events_properties.html
	 */
	getPageX : function(evtObj) {
		if (!evtObj) evtObj = window.event; //tolerant approach
		//w3c
		if (evtObj.pageX) return evtObj.pageX;
		//Microsoft
		return (evtObj.clientX + document.body.scrollLeft + document.documentElement.scrollLeft);
	},
	/**
	 * Based on info from:
	 * http://www.quirksmode.org/js/events_properties.html
	 */
	getPageY : function(evtObj) {
		if (!evtObj) evtObj = window.event; //tolerant approach
		//w3c
		if (evtObj.pageY) return evtObj.pageY;
		//IE
		return (evtObj.clientY + document.body.scrollTop + document.documentElement.scrollTop);
	},
	/**
	 * Based on info from:
	 * http://www.quirksmode.org/js/events_properties.html#target
	 */
	getTarget : function(evtObj) {
		if (!evtObj) evtObj = window.event; //tolerant approach
		var retTarget;
		//w3c
		if (evtObj.target) {
			retTarget = evtObj.target;
		}
		//Microsoft
		else {
			retTarget = evtObj.srcElement;
		}
		//Safari bug for TEXT_NODEs
		if (retTarget.nodeType == 3) {
			retTarget = retTarget.parentNode;
		}
		return retTarget;
	},
	/**
	 * Based on info from:
	 * http://www.quirksmode.org/js/events_mouse.html#relatedtarget
	 */
	getRelatedTarget : function(evtObj) {
		if (!evtObj) evtObj = window.event; //tolerant approach
		//w3c
		if (evtObj.relatedTarget) return evtObj.relatedTarget;
		//IE: field depends on event type
		if (evtObj.type == "mouseover") {
			return evtObj.fromElement;
		}
		else { //assuming (evtObj.type == "mouseout") {
			return evtObj.toElement
		}
	},
	/**
	 * Based on info from:
	 * http://www.quirksmode.org/js/events_properties.html#key
	 */
	getKeyCode :function(evtObj) {
		if (!evtObj) evtObj = window.event; //tolerant approach
		//w3c
		if (evtObj.keyCode) return evtObj.keyCode;
		//IE
		return e.which;
	},
	/**
	 * Based on info from:
	 * http://www.quirksmode.org/dom/w3c_html.html
	 */
	getTextContent : function(obj) {
		return (obj.textContent || obj.innerText);
	},
	/**
	 * Based on info from:
	 * http://www.quirksmode.org/dom/w3c_html.html
	 */
	setTextContent : function(obj, value) {
		if (obj.textContent) {
			obj.textContent = value;
		}
		else {
			obj.innerText = value;
		}
	},
	/**
	 *
	 */
	getCssRules : function(styleSheet, ndx) {
		//w3c
		if (styleSheet.cssRules) {
			return styleSheet.cssRules[ndx];
		}
		//Microsoft
		return styleSheet.rules[ndx];
	},
	/**
	 * 
	 */
	getComputedStyle : function(callObj, elem, pseudoElt) {
		if (pseudoElt == undefined) pseudoElt = null;
		
		//w3c
		//extra check for callObj because it could be 'window' or 'document.defaultView'
		if (callObj.getComputedStyle) { 
			return callObj.getComputedStyle(elem, pseudoElt);
		}
		//Microsoft
		return elem.currentStyle;
	},
	/**
	 * Agree with observation at 
	 * http://www.quirksmode.org/dom/w3c_html.html
	 * that the IE approach makes more sense than the w3c
	 * so this functiton allows both types of input
	 * that is, ndx can stand as the index before the new element (IE)
	 * or a reference to the element previous to the new one (w3c)
	 */
	Select : {
		add : function(selectObj, option, ndx) {
			if (ndx == undefined) {
				//Based on info from:
				//http://www.w3schools.com/jsref/met_select_add.asp
				try	{//w3c
					selectObj.add(option, null);
				}
				catch(ex) {//IE
					selectObj.add(option); 
				}		
			}
			else if (typeof(ndx) == 'number') {
				try	{//w3c
					selectObj.add(option, selectObj[ndx]); 
				}
				catch(ex) {//IE
					selectObj.add(option, ndx); 
				}				
			}
			else { //ndx is an option object
				try	{//w3c
					selectObj.add(option, ndx); // standards compliant
				}
				catch(ex) {//IE
					//insert at end if object not found (tolerant implementation)
					var numNdx = selectObj.options.length; 
					for (var i=0; i<selectObj.options.length; i++) {
						if (selectObj[i] == ndx) {
							numNdx = i;
							break;
						}
					}
					selectObj.add(option, numNdx); // IE only
				}			
			}
		}
	}
}
