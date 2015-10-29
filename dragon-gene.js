var DragonGene;

(function() {

/**
 * DragonGene gives you a simple starting place for class-like inheritance seen
 * in other languages like C++ and Python.
 *
 * To create a new class, simply call `var Class = DragonGene.inherit()`
 * w/ an (optional) object in JSON or Literal Notation
 *
 * Instantiate your new class by calling `var classInstance = new Class()`
 * Inherit from your new class by calling `var SubClass = Class.inherit()`
 */
DragonGene = function() {};
DragonGene.label = "Progenitor";

/**
 * Used for creating new Classes
 *
 * @param {object} props [optional] new class properties, methods, etc.
 */
DragonGene.inherit = function(props) {
  "use strict";
  var self = this,
    Class  = function(){},
    prop;

  if (typeof props !== "object")
    props = null;

  // TODO add lineage
  // Remember your elders.
  // Class.parent = self;

  // Must prepare prototype so that we can inherit and override instance vars
  // (Not to mention instantiate the class.)
  Class.prototype = {};

  // Inherit static props.
  for (prop in self)
    Class[prop] = self[prop];

  // Inherit instance props.
  for (prop in self.prototype)
    Class.prototype[prop] = self.prototype[prop];

  if (props) {
    // Override static props.
    if (props.hasOwnProperty("static"))
      for (prop in props.static)
        Class[prop] = props.static[prop];

    // Override instance props.
    for (prop in props)
      if (prop !== 'static')
        Class.prototype[prop] = props[prop];
  }

  return Class;
};

}.call(this));

/**
 * Tests
 * when A receives inheritance from DragonGene, A should:
 *  - Have a copy of DragonGene and it's properties
 *  - Have new properties based on DragonGene as well, supplemented or added to
 *    by it's own properties
 *  - Be able to pass down the same information to it's children
 */
var aProps = {
    static: {
      label: "class A"
    },
    color: "red",
    eyes: "green"
  },
  bProps = {
      static: {
        label: "class B"
      },
    color: "purple"
  },
  cProps = {
      static: {
        label: "class C"
      },
    eyes: "yellow",
    mane: "burnt sienna"
  },
  A, B, C;
A = DragonGene.inherit(aProps);
B = A.inherit(bProps);
C = B.inherit(cProps);
console.dir(A);
console.dir(B);
console.dir(C);
