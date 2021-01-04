(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@antv/l7')) :
  typeof define === 'function' && define.amd ? define(['exports', '@antv/l7'], factory) :
  (global = global || self, factory((global.L7 = global.L7 || {}, global.L7.District = {}), global.L7));
}(this, (function (exports, l7) { 'use strict';

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error) {
      reject(error);
      return;
    }

    if (info.done) {
      resolve(value);
    } else {
      Promise.resolve(value).then(_next, _throw);
    }
  }

  function _asyncToGenerator(fn) {
    return function () {
      var self = this,
          args = arguments;
      return new Promise(function (resolve, reject) {
        var gen = fn.apply(self, args);

        function _next(value) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
        }

        function _throw(err) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
        }

        _next(undefined);
      });
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();

    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
          result;

      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;

        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }

      return _possibleConstructorReturn(this, result);
    };
  }

  function _superPropBase(object, property) {
    while (!Object.prototype.hasOwnProperty.call(object, property)) {
      object = _getPrototypeOf(object);
      if (object === null) break;
    }

    return object;
  }

  function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
      _get = Reflect.get;
    } else {
      _get = function _get(target, property, receiver) {
        var base = _superPropBase(target, property);

        if (!base) return;
        var desc = Object.getOwnPropertyDescriptor(base, property);

        if (desc.get) {
          return desc.get.call(receiver);
        }

        return desc.value;
      };
    }

    return _get(target, property, receiver || target);
  }

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArrayLimit(arr, i) {
    if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  /**
   * Removes all key-value entries from the list cache.
   *
   * @private
   * @name clear
   * @memberOf ListCache
   */
  function listCacheClear() {
    this.__data__ = [];
    this.size = 0;
  }

  var _listCacheClear = listCacheClear;

  /**
   * Performs a
   * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
   * comparison between two values to determine if they are equivalent.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to compare.
   * @param {*} other The other value to compare.
   * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
   * @example
   *
   * var object = { 'a': 1 };
   * var other = { 'a': 1 };
   *
   * _.eq(object, object);
   * // => true
   *
   * _.eq(object, other);
   * // => false
   *
   * _.eq('a', 'a');
   * // => true
   *
   * _.eq('a', Object('a'));
   * // => false
   *
   * _.eq(NaN, NaN);
   * // => true
   */
  function eq(value, other) {
    return value === other || (value !== value && other !== other);
  }

  var eq_1 = eq;

  /**
   * Gets the index at which the `key` is found in `array` of key-value pairs.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} key The key to search for.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
  function assocIndexOf(array, key) {
    var length = array.length;
    while (length--) {
      if (eq_1(array[length][0], key)) {
        return length;
      }
    }
    return -1;
  }

  var _assocIndexOf = assocIndexOf;

  /** Used for built-in method references. */
  var arrayProto = Array.prototype;

  /** Built-in value references. */
  var splice = arrayProto.splice;

  /**
   * Removes `key` and its value from the list cache.
   *
   * @private
   * @name delete
   * @memberOf ListCache
   * @param {string} key The key of the value to remove.
   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
   */
  function listCacheDelete(key) {
    var data = this.__data__,
        index = _assocIndexOf(data, key);

    if (index < 0) {
      return false;
    }
    var lastIndex = data.length - 1;
    if (index == lastIndex) {
      data.pop();
    } else {
      splice.call(data, index, 1);
    }
    --this.size;
    return true;
  }

  var _listCacheDelete = listCacheDelete;

  /**
   * Gets the list cache value for `key`.
   *
   * @private
   * @name get
   * @memberOf ListCache
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */
  function listCacheGet(key) {
    var data = this.__data__,
        index = _assocIndexOf(data, key);

    return index < 0 ? undefined : data[index][1];
  }

  var _listCacheGet = listCacheGet;

  /**
   * Checks if a list cache value for `key` exists.
   *
   * @private
   * @name has
   * @memberOf ListCache
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  function listCacheHas(key) {
    return _assocIndexOf(this.__data__, key) > -1;
  }

  var _listCacheHas = listCacheHas;

  /**
   * Sets the list cache `key` to `value`.
   *
   * @private
   * @name set
   * @memberOf ListCache
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the list cache instance.
   */
  function listCacheSet(key, value) {
    var data = this.__data__,
        index = _assocIndexOf(data, key);

    if (index < 0) {
      ++this.size;
      data.push([key, value]);
    } else {
      data[index][1] = value;
    }
    return this;
  }

  var _listCacheSet = listCacheSet;

  /**
   * Creates an list cache object.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */
  function ListCache(entries) {
    var index = -1,
        length = entries == null ? 0 : entries.length;

    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }

  // Add methods to `ListCache`.
  ListCache.prototype.clear = _listCacheClear;
  ListCache.prototype['delete'] = _listCacheDelete;
  ListCache.prototype.get = _listCacheGet;
  ListCache.prototype.has = _listCacheHas;
  ListCache.prototype.set = _listCacheSet;

  var _ListCache = ListCache;

  /**
   * Removes all key-value entries from the stack.
   *
   * @private
   * @name clear
   * @memberOf Stack
   */
  function stackClear() {
    this.__data__ = new _ListCache;
    this.size = 0;
  }

  var _stackClear = stackClear;

  /**
   * Removes `key` and its value from the stack.
   *
   * @private
   * @name delete
   * @memberOf Stack
   * @param {string} key The key of the value to remove.
   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
   */
  function stackDelete(key) {
    var data = this.__data__,
        result = data['delete'](key);

    this.size = data.size;
    return result;
  }

  var _stackDelete = stackDelete;

  /**
   * Gets the stack value for `key`.
   *
   * @private
   * @name get
   * @memberOf Stack
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */
  function stackGet(key) {
    return this.__data__.get(key);
  }

  var _stackGet = stackGet;

  /**
   * Checks if a stack value for `key` exists.
   *
   * @private
   * @name has
   * @memberOf Stack
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  function stackHas(key) {
    return this.__data__.has(key);
  }

  var _stackHas = stackHas;

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  /** Detect free variable `global` from Node.js. */
  var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

  var _freeGlobal = freeGlobal;

  /** Detect free variable `self`. */
  var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

  /** Used as a reference to the global object. */
  var root = _freeGlobal || freeSelf || Function('return this')();

  var _root = root;

  /** Built-in value references. */
  var Symbol$1 = _root.Symbol;

  var _Symbol = Symbol$1;

  /** Used for built-in method references. */
  var objectProto = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty = objectProto.hasOwnProperty;

  /**
   * Used to resolve the
   * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
   * of values.
   */
  var nativeObjectToString = objectProto.toString;

  /** Built-in value references. */
  var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;

  /**
   * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
   *
   * @private
   * @param {*} value The value to query.
   * @returns {string} Returns the raw `toStringTag`.
   */
  function getRawTag(value) {
    var isOwn = hasOwnProperty.call(value, symToStringTag),
        tag = value[symToStringTag];

    try {
      value[symToStringTag] = undefined;
      var unmasked = true;
    } catch (e) {}

    var result = nativeObjectToString.call(value);
    if (unmasked) {
      if (isOwn) {
        value[symToStringTag] = tag;
      } else {
        delete value[symToStringTag];
      }
    }
    return result;
  }

  var _getRawTag = getRawTag;

  /** Used for built-in method references. */
  var objectProto$1 = Object.prototype;

  /**
   * Used to resolve the
   * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
   * of values.
   */
  var nativeObjectToString$1 = objectProto$1.toString;

  /**
   * Converts `value` to a string using `Object.prototype.toString`.
   *
   * @private
   * @param {*} value The value to convert.
   * @returns {string} Returns the converted string.
   */
  function objectToString(value) {
    return nativeObjectToString$1.call(value);
  }

  var _objectToString = objectToString;

  /** `Object#toString` result references. */
  var nullTag = '[object Null]',
      undefinedTag = '[object Undefined]';

  /** Built-in value references. */
  var symToStringTag$1 = _Symbol ? _Symbol.toStringTag : undefined;

  /**
   * The base implementation of `getTag` without fallbacks for buggy environments.
   *
   * @private
   * @param {*} value The value to query.
   * @returns {string} Returns the `toStringTag`.
   */
  function baseGetTag(value) {
    if (value == null) {
      return value === undefined ? undefinedTag : nullTag;
    }
    return (symToStringTag$1 && symToStringTag$1 in Object(value))
      ? _getRawTag(value)
      : _objectToString(value);
  }

  var _baseGetTag = baseGetTag;

  /**
   * Checks if `value` is the
   * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
   * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an object, else `false`.
   * @example
   *
   * _.isObject({});
   * // => true
   *
   * _.isObject([1, 2, 3]);
   * // => true
   *
   * _.isObject(_.noop);
   * // => true
   *
   * _.isObject(null);
   * // => false
   */
  function isObject(value) {
    var type = typeof value;
    return value != null && (type == 'object' || type == 'function');
  }

  var isObject_1 = isObject;

  /** `Object#toString` result references. */
  var asyncTag = '[object AsyncFunction]',
      funcTag = '[object Function]',
      genTag = '[object GeneratorFunction]',
      proxyTag = '[object Proxy]';

  /**
   * Checks if `value` is classified as a `Function` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a function, else `false`.
   * @example
   *
   * _.isFunction(_);
   * // => true
   *
   * _.isFunction(/abc/);
   * // => false
   */
  function isFunction(value) {
    if (!isObject_1(value)) {
      return false;
    }
    // The use of `Object#toString` avoids issues with the `typeof` operator
    // in Safari 9 which returns 'object' for typed arrays and other constructors.
    var tag = _baseGetTag(value);
    return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
  }

  var isFunction_1 = isFunction;

  /** Used to detect overreaching core-js shims. */
  var coreJsData = _root['__core-js_shared__'];

  var _coreJsData = coreJsData;

  /** Used to detect methods masquerading as native. */
  var maskSrcKey = (function() {
    var uid = /[^.]+$/.exec(_coreJsData && _coreJsData.keys && _coreJsData.keys.IE_PROTO || '');
    return uid ? ('Symbol(src)_1.' + uid) : '';
  }());

  /**
   * Checks if `func` has its source masked.
   *
   * @private
   * @param {Function} func The function to check.
   * @returns {boolean} Returns `true` if `func` is masked, else `false`.
   */
  function isMasked(func) {
    return !!maskSrcKey && (maskSrcKey in func);
  }

  var _isMasked = isMasked;

  /** Used for built-in method references. */
  var funcProto = Function.prototype;

  /** Used to resolve the decompiled source of functions. */
  var funcToString = funcProto.toString;

  /**
   * Converts `func` to its source code.
   *
   * @private
   * @param {Function} func The function to convert.
   * @returns {string} Returns the source code.
   */
  function toSource(func) {
    if (func != null) {
      try {
        return funcToString.call(func);
      } catch (e) {}
      try {
        return (func + '');
      } catch (e) {}
    }
    return '';
  }

  var _toSource = toSource;

  /**
   * Used to match `RegExp`
   * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
   */
  var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

  /** Used to detect host constructors (Safari). */
  var reIsHostCtor = /^\[object .+?Constructor\]$/;

  /** Used for built-in method references. */
  var funcProto$1 = Function.prototype,
      objectProto$2 = Object.prototype;

  /** Used to resolve the decompiled source of functions. */
  var funcToString$1 = funcProto$1.toString;

  /** Used to check objects for own properties. */
  var hasOwnProperty$1 = objectProto$2.hasOwnProperty;

  /** Used to detect if a method is native. */
  var reIsNative = RegExp('^' +
    funcToString$1.call(hasOwnProperty$1).replace(reRegExpChar, '\\$&')
    .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
  );

  /**
   * The base implementation of `_.isNative` without bad shim checks.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a native function,
   *  else `false`.
   */
  function baseIsNative(value) {
    if (!isObject_1(value) || _isMasked(value)) {
      return false;
    }
    var pattern = isFunction_1(value) ? reIsNative : reIsHostCtor;
    return pattern.test(_toSource(value));
  }

  var _baseIsNative = baseIsNative;

  /**
   * Gets the value at `key` of `object`.
   *
   * @private
   * @param {Object} [object] The object to query.
   * @param {string} key The key of the property to get.
   * @returns {*} Returns the property value.
   */
  function getValue(object, key) {
    return object == null ? undefined : object[key];
  }

  var _getValue = getValue;

  /**
   * Gets the native function at `key` of `object`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {string} key The key of the method to get.
   * @returns {*} Returns the function if it's native, else `undefined`.
   */
  function getNative(object, key) {
    var value = _getValue(object, key);
    return _baseIsNative(value) ? value : undefined;
  }

  var _getNative = getNative;

  /* Built-in method references that are verified to be native. */
  var Map = _getNative(_root, 'Map');

  var _Map = Map;

  /* Built-in method references that are verified to be native. */
  var nativeCreate = _getNative(Object, 'create');

  var _nativeCreate = nativeCreate;

  /**
   * Removes all key-value entries from the hash.
   *
   * @private
   * @name clear
   * @memberOf Hash
   */
  function hashClear() {
    this.__data__ = _nativeCreate ? _nativeCreate(null) : {};
    this.size = 0;
  }

  var _hashClear = hashClear;

  /**
   * Removes `key` and its value from the hash.
   *
   * @private
   * @name delete
   * @memberOf Hash
   * @param {Object} hash The hash to modify.
   * @param {string} key The key of the value to remove.
   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
   */
  function hashDelete(key) {
    var result = this.has(key) && delete this.__data__[key];
    this.size -= result ? 1 : 0;
    return result;
  }

  var _hashDelete = hashDelete;

  /** Used to stand-in for `undefined` hash values. */
  var HASH_UNDEFINED = '__lodash_hash_undefined__';

  /** Used for built-in method references. */
  var objectProto$3 = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty$2 = objectProto$3.hasOwnProperty;

  /**
   * Gets the hash value for `key`.
   *
   * @private
   * @name get
   * @memberOf Hash
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */
  function hashGet(key) {
    var data = this.__data__;
    if (_nativeCreate) {
      var result = data[key];
      return result === HASH_UNDEFINED ? undefined : result;
    }
    return hasOwnProperty$2.call(data, key) ? data[key] : undefined;
  }

  var _hashGet = hashGet;

  /** Used for built-in method references. */
  var objectProto$4 = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty$3 = objectProto$4.hasOwnProperty;

  /**
   * Checks if a hash value for `key` exists.
   *
   * @private
   * @name has
   * @memberOf Hash
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  function hashHas(key) {
    var data = this.__data__;
    return _nativeCreate ? (data[key] !== undefined) : hasOwnProperty$3.call(data, key);
  }

  var _hashHas = hashHas;

  /** Used to stand-in for `undefined` hash values. */
  var HASH_UNDEFINED$1 = '__lodash_hash_undefined__';

  /**
   * Sets the hash `key` to `value`.
   *
   * @private
   * @name set
   * @memberOf Hash
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the hash instance.
   */
  function hashSet(key, value) {
    var data = this.__data__;
    this.size += this.has(key) ? 0 : 1;
    data[key] = (_nativeCreate && value === undefined) ? HASH_UNDEFINED$1 : value;
    return this;
  }

  var _hashSet = hashSet;

  /**
   * Creates a hash object.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */
  function Hash(entries) {
    var index = -1,
        length = entries == null ? 0 : entries.length;

    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }

  // Add methods to `Hash`.
  Hash.prototype.clear = _hashClear;
  Hash.prototype['delete'] = _hashDelete;
  Hash.prototype.get = _hashGet;
  Hash.prototype.has = _hashHas;
  Hash.prototype.set = _hashSet;

  var _Hash = Hash;

  /**
   * Removes all key-value entries from the map.
   *
   * @private
   * @name clear
   * @memberOf MapCache
   */
  function mapCacheClear() {
    this.size = 0;
    this.__data__ = {
      'hash': new _Hash,
      'map': new (_Map || _ListCache),
      'string': new _Hash
    };
  }

  var _mapCacheClear = mapCacheClear;

  /**
   * Checks if `value` is suitable for use as unique object key.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
   */
  function isKeyable(value) {
    var type = typeof value;
    return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
      ? (value !== '__proto__')
      : (value === null);
  }

  var _isKeyable = isKeyable;

  /**
   * Gets the data for `map`.
   *
   * @private
   * @param {Object} map The map to query.
   * @param {string} key The reference key.
   * @returns {*} Returns the map data.
   */
  function getMapData(map, key) {
    var data = map.__data__;
    return _isKeyable(key)
      ? data[typeof key == 'string' ? 'string' : 'hash']
      : data.map;
  }

  var _getMapData = getMapData;

  /**
   * Removes `key` and its value from the map.
   *
   * @private
   * @name delete
   * @memberOf MapCache
   * @param {string} key The key of the value to remove.
   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
   */
  function mapCacheDelete(key) {
    var result = _getMapData(this, key)['delete'](key);
    this.size -= result ? 1 : 0;
    return result;
  }

  var _mapCacheDelete = mapCacheDelete;

  /**
   * Gets the map value for `key`.
   *
   * @private
   * @name get
   * @memberOf MapCache
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */
  function mapCacheGet(key) {
    return _getMapData(this, key).get(key);
  }

  var _mapCacheGet = mapCacheGet;

  /**
   * Checks if a map value for `key` exists.
   *
   * @private
   * @name has
   * @memberOf MapCache
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
  function mapCacheHas(key) {
    return _getMapData(this, key).has(key);
  }

  var _mapCacheHas = mapCacheHas;

  /**
   * Sets the map `key` to `value`.
   *
   * @private
   * @name set
   * @memberOf MapCache
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the map cache instance.
   */
  function mapCacheSet(key, value) {
    var data = _getMapData(this, key),
        size = data.size;

    data.set(key, value);
    this.size += data.size == size ? 0 : 1;
    return this;
  }

  var _mapCacheSet = mapCacheSet;

  /**
   * Creates a map cache object to store key-value pairs.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */
  function MapCache(entries) {
    var index = -1,
        length = entries == null ? 0 : entries.length;

    this.clear();
    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }

  // Add methods to `MapCache`.
  MapCache.prototype.clear = _mapCacheClear;
  MapCache.prototype['delete'] = _mapCacheDelete;
  MapCache.prototype.get = _mapCacheGet;
  MapCache.prototype.has = _mapCacheHas;
  MapCache.prototype.set = _mapCacheSet;

  var _MapCache = MapCache;

  /** Used as the size to enable large array optimizations. */
  var LARGE_ARRAY_SIZE = 200;

  /**
   * Sets the stack `key` to `value`.
   *
   * @private
   * @name set
   * @memberOf Stack
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the stack cache instance.
   */
  function stackSet(key, value) {
    var data = this.__data__;
    if (data instanceof _ListCache) {
      var pairs = data.__data__;
      if (!_Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
        pairs.push([key, value]);
        this.size = ++data.size;
        return this;
      }
      data = this.__data__ = new _MapCache(pairs);
    }
    data.set(key, value);
    this.size = data.size;
    return this;
  }

  var _stackSet = stackSet;

  /**
   * Creates a stack cache object to store key-value pairs.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */
  function Stack(entries) {
    var data = this.__data__ = new _ListCache(entries);
    this.size = data.size;
  }

  // Add methods to `Stack`.
  Stack.prototype.clear = _stackClear;
  Stack.prototype['delete'] = _stackDelete;
  Stack.prototype.get = _stackGet;
  Stack.prototype.has = _stackHas;
  Stack.prototype.set = _stackSet;

  var _Stack = Stack;

  var defineProperty = (function() {
    try {
      var func = _getNative(Object, 'defineProperty');
      func({}, '', {});
      return func;
    } catch (e) {}
  }());

  var _defineProperty$1 = defineProperty;

  /**
   * The base implementation of `assignValue` and `assignMergeValue` without
   * value checks.
   *
   * @private
   * @param {Object} object The object to modify.
   * @param {string} key The key of the property to assign.
   * @param {*} value The value to assign.
   */
  function baseAssignValue(object, key, value) {
    if (key == '__proto__' && _defineProperty$1) {
      _defineProperty$1(object, key, {
        'configurable': true,
        'enumerable': true,
        'value': value,
        'writable': true
      });
    } else {
      object[key] = value;
    }
  }

  var _baseAssignValue = baseAssignValue;

  /**
   * This function is like `assignValue` except that it doesn't assign
   * `undefined` values.
   *
   * @private
   * @param {Object} object The object to modify.
   * @param {string} key The key of the property to assign.
   * @param {*} value The value to assign.
   */
  function assignMergeValue(object, key, value) {
    if ((value !== undefined && !eq_1(object[key], value)) ||
        (value === undefined && !(key in object))) {
      _baseAssignValue(object, key, value);
    }
  }

  var _assignMergeValue = assignMergeValue;

  /**
   * Creates a base function for methods like `_.forIn` and `_.forOwn`.
   *
   * @private
   * @param {boolean} [fromRight] Specify iterating from right to left.
   * @returns {Function} Returns the new base function.
   */
  function createBaseFor(fromRight) {
    return function(object, iteratee, keysFunc) {
      var index = -1,
          iterable = Object(object),
          props = keysFunc(object),
          length = props.length;

      while (length--) {
        var key = props[fromRight ? length : ++index];
        if (iteratee(iterable[key], key, iterable) === false) {
          break;
        }
      }
      return object;
    };
  }

  var _createBaseFor = createBaseFor;

  /**
   * The base implementation of `baseForOwn` which iterates over `object`
   * properties returned by `keysFunc` and invokes `iteratee` for each property.
   * Iteratee functions may exit iteration early by explicitly returning `false`.
   *
   * @private
   * @param {Object} object The object to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @param {Function} keysFunc The function to get the keys of `object`.
   * @returns {Object} Returns `object`.
   */
  var baseFor = _createBaseFor();

  var _baseFor = baseFor;

  var _cloneBuffer = createCommonjsModule(function (module, exports) {
  /** Detect free variable `exports`. */
  var freeExports =  exports && !exports.nodeType && exports;

  /** Detect free variable `module`. */
  var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

  /** Detect the popular CommonJS extension `module.exports`. */
  var moduleExports = freeModule && freeModule.exports === freeExports;

  /** Built-in value references. */
  var Buffer = moduleExports ? _root.Buffer : undefined,
      allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;

  /**
   * Creates a clone of  `buffer`.
   *
   * @private
   * @param {Buffer} buffer The buffer to clone.
   * @param {boolean} [isDeep] Specify a deep clone.
   * @returns {Buffer} Returns the cloned buffer.
   */
  function cloneBuffer(buffer, isDeep) {
    if (isDeep) {
      return buffer.slice();
    }
    var length = buffer.length,
        result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

    buffer.copy(result);
    return result;
  }

  module.exports = cloneBuffer;
  });

  /** Built-in value references. */
  var Uint8Array$1 = _root.Uint8Array;

  var _Uint8Array = Uint8Array$1;

  /**
   * Creates a clone of `arrayBuffer`.
   *
   * @private
   * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
   * @returns {ArrayBuffer} Returns the cloned array buffer.
   */
  function cloneArrayBuffer(arrayBuffer) {
    var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
    new _Uint8Array(result).set(new _Uint8Array(arrayBuffer));
    return result;
  }

  var _cloneArrayBuffer = cloneArrayBuffer;

  /**
   * Creates a clone of `typedArray`.
   *
   * @private
   * @param {Object} typedArray The typed array to clone.
   * @param {boolean} [isDeep] Specify a deep clone.
   * @returns {Object} Returns the cloned typed array.
   */
  function cloneTypedArray(typedArray, isDeep) {
    var buffer = isDeep ? _cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
    return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
  }

  var _cloneTypedArray = cloneTypedArray;

  /**
   * Copies the values of `source` to `array`.
   *
   * @private
   * @param {Array} source The array to copy values from.
   * @param {Array} [array=[]] The array to copy values to.
   * @returns {Array} Returns `array`.
   */
  function copyArray(source, array) {
    var index = -1,
        length = source.length;

    array || (array = Array(length));
    while (++index < length) {
      array[index] = source[index];
    }
    return array;
  }

  var _copyArray = copyArray;

  /** Built-in value references. */
  var objectCreate = Object.create;

  /**
   * The base implementation of `_.create` without support for assigning
   * properties to the created object.
   *
   * @private
   * @param {Object} proto The object to inherit from.
   * @returns {Object} Returns the new object.
   */
  var baseCreate = (function() {
    function object() {}
    return function(proto) {
      if (!isObject_1(proto)) {
        return {};
      }
      if (objectCreate) {
        return objectCreate(proto);
      }
      object.prototype = proto;
      var result = new object;
      object.prototype = undefined;
      return result;
    };
  }());

  var _baseCreate = baseCreate;

  /**
   * Creates a unary function that invokes `func` with its argument transformed.
   *
   * @private
   * @param {Function} func The function to wrap.
   * @param {Function} transform The argument transform.
   * @returns {Function} Returns the new function.
   */
  function overArg(func, transform) {
    return function(arg) {
      return func(transform(arg));
    };
  }

  var _overArg = overArg;

  /** Built-in value references. */
  var getPrototype = _overArg(Object.getPrototypeOf, Object);

  var _getPrototype = getPrototype;

  /** Used for built-in method references. */
  var objectProto$5 = Object.prototype;

  /**
   * Checks if `value` is likely a prototype object.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
   */
  function isPrototype(value) {
    var Ctor = value && value.constructor,
        proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto$5;

    return value === proto;
  }

  var _isPrototype = isPrototype;

  /**
   * Initializes an object clone.
   *
   * @private
   * @param {Object} object The object to clone.
   * @returns {Object} Returns the initialized clone.
   */
  function initCloneObject(object) {
    return (typeof object.constructor == 'function' && !_isPrototype(object))
      ? _baseCreate(_getPrototype(object))
      : {};
  }

  var _initCloneObject = initCloneObject;

  /**
   * Checks if `value` is object-like. A value is object-like if it's not `null`
   * and has a `typeof` result of "object".
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
   * @example
   *
   * _.isObjectLike({});
   * // => true
   *
   * _.isObjectLike([1, 2, 3]);
   * // => true
   *
   * _.isObjectLike(_.noop);
   * // => false
   *
   * _.isObjectLike(null);
   * // => false
   */
  function isObjectLike(value) {
    return value != null && typeof value == 'object';
  }

  var isObjectLike_1 = isObjectLike;

  /** `Object#toString` result references. */
  var argsTag = '[object Arguments]';

  /**
   * The base implementation of `_.isArguments`.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an `arguments` object,
   */
  function baseIsArguments(value) {
    return isObjectLike_1(value) && _baseGetTag(value) == argsTag;
  }

  var _baseIsArguments = baseIsArguments;

  /** Used for built-in method references. */
  var objectProto$6 = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty$4 = objectProto$6.hasOwnProperty;

  /** Built-in value references. */
  var propertyIsEnumerable = objectProto$6.propertyIsEnumerable;

  /**
   * Checks if `value` is likely an `arguments` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an `arguments` object,
   *  else `false`.
   * @example
   *
   * _.isArguments(function() { return arguments; }());
   * // => true
   *
   * _.isArguments([1, 2, 3]);
   * // => false
   */
  var isArguments = _baseIsArguments(function() { return arguments; }()) ? _baseIsArguments : function(value) {
    return isObjectLike_1(value) && hasOwnProperty$4.call(value, 'callee') &&
      !propertyIsEnumerable.call(value, 'callee');
  };

  var isArguments_1 = isArguments;

  /**
   * Checks if `value` is classified as an `Array` object.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an array, else `false`.
   * @example
   *
   * _.isArray([1, 2, 3]);
   * // => true
   *
   * _.isArray(document.body.children);
   * // => false
   *
   * _.isArray('abc');
   * // => false
   *
   * _.isArray(_.noop);
   * // => false
   */
  var isArray = Array.isArray;

  var isArray_1 = isArray;

  /** Used as references for various `Number` constants. */
  var MAX_SAFE_INTEGER = 9007199254740991;

  /**
   * Checks if `value` is a valid array-like length.
   *
   * **Note:** This method is loosely based on
   * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
   * @example
   *
   * _.isLength(3);
   * // => true
   *
   * _.isLength(Number.MIN_VALUE);
   * // => false
   *
   * _.isLength(Infinity);
   * // => false
   *
   * _.isLength('3');
   * // => false
   */
  function isLength(value) {
    return typeof value == 'number' &&
      value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
  }

  var isLength_1 = isLength;

  /**
   * Checks if `value` is array-like. A value is considered array-like if it's
   * not a function and has a `value.length` that's an integer greater than or
   * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
   * @example
   *
   * _.isArrayLike([1, 2, 3]);
   * // => true
   *
   * _.isArrayLike(document.body.children);
   * // => true
   *
   * _.isArrayLike('abc');
   * // => true
   *
   * _.isArrayLike(_.noop);
   * // => false
   */
  function isArrayLike(value) {
    return value != null && isLength_1(value.length) && !isFunction_1(value);
  }

  var isArrayLike_1 = isArrayLike;

  /**
   * This method is like `_.isArrayLike` except that it also checks if `value`
   * is an object.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an array-like object,
   *  else `false`.
   * @example
   *
   * _.isArrayLikeObject([1, 2, 3]);
   * // => true
   *
   * _.isArrayLikeObject(document.body.children);
   * // => true
   *
   * _.isArrayLikeObject('abc');
   * // => false
   *
   * _.isArrayLikeObject(_.noop);
   * // => false
   */
  function isArrayLikeObject(value) {
    return isObjectLike_1(value) && isArrayLike_1(value);
  }

  var isArrayLikeObject_1 = isArrayLikeObject;

  /**
   * This method returns `false`.
   *
   * @static
   * @memberOf _
   * @since 4.13.0
   * @category Util
   * @returns {boolean} Returns `false`.
   * @example
   *
   * _.times(2, _.stubFalse);
   * // => [false, false]
   */
  function stubFalse() {
    return false;
  }

  var stubFalse_1 = stubFalse;

  var isBuffer_1 = createCommonjsModule(function (module, exports) {
  /** Detect free variable `exports`. */
  var freeExports =  exports && !exports.nodeType && exports;

  /** Detect free variable `module`. */
  var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

  /** Detect the popular CommonJS extension `module.exports`. */
  var moduleExports = freeModule && freeModule.exports === freeExports;

  /** Built-in value references. */
  var Buffer = moduleExports ? _root.Buffer : undefined;

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

  /**
   * Checks if `value` is a buffer.
   *
   * @static
   * @memberOf _
   * @since 4.3.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
   * @example
   *
   * _.isBuffer(new Buffer(2));
   * // => true
   *
   * _.isBuffer(new Uint8Array(2));
   * // => false
   */
  var isBuffer = nativeIsBuffer || stubFalse_1;

  module.exports = isBuffer;
  });

  /** `Object#toString` result references. */
  var objectTag = '[object Object]';

  /** Used for built-in method references. */
  var funcProto$2 = Function.prototype,
      objectProto$7 = Object.prototype;

  /** Used to resolve the decompiled source of functions. */
  var funcToString$2 = funcProto$2.toString;

  /** Used to check objects for own properties. */
  var hasOwnProperty$5 = objectProto$7.hasOwnProperty;

  /** Used to infer the `Object` constructor. */
  var objectCtorString = funcToString$2.call(Object);

  /**
   * Checks if `value` is a plain object, that is, an object created by the
   * `Object` constructor or one with a `[[Prototype]]` of `null`.
   *
   * @static
   * @memberOf _
   * @since 0.8.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
   * @example
   *
   * function Foo() {
   *   this.a = 1;
   * }
   *
   * _.isPlainObject(new Foo);
   * // => false
   *
   * _.isPlainObject([1, 2, 3]);
   * // => false
   *
   * _.isPlainObject({ 'x': 0, 'y': 0 });
   * // => true
   *
   * _.isPlainObject(Object.create(null));
   * // => true
   */
  function isPlainObject(value) {
    if (!isObjectLike_1(value) || _baseGetTag(value) != objectTag) {
      return false;
    }
    var proto = _getPrototype(value);
    if (proto === null) {
      return true;
    }
    var Ctor = hasOwnProperty$5.call(proto, 'constructor') && proto.constructor;
    return typeof Ctor == 'function' && Ctor instanceof Ctor &&
      funcToString$2.call(Ctor) == objectCtorString;
  }

  var isPlainObject_1 = isPlainObject;

  /** `Object#toString` result references. */
  var argsTag$1 = '[object Arguments]',
      arrayTag = '[object Array]',
      boolTag = '[object Boolean]',
      dateTag = '[object Date]',
      errorTag = '[object Error]',
      funcTag$1 = '[object Function]',
      mapTag = '[object Map]',
      numberTag = '[object Number]',
      objectTag$1 = '[object Object]',
      regexpTag = '[object RegExp]',
      setTag = '[object Set]',
      stringTag = '[object String]',
      weakMapTag = '[object WeakMap]';

  var arrayBufferTag = '[object ArrayBuffer]',
      dataViewTag = '[object DataView]',
      float32Tag = '[object Float32Array]',
      float64Tag = '[object Float64Array]',
      int8Tag = '[object Int8Array]',
      int16Tag = '[object Int16Array]',
      int32Tag = '[object Int32Array]',
      uint8Tag = '[object Uint8Array]',
      uint8ClampedTag = '[object Uint8ClampedArray]',
      uint16Tag = '[object Uint16Array]',
      uint32Tag = '[object Uint32Array]';

  /** Used to identify `toStringTag` values of typed arrays. */
  var typedArrayTags = {};
  typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
  typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
  typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
  typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
  typedArrayTags[uint32Tag] = true;
  typedArrayTags[argsTag$1] = typedArrayTags[arrayTag] =
  typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
  typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
  typedArrayTags[errorTag] = typedArrayTags[funcTag$1] =
  typedArrayTags[mapTag] = typedArrayTags[numberTag] =
  typedArrayTags[objectTag$1] = typedArrayTags[regexpTag] =
  typedArrayTags[setTag] = typedArrayTags[stringTag] =
  typedArrayTags[weakMapTag] = false;

  /**
   * The base implementation of `_.isTypedArray` without Node.js optimizations.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
   */
  function baseIsTypedArray(value) {
    return isObjectLike_1(value) &&
      isLength_1(value.length) && !!typedArrayTags[_baseGetTag(value)];
  }

  var _baseIsTypedArray = baseIsTypedArray;

  /**
   * The base implementation of `_.unary` without support for storing metadata.
   *
   * @private
   * @param {Function} func The function to cap arguments for.
   * @returns {Function} Returns the new capped function.
   */
  function baseUnary(func) {
    return function(value) {
      return func(value);
    };
  }

  var _baseUnary = baseUnary;

  var _nodeUtil = createCommonjsModule(function (module, exports) {
  /** Detect free variable `exports`. */
  var freeExports =  exports && !exports.nodeType && exports;

  /** Detect free variable `module`. */
  var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

  /** Detect the popular CommonJS extension `module.exports`. */
  var moduleExports = freeModule && freeModule.exports === freeExports;

  /** Detect free variable `process` from Node.js. */
  var freeProcess = moduleExports && _freeGlobal.process;

  /** Used to access faster Node.js helpers. */
  var nodeUtil = (function() {
    try {
      // Use `util.types` for Node.js 10+.
      var types = freeModule && freeModule.require && freeModule.require('util').types;

      if (types) {
        return types;
      }

      // Legacy `process.binding('util')` for Node.js < 10.
      return freeProcess && freeProcess.binding && freeProcess.binding('util');
    } catch (e) {}
  }());

  module.exports = nodeUtil;
  });

  /* Node.js helper references. */
  var nodeIsTypedArray = _nodeUtil && _nodeUtil.isTypedArray;

  /**
   * Checks if `value` is classified as a typed array.
   *
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
   * @example
   *
   * _.isTypedArray(new Uint8Array);
   * // => true
   *
   * _.isTypedArray([]);
   * // => false
   */
  var isTypedArray = nodeIsTypedArray ? _baseUnary(nodeIsTypedArray) : _baseIsTypedArray;

  var isTypedArray_1 = isTypedArray;

  /**
   * Gets the value at `key`, unless `key` is "__proto__" or "constructor".
   *
   * @private
   * @param {Object} object The object to query.
   * @param {string} key The key of the property to get.
   * @returns {*} Returns the property value.
   */
  function safeGet(object, key) {
    if (key === 'constructor' && typeof object[key] === 'function') {
      return;
    }

    if (key == '__proto__') {
      return;
    }

    return object[key];
  }

  var _safeGet = safeGet;

  /** Used for built-in method references. */
  var objectProto$8 = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty$6 = objectProto$8.hasOwnProperty;

  /**
   * Assigns `value` to `key` of `object` if the existing value is not equivalent
   * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
   * for equality comparisons.
   *
   * @private
   * @param {Object} object The object to modify.
   * @param {string} key The key of the property to assign.
   * @param {*} value The value to assign.
   */
  function assignValue(object, key, value) {
    var objValue = object[key];
    if (!(hasOwnProperty$6.call(object, key) && eq_1(objValue, value)) ||
        (value === undefined && !(key in object))) {
      _baseAssignValue(object, key, value);
    }
  }

  var _assignValue = assignValue;

  /**
   * Copies properties of `source` to `object`.
   *
   * @private
   * @param {Object} source The object to copy properties from.
   * @param {Array} props The property identifiers to copy.
   * @param {Object} [object={}] The object to copy properties to.
   * @param {Function} [customizer] The function to customize copied values.
   * @returns {Object} Returns `object`.
   */
  function copyObject(source, props, object, customizer) {
    var isNew = !object;
    object || (object = {});

    var index = -1,
        length = props.length;

    while (++index < length) {
      var key = props[index];

      var newValue = customizer
        ? customizer(object[key], source[key], key, object, source)
        : undefined;

      if (newValue === undefined) {
        newValue = source[key];
      }
      if (isNew) {
        _baseAssignValue(object, key, newValue);
      } else {
        _assignValue(object, key, newValue);
      }
    }
    return object;
  }

  var _copyObject = copyObject;

  /**
   * The base implementation of `_.times` without support for iteratee shorthands
   * or max array length checks.
   *
   * @private
   * @param {number} n The number of times to invoke `iteratee`.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns the array of results.
   */
  function baseTimes(n, iteratee) {
    var index = -1,
        result = Array(n);

    while (++index < n) {
      result[index] = iteratee(index);
    }
    return result;
  }

  var _baseTimes = baseTimes;

  /** Used as references for various `Number` constants. */
  var MAX_SAFE_INTEGER$1 = 9007199254740991;

  /** Used to detect unsigned integer values. */
  var reIsUint = /^(?:0|[1-9]\d*)$/;

  /**
   * Checks if `value` is a valid array-like index.
   *
   * @private
   * @param {*} value The value to check.
   * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
   * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
   */
  function isIndex(value, length) {
    var type = typeof value;
    length = length == null ? MAX_SAFE_INTEGER$1 : length;

    return !!length &&
      (type == 'number' ||
        (type != 'symbol' && reIsUint.test(value))) &&
          (value > -1 && value % 1 == 0 && value < length);
  }

  var _isIndex = isIndex;

  /** Used for built-in method references. */
  var objectProto$9 = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty$7 = objectProto$9.hasOwnProperty;

  /**
   * Creates an array of the enumerable property names of the array-like `value`.
   *
   * @private
   * @param {*} value The value to query.
   * @param {boolean} inherited Specify returning inherited property names.
   * @returns {Array} Returns the array of property names.
   */
  function arrayLikeKeys(value, inherited) {
    var isArr = isArray_1(value),
        isArg = !isArr && isArguments_1(value),
        isBuff = !isArr && !isArg && isBuffer_1(value),
        isType = !isArr && !isArg && !isBuff && isTypedArray_1(value),
        skipIndexes = isArr || isArg || isBuff || isType,
        result = skipIndexes ? _baseTimes(value.length, String) : [],
        length = result.length;

    for (var key in value) {
      if ((inherited || hasOwnProperty$7.call(value, key)) &&
          !(skipIndexes && (
             // Safari 9 has enumerable `arguments.length` in strict mode.
             key == 'length' ||
             // Node.js 0.10 has enumerable non-index properties on buffers.
             (isBuff && (key == 'offset' || key == 'parent')) ||
             // PhantomJS 2 has enumerable non-index properties on typed arrays.
             (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
             // Skip index properties.
             _isIndex(key, length)
          ))) {
        result.push(key);
      }
    }
    return result;
  }

  var _arrayLikeKeys = arrayLikeKeys;

  /**
   * This function is like
   * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
   * except that it includes inherited enumerable properties.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names.
   */
  function nativeKeysIn(object) {
    var result = [];
    if (object != null) {
      for (var key in Object(object)) {
        result.push(key);
      }
    }
    return result;
  }

  var _nativeKeysIn = nativeKeysIn;

  /** Used for built-in method references. */
  var objectProto$a = Object.prototype;

  /** Used to check objects for own properties. */
  var hasOwnProperty$8 = objectProto$a.hasOwnProperty;

  /**
   * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names.
   */
  function baseKeysIn(object) {
    if (!isObject_1(object)) {
      return _nativeKeysIn(object);
    }
    var isProto = _isPrototype(object),
        result = [];

    for (var key in object) {
      if (!(key == 'constructor' && (isProto || !hasOwnProperty$8.call(object, key)))) {
        result.push(key);
      }
    }
    return result;
  }

  var _baseKeysIn = baseKeysIn;

  /**
   * Creates an array of the own and inherited enumerable property names of `object`.
   *
   * **Note:** Non-object values are coerced to objects.
   *
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category Object
   * @param {Object} object The object to query.
   * @returns {Array} Returns the array of property names.
   * @example
   *
   * function Foo() {
   *   this.a = 1;
   *   this.b = 2;
   * }
   *
   * Foo.prototype.c = 3;
   *
   * _.keysIn(new Foo);
   * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
   */
  function keysIn(object) {
    return isArrayLike_1(object) ? _arrayLikeKeys(object, true) : _baseKeysIn(object);
  }

  var keysIn_1 = keysIn;

  /**
   * Converts `value` to a plain object flattening inherited enumerable string
   * keyed properties of `value` to own properties of the plain object.
   *
   * @static
   * @memberOf _
   * @since 3.0.0
   * @category Lang
   * @param {*} value The value to convert.
   * @returns {Object} Returns the converted plain object.
   * @example
   *
   * function Foo() {
   *   this.b = 2;
   * }
   *
   * Foo.prototype.c = 3;
   *
   * _.assign({ 'a': 1 }, new Foo);
   * // => { 'a': 1, 'b': 2 }
   *
   * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
   * // => { 'a': 1, 'b': 2, 'c': 3 }
   */
  function toPlainObject(value) {
    return _copyObject(value, keysIn_1(value));
  }

  var toPlainObject_1 = toPlainObject;

  /**
   * A specialized version of `baseMerge` for arrays and objects which performs
   * deep merges and tracks traversed objects enabling objects with circular
   * references to be merged.
   *
   * @private
   * @param {Object} object The destination object.
   * @param {Object} source The source object.
   * @param {string} key The key of the value to merge.
   * @param {number} srcIndex The index of `source`.
   * @param {Function} mergeFunc The function to merge values.
   * @param {Function} [customizer] The function to customize assigned values.
   * @param {Object} [stack] Tracks traversed source values and their merged
   *  counterparts.
   */
  function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
    var objValue = _safeGet(object, key),
        srcValue = _safeGet(source, key),
        stacked = stack.get(srcValue);

    if (stacked) {
      _assignMergeValue(object, key, stacked);
      return;
    }
    var newValue = customizer
      ? customizer(objValue, srcValue, (key + ''), object, source, stack)
      : undefined;

    var isCommon = newValue === undefined;

    if (isCommon) {
      var isArr = isArray_1(srcValue),
          isBuff = !isArr && isBuffer_1(srcValue),
          isTyped = !isArr && !isBuff && isTypedArray_1(srcValue);

      newValue = srcValue;
      if (isArr || isBuff || isTyped) {
        if (isArray_1(objValue)) {
          newValue = objValue;
        }
        else if (isArrayLikeObject_1(objValue)) {
          newValue = _copyArray(objValue);
        }
        else if (isBuff) {
          isCommon = false;
          newValue = _cloneBuffer(srcValue, true);
        }
        else if (isTyped) {
          isCommon = false;
          newValue = _cloneTypedArray(srcValue, true);
        }
        else {
          newValue = [];
        }
      }
      else if (isPlainObject_1(srcValue) || isArguments_1(srcValue)) {
        newValue = objValue;
        if (isArguments_1(objValue)) {
          newValue = toPlainObject_1(objValue);
        }
        else if (!isObject_1(objValue) || isFunction_1(objValue)) {
          newValue = _initCloneObject(srcValue);
        }
      }
      else {
        isCommon = false;
      }
    }
    if (isCommon) {
      // Recursively merge objects and arrays (susceptible to call stack limits).
      stack.set(srcValue, newValue);
      mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
      stack['delete'](srcValue);
    }
    _assignMergeValue(object, key, newValue);
  }

  var _baseMergeDeep = baseMergeDeep;

  /**
   * The base implementation of `_.merge` without support for multiple sources.
   *
   * @private
   * @param {Object} object The destination object.
   * @param {Object} source The source object.
   * @param {number} srcIndex The index of `source`.
   * @param {Function} [customizer] The function to customize merged values.
   * @param {Object} [stack] Tracks traversed source values and their merged
   *  counterparts.
   */
  function baseMerge(object, source, srcIndex, customizer, stack) {
    if (object === source) {
      return;
    }
    _baseFor(source, function(srcValue, key) {
      stack || (stack = new _Stack);
      if (isObject_1(srcValue)) {
        _baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
      }
      else {
        var newValue = customizer
          ? customizer(_safeGet(object, key), srcValue, (key + ''), object, source, stack)
          : undefined;

        if (newValue === undefined) {
          newValue = srcValue;
        }
        _assignMergeValue(object, key, newValue);
      }
    }, keysIn_1);
  }

  var _baseMerge = baseMerge;

  /**
   * This method returns the first argument it receives.
   *
   * @static
   * @since 0.1.0
   * @memberOf _
   * @category Util
   * @param {*} value Any value.
   * @returns {*} Returns `value`.
   * @example
   *
   * var object = { 'a': 1 };
   *
   * console.log(_.identity(object) === object);
   * // => true
   */
  function identity(value) {
    return value;
  }

  var identity_1 = identity;

  /**
   * A faster alternative to `Function#apply`, this function invokes `func`
   * with the `this` binding of `thisArg` and the arguments of `args`.
   *
   * @private
   * @param {Function} func The function to invoke.
   * @param {*} thisArg The `this` binding of `func`.
   * @param {Array} args The arguments to invoke `func` with.
   * @returns {*} Returns the result of `func`.
   */
  function apply(func, thisArg, args) {
    switch (args.length) {
      case 0: return func.call(thisArg);
      case 1: return func.call(thisArg, args[0]);
      case 2: return func.call(thisArg, args[0], args[1]);
      case 3: return func.call(thisArg, args[0], args[1], args[2]);
    }
    return func.apply(thisArg, args);
  }

  var _apply = apply;

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeMax = Math.max;

  /**
   * A specialized version of `baseRest` which transforms the rest array.
   *
   * @private
   * @param {Function} func The function to apply a rest parameter to.
   * @param {number} [start=func.length-1] The start position of the rest parameter.
   * @param {Function} transform The rest array transform.
   * @returns {Function} Returns the new function.
   */
  function overRest(func, start, transform) {
    start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
    return function() {
      var args = arguments,
          index = -1,
          length = nativeMax(args.length - start, 0),
          array = Array(length);

      while (++index < length) {
        array[index] = args[start + index];
      }
      index = -1;
      var otherArgs = Array(start + 1);
      while (++index < start) {
        otherArgs[index] = args[index];
      }
      otherArgs[start] = transform(array);
      return _apply(func, this, otherArgs);
    };
  }

  var _overRest = overRest;

  /**
   * Creates a function that returns `value`.
   *
   * @static
   * @memberOf _
   * @since 2.4.0
   * @category Util
   * @param {*} value The value to return from the new function.
   * @returns {Function} Returns the new constant function.
   * @example
   *
   * var objects = _.times(2, _.constant({ 'a': 1 }));
   *
   * console.log(objects);
   * // => [{ 'a': 1 }, { 'a': 1 }]
   *
   * console.log(objects[0] === objects[1]);
   * // => true
   */
  function constant(value) {
    return function() {
      return value;
    };
  }

  var constant_1 = constant;

  /**
   * The base implementation of `setToString` without support for hot loop shorting.
   *
   * @private
   * @param {Function} func The function to modify.
   * @param {Function} string The `toString` result.
   * @returns {Function} Returns `func`.
   */
  var baseSetToString = !_defineProperty$1 ? identity_1 : function(func, string) {
    return _defineProperty$1(func, 'toString', {
      'configurable': true,
      'enumerable': false,
      'value': constant_1(string),
      'writable': true
    });
  };

  var _baseSetToString = baseSetToString;

  /** Used to detect hot functions by number of calls within a span of milliseconds. */
  var HOT_COUNT = 800,
      HOT_SPAN = 16;

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeNow = Date.now;

  /**
   * Creates a function that'll short out and invoke `identity` instead
   * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
   * milliseconds.
   *
   * @private
   * @param {Function} func The function to restrict.
   * @returns {Function} Returns the new shortable function.
   */
  function shortOut(func) {
    var count = 0,
        lastCalled = 0;

    return function() {
      var stamp = nativeNow(),
          remaining = HOT_SPAN - (stamp - lastCalled);

      lastCalled = stamp;
      if (remaining > 0) {
        if (++count >= HOT_COUNT) {
          return arguments[0];
        }
      } else {
        count = 0;
      }
      return func.apply(undefined, arguments);
    };
  }

  var _shortOut = shortOut;

  /**
   * Sets the `toString` method of `func` to return `string`.
   *
   * @private
   * @param {Function} func The function to modify.
   * @param {Function} string The `toString` result.
   * @returns {Function} Returns `func`.
   */
  var setToString = _shortOut(_baseSetToString);

  var _setToString = setToString;

  /**
   * The base implementation of `_.rest` which doesn't validate or coerce arguments.
   *
   * @private
   * @param {Function} func The function to apply a rest parameter to.
   * @param {number} [start=func.length-1] The start position of the rest parameter.
   * @returns {Function} Returns the new function.
   */
  function baseRest(func, start) {
    return _setToString(_overRest(func, start, identity_1), func + '');
  }

  var _baseRest = baseRest;

  /**
   * Checks if the given arguments are from an iteratee call.
   *
   * @private
   * @param {*} value The potential iteratee value argument.
   * @param {*} index The potential iteratee index or key argument.
   * @param {*} object The potential iteratee object argument.
   * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
   *  else `false`.
   */
  function isIterateeCall(value, index, object) {
    if (!isObject_1(object)) {
      return false;
    }
    var type = typeof index;
    if (type == 'number'
          ? (isArrayLike_1(object) && _isIndex(index, object.length))
          : (type == 'string' && index in object)
        ) {
      return eq_1(object[index], value);
    }
    return false;
  }

  var _isIterateeCall = isIterateeCall;

  /**
   * Creates a function like `_.assign`.
   *
   * @private
   * @param {Function} assigner The function to assign values.
   * @returns {Function} Returns the new assigner function.
   */
  function createAssigner(assigner) {
    return _baseRest(function(object, sources) {
      var index = -1,
          length = sources.length,
          customizer = length > 1 ? sources[length - 1] : undefined,
          guard = length > 2 ? sources[2] : undefined;

      customizer = (assigner.length > 3 && typeof customizer == 'function')
        ? (length--, customizer)
        : undefined;

      if (guard && _isIterateeCall(sources[0], sources[1], guard)) {
        customizer = length < 3 ? undefined : customizer;
        length = 1;
      }
      object = Object(object);
      while (++index < length) {
        var source = sources[index];
        if (source) {
          assigner(object, source, index, customizer);
        }
      }
      return object;
    });
  }

  var _createAssigner = createAssigner;

  /**
   * This method is like `_.assign` except that it recursively merges own and
   * inherited enumerable string keyed properties of source objects into the
   * destination object. Source properties that resolve to `undefined` are
   * skipped if a destination value exists. Array and plain object properties
   * are merged recursively. Other objects and value types are overridden by
   * assignment. Source objects are applied from left to right. Subsequent
   * sources overwrite property assignments of previous sources.
   *
   * **Note:** This method mutates `object`.
   *
   * @static
   * @memberOf _
   * @since 0.5.0
   * @category Object
   * @param {Object} object The destination object.
   * @param {...Object} [sources] The source objects.
   * @returns {Object} Returns `object`.
   * @example
   *
   * var object = {
   *   'a': [{ 'b': 2 }, { 'd': 4 }]
   * };
   *
   * var other = {
   *   'a': [{ 'c': 3 }, { 'e': 5 }]
   * };
   *
   * _.merge(object, other);
   * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
   */
  var merge = _createAssigner(function(object, source, srcIndex) {
    _baseMerge(object, source, srcIndex);
  });

  var merge_1 = merge;

  // tslint:disable-next-line:no-submodule-imports
  var DataLevel = 2; // d

  var dataLevel2 = {
    world: {
      fill: {
        type: 'pbf',
        url: 'https://gw.alipayobjects.com/os/bmw-prod/ad26cd25-96ea-40fd-935d-7e21a5c08893.bin'
      },
      line: {
        type: 'pbf',
        url: 'https://gw.alipayobjects.com/os/bmw-prod/62f61f5f-cca7-4137-845d-13c8f9969664.bin'
      },
      label: {
        type: 'pbf',
        url: 'https://gw.alipayobjects.com/os/bmw-prod/90c51eb3-04d7-402f-bd05-95e4bd27dd62.bin',
        parser: {
          type: 'geojson'
        }
      },
      nationalBoundaries: {
        type: 'json',
        url: 'https://gw.alipayobjects.com/os/bmw-prod/ee493a41-0558-4c0e-bee6-520276c4f1a8.json'
      }
    },
    country: {
      CHN: {
        1: {
          fill: {
            // 中国地图省份围栏数据
            type: 'pbf',
            url: 'https://gw.alipayobjects.com/os/bmw-prod/71ac4de3-bb14-449d-a97d-2b98e25ec8df.bin'
          },
          line: {
            type: 'pbf',
            url: 'https://gw.alipayobjects.com/os/bmw-prod/70ec087e-c48a-4b76-8825-6452f17bae7a.bin'
          },
          provinceLine: {
            type: 'pbf',
            url: 'https://gw.alipayobjects.com/os/bmw-prod/0024caaf-86b2-4e75-a3d1-6d2146490b67.bin'
          },
          label: {
            type: 'json',
            url: 'https://gw.alipayobjects.com/os/bmw-prod/36832a45-68f8-4b51-b006-9dec71f92a23.json'
          }
        },
        2: {
          fill: {
            type: 'pbf',
            url: 'https://gw.alipayobjects.com/os/bmw-prod/522c6496-c711-4581-88db-c3741cd39abd.bin'
          },
          line: {
            type: 'pbf',
            url: 'https://gw.alipayobjects.com/os/bmw-prod/f6a4e2b1-359b-43a6-921c-39d2088d1dab.bin'
          },
          cityLine: {
            type: 'pbf',
            url: 'https://gw.alipayobjects.com/os/bmw-prod/f6a4e2b1-359b-43a6-921c-39d2088d1dab.bin'
          },
          provinceLine: {
            type: 'pbf',
            url: 'https://gw.alipayobjects.com/os/bmw-prod/0024caaf-86b2-4e75-a3d1-6d2146490b67.bin'
          }
        },
        3: {
          fill: {
            type: 'pbf',
            url: 'https://gw.alipayobjects.com/os/bmw-prod/516b2703-d692-44e6-80dd-b3f5df0186e7.bin'
          },
          line: {
            type: 'pbf',
            url: 'https://gw.alipayobjects.com/os/bmw-prod/bc97875a-90f2-42c0-a62c-43d2efd7460d.bin'
          },
          countryLine: {
            type: 'pbf',
            url: 'https://gw.alipayobjects.com/os/bmw-prod/bc97875a-90f2-42c0-a62c-43d2efd7460d.bin'
          },
          cityLine: {
            type: 'pbf',
            url: 'https://gw.alipayobjects.com/os/bmw-prod/8bfbfe7e-bd0e-4bbe-84d8-629f4dc7abc4.bin'
          },
          provinceLine: {
            type: 'pbf',
            url: 'https://gw.alipayobjects.com/os/bmw-prod/778ad7ba-5a3f-4ed6-a94a-b8ab8acae9d6.bin'
          }
        },
        nationalBoundaries: {
          type: 'json',
          url: 'https://gw.alipayobjects.com/os/bmw-prod/ee493a41-0558-4c0e-bee6-520276c4f1a8.json'
        },
        nationalBoundaries2: {
          type: 'json',
          url: 'https://gw.alipayobjects.com/os/bmw-prod/f2189cc4-662b-4358-8573-36f0f918b7ca.json'
        },
        island: {
          type: 'json',
          url: 'https://gw.alipayobjects.com/os/bmw-prod/fe49b393-1147-4769-94ed-70471f4ff15d.json'
        }
      }
    },
    province: {
      110000: ''
    }
  };
  var dataLevel1 = {
    world: {
      fill: {
        type: 'pbf',
        url: 'https://gw.alipayobjects.com/os/bmw-prod/35bb8365-1926-471c-b357-db2c02ff3a81.bin'
      },
      line: {
        type: 'pbf',
        url: 'https://gw.alipayobjects.com/os/bmw-prod/8ec671c3-a4f9-4fdf-8e88-85d2ab1d8930.bin'
      },
      label: {
        type: 'pbf',
        url: 'https://gw.alipayobjects.com/os/bmw-prod/90c51eb3-04d7-402f-bd05-95e4bd27dd62.bin',
        parser: {
          type: 'geojson'
        }
      },
      nationalBoundaries: {
        type: 'json',
        url: 'https://gw.alipayobjects.com/os/bmw-prod/ee493a41-0558-4c0e-bee6-520276c4f1a8.json'
      }
    },
    country: {
      CHN: {
        1: {
          fill: {
            type: 'pbf',
            url: 'https://gw.alipayobjects.com/os/bmw-prod/380370e0-76aa-4240-8874-5732de77e71d.bin'
          },
          line: {
            type: 'pbf',
            url: 'https://gw.alipayobjects.com/os/bmw-prod/70ec087e-c48a-4b76-8825-6452f17bae7a.bin'
          },
          provinceLine: {
            type: 'pbf',
            url: 'https://gw.alipayobjects.com/os/bmw-prod/778ad7ba-5a3f-4ed6-a94a-b8ab8acae9d6.bin'
          },
          label: {
            type: 'json',
            url: 'https://gw.alipayobjects.com/os/bmw-prod/36832a45-68f8-4b51-b006-9dec71f92a23.json'
          }
        },
        2: {
          fill: {
            type: 'pbf',
            url: 'https://gw.alipayobjects.com/os/bmw-prod/feeb1f06-11c6-4495-84c9-f41ea6f77123.bin'
          },
          line: {
            type: 'pbf',
            url: 'https://gw.alipayobjects.com/os/bmw-prod/8bfbfe7e-bd0e-4bbe-84d8-629f4dc7abc4.bin'
          },
          cityLine: {
            type: 'pbf',
            url: 'https://gw.alipayobjects.com/os/bmw-prod/8bfbfe7e-bd0e-4bbe-84d8-629f4dc7abc4.bin'
          },
          provinceLine: {
            type: 'pbf',
            url: 'https://gw.alipayobjects.com/os/bmw-prod/778ad7ba-5a3f-4ed6-a94a-b8ab8acae9d6.bin'
          }
        },
        3: {
          fill: {
            type: 'pbf',
            url: 'https://gw.alipayobjects.com/os/bmw-prod/24a9ee83-2be1-4fc1-b187-769ac939269d.bin'
          },
          line: {
            type: 'pbf',
            url: 'https://gw.alipayobjects.com/os/bmw-prod/bc97875a-90f2-42c0-a62c-43d2efd7460d.bin'
          },
          countryLine: {
            type: 'pbf',
            url: 'https://gw.alipayobjects.com/os/bmw-prod/bc97875a-90f2-42c0-a62c-43d2efd7460d.bin'
          },
          cityLine: {
            type: 'pbf',
            url: 'https://gw.alipayobjects.com/os/bmw-prod/8bfbfe7e-bd0e-4bbe-84d8-629f4dc7abc4.bin'
          },
          provinceLine: {
            type: 'pbf',
            url: 'https://gw.alipayobjects.com/os/bmw-prod/778ad7ba-5a3f-4ed6-a94a-b8ab8acae9d6.bin'
          }
        },
        nationalBoundaries: {
          type: 'json',
          url: 'https://gw.alipayobjects.com/os/bmw-prod/ee493a41-0558-4c0e-bee6-520276c4f1a8.json'
        },
        nationalBoundaries2: {
          type: 'json',
          url: 'https://gw.alipayobjects.com/os/bmw-prod/f2189cc4-662b-4358-8573-36f0f918b7ca.json'
        },
        island: {
          type: 'json',
          url: 'https://gw.alipayobjects.com/os/bmw-prod/fe49b393-1147-4769-94ed-70471f4ff15d.json'
        }
      }
    },
    province: {
      110000: ''
    }
  };
  var DataLevelMap = {
    1: dataLevel1,
    2: dataLevel2
  };

  function setDataConfig(config) {
    var level = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DataLevel;
    merge_1(DataLevelMap[level], config);
  }

  function getDataConfig() {
    var level = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DataLevel;
    return DataLevelMap[level];
  }

  function setDataLevel(level) {
    DataLevel = level;
  }

  var DataConfig = DataLevelMap[DataLevel];

  var eventemitter3 = createCommonjsModule(function (module) {

  var has = Object.prototype.hasOwnProperty
    , prefix = '~';

  /**
   * Constructor to create a storage for our `EE` objects.
   * An `Events` instance is a plain object whose properties are event names.
   *
   * @constructor
   * @private
   */
  function Events() {}

  //
  // We try to not inherit from `Object.prototype`. In some engines creating an
  // instance in this way is faster than calling `Object.create(null)` directly.
  // If `Object.create(null)` is not supported we prefix the event names with a
  // character to make sure that the built-in object properties are not
  // overridden or used as an attack vector.
  //
  if (Object.create) {
    Events.prototype = Object.create(null);

    //
    // This hack is needed because the `__proto__` property is still inherited in
    // some old browsers like Android 4, iPhone 5.1, Opera 11 and Safari 5.
    //
    if (!new Events().__proto__) prefix = false;
  }

  /**
   * Representation of a single event listener.
   *
   * @param {Function} fn The listener function.
   * @param {*} context The context to invoke the listener with.
   * @param {Boolean} [once=false] Specify if the listener is a one-time listener.
   * @constructor
   * @private
   */
  function EE(fn, context, once) {
    this.fn = fn;
    this.context = context;
    this.once = once || false;
  }

  /**
   * Add a listener for a given event.
   *
   * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
   * @param {(String|Symbol)} event The event name.
   * @param {Function} fn The listener function.
   * @param {*} context The context to invoke the listener with.
   * @param {Boolean} once Specify if the listener is a one-time listener.
   * @returns {EventEmitter}
   * @private
   */
  function addListener(emitter, event, fn, context, once) {
    if (typeof fn !== 'function') {
      throw new TypeError('The listener must be a function');
    }

    var listener = new EE(fn, context || emitter, once)
      , evt = prefix ? prefix + event : event;

    if (!emitter._events[evt]) emitter._events[evt] = listener, emitter._eventsCount++;
    else if (!emitter._events[evt].fn) emitter._events[evt].push(listener);
    else emitter._events[evt] = [emitter._events[evt], listener];

    return emitter;
  }

  /**
   * Clear event by name.
   *
   * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
   * @param {(String|Symbol)} evt The Event name.
   * @private
   */
  function clearEvent(emitter, evt) {
    if (--emitter._eventsCount === 0) emitter._events = new Events();
    else delete emitter._events[evt];
  }

  /**
   * Minimal `EventEmitter` interface that is molded against the Node.js
   * `EventEmitter` interface.
   *
   * @constructor
   * @public
   */
  function EventEmitter() {
    this._events = new Events();
    this._eventsCount = 0;
  }

  /**
   * Return an array listing the events for which the emitter has registered
   * listeners.
   *
   * @returns {Array}
   * @public
   */
  EventEmitter.prototype.eventNames = function eventNames() {
    var names = []
      , events
      , name;

    if (this._eventsCount === 0) return names;

    for (name in (events = this._events)) {
      if (has.call(events, name)) names.push(prefix ? name.slice(1) : name);
    }

    if (Object.getOwnPropertySymbols) {
      return names.concat(Object.getOwnPropertySymbols(events));
    }

    return names;
  };

  /**
   * Return the listeners registered for a given event.
   *
   * @param {(String|Symbol)} event The event name.
   * @returns {Array} The registered listeners.
   * @public
   */
  EventEmitter.prototype.listeners = function listeners(event) {
    var evt = prefix ? prefix + event : event
      , handlers = this._events[evt];

    if (!handlers) return [];
    if (handlers.fn) return [handlers.fn];

    for (var i = 0, l = handlers.length, ee = new Array(l); i < l; i++) {
      ee[i] = handlers[i].fn;
    }

    return ee;
  };

  /**
   * Return the number of listeners listening to a given event.
   *
   * @param {(String|Symbol)} event The event name.
   * @returns {Number} The number of listeners.
   * @public
   */
  EventEmitter.prototype.listenerCount = function listenerCount(event) {
    var evt = prefix ? prefix + event : event
      , listeners = this._events[evt];

    if (!listeners) return 0;
    if (listeners.fn) return 1;
    return listeners.length;
  };

  /**
   * Calls each of the listeners registered for a given event.
   *
   * @param {(String|Symbol)} event The event name.
   * @returns {Boolean} `true` if the event had listeners, else `false`.
   * @public
   */
  EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
    var evt = prefix ? prefix + event : event;

    if (!this._events[evt]) return false;

    var listeners = this._events[evt]
      , len = arguments.length
      , args
      , i;

    if (listeners.fn) {
      if (listeners.once) this.removeListener(event, listeners.fn, undefined, true);

      switch (len) {
        case 1: return listeners.fn.call(listeners.context), true;
        case 2: return listeners.fn.call(listeners.context, a1), true;
        case 3: return listeners.fn.call(listeners.context, a1, a2), true;
        case 4: return listeners.fn.call(listeners.context, a1, a2, a3), true;
        case 5: return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
        case 6: return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
      }

      for (i = 1, args = new Array(len -1); i < len; i++) {
        args[i - 1] = arguments[i];
      }

      listeners.fn.apply(listeners.context, args);
    } else {
      var length = listeners.length
        , j;

      for (i = 0; i < length; i++) {
        if (listeners[i].once) this.removeListener(event, listeners[i].fn, undefined, true);

        switch (len) {
          case 1: listeners[i].fn.call(listeners[i].context); break;
          case 2: listeners[i].fn.call(listeners[i].context, a1); break;
          case 3: listeners[i].fn.call(listeners[i].context, a1, a2); break;
          case 4: listeners[i].fn.call(listeners[i].context, a1, a2, a3); break;
          default:
            if (!args) for (j = 1, args = new Array(len -1); j < len; j++) {
              args[j - 1] = arguments[j];
            }

            listeners[i].fn.apply(listeners[i].context, args);
        }
      }
    }

    return true;
  };

  /**
   * Add a listener for a given event.
   *
   * @param {(String|Symbol)} event The event name.
   * @param {Function} fn The listener function.
   * @param {*} [context=this] The context to invoke the listener with.
   * @returns {EventEmitter} `this`.
   * @public
   */
  EventEmitter.prototype.on = function on(event, fn, context) {
    return addListener(this, event, fn, context, false);
  };

  /**
   * Add a one-time listener for a given event.
   *
   * @param {(String|Symbol)} event The event name.
   * @param {Function} fn The listener function.
   * @param {*} [context=this] The context to invoke the listener with.
   * @returns {EventEmitter} `this`.
   * @public
   */
  EventEmitter.prototype.once = function once(event, fn, context) {
    return addListener(this, event, fn, context, true);
  };

  /**
   * Remove the listeners of a given event.
   *
   * @param {(String|Symbol)} event The event name.
   * @param {Function} fn Only remove the listeners that match this function.
   * @param {*} context Only remove the listeners that have this context.
   * @param {Boolean} once Only remove one-time listeners.
   * @returns {EventEmitter} `this`.
   * @public
   */
  EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
    var evt = prefix ? prefix + event : event;

    if (!this._events[evt]) return this;
    if (!fn) {
      clearEvent(this, evt);
      return this;
    }

    var listeners = this._events[evt];

    if (listeners.fn) {
      if (
        listeners.fn === fn &&
        (!once || listeners.once) &&
        (!context || listeners.context === context)
      ) {
        clearEvent(this, evt);
      }
    } else {
      for (var i = 0, events = [], length = listeners.length; i < length; i++) {
        if (
          listeners[i].fn !== fn ||
          (once && !listeners[i].once) ||
          (context && listeners[i].context !== context)
        ) {
          events.push(listeners[i]);
        }
      }

      //
      // Reset the array, or remove it completely if we have no more listeners.
      //
      if (events.length) this._events[evt] = events.length === 1 ? events[0] : events;
      else clearEvent(this, evt);
    }

    return this;
  };

  /**
   * Remove all listeners, or those of the specified event.
   *
   * @param {(String|Symbol)} [event] The event name.
   * @returns {EventEmitter} `this`.
   * @public
   */
  EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
    var evt;

    if (event) {
      evt = prefix ? prefix + event : event;
      if (this._events[evt]) clearEvent(this, evt);
    } else {
      this._events = new Events();
      this._eventsCount = 0;
    }

    return this;
  };

  //
  // Alias methods names because people roll like that.
  //
  EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
  EventEmitter.prototype.addListener = EventEmitter.prototype.on;

  //
  // Expose the prefix.
  //
  EventEmitter.prefixed = prefix;

  //
  // Allow `EventEmitter` to be imported as module namespace.
  //
  EventEmitter.EventEmitter = EventEmitter;

  //
  // Expose the module.
  //
  {
    module.exports = EventEmitter;
  }
  });
  var eventemitter3_1 = eventemitter3.EventEmitter;

  var encode_1 = encode;

  var keys, keysNum, keysArr, dim, e,
      maxPrecision = 1e6;

  var geometryTypes = {
      'Point': 0,
      'MultiPoint': 1,
      'LineString': 2,
      'MultiLineString': 3,
      'Polygon': 4,
      'MultiPolygon': 5,
      'GeometryCollection': 6
  };

  function encode(obj, pbf) {
      keys = {};
      keysArr = [];
      keysNum = 0;
      dim = 0;
      e = 1;

      analyze(obj);

      e = Math.min(e, maxPrecision);
      var precision = Math.ceil(Math.log(e) / Math.LN10);

      for (var i = 0; i < keysArr.length; i++) pbf.writeStringField(1, keysArr[i]);
      if (dim !== 2) pbf.writeVarintField(2, dim);
      if (precision !== 6) pbf.writeVarintField(3, precision);

      if (obj.type === 'FeatureCollection') pbf.writeMessage(4, writeFeatureCollection, obj);
      else if (obj.type === 'Feature') pbf.writeMessage(5, writeFeature, obj);
      else pbf.writeMessage(6, writeGeometry, obj);

      keys = null;

      return pbf.finish();
  }

  function analyze(obj) {
      var i, key;

      if (obj.type === 'FeatureCollection') {
          for (i = 0; i < obj.features.length; i++) analyze(obj.features[i]);

      } else if (obj.type === 'Feature') {
          if (obj.geometry !== null) analyze(obj.geometry);
          for (key in obj.properties) saveKey(key);

      } else if (obj.type === 'Point') analyzePoint(obj.coordinates);
      else if (obj.type === 'MultiPoint') analyzePoints(obj.coordinates);
      else if (obj.type === 'GeometryCollection') {
          for (i = 0; i < obj.geometries.length; i++) analyze(obj.geometries[i]);
      }
      else if (obj.type === 'LineString') analyzePoints(obj.coordinates);
      else if (obj.type === 'Polygon' || obj.type === 'MultiLineString') analyzeMultiLine(obj.coordinates);
      else if (obj.type === 'MultiPolygon') {
          for (i = 0; i < obj.coordinates.length; i++) analyzeMultiLine(obj.coordinates[i]);
      }

      for (key in obj) {
          if (!isSpecialKey(key, obj.type)) saveKey(key);
      }
  }

  function analyzeMultiLine(coords) {
      for (var i = 0; i < coords.length; i++) analyzePoints(coords[i]);
  }

  function analyzePoints(coords) {
      for (var i = 0; i < coords.length; i++) analyzePoint(coords[i]);
  }

  function analyzePoint(point) {
      dim = Math.max(dim, point.length);

      // find max precision
      for (var i = 0; i < point.length; i++) {
          while (Math.round(point[i] * e) / e !== point[i] && e < maxPrecision) e *= 10;
      }
  }

  function saveKey(key) {
      if (keys[key] === undefined) {
          keysArr.push(key);
          keys[key] = keysNum++;
      }
  }

  function writeFeatureCollection(obj, pbf) {
      for (var i = 0; i < obj.features.length; i++) {
          pbf.writeMessage(1, writeFeature, obj.features[i]);
      }
      writeProps(obj, pbf, true);
  }

  function writeFeature(feature, pbf) {
      if (feature.geometry !== null) pbf.writeMessage(1, writeGeometry, feature.geometry);

      if (feature.id !== undefined) {
          if (typeof feature.id === 'number' && feature.id % 1 === 0) pbf.writeSVarintField(12, feature.id);
          else pbf.writeStringField(11, feature.id);
      }

      if (feature.properties) writeProps(feature.properties, pbf);
      writeProps(feature, pbf, true);
  }

  function writeGeometry(geom, pbf) {
      pbf.writeVarintField(1, geometryTypes[geom.type]);

      var coords = geom.coordinates;

      if (geom.type === 'Point') writePoint(coords, pbf);
      else if (geom.type === 'MultiPoint') writeLine(coords, pbf);
      else if (geom.type === 'LineString') writeLine(coords, pbf);
      else if (geom.type === 'MultiLineString') writeMultiLine(coords, pbf);
      else if (geom.type === 'Polygon') writeMultiLine(coords, pbf, true);
      else if (geom.type === 'MultiPolygon') writeMultiPolygon(coords, pbf);
      else if (geom.type === 'GeometryCollection') {
          for (var i = 0; i < geom.geometries.length; i++) pbf.writeMessage(4, writeGeometry, geom.geometries[i]);
      }

      writeProps(geom, pbf, true);
  }

  function writeProps(props, pbf, isCustom) {
      var indexes = [],
          valueIndex = 0;

      for (var key in props) {
          if (isCustom && isSpecialKey(key, props.type)) {
              continue;
          }
          pbf.writeMessage(13, writeValue, props[key]);
          indexes.push(keys[key]);
          indexes.push(valueIndex++);
      }
      pbf.writePackedVarint(isCustom ? 15 : 14, indexes);
  }

  function writeValue(value, pbf) {
      if (value === null) return;

      var type = typeof value;

      if (type === 'string') pbf.writeStringField(1, value);
      else if (type === 'boolean') pbf.writeBooleanField(5, value);
      else if (type === 'object') pbf.writeStringField(6, JSON.stringify(value));
      else if (type === 'number') {
          if (value % 1 !== 0) pbf.writeDoubleField(2, value);
          else if (value >= 0) pbf.writeVarintField(3, value);
          else pbf.writeVarintField(4, -value);
      }
  }

  function writePoint(point, pbf) {
      var coords = [];
      for (var i = 0; i < dim; i++) coords.push(Math.round(point[i] * e));
      pbf.writePackedSVarint(3, coords);
  }

  function writeLine(line, pbf) {
      var coords = [];
      populateLine(coords, line);
      pbf.writePackedSVarint(3, coords);
  }

  function writeMultiLine(lines, pbf, closed) {
      var len = lines.length,
          i;
      if (len !== 1) {
          var lengths = [];
          for (i = 0; i < len; i++) lengths.push(lines[i].length - (closed ? 1 : 0));
          pbf.writePackedVarint(2, lengths);
          // TODO faster with custom writeMessage?
      }
      var coords = [];
      for (i = 0; i < len; i++) populateLine(coords, lines[i], closed);
      pbf.writePackedSVarint(3, coords);
  }

  function writeMultiPolygon(polygons, pbf) {
      var len = polygons.length,
          i, j;
      if (len !== 1 || polygons[0].length !== 1) {
          var lengths = [len];
          for (i = 0; i < len; i++) {
              lengths.push(polygons[i].length);
              for (j = 0; j < polygons[i].length; j++) lengths.push(polygons[i][j].length - 1);
          }
          pbf.writePackedVarint(2, lengths);
      }

      var coords = [];
      for (i = 0; i < len; i++) {
          for (j = 0; j < polygons[i].length; j++) populateLine(coords, polygons[i][j], true);
      }
      pbf.writePackedSVarint(3, coords);
  }

  function populateLine(coords, line, closed) {
      var i, j,
          len = line.length - (closed ? 1 : 0),
          sum = new Array(dim);
      for (j = 0; j < dim; j++) sum[j] = 0;
      for (i = 0; i < len; i++) {
          for (j = 0; j < dim; j++) {
              var n = Math.round(line[i][j] * e) - sum[j];
              coords.push(n);
              sum[j] += n;
          }
      }
  }

  function isSpecialKey(key, type) {
      if (key === 'type') return true;
      else if (type === 'FeatureCollection') {
          if (key === 'features') return true;
      } else if (type === 'Feature') {
          if (key === 'id' || key === 'properties' || key === 'geometry') return true;
      } else if (type === 'GeometryCollection') {
          if (key === 'geometries') return true;
      } else if (key === 'coordinates') return true;
      return false;
  }

  var decode_1 = decode;

  var keys$1, values, lengths, dim$1, e$1;

  var geometryTypes$1 = [
      'Point', 'MultiPoint', 'LineString', 'MultiLineString',
      'Polygon', 'MultiPolygon', 'GeometryCollection'];

  function decode(pbf) {
      dim$1 = 2;
      e$1 = Math.pow(10, 6);
      lengths = null;

      keys$1 = [];
      values = [];
      var obj = pbf.readFields(readDataField, {});
      keys$1 = null;

      return obj;
  }

  function readDataField(tag, obj, pbf) {
      if (tag === 1) keys$1.push(pbf.readString());
      else if (tag === 2) dim$1 = pbf.readVarint();
      else if (tag === 3) e$1 = Math.pow(10, pbf.readVarint());

      else if (tag === 4) readFeatureCollection(pbf, obj);
      else if (tag === 5) readFeature(pbf, obj);
      else if (tag === 6) readGeometry(pbf, obj);
  }

  function readFeatureCollection(pbf, obj) {
      obj.type = 'FeatureCollection';
      obj.features = [];
      return pbf.readMessage(readFeatureCollectionField, obj);
  }

  function readFeature(pbf, feature) {
      feature.type = 'Feature';
      var f = pbf.readMessage(readFeatureField, feature);
      if (!('geometry' in f)) f.geometry = null;
      return f;
  }

  function readGeometry(pbf, geom) {
      geom.type = 'Point';
      return pbf.readMessage(readGeometryField, geom);
  }

  function readFeatureCollectionField(tag, obj, pbf) {
      if (tag === 1) obj.features.push(readFeature(pbf, {}));

      else if (tag === 13) values.push(readValue(pbf));
      else if (tag === 15) readProps(pbf, obj);
  }

  function readFeatureField(tag, feature, pbf) {
      if (tag === 1) feature.geometry = readGeometry(pbf, {});

      else if (tag === 11) feature.id = pbf.readString();
      else if (tag === 12) feature.id = pbf.readSVarint();

      else if (tag === 13) values.push(readValue(pbf));
      else if (tag === 14) feature.properties = readProps(pbf, {});
      else if (tag === 15) readProps(pbf, feature);
  }

  function readGeometryField(tag, geom, pbf) {
      if (tag === 1) geom.type = geometryTypes$1[pbf.readVarint()];

      else if (tag === 2) lengths = pbf.readPackedVarint();
      else if (tag === 3) readCoords(geom, pbf, geom.type);
      else if (tag === 4) {
          geom.geometries = geom.geometries || [];
          geom.geometries.push(readGeometry(pbf, {}));
      }
      else if (tag === 13) values.push(readValue(pbf));
      else if (tag === 15) readProps(pbf, geom);
  }

  function readCoords(geom, pbf, type) {
      if (type === 'Point') geom.coordinates = readPoint(pbf);
      else if (type === 'MultiPoint') geom.coordinates = readLine(pbf);
      else if (type === 'LineString') geom.coordinates = readLine(pbf);
      else if (type === 'MultiLineString') geom.coordinates = readMultiLine(pbf);
      else if (type === 'Polygon') geom.coordinates = readMultiLine(pbf, true);
      else if (type === 'MultiPolygon') geom.coordinates = readMultiPolygon(pbf);
  }

  function readValue(pbf) {
      var end = pbf.readVarint() + pbf.pos,
          value = null;

      while (pbf.pos < end) {
          var val = pbf.readVarint(),
              tag = val >> 3;

          if (tag === 1) value = pbf.readString();
          else if (tag === 2) value = pbf.readDouble();
          else if (tag === 3) value = pbf.readVarint();
          else if (tag === 4) value = -pbf.readVarint();
          else if (tag === 5) value = pbf.readBoolean();
          else if (tag === 6) value = JSON.parse(pbf.readString());
      }
      return value;
  }

  function readProps(pbf, props) {
      var end = pbf.readVarint() + pbf.pos;
      while (pbf.pos < end) props[keys$1[pbf.readVarint()]] = values[pbf.readVarint()];
      values = [];
      return props;
  }

  function readPoint(pbf) {
      var end = pbf.readVarint() + pbf.pos,
          coords = [];
      while (pbf.pos < end) coords.push(pbf.readSVarint() / e$1);
      return coords;
  }

  function readLinePart(pbf, end, len, closed) {
      var i = 0,
          coords = [],
          p, d;

      var prevP = [];
      for (d = 0; d < dim$1; d++) prevP[d] = 0;

      while (len ? i < len : pbf.pos < end) {
          p = [];
          for (d = 0; d < dim$1; d++) {
              prevP[d] += pbf.readSVarint();
              p[d] = prevP[d] / e$1;
          }
          coords.push(p);
          i++;
      }
      if (closed) coords.push(coords[0]);

      return coords;
  }

  function readLine(pbf) {
      return readLinePart(pbf, pbf.readVarint() + pbf.pos);
  }

  function readMultiLine(pbf, closed) {
      var end = pbf.readVarint() + pbf.pos;
      if (!lengths) return [readLinePart(pbf, end, null, closed)];

      var coords = [];
      for (var i = 0; i < lengths.length; i++) coords.push(readLinePart(pbf, end, lengths[i], closed));
      lengths = null;
      return coords;
  }

  function readMultiPolygon(pbf) {
      var end = pbf.readVarint() + pbf.pos;
      if (!lengths) return [[readLinePart(pbf, end, null, true)]];

      var coords = [];
      var j = 1;
      for (var i = 0; i < lengths[0]; i++) {
          var rings = [];
          for (var k = 0; k < lengths[j]; k++) rings.push(readLinePart(pbf, end, lengths[j + 1 + k], true));
          j += lengths[j] + 1;
          coords.push(rings);
      }
      lengths = null;
      return coords;
  }

  var encode$1 = encode_1;
  var decode$1 = decode_1;

  var geobuf = {
  	encode: encode$1,
  	decode: decode$1
  };

  /**
   * This method is like `_.merge` except that it accepts `customizer` which
   * is invoked to produce the merged values of the destination and source
   * properties. If `customizer` returns `undefined`, merging is handled by the
   * method instead. The `customizer` is invoked with six arguments:
   * (objValue, srcValue, key, object, source, stack).
   *
   * **Note:** This method mutates `object`.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Object
   * @param {Object} object The destination object.
   * @param {...Object} sources The source objects.
   * @param {Function} customizer The function to customize assigned values.
   * @returns {Object} Returns `object`.
   * @example
   *
   * function customizer(objValue, srcValue) {
   *   if (_.isArray(objValue)) {
   *     return objValue.concat(srcValue);
   *   }
   * }
   *
   * var object = { 'a': [1], 'b': [2] };
   * var other = { 'a': [3], 'b': [4] };
   *
   * _.mergeWith(object, other, customizer);
   * // => { 'a': [1, 3], 'b': [2, 4] }
   */
  var mergeWith = _createAssigner(function(object, source, srcIndex, customizer) {
    _baseMerge(object, source, srcIndex, customizer);
  });

  var mergeWith_1 = mergeWith;

  /*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
  var read = function (buffer, offset, isLE, mLen, nBytes) {
    var e, m;
    var eLen = (nBytes * 8) - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var nBits = -7;
    var i = isLE ? (nBytes - 1) : 0;
    var d = isLE ? -1 : 1;
    var s = buffer[offset + i];

    i += d;

    e = s & ((1 << (-nBits)) - 1);
    s >>= (-nBits);
    nBits += eLen;
    for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

    m = e & ((1 << (-nBits)) - 1);
    e >>= (-nBits);
    nBits += mLen;
    for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

    if (e === 0) {
      e = 1 - eBias;
    } else if (e === eMax) {
      return m ? NaN : ((s ? -1 : 1) * Infinity)
    } else {
      m = m + Math.pow(2, mLen);
      e = e - eBias;
    }
    return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
  };

  var write = function (buffer, value, offset, isLE, mLen, nBytes) {
    var e, m, c;
    var eLen = (nBytes * 8) - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0);
    var i = isLE ? 0 : (nBytes - 1);
    var d = isLE ? 1 : -1;
    var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0;

    value = Math.abs(value);

    if (isNaN(value) || value === Infinity) {
      m = isNaN(value) ? 1 : 0;
      e = eMax;
    } else {
      e = Math.floor(Math.log(value) / Math.LN2);
      if (value * (c = Math.pow(2, -e)) < 1) {
        e--;
        c *= 2;
      }
      if (e + eBias >= 1) {
        value += rt / c;
      } else {
        value += rt * Math.pow(2, 1 - eBias);
      }
      if (value * c >= 2) {
        e++;
        c /= 2;
      }

      if (e + eBias >= eMax) {
        m = 0;
        e = eMax;
      } else if (e + eBias >= 1) {
        m = ((value * c) - 1) * Math.pow(2, mLen);
        e = e + eBias;
      } else {
        m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
        e = 0;
      }
    }

    for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

    e = (e << mLen) | m;
    eLen += mLen;
    for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

    buffer[offset + i - d] |= s * 128;
  };

  var ieee754 = {
  	read: read,
  	write: write
  };

  var pbf = Pbf;



  function Pbf(buf) {
      this.buf = ArrayBuffer.isView && ArrayBuffer.isView(buf) ? buf : new Uint8Array(buf || 0);
      this.pos = 0;
      this.type = 0;
      this.length = this.buf.length;
  }

  Pbf.Varint  = 0; // varint: int32, int64, uint32, uint64, sint32, sint64, bool, enum
  Pbf.Fixed64 = 1; // 64-bit: double, fixed64, sfixed64
  Pbf.Bytes   = 2; // length-delimited: string, bytes, embedded messages, packed repeated fields
  Pbf.Fixed32 = 5; // 32-bit: float, fixed32, sfixed32

  var SHIFT_LEFT_32 = (1 << 16) * (1 << 16),
      SHIFT_RIGHT_32 = 1 / SHIFT_LEFT_32;

  // Threshold chosen based on both benchmarking and knowledge about browser string
  // data structures (which currently switch structure types at 12 bytes or more)
  var TEXT_DECODER_MIN_LENGTH = 12;
  var utf8TextDecoder = typeof TextDecoder === 'undefined' ? null : new TextDecoder('utf8');

  Pbf.prototype = {

      destroy: function() {
          this.buf = null;
      },

      // === READING =================================================================

      readFields: function(readField, result, end) {
          end = end || this.length;

          while (this.pos < end) {
              var val = this.readVarint(),
                  tag = val >> 3,
                  startPos = this.pos;

              this.type = val & 0x7;
              readField(tag, result, this);

              if (this.pos === startPos) this.skip(val);
          }
          return result;
      },

      readMessage: function(readField, result) {
          return this.readFields(readField, result, this.readVarint() + this.pos);
      },

      readFixed32: function() {
          var val = readUInt32(this.buf, this.pos);
          this.pos += 4;
          return val;
      },

      readSFixed32: function() {
          var val = readInt32(this.buf, this.pos);
          this.pos += 4;
          return val;
      },

      // 64-bit int handling is based on github.com/dpw/node-buffer-more-ints (MIT-licensed)

      readFixed64: function() {
          var val = readUInt32(this.buf, this.pos) + readUInt32(this.buf, this.pos + 4) * SHIFT_LEFT_32;
          this.pos += 8;
          return val;
      },

      readSFixed64: function() {
          var val = readUInt32(this.buf, this.pos) + readInt32(this.buf, this.pos + 4) * SHIFT_LEFT_32;
          this.pos += 8;
          return val;
      },

      readFloat: function() {
          var val = ieee754.read(this.buf, this.pos, true, 23, 4);
          this.pos += 4;
          return val;
      },

      readDouble: function() {
          var val = ieee754.read(this.buf, this.pos, true, 52, 8);
          this.pos += 8;
          return val;
      },

      readVarint: function(isSigned) {
          var buf = this.buf,
              val, b;

          b = buf[this.pos++]; val  =  b & 0x7f;        if (b < 0x80) return val;
          b = buf[this.pos++]; val |= (b & 0x7f) << 7;  if (b < 0x80) return val;
          b = buf[this.pos++]; val |= (b & 0x7f) << 14; if (b < 0x80) return val;
          b = buf[this.pos++]; val |= (b & 0x7f) << 21; if (b < 0x80) return val;
          b = buf[this.pos];   val |= (b & 0x0f) << 28;

          return readVarintRemainder(val, isSigned, this);
      },

      readVarint64: function() { // for compatibility with v2.0.1
          return this.readVarint(true);
      },

      readSVarint: function() {
          var num = this.readVarint();
          return num % 2 === 1 ? (num + 1) / -2 : num / 2; // zigzag encoding
      },

      readBoolean: function() {
          return Boolean(this.readVarint());
      },

      readString: function() {
          var end = this.readVarint() + this.pos;
          var pos = this.pos;
          this.pos = end;

          if (end - pos >= TEXT_DECODER_MIN_LENGTH && utf8TextDecoder) {
              // longer strings are fast with the built-in browser TextDecoder API
              return readUtf8TextDecoder(this.buf, pos, end);
          }
          // short strings are fast with our custom implementation
          return readUtf8(this.buf, pos, end);
      },

      readBytes: function() {
          var end = this.readVarint() + this.pos,
              buffer = this.buf.subarray(this.pos, end);
          this.pos = end;
          return buffer;
      },

      // verbose for performance reasons; doesn't affect gzipped size

      readPackedVarint: function(arr, isSigned) {
          if (this.type !== Pbf.Bytes) return arr.push(this.readVarint(isSigned));
          var end = readPackedEnd(this);
          arr = arr || [];
          while (this.pos < end) arr.push(this.readVarint(isSigned));
          return arr;
      },
      readPackedSVarint: function(arr) {
          if (this.type !== Pbf.Bytes) return arr.push(this.readSVarint());
          var end = readPackedEnd(this);
          arr = arr || [];
          while (this.pos < end) arr.push(this.readSVarint());
          return arr;
      },
      readPackedBoolean: function(arr) {
          if (this.type !== Pbf.Bytes) return arr.push(this.readBoolean());
          var end = readPackedEnd(this);
          arr = arr || [];
          while (this.pos < end) arr.push(this.readBoolean());
          return arr;
      },
      readPackedFloat: function(arr) {
          if (this.type !== Pbf.Bytes) return arr.push(this.readFloat());
          var end = readPackedEnd(this);
          arr = arr || [];
          while (this.pos < end) arr.push(this.readFloat());
          return arr;
      },
      readPackedDouble: function(arr) {
          if (this.type !== Pbf.Bytes) return arr.push(this.readDouble());
          var end = readPackedEnd(this);
          arr = arr || [];
          while (this.pos < end) arr.push(this.readDouble());
          return arr;
      },
      readPackedFixed32: function(arr) {
          if (this.type !== Pbf.Bytes) return arr.push(this.readFixed32());
          var end = readPackedEnd(this);
          arr = arr || [];
          while (this.pos < end) arr.push(this.readFixed32());
          return arr;
      },
      readPackedSFixed32: function(arr) {
          if (this.type !== Pbf.Bytes) return arr.push(this.readSFixed32());
          var end = readPackedEnd(this);
          arr = arr || [];
          while (this.pos < end) arr.push(this.readSFixed32());
          return arr;
      },
      readPackedFixed64: function(arr) {
          if (this.type !== Pbf.Bytes) return arr.push(this.readFixed64());
          var end = readPackedEnd(this);
          arr = arr || [];
          while (this.pos < end) arr.push(this.readFixed64());
          return arr;
      },
      readPackedSFixed64: function(arr) {
          if (this.type !== Pbf.Bytes) return arr.push(this.readSFixed64());
          var end = readPackedEnd(this);
          arr = arr || [];
          while (this.pos < end) arr.push(this.readSFixed64());
          return arr;
      },

      skip: function(val) {
          var type = val & 0x7;
          if (type === Pbf.Varint) while (this.buf[this.pos++] > 0x7f) {}
          else if (type === Pbf.Bytes) this.pos = this.readVarint() + this.pos;
          else if (type === Pbf.Fixed32) this.pos += 4;
          else if (type === Pbf.Fixed64) this.pos += 8;
          else throw new Error('Unimplemented type: ' + type);
      },

      // === WRITING =================================================================

      writeTag: function(tag, type) {
          this.writeVarint((tag << 3) | type);
      },

      realloc: function(min) {
          var length = this.length || 16;

          while (length < this.pos + min) length *= 2;

          if (length !== this.length) {
              var buf = new Uint8Array(length);
              buf.set(this.buf);
              this.buf = buf;
              this.length = length;
          }
      },

      finish: function() {
          this.length = this.pos;
          this.pos = 0;
          return this.buf.subarray(0, this.length);
      },

      writeFixed32: function(val) {
          this.realloc(4);
          writeInt32(this.buf, val, this.pos);
          this.pos += 4;
      },

      writeSFixed32: function(val) {
          this.realloc(4);
          writeInt32(this.buf, val, this.pos);
          this.pos += 4;
      },

      writeFixed64: function(val) {
          this.realloc(8);
          writeInt32(this.buf, val & -1, this.pos);
          writeInt32(this.buf, Math.floor(val * SHIFT_RIGHT_32), this.pos + 4);
          this.pos += 8;
      },

      writeSFixed64: function(val) {
          this.realloc(8);
          writeInt32(this.buf, val & -1, this.pos);
          writeInt32(this.buf, Math.floor(val * SHIFT_RIGHT_32), this.pos + 4);
          this.pos += 8;
      },

      writeVarint: function(val) {
          val = +val || 0;

          if (val > 0xfffffff || val < 0) {
              writeBigVarint(val, this);
              return;
          }

          this.realloc(4);

          this.buf[this.pos++] =           val & 0x7f  | (val > 0x7f ? 0x80 : 0); if (val <= 0x7f) return;
          this.buf[this.pos++] = ((val >>>= 7) & 0x7f) | (val > 0x7f ? 0x80 : 0); if (val <= 0x7f) return;
          this.buf[this.pos++] = ((val >>>= 7) & 0x7f) | (val > 0x7f ? 0x80 : 0); if (val <= 0x7f) return;
          this.buf[this.pos++] =   (val >>> 7) & 0x7f;
      },

      writeSVarint: function(val) {
          this.writeVarint(val < 0 ? -val * 2 - 1 : val * 2);
      },

      writeBoolean: function(val) {
          this.writeVarint(Boolean(val));
      },

      writeString: function(str) {
          str = String(str);
          this.realloc(str.length * 4);

          this.pos++; // reserve 1 byte for short string length

          var startPos = this.pos;
          // write the string directly to the buffer and see how much was written
          this.pos = writeUtf8(this.buf, str, this.pos);
          var len = this.pos - startPos;

          if (len >= 0x80) makeRoomForExtraLength(startPos, len, this);

          // finally, write the message length in the reserved place and restore the position
          this.pos = startPos - 1;
          this.writeVarint(len);
          this.pos += len;
      },

      writeFloat: function(val) {
          this.realloc(4);
          ieee754.write(this.buf, val, this.pos, true, 23, 4);
          this.pos += 4;
      },

      writeDouble: function(val) {
          this.realloc(8);
          ieee754.write(this.buf, val, this.pos, true, 52, 8);
          this.pos += 8;
      },

      writeBytes: function(buffer) {
          var len = buffer.length;
          this.writeVarint(len);
          this.realloc(len);
          for (var i = 0; i < len; i++) this.buf[this.pos++] = buffer[i];
      },

      writeRawMessage: function(fn, obj) {
          this.pos++; // reserve 1 byte for short message length

          // write the message directly to the buffer and see how much was written
          var startPos = this.pos;
          fn(obj, this);
          var len = this.pos - startPos;

          if (len >= 0x80) makeRoomForExtraLength(startPos, len, this);

          // finally, write the message length in the reserved place and restore the position
          this.pos = startPos - 1;
          this.writeVarint(len);
          this.pos += len;
      },

      writeMessage: function(tag, fn, obj) {
          this.writeTag(tag, Pbf.Bytes);
          this.writeRawMessage(fn, obj);
      },

      writePackedVarint:   function(tag, arr) { if (arr.length) this.writeMessage(tag, writePackedVarint, arr);   },
      writePackedSVarint:  function(tag, arr) { if (arr.length) this.writeMessage(tag, writePackedSVarint, arr);  },
      writePackedBoolean:  function(tag, arr) { if (arr.length) this.writeMessage(tag, writePackedBoolean, arr);  },
      writePackedFloat:    function(tag, arr) { if (arr.length) this.writeMessage(tag, writePackedFloat, arr);    },
      writePackedDouble:   function(tag, arr) { if (arr.length) this.writeMessage(tag, writePackedDouble, arr);   },
      writePackedFixed32:  function(tag, arr) { if (arr.length) this.writeMessage(tag, writePackedFixed32, arr);  },
      writePackedSFixed32: function(tag, arr) { if (arr.length) this.writeMessage(tag, writePackedSFixed32, arr); },
      writePackedFixed64:  function(tag, arr) { if (arr.length) this.writeMessage(tag, writePackedFixed64, arr);  },
      writePackedSFixed64: function(tag, arr) { if (arr.length) this.writeMessage(tag, writePackedSFixed64, arr); },

      writeBytesField: function(tag, buffer) {
          this.writeTag(tag, Pbf.Bytes);
          this.writeBytes(buffer);
      },
      writeFixed32Field: function(tag, val) {
          this.writeTag(tag, Pbf.Fixed32);
          this.writeFixed32(val);
      },
      writeSFixed32Field: function(tag, val) {
          this.writeTag(tag, Pbf.Fixed32);
          this.writeSFixed32(val);
      },
      writeFixed64Field: function(tag, val) {
          this.writeTag(tag, Pbf.Fixed64);
          this.writeFixed64(val);
      },
      writeSFixed64Field: function(tag, val) {
          this.writeTag(tag, Pbf.Fixed64);
          this.writeSFixed64(val);
      },
      writeVarintField: function(tag, val) {
          this.writeTag(tag, Pbf.Varint);
          this.writeVarint(val);
      },
      writeSVarintField: function(tag, val) {
          this.writeTag(tag, Pbf.Varint);
          this.writeSVarint(val);
      },
      writeStringField: function(tag, str) {
          this.writeTag(tag, Pbf.Bytes);
          this.writeString(str);
      },
      writeFloatField: function(tag, val) {
          this.writeTag(tag, Pbf.Fixed32);
          this.writeFloat(val);
      },
      writeDoubleField: function(tag, val) {
          this.writeTag(tag, Pbf.Fixed64);
          this.writeDouble(val);
      },
      writeBooleanField: function(tag, val) {
          this.writeVarintField(tag, Boolean(val));
      }
  };

  function readVarintRemainder(l, s, p) {
      var buf = p.buf,
          h, b;

      b = buf[p.pos++]; h  = (b & 0x70) >> 4;  if (b < 0x80) return toNum(l, h, s);
      b = buf[p.pos++]; h |= (b & 0x7f) << 3;  if (b < 0x80) return toNum(l, h, s);
      b = buf[p.pos++]; h |= (b & 0x7f) << 10; if (b < 0x80) return toNum(l, h, s);
      b = buf[p.pos++]; h |= (b & 0x7f) << 17; if (b < 0x80) return toNum(l, h, s);
      b = buf[p.pos++]; h |= (b & 0x7f) << 24; if (b < 0x80) return toNum(l, h, s);
      b = buf[p.pos++]; h |= (b & 0x01) << 31; if (b < 0x80) return toNum(l, h, s);

      throw new Error('Expected varint not more than 10 bytes');
  }

  function readPackedEnd(pbf) {
      return pbf.type === Pbf.Bytes ?
          pbf.readVarint() + pbf.pos : pbf.pos + 1;
  }

  function toNum(low, high, isSigned) {
      if (isSigned) {
          return high * 0x100000000 + (low >>> 0);
      }

      return ((high >>> 0) * 0x100000000) + (low >>> 0);
  }

  function writeBigVarint(val, pbf) {
      var low, high;

      if (val >= 0) {
          low  = (val % 0x100000000) | 0;
          high = (val / 0x100000000) | 0;
      } else {
          low  = ~(-val % 0x100000000);
          high = ~(-val / 0x100000000);

          if (low ^ 0xffffffff) {
              low = (low + 1) | 0;
          } else {
              low = 0;
              high = (high + 1) | 0;
          }
      }

      if (val >= 0x10000000000000000 || val < -0x10000000000000000) {
          throw new Error('Given varint doesn\'t fit into 10 bytes');
      }

      pbf.realloc(10);

      writeBigVarintLow(low, high, pbf);
      writeBigVarintHigh(high, pbf);
  }

  function writeBigVarintLow(low, high, pbf) {
      pbf.buf[pbf.pos++] = low & 0x7f | 0x80; low >>>= 7;
      pbf.buf[pbf.pos++] = low & 0x7f | 0x80; low >>>= 7;
      pbf.buf[pbf.pos++] = low & 0x7f | 0x80; low >>>= 7;
      pbf.buf[pbf.pos++] = low & 0x7f | 0x80; low >>>= 7;
      pbf.buf[pbf.pos]   = low & 0x7f;
  }

  function writeBigVarintHigh(high, pbf) {
      var lsb = (high & 0x07) << 4;

      pbf.buf[pbf.pos++] |= lsb         | ((high >>>= 3) ? 0x80 : 0); if (!high) return;
      pbf.buf[pbf.pos++]  = high & 0x7f | ((high >>>= 7) ? 0x80 : 0); if (!high) return;
      pbf.buf[pbf.pos++]  = high & 0x7f | ((high >>>= 7) ? 0x80 : 0); if (!high) return;
      pbf.buf[pbf.pos++]  = high & 0x7f | ((high >>>= 7) ? 0x80 : 0); if (!high) return;
      pbf.buf[pbf.pos++]  = high & 0x7f | ((high >>>= 7) ? 0x80 : 0); if (!high) return;
      pbf.buf[pbf.pos++]  = high & 0x7f;
  }

  function makeRoomForExtraLength(startPos, len, pbf) {
      var extraLen =
          len <= 0x3fff ? 1 :
          len <= 0x1fffff ? 2 :
          len <= 0xfffffff ? 3 : Math.floor(Math.log(len) / (Math.LN2 * 7));

      // if 1 byte isn't enough for encoding message length, shift the data to the right
      pbf.realloc(extraLen);
      for (var i = pbf.pos - 1; i >= startPos; i--) pbf.buf[i + extraLen] = pbf.buf[i];
  }

  function writePackedVarint(arr, pbf)   { for (var i = 0; i < arr.length; i++) pbf.writeVarint(arr[i]);   }
  function writePackedSVarint(arr, pbf)  { for (var i = 0; i < arr.length; i++) pbf.writeSVarint(arr[i]);  }
  function writePackedFloat(arr, pbf)    { for (var i = 0; i < arr.length; i++) pbf.writeFloat(arr[i]);    }
  function writePackedDouble(arr, pbf)   { for (var i = 0; i < arr.length; i++) pbf.writeDouble(arr[i]);   }
  function writePackedBoolean(arr, pbf)  { for (var i = 0; i < arr.length; i++) pbf.writeBoolean(arr[i]);  }
  function writePackedFixed32(arr, pbf)  { for (var i = 0; i < arr.length; i++) pbf.writeFixed32(arr[i]);  }
  function writePackedSFixed32(arr, pbf) { for (var i = 0; i < arr.length; i++) pbf.writeSFixed32(arr[i]); }
  function writePackedFixed64(arr, pbf)  { for (var i = 0; i < arr.length; i++) pbf.writeFixed64(arr[i]);  }
  function writePackedSFixed64(arr, pbf) { for (var i = 0; i < arr.length; i++) pbf.writeSFixed64(arr[i]); }

  // Buffer code below from https://github.com/feross/buffer, MIT-licensed

  function readUInt32(buf, pos) {
      return ((buf[pos]) |
          (buf[pos + 1] << 8) |
          (buf[pos + 2] << 16)) +
          (buf[pos + 3] * 0x1000000);
  }

  function writeInt32(buf, val, pos) {
      buf[pos] = val;
      buf[pos + 1] = (val >>> 8);
      buf[pos + 2] = (val >>> 16);
      buf[pos + 3] = (val >>> 24);
  }

  function readInt32(buf, pos) {
      return ((buf[pos]) |
          (buf[pos + 1] << 8) |
          (buf[pos + 2] << 16)) +
          (buf[pos + 3] << 24);
  }

  function readUtf8(buf, pos, end) {
      var str = '';
      var i = pos;

      while (i < end) {
          var b0 = buf[i];
          var c = null; // codepoint
          var bytesPerSequence =
              b0 > 0xEF ? 4 :
              b0 > 0xDF ? 3 :
              b0 > 0xBF ? 2 : 1;

          if (i + bytesPerSequence > end) break;

          var b1, b2, b3;

          if (bytesPerSequence === 1) {
              if (b0 < 0x80) {
                  c = b0;
              }
          } else if (bytesPerSequence === 2) {
              b1 = buf[i + 1];
              if ((b1 & 0xC0) === 0x80) {
                  c = (b0 & 0x1F) << 0x6 | (b1 & 0x3F);
                  if (c <= 0x7F) {
                      c = null;
                  }
              }
          } else if (bytesPerSequence === 3) {
              b1 = buf[i + 1];
              b2 = buf[i + 2];
              if ((b1 & 0xC0) === 0x80 && (b2 & 0xC0) === 0x80) {
                  c = (b0 & 0xF) << 0xC | (b1 & 0x3F) << 0x6 | (b2 & 0x3F);
                  if (c <= 0x7FF || (c >= 0xD800 && c <= 0xDFFF)) {
                      c = null;
                  }
              }
          } else if (bytesPerSequence === 4) {
              b1 = buf[i + 1];
              b2 = buf[i + 2];
              b3 = buf[i + 3];
              if ((b1 & 0xC0) === 0x80 && (b2 & 0xC0) === 0x80 && (b3 & 0xC0) === 0x80) {
                  c = (b0 & 0xF) << 0x12 | (b1 & 0x3F) << 0xC | (b2 & 0x3F) << 0x6 | (b3 & 0x3F);
                  if (c <= 0xFFFF || c >= 0x110000) {
                      c = null;
                  }
              }
          }

          if (c === null) {
              c = 0xFFFD;
              bytesPerSequence = 1;

          } else if (c > 0xFFFF) {
              c -= 0x10000;
              str += String.fromCharCode(c >>> 10 & 0x3FF | 0xD800);
              c = 0xDC00 | c & 0x3FF;
          }

          str += String.fromCharCode(c);
          i += bytesPerSequence;
      }

      return str;
  }

  function readUtf8TextDecoder(buf, pos, end) {
      return utf8TextDecoder.decode(buf.subarray(pos, end));
  }

  function writeUtf8(buf, str, pos) {
      for (var i = 0, c, lead; i < str.length; i++) {
          c = str.charCodeAt(i); // code point

          if (c > 0xD7FF && c < 0xE000) {
              if (lead) {
                  if (c < 0xDC00) {
                      buf[pos++] = 0xEF;
                      buf[pos++] = 0xBF;
                      buf[pos++] = 0xBD;
                      lead = c;
                      continue;
                  } else {
                      c = lead - 0xD800 << 10 | c - 0xDC00 | 0x10000;
                      lead = null;
                  }
              } else {
                  if (c > 0xDBFF || (i + 1 === str.length)) {
                      buf[pos++] = 0xEF;
                      buf[pos++] = 0xBF;
                      buf[pos++] = 0xBD;
                  } else {
                      lead = c;
                  }
                  continue;
              }
          } else if (lead) {
              buf[pos++] = 0xEF;
              buf[pos++] = 0xBF;
              buf[pos++] = 0xBD;
              lead = null;
          }

          if (c < 0x80) {
              buf[pos++] = c;
          } else {
              if (c < 0x800) {
                  buf[pos++] = c >> 0x6 | 0xC0;
              } else {
                  if (c < 0x10000) {
                      buf[pos++] = c >> 0xC | 0xE0;
                  } else {
                      buf[pos++] = c >> 0x12 | 0xF0;
                      buf[pos++] = c >> 0xC & 0x3F | 0x80;
                  }
                  buf[pos++] = c >> 0x6 & 0x3F | 0x80;
              }
              buf[pos++] = c & 0x3F | 0x80;
          }
      }
      return pos;
  }

  var Line = function(p1, p2){

    this.p1 = p1;
    this.p2 = p2;

  };

  Line.prototype.rise = function() {

    return this.p2[1] - this.p1[1];

  };

  Line.prototype.run = function() {

    return this.p2[0] - this.p1[0];

  };

  Line.prototype.slope = function(){

    return  this.rise() / this.run();

  };

  Line.prototype.yIntercept = function(){

    return this.p1[1] - (this.p1[0] * this.slope(this.p1, this.p2));

  };

  Line.prototype.isVertical = function() {

    return !isFinite(this.slope());

  };

  Line.prototype.isHorizontal = function() {

    return this.p1[1] == this.p2[1];

  };

  Line.prototype._perpendicularDistanceHorizontal = function(point){

    return Math.abs(this.p1[1] - point[1]);

  };

  Line.prototype._perpendicularDistanceVertical = function(point){

    return Math.abs(this.p1[0] - point[0]);

  };

  Line.prototype._perpendicularDistanceHasSlope = function(point){
    var slope = this.slope();
    var y_intercept = this.yIntercept();

    return Math.abs((slope * point[0]) - point[1] + y_intercept) / Math.sqrt((Math.pow(slope, 2)) + 1);

  };

  Line.prototype.perpendicularDistance = function(point){
    if (this.isVertical()) {

      return this._perpendicularDistanceVertical(point);

    }

    else if (this.isHorizontal()){

      return this._perpendicularDistanceHorizontal(point);

    }

    else {

      return this._perpendicularDistanceHasSlope(point);

    }

  };

  var line = Line;

  var simplifyGeometry = function(points, tolerance){

    var dmax = 0;
    var index = 0;

    for (var i = 1; i <= points.length - 2; i++){
      var d = new line(points[0], points[points.length - 1]).perpendicularDistance(points[i]);
      if (d > dmax){
        index = i;
        dmax = d;
      }
    }

    if (dmax > tolerance){
      var results_one = simplifyGeometry(points.slice(0, index), tolerance);
      var results_two = simplifyGeometry(points.slice(index, points.length), tolerance);

      var results = results_one.concat(results_two);

    }

    else if (points.length > 1) {

      results = [points[0], points[points.length - 1]];

    }

    else {

      results = [points[0]];

    }

    return results;


  };

  var lib = simplifyGeometry;

  var simplifyGeojson = createCommonjsModule(function (module) {
  module.exports = function (geojson, tolerance, dontClone) {
    if (!dontClone) geojson = JSON.parse(JSON.stringify(geojson)); // clone obj
    if (geojson.features) return simplifyFeatureCollection(geojson, tolerance)
    else if (geojson.type && geojson.type === 'Feature') return simplifyFeature(geojson, tolerance)
    else return new Error('FeatureCollection or individual Feature required')
  };

  module.exports.simplify = function (coordinates, tolerance) {
    return lib(coordinates, tolerance)
  };

  // modifies in-place
  function simplifyFeature (feat, tolerance) {
    var geom = feat.geometry;
    var type = geom.type;
    if (type === 'LineString') {
      geom.coordinates = module.exports.simplify(geom.coordinates, tolerance);
    } else if (type === 'Polygon' || type === 'MultiLineString') {
      for (var j = 0; j < geom.coordinates.length; j++) {
        geom.coordinates[j] = module.exports.simplify(geom.coordinates[j], tolerance);
      }
    } else if (type === 'MultiPolygon') {
      for (var k = 0; k < geom.coordinates.length; k++) {
        for (var l = 0; l < geom.coordinates[k].length; l++) {
          geom.coordinates[k][l] = module.exports.simplify(geom.coordinates[k][l], tolerance);
        }
      }
    }
    return feat
  }

  // modifies in-place
  function simplifyFeatureCollection (fc, tolerance) {
    // process all LineString features, skip non LineStrings
    for (var i = 0; i < fc.features.length; i++) {
      fc.features[i] = simplifyFeature(fc.features[i], tolerance);
    }
    return fc
  }
  });
  var simplifyGeojson_1 = simplifyGeojson.simplify;

  var eventList = ['loaded'];

  function mergeCustomizer(objValue, srcValue) {
    if (Array.isArray(srcValue)) {
      return srcValue;
    }
  }

  var BaseLayer = /*#__PURE__*/function (_EventEmitter) {
    _inherits(BaseLayer, _EventEmitter);

    var _super = _createSuper(BaseLayer);

    function BaseLayer(scene) {
      var _this;

      var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, BaseLayer);

      _this = _super.call(this);
      _this.loaded = false;
      _this.layers = [];
      _this.scene = scene;
      _this.options = mergeWith_1(_this.getDefaultOption(), option, mergeCustomizer);
      setDataLevel(_this.options.geoDataLevel);
      return _this;
    }

    _createClass(BaseLayer, [{
      key: "destroy",
      value: function destroy() {
        var _this2 = this;

        this.layers.forEach(function (layer) {
          return _this2.scene.removeLayer(layer);
        });
        this.layers.length = 0;
      }
    }, {
      key: "show",
      value: function show() {
        this.layers.forEach(function (layer) {
          return layer.show();
        });
      }
    }, {
      key: "hide",
      value: function hide() {
        this.layers.forEach(function (layer) {
          return layer.hide();
        });
      }
    }, {
      key: "setOption",
      value: function setOption(newOption) {
        this.options = mergeWith_1(this.options, newOption, mergeCustomizer);
      }
    }, {
      key: "getFillData",
      value: function getFillData() {
        return this.fillData;
      }
    }, {
      key: "getOptions",
      value: function getOptions() {
        return this.options;
      }
    }, {
      key: "getLayer",
      value: function getLayer(type) {
        // @ts-ignore
        return this[type + 'Layer'];
      }
    }, {
      key: "on",
      value: function on(event, handle) {
        var _this3 = this;

        var layerType = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'fill';

        if (eventList.indexOf(event) !== -1) {
          _get(_getPrototypeOf(BaseLayer.prototype), "on", this).call(this, event, handle);
        } else {
          if (this.loaded && this.getLayer(layerType)) {
            this.getLayer(layerType).on(event, handle);
          } else {
            _get(_getPrototypeOf(BaseLayer.prototype), "once", this).call(this, 'loaded', function () {
              _this3.getLayer(layerType).on(event, handle);
            });
          }
        }

        return this;
      }
    }, {
      key: "off",
      value: function off(event, handle) {
        var _this4 = this;

        var layerType = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'fill';

        if (eventList.indexOf(event) !== -1) {
          _get(_getPrototypeOf(BaseLayer.prototype), "on", this).call(this, event, handle);
        } else if (this.getLayer(layerType)) {
          if (this.loaded && this.getLayer(layerType)) {
            this.getLayer(layerType).off(event, handle);
          } else {
            _get(_getPrototypeOf(BaseLayer.prototype), "once", this).call(this, 'loaded', function () {
              _this4.getLayer(layerType).off(event, handle);
            });
          }
        }

        return this;
      }
    }, {
      key: "updateData",
      value: function updateData(newData, joinByField) {
        this.setOption({
          data: newData,
          joinBy: joinByField
        });
        var _this$options = this.options,
            _this$options$data = _this$options.data,
            data = _this$options$data === void 0 ? [] : _this$options$data,
            joinBy = _this$options.joinBy;
        this.fillLayer.setData(this.fillData, {
          transforms: data.length === 0 ? [] : [{
            type: 'join',
            sourceField: joinBy[1],
            targetField: joinBy[0],
            data: data
          }]
        });
      }
    }, {
      key: "fetchData",
      value: function () {
        var _fetchData = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(data) {
          var buffer, geojson;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  if (!(data.type === 'pbf')) {
                    _context.next = 11;
                    break;
                  }

                  _context.next = 3;
                  return fetch(data.url);

                case 3:
                  _context.next = 5;
                  return _context.sent.arrayBuffer();

                case 5:
                  buffer = _context.sent;
                  geojson = geobuf.decode(new pbf(buffer));

                  if (this.options.simplifyTolerance !== false) {
                    geojson = simplifyGeojson(geojson, this.options.simplifyTolerance);
                  }

                  return _context.abrupt("return", geojson);

                case 11:
                  if (!isObject_1(data.url)) {
                    _context.next = 15;
                    break;
                  }

                  _context.t0 = data.url;
                  _context.next = 18;
                  break;

                case 15:
                  _context.next = 17;
                  return fetch(data.url);

                case 17:
                  _context.t0 = _context.sent.json();

                case 18:
                  return _context.abrupt("return", _context.t0);

                case 19:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function fetchData(_x) {
          return _fetchData.apply(this, arguments);
        }

        return fetchData;
      }()
    }, {
      key: "getDefaultOption",
      value: function getDefaultOption() {
        return {
          zIndex: 0,
          visible: true,
          enablePropagation: true,
          geoDataLevel: 2,
          regionType: 'province',
          depth: 1,
          adcode: [],
          joinBy: ['name', 'name'],
          simplifyTolerance: false,
          label: {
            enable: true,
            color: '#000',
            field: 'name',
            size: 10,
            stroke: '#fff',
            strokeWidth: 2,
            textAllowOverlap: true,
            opacity: 1,
            textOffset: [0, 0],
            padding: [5, 5]
          },
          bubble: {
            enable: false,
            shape: 'circle',
            color: '#1AA9FF',
            size: 15,
            style: {
              opacity: 1,
              stroke: '#fff',
              strokeWidth: 1
            }
          },
          fill: {
            scale: null,
            color: '#ddd',
            style: {
              opacity: 1.0
            },
            activeColor: false
          },
          autoFit: true,
          showBorder: true,
          strokeOpacity: 1,
          stroke: '#bdbdbd',
          strokeVisible: true,
          strokeWidth: 0.6,
          cityStroke: '#636363',
          cityStrokeWidth: 0.6,
          countyStrokeWidth: 0.6,
          provinceStrokeWidth: 0.6,
          provinceStroke: '#f0f0f0',
          provinceStrokeVisible: true,
          countyStroke: '#525252',
          coastlineStroke: '#4190da',
          coastlineWidth: 0.6,
          nationalStroke: '#c994c7',
          nationalWidth: 0.5,
          chinaNationalStroke: 'gray',
          chinaNationalWidth: 1,
          popup: {
            enable: true,
            openTriggerEvent: 'mousemove',
            closeTriggerEvent: 'mouseout',
            option: {},
            Html: function Html(properties) {
              return "".concat(properties.name);
            }
          }
        };
      }
    }, {
      key: "addFillLayer",
      value: function addFillLayer(fillCountry) {
        var _this5 = this,
            _this$options$bubble;

        // 添加省份填充
        var _this$options2 = this.options,
            popup = _this$options2.popup,
            _this$options2$data = _this$options2.data,
            data = _this$options2$data === void 0 ? [] : _this$options2$data,
            fill = _this$options2.fill,
            autoFit = _this$options2.autoFit,
            joinBy = _this$options2.joinBy,
            visible = _this$options2.visible,
            enablePropagation = _this$options2.enablePropagation,
            zIndex = _this$options2.zIndex;
        this.fillData = fillCountry;
        var fillLayer = new l7.PolygonLayer({
          autoFit: autoFit,
          visible: visible,
          enablePropagation: enablePropagation,
          zIndex: zIndex
        }).source(fillCountry, {
          transforms: data.length === 0 ? [] : [{
            type: 'join',
            sourceField: joinBy[1],
            targetField: joinBy[0],
            data: data
          }]
        });
        this.setLayerAttribute(fillLayer, 'color', fill.color);
        this.setLayerAttribute(fillLayer, 'filter', fill.filter);

        if (fill.scale && isObject_1(fill.color)) {
          fillLayer.scale('color', {
            type: fill.scale,
            field: fill.color.field
          });
        }

        fillLayer.shape('fill').style(fill.style);

        if (fill.activeColor) {
          fillLayer.active({
            color: fill.activeColor
          });
        }

        this.fillLayer = fillLayer;
        this.layers.push(fillLayer);
        this.scene.addLayer(fillLayer);

        if (this.options.onClick) {
          this.fillLayer.on('click', function (e) {
            _this5.options && _this5.options.onClick && _this5.options.onClick(e, _this5.layerType);
          });
        }

        if (this.options.bubble && ((_this$options$bubble = this.options.bubble) === null || _this$options$bubble === void 0 ? void 0 : _this$options$bubble.enable) !== false) {
          var labeldata = fillCountry.features.map(function (feature) {
            return _objectSpread2(_objectSpread2({}, feature.properties), {}, {
              center: [feature.properties.x, feature.properties.y]
            });
          });
          this.addBubbleLayer(labeldata);
        }

        if (popup.enable) {
          this.addPopup();
        }
      }
    }, {
      key: "updateLayerAttribute",
      value: function updateLayerAttribute() {
        var layerName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'fill';
        var type = arguments.length > 1 ? arguments[1] : undefined;
        var attr = arguments.length > 2 ? arguments[2] : undefined;
        var layer = this.getLayer(layerName);
        this.setLayerAttribute(layer, type, attr);
      }
    }, {
      key: "addFillLine",
      value: function addFillLine(provinceLine) {
        var _this$options3 = this.options,
            stroke = _this$options3.stroke,
            strokeWidth = _this$options3.strokeWidth,
            zIndex = _this$options3.zIndex,
            visible = _this$options3.visible,
            strokeOpacity = _this$options3.strokeOpacity;
        var layer2 = new l7.LineLayer({
          zIndex: zIndex + 0.1,
          visible: visible
        }).source(provinceLine).color(stroke).size(strokeWidth).style({
          opacity: strokeOpacity
        });
        this.scene.addLayer(layer2);
        this.layers.push(layer2);
        this.lineLayer = layer2;
      }
    }, {
      key: "addLabelLayer",
      value: function addLabelLayer(labelData) {
        var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'json';
        var labelLayer = this.addLabel(labelData, type);
        this.scene.addLayer(labelLayer);
        this.layers.push(labelLayer);
        this.labelLayer = labelLayer;
      }
    }, {
      key: "addBubbleLayer",
      value: function addBubbleLayer(labelData) {
        var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'json';
        var _this$options4 = this.options,
            bubble = _this$options4.bubble,
            zIndex = _this$options4.zIndex,
            _this$options4$data = _this$options4.data,
            data = _this$options4$data === void 0 ? [] : _this$options4$data,
            joinBy = _this$options4.joinBy,
            visible = _this$options4.visible;
        var bubbleLayer = new l7.PointLayer({
          zIndex: zIndex + 0.3,
          visible: visible
        }).source(labelData, {
          parser: {
            type: type,
            coordinates: 'center'
          },
          transforms: data.length === 0 ? [] : [{
            type: 'join',
            sourceField: joinBy[1],
            targetField: joinBy[0],
            data: data
          }]
        });
        this.setLayerAttribute(bubbleLayer, 'color', bubble.color);
        this.setLayerAttribute(bubbleLayer, 'size', bubble.size);
        this.setLayerAttribute(bubbleLayer, 'shape', bubble.shape);
        this.setLayerAttribute(bubbleLayer, 'filter', bubble.filter);

        if (bubble.scale) {
          bubbleLayer.scale(bubble.scale.field, {
            type: bubble.scale.type
          });
        }

        bubbleLayer.style(bubble.style);
        this.scene.addLayer(bubbleLayer);
        this.layers.push(bubbleLayer);
        this.bubbleLayer = bubbleLayer;
        return bubbleLayer;
      }
    }, {
      key: "addLabel",
      value: function addLabel(labelData) {
        var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'json';
        var _this$options5 = this.options,
            label = _this$options5.label,
            zIndex = _this$options5.zIndex,
            visible = _this$options5.visible;
        var labelLayer = new l7.PointLayer({
          zIndex: zIndex + 5,
          visible: visible
        }).source(labelData, {
          parser: {
            type: type,
            coordinates: 'center'
          }
        }).shape(label.field, 'text').style(label);
        this.setLayerAttribute(labelLayer, 'color', label.color);
        this.setLayerAttribute(labelLayer, 'size', label.size);
        this.setLayerAttribute(labelLayer, 'filter', label.filter);
        return labelLayer;
      }
    }, {
      key: "addPopup",
      value: function addPopup() {
        var _this6 = this;

        var popup = this.options.popup;
        var popupLayer;

        if (popup.triggerLayer) {
          popupLayer = popup.triggerLayer === 'bubble' ? this.bubbleLayer : this.fillLayer;
        } else {
          popupLayer = this.options.bubble.enable ? this.bubbleLayer : this.fillLayer;
        }

        popupLayer.on(popup.openTriggerEvent, function (e) {
          var html = popup.Html ? popup.Html(e.feature.properties ? e.feature.properties : e.feature) : '';
          _this6.popup = new l7.Popup(_objectSpread2({
            closeButton: false
          }, popup.option)).setLnglat(e.lngLat).setHTML(html);

          _this6.scene.addPopup(_this6.popup);
        });
        popupLayer.on(popup.closeTriggerEvent, function (e) {
          if (_this6.popup) {
            _this6.popup.remove();
          }
        });
      }
    }, {
      key: "setLayerAttribute",
      value: function setLayerAttribute(layer, type, attr) {
        if (!attr) {
          return;
        }

        if (isObject_1(attr)) {
          // @ts-ignore
          layer[type](attr.field, attr.values);
        } else {
          // @ts-ignore
          layer[type](attr);
        }
      }
    }]);

    return BaseLayer;
  }(eventemitter3_1);

  var ProvinceLayer = /*#__PURE__*/function (_BaseLayer) {
    _inherits(ProvinceLayer, _BaseLayer);

    var _super = _createSuper(ProvinceLayer);

    function ProvinceLayer(scene) {
      var _this;

      var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, ProvinceLayer);

      _this = _super.call(this, scene, option);
      _this.layerType = 'Province';

      _this.addProvinceFillLayer(); // this.addProvinceLineLayer();


      return _this;
    } // 通过adcode 更新


    _createClass(ProvinceLayer, [{
      key: "updateDistrict",
      value: function updateDistrict(adcode, newData, joinByField) {
        var _this$options$bubble;

        if (!adcode && Array.isArray(adcode) && adcode.length === 0) {
          this.hide();
          return;
        }

        var _this$options = this.options,
            label = _this$options.label,
            showBorder = _this$options.showBorder;
        this.setOption({
          adcode: adcode
        });
        var fillData = this.filterData(this.fillRawData, adcode);
        var lineData = this.filterData(this.lineRawData, adcode);
        var labelData = this.filterLabelData(this.labelRawData, adcode);

        if (this.options.bubble && ((_this$options$bubble = this.options.bubble) === null || _this$options$bubble === void 0 ? void 0 : _this$options$bubble.enable) !== false) {
          var bubbleData = fillData.features.map(function (feature) {
            return _objectSpread2(_objectSpread2({}, feature.properties), {}, {
              center: [feature.properties.x, feature.properties.y]
            });
          });
          this.bubbleLayer.setData(bubbleData);
        }

        this.fillData = fillData;
        this.updateData(newData, joinByField);

        if (showBorder) {
          this.lineLayer.setData(lineData);
        }

        if (label.enable && this.labelLayer) {
          this.labelLayer.setData(labelData);
        }

        this.show();
      }
    }, {
      key: "getDefaultOption",
      value: function getDefaultOption() {
        var config = _get(_getPrototypeOf(ProvinceLayer.prototype), "getDefaultOption", this).call(this);

        return merge_1({}, config, {
          adcode: ['110000'],
          depth: 2,
          label: {
            field: 'NAME_CHN',
            textAllowOverlap: false
          },
          popup: {
            enable: true,
            Html: function Html(props) {
              return "<span>".concat(props.NAME_CHN, "</span>");
            }
          }
        });
      }
    }, {
      key: "filterData",
      value: function filterData(data, adcode) {
        var adcodeArray = Array.isArray(adcode) ? adcode : [adcode];
        var features = data.features.filter(function (fe) {
          // 根据Code过滤数据
          var _fe$properties = fe.properties,
              adcode_pro = _fe$properties.adcode_pro,
              adcode = _fe$properties.adcode;
          return adcodeArray.indexOf(adcode_pro) !== -1 || adcodeArray.indexOf(adcode) !== -1 || adcodeArray.indexOf('' + adcode_pro) !== -1 || adcodeArray.indexOf('' + adcode) !== -1;
        });
        return {
          type: 'FeatureCollection',
          features: features
        };
      }
    }, {
      key: "filterLabelData",
      value: function filterLabelData(data, adcode) {
        var adcodeArray = Array.isArray(adcode) ? adcode : [adcode];
        var features = data.filter(function (fe) {
          var adcode_pro = fe.adcode_pro,
              adcode = fe.adcode;
          return adcodeArray.indexOf(adcode_pro) !== -1 || adcodeArray.indexOf(adcode) !== -1 || adcodeArray.indexOf('' + adcode_pro) !== -1 || adcodeArray.indexOf('' + adcode) !== -1;
        });
        return features;
      }
    }, {
      key: "addProvinceFillLayer",
      value: function () {
        var _addProvinceFillLayer = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          var _this$options2, depth, adcode, label, showBorder, countryConfig, fillData, data, labelData;

          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _this$options2 = this.options, depth = _this$options2.depth, adcode = _this$options2.adcode, label = _this$options2.label, showBorder = _this$options2.showBorder;
                  countryConfig = getDataConfig(this.options.geoDataLevel).country.CHN[depth];
                  _context.next = 4;
                  return this.fetchData(countryConfig.fill);

                case 4:
                  fillData = _context.sent;
                  this.labelRawData = fillData.features.map(function (feature) {
                    return _objectSpread2(_objectSpread2({}, feature.properties), {}, {
                      center: [feature.properties.x, feature.properties.y]
                    });
                  });
                  data = this.filterData(fillData, adcode);
                  this.fillData = data;
                  labelData = this.filterLabelData(this.labelRawData, adcode);
                  this.fillRawData = fillData;
                  this.addFillLayer(data);

                  if (label.enable) {
                    this.addLabelLayer(labelData);
                  }

                  this.lineRawData = fillData;

                  if (showBorder) {
                    this.addFillLine(data);
                  }

                  this.emit('loaded');
                  this.loaded = true;

                case 16:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function addProvinceFillLayer() {
          return _addProvinceFillLayer.apply(this, arguments);
        }

        return addProvinceFillLayer;
      }()
    }, {
      key: "addProvinceLineLayer",
      value: function () {
        var _addProvinceLineLayer = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
          var _this$options3, depth, adcode, countryConfig, fillData, data;

          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _this$options3 = this.options, depth = _this$options3.depth, adcode = _this$options3.adcode;
                  countryConfig = getDataConfig(this.options.geoDataLevel).country.CHN[depth];
                  _context2.next = 4;
                  return this.fetchData(countryConfig.line);

                case 4:
                  fillData = _context2.sent;
                  data = this.filterData(fillData, adcode);
                  this.lineRawData = fillData;
                  this.addFillLine(data);

                case 8:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2, this);
        }));

        function addProvinceLineLayer() {
          return _addProvinceLineLayer.apply(this, arguments);
        }

        return addProvinceLineLayer;
      }()
    }]);

    return ProvinceLayer;
  }(BaseLayer);

  var CityLayer = /*#__PURE__*/function (_ProvinceLayer) {
    _inherits(CityLayer, _ProvinceLayer);

    var _super = _createSuper(CityLayer);

    function CityLayer() {
      var _this;

      _classCallCheck(this, CityLayer);

      _this = _super.apply(this, arguments);
      _this.layerType = 'City';
      return _this;
    }

    _createClass(CityLayer, [{
      key: "getDefaultOption",
      value: function getDefaultOption() {
        var config = _get(_getPrototypeOf(CityLayer.prototype), "getDefaultOption", this).call(this);

        return merge_1({}, config, {
          adcode: ['110000'],
          depth: 3
        });
      }
    }, {
      key: "filterData",
      value: function filterData(data, adcode) {
        var adcodeArray = Array.isArray(adcode) ? adcode : [adcode];
        var features = data.features.filter(function (fe) {
          var _fe$properties = fe.properties,
              adcode_cit = _fe$properties.adcode_cit,
              adcode = _fe$properties.adcode;
          return adcodeArray.indexOf(adcode_cit) !== -1 || adcodeArray.indexOf('' + adcode_cit) !== -1 || adcodeArray.indexOf(adcode) !== -1 || adcodeArray.indexOf('' + adcode) !== -1;
        });
        return {
          type: 'FeatureCollection',
          features: features
        };
      }
    }, {
      key: "filterLabelData",
      value: function filterLabelData(data, adcode) {
        var adcodeArray = Array.isArray(adcode) ? adcode : [adcode];
        var features = data.filter(function (fe) {
          var adcode_cit = fe.adcode_cit,
              adcode = fe.adcode;
          return adcodeArray.indexOf(adcode_cit) !== -1 || adcodeArray.indexOf('' + adcode_cit) !== -1 || adcodeArray.indexOf(adcode) !== -1 || adcodeArray.indexOf('' + adcode) !== -1;
        });
        return features;
      }
    }]);

    return CityLayer;
  }(ProvinceLayer);

  var DRILL_TYPE_LIST = ['Country', 'Region', 'Province', 'City', 'County'];
  var RegionList = {
    '100': {
      name: '华北区',
      code: '100',
      child: [110000, 120000, 130000, 150000, 210000, 220000, 230000, 370000],
      center: [118.740234375, 42.87596410238256]
    },
    '101': {
      name: '华东区',
      code: '101',
      child: [320000, 340000, 310000],
      center: [118.564453125, 31.765537409484374]
    },
    '102': {
      name: '华南区',
      code: '102',
      child: [440000, 450000, 460000],
      center: [110.709228515625, 22.238259929564308]
    },
    '103': {
      name: '华西区',
      code: '103',
      child: [500000, 510000, 520000, 530000],
      center: [90.263671875, 36.73888412439431]
    },
    '104': {
      name: '华中区',
      code: '104',
      child: [330000, 350000, 360000, 420000, 430000],
      center: [118.05908203124999, 28.38173504322308]
    },
    '301': {
      name: '中西区',
      code: '301',
      child: [140000, 410000, 540000, 610000, 620000, 630000, 640000, 650000],
      center: [109.1162109375, 35.209721645221386]
    },
    '701': {
      name: '港澳台',
      code: '701',
      child: [710000, 810000, 820000]
    }
  };

  var CountryLayer = /*#__PURE__*/function (_BaseLayer) {
    _inherits(CountryLayer, _BaseLayer);

    var _super = _createSuper(CountryLayer);

    function CountryLayer(scene) {
      var _this;

      var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, CountryLayer);

      _this = _super.call(this, scene, option);
      _this.layerType = 'Country';

      _this.init();

      return _this;
    }

    _createClass(CountryLayer, [{
      key: "init",
      value: function () {
        var _init = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          var _this$options, depth, showBorder, countryConfig;

          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _this$options = this.options, depth = _this$options.depth, showBorder = _this$options.showBorder;
                  _context.next = 3;
                  return this.addProvinceFill();

                case 3:
                  _context.next = 5;
                  return this.addProvinceLabel();

                case 5:
                  countryConfig = getDataConfig(this.options.geoDataLevel).country.CHN[depth];

                  if (!showBorder) {
                    _context.next = 15;
                    break;
                  }

                  _context.next = 9;
                  return this.addProvinceLine(countryConfig.provinceLine);

                case 9:
                  if (!(depth === 2 * 1)) {
                    _context.next = 12;
                    break;
                  }

                  _context.next = 12;
                  return this.addCityBorder(countryConfig.fill);

                case 12:
                  if (!(depth === 3 * 1)) {
                    _context.next = 15;
                    break;
                  }

                  _context.next = 15;
                  return this.addCountyBorder(countryConfig.fill);

                case 15:
                  this.emit('loaded');
                  this.loaded = true;

                case 17:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function init() {
          return _init.apply(this, arguments);
        }

        return init;
      }()
    }, {
      key: "addProvinceFill",
      value: function () {
        var _addProvinceFill = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
          var _this$options2, depth, adcode, countryConfig, fillData, data;

          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _this$options2 = this.options, depth = _this$options2.depth, adcode = _this$options2.adcode; // 根据depth 获取数据

                  countryConfig = getDataConfig(this.options.geoDataLevel).country.CHN[depth];
                  _context2.next = 4;
                  return this.fetchData(countryConfig.fill);

                case 4:
                  fillData = _context2.sent;
                  this.fillRawData = fillData;
                  data = fillData;

                  if (adcode && Array.isArray(adcode) && adcode.length !== 0) {
                    data = this.filterData(fillData, adcode);
                  }

                  this.fillData = data;
                  this.addFillLayer(data);

                case 10:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2, this);
        }));

        function addProvinceFill() {
          return _addProvinceFill.apply(this, arguments);
        }

        return addProvinceFill;
      }()
    }, {
      key: "addProvinceLabel",
      value: function () {
        var _addProvinceLabel = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
          var _this$options$label;

          var depth, countryConfig, fillLabel;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  depth = this.options.depth;
                  countryConfig = getDataConfig(this.options.geoDataLevel).country.CHN[depth];

                  if (!countryConfig.label) {
                    _context3.next = 8;
                    break;
                  }

                  _context3.next = 5;
                  return this.fetchData(countryConfig.label);

                case 5:
                  _context3.t0 = _context3.sent;
                  _context3.next = 9;
                  break;

                case 8:
                  _context3.t0 = null;

                case 9:
                  fillLabel = _context3.t0;

                  if (fillLabel && ((_this$options$label = this.options.label) === null || _this$options$label === void 0 ? void 0 : _this$options$label.enable)) {
                    this.addLabelLayer(fillLabel.filter(function (v) {
                      return v.name !== '澳门';
                    }));
                    this.addMCLabel();
                  }

                case 11:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3, this);
        }));

        function addProvinceLabel() {
          return _addProvinceLabel.apply(this, arguments);
        }

        return addProvinceLabel;
      }() // 国界,省界 完整国界

    }, {
      key: "addProvinceLine",
      value: function () {
        var _addProvinceLine = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(cfg) {
          var lineData, border1, border2, borderFc, borderFc2, nationalBorder, nationalFc;
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  _context4.next = 2;
                  return this.fetchData(cfg);

                case 2:
                  lineData = _context4.sent;
                  border1 = lineData.features.filter(function (feature) {
                    var type = feature.properties.type;
                    return type === '1';
                  }); // 香港 澳门

                  border2 = lineData.features.filter(function (feature) {
                    var type = feature.properties.type;
                    return type === '4';
                  });
                  borderFc = {
                    type: 'FeatureCollection',
                    features: border1
                  };
                  borderFc2 = {
                    type: 'FeatureCollection',
                    features: border2
                  };
                  nationalBorder = lineData.features.filter(function (feature) {
                    var type = feature.properties.type;
                    return type !== '1' && type !== '4';
                  });
                  nationalFc = {
                    type: 'FeatureCollection',
                    features: nationalBorder
                  };
                  this.addNationBorder(nationalFc, borderFc, borderFc2);

                case 10:
                case "end":
                  return _context4.stop();
              }
            }
          }, _callee4, this);
        }));

        function addProvinceLine(_x) {
          return _addProvinceLine.apply(this, arguments);
        }

        return addProvinceLine;
      }() // 普通边界

    }, {
      key: "addNormalProvinceLine",
      value: function () {
        var _addNormalProvinceLine = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(cfg) {
          return regeneratorRuntime.wrap(function _callee5$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                case "end":
                  return _context5.stop();
              }
            }
          }, _callee5);
        }));

        function addNormalProvinceLine(_x2) {
          return _addNormalProvinceLine.apply(this, arguments);
        }

        return addNormalProvinceLine;
      }()
    }, {
      key: "loadData",
      value: function () {
        var _loadData = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
          var depth, countryConfig, fillData, fillLabel;
          return regeneratorRuntime.wrap(function _callee6$(_context6) {
            while (1) {
              switch (_context6.prev = _context6.next) {
                case 0:
                  depth = this.options.depth;
                  countryConfig = getDataConfig(this.options.geoDataLevel).country.CHN[depth];
                  _context6.next = 4;
                  return this.fetchData(countryConfig.fill);

                case 4:
                  fillData = _context6.sent;

                  if (!countryConfig.label) {
                    _context6.next = 11;
                    break;
                  }

                  _context6.next = 8;
                  return this.fetchData(countryConfig.label);

                case 8:
                  _context6.t0 = _context6.sent;
                  _context6.next = 12;
                  break;

                case 11:
                  _context6.t0 = null;

                case 12:
                  fillLabel = _context6.t0;
                  return _context6.abrupt("return", [fillData, fillLabel]);

                case 14:
                case "end":
                  return _context6.stop();
              }
            }
          }, _callee6, this);
        }));

        function loadData() {
          return _loadData.apply(this, arguments);
        }

        return loadData;
      }() // 省级行政区划

    }, {
      key: "addNationBorder",
      value: function () {
        var _addNationBorder = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(boundaries, boundaries2, boundaries3) {
          var _this$options3, nationalStroke, provinceStroke, provinceStrokeWidth, nationalWidth, chinaNationalStroke, chinaNationalWidth, coastlineStroke, coastlineWidth, showBorder, stroke, strokeWidth, visible, zIndex, strokeOpacity, lineLayer, lineLayer2, lineLayer3;

          return regeneratorRuntime.wrap(function _callee7$(_context7) {
            while (1) {
              switch (_context7.prev = _context7.next) {
                case 0:
                  _this$options3 = this.options, nationalStroke = _this$options3.nationalStroke, provinceStroke = _this$options3.provinceStroke, provinceStrokeWidth = _this$options3.provinceStrokeWidth, nationalWidth = _this$options3.nationalWidth, chinaNationalStroke = _this$options3.chinaNationalStroke, chinaNationalWidth = _this$options3.chinaNationalWidth, coastlineStroke = _this$options3.coastlineStroke, coastlineWidth = _this$options3.coastlineWidth, showBorder = _this$options3.showBorder, stroke = _this$options3.stroke, strokeWidth = _this$options3.strokeWidth, visible = _this$options3.visible, zIndex = _this$options3.zIndex, strokeOpacity = _this$options3.strokeOpacity; // 添加国界线

                  lineLayer = new l7.LineLayer({
                    zIndex: zIndex + 0.1,
                    visible: visible && showBorder
                  }).source(boundaries).size('type', function (v) {
                    if (v === '3') {
                      return provinceStrokeWidth;
                    } else if (v === '2') {
                      return coastlineWidth;
                    } else if (v === '0') {
                      return chinaNationalWidth;
                    } else {
                      return '#fff';
                    }
                  }).shape('line').color('type', function (v) {
                    if (v === '3') {
                      return provinceStroke; // 省界
                    } else if (v === '2') {
                      return coastlineStroke; // 海岸线
                    } else if (v === '0') {
                      return chinaNationalStroke; // 中国国界线
                    } else {
                      return '#fff';
                    }
                  }); // 添加未定国界

                  lineLayer2 = new l7.LineLayer({
                    zIndex: zIndex + 0.1,
                    visible: visible && showBorder
                  }).source(boundaries2).size(chinaNationalWidth).shape('line').color(chinaNationalStroke).style({
                    lineType: 'dash',
                    dashArray: [2, 2]
                  }); // 添加澳门香港界限

                  lineLayer3 = new l7.LineLayer({
                    zIndex: zIndex + 0.1,
                    visible: visible && showBorder
                  }).source(boundaries3).size(provinceStrokeWidth).shape('line').color(provinceStroke).style({
                    lineType: 'dash',
                    dashArray: [4, 2, 2, 2]
                  });
                  this.scene.addLayer(lineLayer);
                  this.scene.addLayer(lineLayer2);
                  this.scene.addLayer(lineLayer3);
                  this.layers.push(lineLayer, lineLayer2, lineLayer3);

                case 8:
                case "end":
                  return _context7.stop();
              }
            }
          }, _callee7, this);
        }));

        function addNationBorder(_x3, _x4, _x5) {
          return _addNationBorder.apply(this, arguments);
        }

        return addNationBorder;
      }() // 市边界

    }, {
      key: "addCityBorder",
      value: function () {
        var _addCityBorder = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(cfg) {
          var border1, _this$options4, cityStroke, cityStrokeWidth, visible, strokeOpacity, cityline;

          return regeneratorRuntime.wrap(function _callee8$(_context8) {
            while (1) {
              switch (_context8.prev = _context8.next) {
                case 0:
                  _context8.next = 2;
                  return this.fetchData(cfg);

                case 2:
                  border1 = _context8.sent;
                  _this$options4 = this.options, cityStroke = _this$options4.cityStroke, cityStrokeWidth = _this$options4.cityStrokeWidth, visible = _this$options4.visible, strokeOpacity = _this$options4.strokeOpacity;
                  cityline = new l7.LineLayer({
                    zIndex: 2,
                    visible: visible
                  }).source(border1).color(cityStroke).size(cityStrokeWidth).style({
                    opacity: strokeOpacity
                  });
                  this.scene.addLayer(cityline);
                  this.layers.push(cityline);

                case 7:
                case "end":
                  return _context8.stop();
              }
            }
          }, _callee8, this);
        }));

        function addCityBorder(_x6) {
          return _addCityBorder.apply(this, arguments);
        }

        return addCityBorder;
      }() // 县级边界

    }, {
      key: "addCountyBorder",
      value: function () {
        var _addCountyBorder = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(cfg) {
          var border1, _this$options5, countyStrokeWidth, countyStroke, visible, strokeOpacity, cityline;

          return regeneratorRuntime.wrap(function _callee9$(_context9) {
            while (1) {
              switch (_context9.prev = _context9.next) {
                case 0:
                  _context9.next = 2;
                  return this.fetchData(cfg);

                case 2:
                  border1 = _context9.sent;
                  _this$options5 = this.options, countyStrokeWidth = _this$options5.countyStrokeWidth, countyStroke = _this$options5.countyStroke, visible = _this$options5.visible, strokeOpacity = _this$options5.strokeOpacity;
                  cityline = new l7.LineLayer({
                    zIndex: 2,
                    visible: visible
                  }).source(border1).color(countyStroke).size(countyStrokeWidth).style({
                    opacity: strokeOpacity
                  });
                  this.scene.addLayer(cityline);
                  this.layers.push(cityline);

                case 7:
                case "end":
                  return _context9.stop();
              }
            }
          }, _callee9, this);
        }));

        function addCountyBorder(_x7) {
          return _addCountyBorder.apply(this, arguments);
        }

        return addCountyBorder;
      }()
    }, {
      key: "addMCLabel",
      value: function addMCLabel() {
        var data = [{
          name: '澳门',
          center: [113.537747, 22.187009]
        }];
        var labelLayer1 = this.addText(data, {
          maxZoom: 2.9
        }, [-45, -10]);
        var labelLayer2 = this.addText(data, {
          minZoom: 3,
          maxZoom: 4
        }, [-35, -10]);
        var labelLayer = this.addText(data, {
          minZoom: 4.1
        }, [0, 0]);
        this.scene.addLayer(labelLayer);
        this.scene.addLayer(labelLayer1);
        this.scene.addLayer(labelLayer2);
        this.layers.push(labelLayer, labelLayer1, labelLayer2);
      }
    }, {
      key: "filterData",
      value: function filterData(data, adcode) {
        var adcodeArray = Array.isArray(adcode) ? adcode : [adcode];
        var features = data.features.filter(function (fe) {
          // 根据Code过滤数据
          var _fe$properties = fe.properties,
              REGION_CODE = _fe$properties.REGION_CODE,
              adcode_pro = _fe$properties.adcode_pro;
          return adcodeArray.indexOf('86') !== -1 || adcodeArray.indexOf(86) !== -1 || adcodeArray.indexOf(REGION_CODE) !== -1 || adcodeArray.indexOf('' + REGION_CODE) !== -1 || adcodeArray.indexOf(adcode_pro) !== -1 || adcodeArray.indexOf('' + adcode_pro) !== -1;
        });
        return {
          type: 'FeatureCollection',
          features: features
        };
      }
    }, {
      key: "addText",
      value: function addText(labelData, option, offset) {
        var _this$options6 = this.options,
            label = _this$options6.label,
            zIndex = _this$options6.zIndex,
            visible = _this$options6.visible;
        var labelLayer = new l7.PointLayer(_objectSpread2({
          zIndex: zIndex + 0.4,
          visible: visible
        }, option)).source(labelData, {
          parser: {
            type: 'json',
            coordinates: 'center'
          }
        }).color(label.color).shape('name', 'text').size(label.size).style({
          opacity: label.opacity,
          stroke: label.stroke,
          strokeWidth: label.strokeWidth,
          textAllowOverlap: label.textAllowOverlap,
          textOffset: offset
        });
        return labelLayer;
      }
    }, {
      key: "addRegionLabel",
      value: function addRegionLabel() {
        var data = Object.values(RegionList).map(function (v) {
          return v;
        }); // console.log('data', data);
        // this.addLabelLayer(data);
      }
    }]);

    return CountryLayer;
  }(BaseLayer);

  var CityLayer$1 = /*#__PURE__*/function (_ProvinceLayer) {
    _inherits(CityLayer, _ProvinceLayer);

    var _super = _createSuper(CityLayer);

    function CityLayer() {
      var _this;

      _classCallCheck(this, CityLayer);

      _this = _super.apply(this, arguments);
      _this.layerType = 'County';
      return _this;
    }

    _createClass(CityLayer, [{
      key: "getDefaultOption",
      value: function getDefaultOption() {
        var config = _get(_getPrototypeOf(CityLayer.prototype), "getDefaultOption", this).call(this);

        return merge_1({}, config, {
          adcode: ['110100'],
          depth: 3
        });
      }
    }, {
      key: "filterData",
      value: function filterData(data, adcode) {
        var adcodeArray = Array.isArray(adcode) ? adcode : [adcode];
        var features = data.features.filter(function (fe) {
          var code = fe.properties.adcode;
          return adcodeArray.indexOf(code) !== -1 || adcodeArray.indexOf('' + code) !== -1;
        });
        return {
          type: 'FeatureCollection',
          features: features
        };
      }
    }, {
      key: "filterLabelData",
      value: function filterLabelData(data, adcode) {
        var adcodeArray = Array.isArray(adcode) ? adcode : [adcode];
        var features = data.filter(function (fe) {
          var code = fe.adcode;
          return adcodeArray.indexOf(code) !== -1 || adcodeArray.indexOf('' + code) !== -1;
        });
        return features;
      }
    }]);

    return CityLayer;
  }(ProvinceLayer);

  var RegionLayer = /*#__PURE__*/function (_ProvinceLayer) {
    _inherits(RegionLayer, _ProvinceLayer);

    var _super = _createSuper(RegionLayer);

    function RegionLayer() {
      var _this;

      _classCallCheck(this, RegionLayer);

      _this = _super.apply(this, arguments);
      _this.layerType = 'Region';
      return _this;
    }

    return RegionLayer;
  }(ProvinceLayer);

  function mergeCustomizer$1(objValue, srcValue) {
    if (Array.isArray(srcValue)) {
      return srcValue;
    }
  }

  var DrillDownLayer = /*#__PURE__*/function () {
    function DrillDownLayer(scene, option) {
      _classCallCheck(this, DrillDownLayer);

      this.layers = [];
      this.options = mergeWith_1(this.getDefaultOption(), option, mergeCustomizer$1);
      this.drillState = this.options.viewStart;
      this.scene = scene;
      this.drillList = this.getViewList(); // 初始化各层级图层；

      this.initLayers(scene);
      this.initLayerEvent();
      this.scene.setMapStatus({
        doubleClickZoom: false
      });
    }

    _createClass(DrillDownLayer, [{
      key: "getDefaultOption",
      value: function getDefaultOption() {
        return {
          drillDepth: 2,
          drillStart: 1,
          customTrigger: false,
          autoUpdateData: true,
          regionDrill: false,
          drillDownTriggerEvent: 'click',
          drillUpTriggerEvent: 'undblclick',
          provinceData: [],
          viewStart: 'Country',
          viewEnd: 'County',
          cityData: [],
          countyData: [],
          city: {
            adcode: [],
            depth: 2
          },
          region: {
            adcode: [],
            depth: 1
          },
          county: {
            adcode: []
          }
        };
      } // 国家视角 下钻

    }, {
      key: "addCountryEvent",
      value: function addCountryEvent() {
        var _this = this;

        var _this$options = this.options,
            drillDownTriggerEvent = _this$options.drillDownTriggerEvent,
            drillDownEvent = _this$options.drillDownEvent; // 省级下钻到市

        this.provinceLayer.fillLayer.on(drillDownTriggerEvent, function (e) {
          var adcode = e.feature.properties.adcode;
          var type = 'Province';
          _this.drillState = 'Province';

          if (_this.options.regionDrill) {
            var REGION_CODE = e.feature.properties.REGION_CODE;
            adcode = RegionList[REGION_CODE].child; // 下钻到省级

            _this.drillState = 'Region';
            type = 'Region';
          } // 下钻到省份


          if (_this.options.autoUpdateData) {
            _this.drillDown(adcode);
          } // 下钻事件


          if (_this.drillList.indexOf(type) !== -1) {
            _this.provinceLayer.hide();

            drillDownEvent && drillDownEvent(e.feature.properties, type, adcode);
          }
        });
      } // 大区下钻

    }, {
      key: "addRegionEvent",
      value: function addRegionEvent() {
        var _this2 = this;

        var _this$options2 = this.options,
            drillDownTriggerEvent = _this$options2.drillDownTriggerEvent,
            drillUpTriggerEvent = _this$options2.drillUpTriggerEvent,
            drillUpEvent = _this$options2.drillUpEvent,
            drillDownEvent = _this$options2.drillDownEvent;
        this.regionLayer.fillLayer.on(drillUpTriggerEvent, function (e) {
          // const properties = this.getProperties(
          //   this.regionLayer.getFillData(),
          //   this.regionLayer.getOptions().adcode,
          // );
          _this2.drillUp('Country');

          if (_this2.drillList.indexOf('Country') !== -1) drillUpEvent && drillUpEvent({
            from: 'region',
            to: 'country'
          });
        });
        this.regionLayer.fillLayer.on(drillDownTriggerEvent, function (e) {
          _this2.drillState = 'Province';

          if (_this2.options.autoUpdateData) {
            _this2.drillDown(e.feature.properties.adcode);
          } // 是否下钻


          if (_this2.drillList.indexOf('Province') !== -1) {
            _this2.regionLayer.hide();

            drillDownEvent && drillDownEvent(e.feature.properties, 'Province', e.feature.properties.adcode);
          }
        });
      } // 省份视角下钻

    }, {
      key: "addProvinceEvent",
      value: function addProvinceEvent() {
        var _this3 = this;

        var _this$options3 = this.options,
            drillDownTriggerEvent = _this$options3.drillDownTriggerEvent,
            drillUpTriggerEvent = _this$options3.drillUpTriggerEvent,
            drillUpEvent = _this$options3.drillUpEvent,
            drillDownEvent = _this$options3.drillDownEvent;
        this.cityLayer.fillLayer.on(drillUpTriggerEvent, function () {
          // const properties = this.getProperties(
          //   this.provinceLayer.getFillData(),
          //   this.cityLayer.getOptions().adcode,
          // );
          _this3.drillState = 'Province';
          var next = _this3.options.regionDrill ? 'Region' : 'Country';

          _this3.drillUp(next);

          if (_this3.drillList.indexOf(next) !== -1) drillUpEvent && drillUpEvent({
            to: next,
            from: 'Province'
          });
        });
        this.cityLayer.fillLayer.on(drillDownTriggerEvent, function (e) {
          _this3.drillState = 'City';

          if (_this3.options.autoUpdateData) {
            _this3.drillDown(e.feature.properties.adcode);
          }

          if (_this3.drillList.indexOf('City') !== -1) {
            drillDownEvent && drillDownEvent(e.feature.properties, 'City', e.feature.properties.adcode);
          }
        });
      } // 添加县级行政区划

    }, {
      key: "addCityEvent",
      value: function addCityEvent() {
        var _this4 = this;

        var _this$options4 = this.options,
            drillDownTriggerEvent = _this$options4.drillDownTriggerEvent,
            drillUpTriggerEvent = _this$options4.drillUpTriggerEvent,
            drillUpEvent = _this$options4.drillUpEvent;
        this.countyLayer.fillLayer.on(drillUpTriggerEvent, function () {
          // const properties = this.getProperties(
          //   this.cityLayer.getFillData(),
          //   this.countyLayer.getOptions().adcode,
          // );
          _this4.drillUp('Province');

          if (_this4.drillList.indexOf('Province') !== -1) drillUpEvent && drillUpEvent({
            to: 'Province',
            from: 'city'
          });
        });
      }
    }, {
      key: "show",
      value: function show() {
        this.layers.forEach(function (layer) {
          return layer.show();
        });
      }
    }, {
      key: "hide",
      value: function hide() {
        this.layers.forEach(function (layer) {
          return layer.hide();
        });
      }
    }, {
      key: "destroy",
      value: function destroy() {
        this.layers.forEach(function (layer) {
          return layer.destroy();
        });
      } // 省份视图 城市粒度

    }, {
      key: "showProvinceView",
      value: function showProvinceView(adcode, newData, joinByField) {
        this.cityLayer.show();
        this.cityLayer.updateDistrict(adcode, newData, joinByField);
        this.cityLayer.fillLayer.fitBounds();

        if (this.options.regionDrill) {
          this.regionLayer.hide();
        } else {
          this.provinceLayer.hide();
        }

        this.drillState = 'Province';
      } // 城市视图 区县粒度

    }, {
      key: "showCityView",
      value: function showCityView(code, newData, joinByField) {
        this.countyLayer.show();
        var adcode = "".concat(code);

        if (adcode.substr(2, 2) === '00') {
          // 重庆包含两个编码
          adcode = [adcode.substr(0, 2) + '0100', adcode.substr(0, 2) + '0200'];
        } // 更新县级行政区划


        this.countyLayer.updateDistrict(adcode, newData, joinByField);
        this.countyLayer.fillLayer.fitBounds();
        this.cityLayer.hide();
        this.drillState = 'City';
      } // 大区视图 省份视角

    }, {
      key: "showRegionView",
      value: function showRegionView(adcode, newData, joinByField) {
        this.regionLayer.show();
        this.regionLayer.updateDistrict(adcode, newData, joinByField);
        this.regionLayer.fillLayer.fitBounds();
        this.provinceLayer.hide();
        this.drillState = 'Region';
      }
      /**
       * 向上
       */

    }, {
      key: "drillUp",
      value: function drillUp(type) {
        if (this.drillList.indexOf(type) === -1) {
          return;
        }

        switch (type) {
          case 'Province':
            this.cityLayer.show();
            this.cityLayer.fillLayer.fitBounds();
            this.countyLayer.hide();
            this.drillState = 'Province';
            break;

          case 'Country':
            this.provinceLayer.show();
            this.provinceLayer.fillLayer.fitBounds();

            if (this.options.regionDrill) {
              this.regionLayer.hide();
            } else {
              this.cityLayer.hide();
            }

            this.drillState = 'Country';
            break;

          case 'Region':
            if (this.options.regionDrill) {
              this.regionLayer.show();
              this.regionLayer.fillLayer.fitBounds();
              this.cityLayer.hide();
              this.drillState = 'Region';
            }

            break;
        }
      }
    }, {
      key: "drillDown",
      value: function drillDown(adcode, newData, joinByField) {
        if (this.drillList.indexOf(this.drillState) === -1) {
          return;
        }

        switch (this.drillState) {
          case 'Province':
            this.showProvinceView(adcode, newData, joinByField); // 市

            break;

          case 'Region':
            this.showRegionView(adcode, newData, joinByField); // 省

            break;

          case 'City':
            this.showCityView(adcode, newData, joinByField); // 区县

            break;
        }
      }
    }, {
      key: "updateData",
      value: function updateData(layer, newData, joinByField) {
        switch (layer) {
          case 'Country':
            this.provinceLayer.updateData(newData, joinByField);
            break;

          case 'Region':
            this.regionLayer.updateData(newData, joinByField);
            break;

          case 'Province':
            this.cityLayer.updateData(newData, joinByField);
            break;

          case 'City':
            this.countyLayer.updateData(newData, joinByField);
        }
      }
    }, {
      key: "getLayerOption",
      value: function getLayerOption(type) {
        var _this$options5 = this.options,
            joinBy = _this$options5.joinBy,
            label = _this$options5.label,
            bubble = _this$options5.bubble,
            fill = _this$options5.fill,
            popup = _this$options5.popup,
            geoDataLevel = _this$options5.geoDataLevel,
            onClick = _this$options5.onClick;
        var datatype = type + 'Data';
        return _objectSpread2({
          data: this.options[datatype],
          joinBy: joinBy,
          label: label,
          bubble: bubble,
          fill: fill,
          popup: popup,
          onClick: onClick,
          geoDataLevel: geoDataLevel
        }, this.options[type.toLowerCase()]);
      }
    }, {
      key: "initLayers",
      value: function initLayers(scene) {
        var viewList = this.getViewList();
        viewList.indexOf('Country') !== -1 && (this.provinceLayer = new CountryLayer(scene, _objectSpread2({}, this.getLayerOption('Province'))));
        viewList.indexOf('Region') !== -1 && (this.regionLayer = new RegionLayer(scene, this.getLayerOption('Region')));
        viewList.indexOf('Province') !== -1 && (this.cityLayer = new ProvinceLayer(scene, this.getLayerOption('City')));
        viewList.indexOf('City') !== -1 && (this.countyLayer = new CityLayer(scene, this.getLayerOption('County')));
      }
    }, {
      key: "initLayerEvent",
      value: function initLayerEvent() {
        var _this5 = this;

        var viewList = this.getViewList();

        if (!this.options.customTrigger) {
          viewList.indexOf('Country') !== -1 && this.provinceLayer.on('loaded', function () {
            // 支持大区 或者省份下钻
            _this5.addCountryEvent();

            if (_this5.options.viewStart !== 'Country') _this5.provinceLayer.hide();

            _this5.layers.push(_this5.provinceLayer);
          });
          viewList.indexOf('Region') !== -1 && this.regionLayer.on('loaded', function () {
            // 支持大区 或者省份下钻
            _this5.addRegionEvent();

            if (_this5.options.viewStart !== 'Region') _this5.regionLayer.hide();

            _this5.layers.push(_this5.regionLayer);
          });
          viewList.indexOf('Province') !== -1 && this.cityLayer.on('loaded', function () {
            _this5.addProvinceEvent();

            if (_this5.options.viewStart !== 'Province') _this5.cityLayer.hide();

            _this5.layers.push(_this5.cityLayer);
          });
          viewList.indexOf('City') !== -1 && this.countyLayer.on('loaded', function () {
            _this5.addCityEvent();

            if (_this5.options.viewStart !== 'City') _this5.countyLayer.hide();

            _this5.layers.push(_this5.countyLayer);
          });
        }
      }
    }, {
      key: "getViewList",
      value: function getViewList() {
        var _this$options6 = this.options,
            viewStart = _this$options6.viewStart,
            viewEnd = _this$options6.viewEnd;
        var drillList = DRILL_TYPE_LIST;

        if (!this.options.regionDrill && drillList.indexOf('Region') !== -1) {
          drillList.splice(1, 1);
        }

        var start = drillList.indexOf(viewStart);
        var end = drillList.indexOf(viewEnd);

        if (start === -1 || end === -1 || end < start) {
          throw new Error('下钻 viewStart, viewEnd 参数错误');
        }

        return drillList.slice(start, end + 1);
      }
    }, {
      key: "getProperties",
      value: function getProperties(data, adcode) {
        var adcodeArray = Array.isArray(adcode) ? adcode : [adcode];
        var feature = data.features.filter(function (fe) {
          var code = fe.properties.adcode;
          return adcodeArray.indexOf(code) !== -1 || adcodeArray.indexOf('' + code) !== -1;
        });
        return feature[0] ? feature[0].properties : {};
      }
    }]);

    return DrillDownLayer;
  }();

  var WorldLayer = /*#__PURE__*/function (_BaseLayer) {
    _inherits(WorldLayer, _BaseLayer);

    var _super = _createSuper(WorldLayer);

    function WorldLayer(scene) {
      var _this;

      var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      _classCallCheck(this, WorldLayer);

      _this = _super.call(this, scene, option);

      _this.loadData().then(function (_ref) {
        var _this$options$label;

        var _ref2 = _slicedToArray(_ref, 3),
            fillData = _ref2[0],
            lineData = _ref2[1],
            fillLabel = _ref2[2];

        _this.addFillLayer(fillData);

        if (_this.options.showBorder) {
          _this.addFillLine(lineData);
        }

        if ((_this$options$label = _this.options.label) === null || _this$options$label === void 0 ? void 0 : _this$options$label.enable) {
          _this.addLabelLayer(fillLabel, 'json');
        }
      });

      return _this;
    }

    _createClass(WorldLayer, [{
      key: "addFillLine",
      value: function addFillLine(data) {
        // 未定国界
        var bord1 = data.features.filter(function (feature) {
          return feature.properties.type === '10' || feature.properties.type === '1' || feature.properties.type === '11' || feature.properties.type === '8';
        });
        var bordFc = {
          type: 'FeatureCollection',
          features: bord1
        }; // 已确定国界

        var nationalBorder = data.features.filter(function (feature) {
          return feature.properties.type !== '10' && feature.properties.type !== '1' && feature.properties.type !== '11' && feature.properties.type !== '8';
        });
        var nationalFc = {
          type: 'FeatureCollection',
          features: nationalBorder
        };
        this.addNationBorder(nationalFc, bordFc);
      }
    }, {
      key: "loadData",
      value: function () {
        var _loadData = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          var countryConfig, fillData, lineData, fillLabel;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  countryConfig = getDataConfig(this.options.geoDataLevel).world;
                  _context.next = 3;
                  return this.fetchData(countryConfig.fill);

                case 3:
                  fillData = _context.sent;
                  _context.next = 6;
                  return this.fetchData(countryConfig.line);

                case 6:
                  lineData = _context.sent;
                  // const fillLabel = await this.fetchData(countryConfig.label);
                  fillLabel = fillData.features.map(function (feature) {
                    return _objectSpread2(_objectSpread2({}, feature.properties), {}, {
                      center: [feature.properties.x, feature.properties.y]
                    });
                  });
                  return _context.abrupt("return", [fillData, lineData, fillLabel]);

                case 9:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function loadData() {
          return _loadData.apply(this, arguments);
        }

        return loadData;
      }()
    }, {
      key: "addNationBorder",
      value: function addNationBorder(boundaries, boundaries2) {
        var _this$options = this.options,
            nationalStroke = _this$options.nationalStroke,
            nationalWidth = _this$options.nationalWidth,
            coastlineStroke = _this$options.coastlineStroke,
            chinaNationalStroke = _this$options.chinaNationalStroke,
            chinaNationalWidth = _this$options.chinaNationalWidth,
            coastlineWidth = _this$options.coastlineWidth,
            visible = _this$options.visible,
            zIndex = _this$options.zIndex; // 添加国界线

        var lineLayer = new l7.LineLayer({
          zIndex: zIndex + 0.1,
          visible: visible
        }).source(boundaries) // .size(0.6)
        .size('type', function (v) {
          if (v === '0') {
            return chinaNationalWidth; // 中国国界线
          } else if (v === '2' || v === '9') {
            return coastlineWidth; // 中国海岸线
          } else if (v === '7') {
            return nationalWidth; // 国外国界
          } else {
            return nationalWidth;
          }
        }).color('type', function (v) {
          if (v === '0') {
            return chinaNationalStroke; // 中国国界线
          } else if (v === '2' || v === '9') {
            return coastlineStroke; // 中国海岸线
          } else if (v === '7') {
            return nationalStroke; // 国外国界
          } else {
            return nationalStroke;
          }
        }); // 添加未定国界

        var lineLayer2 = new l7.LineLayer({
          zIndex: zIndex + 0.1,
          visible: visible
        }).source(boundaries2).size('type', function (v) {
          if (v === '1') {
            return chinaNationalWidth;
          } else {
            return nationalWidth;
          }
        }).shape('line').color('type', function (v) {
          if (v === '1') {
            return chinaNationalStroke;
          } else {
            return nationalStroke;
          }
        }).style({
          lineType: 'dash',
          dashArray: [2, 2]
        });
        this.scene.addLayer(lineLayer);
        this.scene.addLayer(lineLayer2);
        this.layers.push(lineLayer, lineLayer2);
      }
    }]);

    return WorldLayer;
  }(BaseLayer);

  function getRegionByAdcode(code) {
    var region = Object.values(RegionList).find(function (region) {
      return region.child.indexOf(code) !== -1;
    });
    return region;
  }

  exports.CityLayer = CityLayer;
  exports.CountryLayer = CountryLayer;
  exports.CountyLayer = CityLayer$1;
  exports.DRILL_TYPE_LIST = DRILL_TYPE_LIST;
  exports.DataConfig = DataConfig;
  exports.DrillDownLayer = DrillDownLayer;
  exports.ProvinceLayer = ProvinceLayer;
  exports.RegionLayer = RegionLayer;
  exports.RegionList = RegionList;
  exports.WorldLayer = WorldLayer;
  exports.getDataConfig = getDataConfig;
  exports.getRegionByAdcode = getRegionByAdcode;
  exports.setDataConfig = setDataConfig;
  exports.setDataLevel = setDataLevel;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=l7-district.js.map
