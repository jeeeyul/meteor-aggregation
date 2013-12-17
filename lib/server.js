var path = Npm.require('path');
var Future = Npm.require(path.join('fibers', 'future'));

MongojsDB = Npm.require('mongojs')(process.env.MONGO_URL);

Meteor.methods({
	"net.jeeeyul.aggregate.aggregate" : function(collection, pipe){
		var future = new Future();
		MongojsDB.collection(collection).aggregate(pipe, function(err, docs){
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
	MongojsDB.collection(cname).aggregate(pipe, function(err, docs){
		if(err){
			future.throw(err);
			return;
		}else{
			future.return(docs);
		}
	});
	
	return future.wait();
};
