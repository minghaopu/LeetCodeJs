(function(window, undefined) {
	var lCode = (function() {
		var lCode = function() {
			return new lCode.fn.init();
		}
		return lCode;
	})();
	lCode.fn = lCode.prototype = {
		constructor: lCode,
		init: function() {},
		version: "1.0.0"
	}
	lCode.extend = lCode.fn.extend = function() {
		var opions, name, src, copy, target = {};
		if (arguments.length === 1) {
			target = this;
		}
		if ((options = arguments[0]) != null) {
			for (name in options) {
				src = target[name];
				copy = options[name];
				if (target === copy) {
					continue;
				}
				if (copy !== undefined) {
					target[name] = copy;
					target[name].fn = target[name].prototype
				}
			}
		}
	}

	lCode.fn.init.prototype = lCode.fn;
	window.lCode = lCode;
})(window)
