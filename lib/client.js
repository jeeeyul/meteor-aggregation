Meteor.startup(function(){
	Meteor.Collection.prototype.aggregate = function(pipe, callback) {
		var cname = this._collection.name;
		Meteor.call("net.jeeeyul.aggregate.aggregate", cname, pipe, callback);
	};
});
