/**
 * DragonGene gives you a simple starting place for class-like inheritance seen
 * in other languages like C++ and Python
 * To create a class inheritance, simply call `.inherit()` on any DragonGene
 * class w/ an (optional) object in JSON or JSLiteral Notation
 * Instantiate your new class by calling `new <ClassName>()`
 */
var DragonGene = function() {};

/**
 * Used for creating new Classes
 *
 * @param props {object} [optional] new class properties, methods, etc.
 */
DragonGene.inherit = function(props) {
  var self = this,
    Class = function(){};

  // Must prepare prototype so that we can inherit and override instance vars
  // (Not to mention instantiate the class.)
  Class.prototype = {};

  var prop;

  // Inherit static props.
  for(prop in self)
    Class[prop] = self[prop];

  // Inherit instance props.
  for(prop in self.prototype)
    Class.prototype[prop] = self.prototype[prop];

  if(props !== void 0) {
    // Override static props.
    if(props.hasOwnProperty("static"))
      for(prop in props.static)
        Class[prop] = props.static[prop];

    // Override instance props.
    for(prop in props)
      if(prop !== 'static')
        Class.prototype[prop] = props[prop];
  }

  return Class;
};
