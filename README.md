# DragonGene
An incredibly simple but amazing code snippet that enables class-like inheritance in Javascript

DragonGene gives you a simple starting place for class-like inheritance similar to what can be seen in other languages like C++ and Python.

To create a new class, simply call `var Class = DragonGene.inherit()` w/ an (optional) object in JSON or Literal Notation
 
Instantiate your new class by calling `var classInstance = new Class()`
Inherit from your new class by calling `var SubClass = Class.inherit()`


## Example

Once you've included DragonGene somewhere in your project you can create new classes:

```
var A = DragonGene.inherit({
  static: {
      foo: "bar"
  },
  glip: "glop"
});
```

And instantiate the class:

```
var a = new A();
```

Now you'll have access to static members and instance members as you'd expect.

```
A.foo;  // "bar"
A.glip; // "undefined"
a.foo;  // "undefined"
a.glip  // "glop"
