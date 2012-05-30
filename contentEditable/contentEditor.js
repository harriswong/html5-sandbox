var ContentEditor = ContentEditor || {};

/* global variables */
ContentEditor.container = $('#textBox');

/**
 * container must be an ID
 */
ContentEditor.init = function (container) {
	var that = {};
	that.container = $(document.getElementById(container)) || ContentEditor.container;
	
	//initialize
	that.selectors = {
		boldButton: '.ce-bold'
	};
	
	//bind
	ContentEditor.bind(that);  //bind events
};

ContentEditor.bindBold = function (that) {
	var button = $(that.selectors.boldButton);
	button.bind('click', function(e) {
		ContentEditor.formatDoc(that, 'bold');
		console.log(e);
	});
}

/**
 * Execute format 
 * 
 */
ContentEditor.formatDoc = function (that, command, value) {
  console.log();
  document.execCommand(command, false, value); 
  that.container.focus();
}

/**
 * Bind all events for this module
 */
ContentEditor.bind = function (that) {
	ContentEditor.bindBold(that);
};
