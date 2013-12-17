Package.describe({
	summary : "Supports aggregation for Meteor"
});

Npm.depends({
	'mongojs' : "0.9.9",
	"fibers" : "1.0.1"
});

Package.on_use(function(api, where) {
	api.use([ "livedata", "mongo-livedata" ], [ "client", "server" ]);

	var path = Npm.require('path');
	api.add_files(path.join("lib", "server.js"), "server");
	api.add_files(path.join("lib", "client.js"), "client");

	api.export([ "MongojsDB" ], [ "server" ]);
});
