1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

   Answer:The difference between getElementById and getElementsByClassName

**getElementById(id)**

1. Selects an element based on its unique id attribute.

2. Returns a single Element object if an element with the specified ID is found. If no element with that ID exists, it returns null.

3. IDs are intended to be unique within an HTML document. Therefore getElementById() will only ever return one element.

**getElementsByClassName(className)**

1. Selects elements based on their class attribute.

2. Returns an HTMLCollection (an array-like object) containing all elements that have the specified class name. If no elements with that class are found, it returns an empty HTMLCollection.

3. Multiple elements can share the same class name, so getElementsByClassName() can return zero, one, or many elements.

And the difference between getElementById and getElementsByClassName

**querySelector() Method**
The querySelector() method returns the first element within the document which matches a specified css selectors. If multiple elements occurs, then it returns the result for only the first matching element.

**querySelectorAll()**
The querySelectorAll() method returns all the elements within the document which matches the specified css selectors. It returns all the elements that matches with the selector in the form of a static NodeList object which is a collection of nodes.

2. How do you **create and insert a new element into the DOM**?

   Answer:
   1.At first I use document.createElement() to create a new HTML element then add content, attributes, and classes to this newly created element.
   2.Access the parentNode using id or class.
   3.Appends the new element as the last child of a specified parent element using appendChild method.

3. What is **Event Bubbling** and how does it work?

   Answer:Event bubbling is a mechanism in the DOM where an event that happens on a child element bubbles up to its parent elements.
   **How it work**
   When clicked an element The event is first handled by the target element.Then, the event bubbles up and is handled by the parent element.This continues until it reaches the document.

4. What is **Event Delegation** in JavaScript? Why is it useful?

   Answer:Event Delegation:Event delegation is a pattern in JavaScript where instead of adding event listeners to multiple child elements individually, you attach a single event listener to their parent element, and let event bubbling handle the rest.
   \*Event Delegation useful because it's increase performance,makes dynamic elements and keep cleaner code.

5. What is the difference between **preventDefault() and stopPropagation()** methods?

   Answer:preventDefault the default action of an element from happening.It does not stop the event from bubbling.

   stopPropagation() Stops the event bubbling phase.The event won’t continue to propagate to parent elements.
