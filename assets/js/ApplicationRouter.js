var ApplicationRouter = Backbone.Router.extend({

	initialize: function(el) {
		this.el = el;

		this.homeView = new ContentView({template: '#home'});
		this.aboutView = new ContentView({template: '#about'});
		this.contactUsView = new ContentView({template: '#contact_us'});

	},

	routes: {
		"": "home",
		"home": "home",
		"about": "about",
		"contact_us": "contact_us"
	},

	currentView: null,

	switchView: function(view) {
		if (this.currentView) {
			// Detach the old view
			this.currentView.remove();
		}

		// Move the view element into the DOM (replacing the old content)
		this.el.html(view.el);

		// Render view after it is in the DOM (styles are applied)
		view.render();

		this.currentView = view;
	},

	/*
	 * Change the active element in the topbar
	 */
	setActiveEntry: function(url) {
		// Unmark all entries
		$('li').removeClass('active');

		// Mark active entry
		$("li a[href='" + url + "']").parents('li').addClass('active');
	},

	home: function() {
		this.switchView(this.homeView);
		this.setActiveEntry('#home');
	},

	about: function() {
		this.switchView(this.aboutView);
		this.setActiveEntry('#about');
	},

	contact_us: function() {
		this.switchView(this.contactUsView);
		this.setActiveEntry('#contact_us');
	}

});
