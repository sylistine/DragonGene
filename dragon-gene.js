/*
 * DragonGene gives you a simple starting place for class-like inheritance seen in other languages like C++ and Python
 * To create a class inheritance, simply call `.inherit()` on any DragonGene class w/ an (optional) object in JSON or JSLiteral Notation
 * Instantiate your new class by calling `new <ClassName>()`
 */
var DragonGene = function() {};

/*
 * Used for creating new Classes
 *
 * @param extensionProps {object} [optional] All of your new class properties, methods, etc.
 */
DragonGene.inherit = function(extensionProps) {
  var self = this,
    Class = function(){};

  // Static
  Class.inherit = self.inherit;

  // Instance
  Class.prototype = {};

  var prop;
  // Inherit props.
  for(prop in self.prototype) {
    Class.prototype[prop] = self.prototype[prop];
  }

  // Override props.
  for(prop in extensionProps) {
    Class.prototype[prop] = extensionProps[prop];
  }

  return Class;
};
