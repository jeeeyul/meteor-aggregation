var path = Npm.require('path');
var db = Npm.require('mongojs')(process.env.MONGO_URL);
var Future = Npm.require(path.join('fibers', 'future'));

Meteor.methods({
	"net.jeeeyul.aggregate.aggregate" : function(collection, pipe){
		var future = new Future();
		db.collection(collection).aggregate(pipe, function(err, docs){
			if(err){
				future.throw(err);
				return;
			}else{
				future.return(docs);
			}
		});
		
		return future.wait();
	}
});

Meteor.Collection.prototype.aggregate = function(pipe){
	var cname = this._name;
	
	var future = new Future();
	db.collection(cname).aggregate(pipe, function(err, docs){
		if(err){
			future.throw(err);
			return;
		}else{
			future.return(docs);
		}
	});
	
	return future.wait();
};
