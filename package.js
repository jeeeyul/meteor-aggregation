Package.describe({
	summary : "엇따 테스트랑께"
});

Npm.depends({
	'mongojs' : "0.9.9",
	"fibers" : "1.0.1"
});

Package.on_use(function(api, where) {
	var path = Npm.require('path');
	api.add_files(path.join("lib", "server.js"), "server");
	api.add_files(path.join("lib", "client.js"), "client");
});

