
var HelloEric = function() {
	return {
		myVariable: null,

		init: function() {
			alert("HelloEric.init()");

//			// attach an event to an HTML element
//			var self = this;
//			jQuery(".HelloEric .myElementClass").click(function() {
//				self.myMethod();
//				// do something
//				...
//			});
		},
		
		myMethod: function() {
			alert("HelloEric.myMethod()");
		}
		// no comma after last method
	};
}();

//jQuery(HelloEric.init()); // Run after page loads