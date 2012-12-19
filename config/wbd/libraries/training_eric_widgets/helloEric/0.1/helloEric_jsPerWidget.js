
var HelloEric_[[widgetId]] = function() {
	return {
		myVariable: null,

		init: function() {
			alert("HelloEric_[[widgetId]].init");
			
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

//jQuery(HelloEric_[[widgetId]].init()); // Run after page loads