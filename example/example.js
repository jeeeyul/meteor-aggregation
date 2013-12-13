People = new Meteor.Collection("people"); 

if (Meteor.isClient) {
	Template.hello.stat = function(){
		return Session.get("stat");
	};
	
	Template.hello.events({
		"click #test-aggregation-button" : function(){
			var pipe = [];
			pipe.push({
				$group : {
					_id : "$favoriteColor",
					count : {
						$sum : 1
					}
				}
			});
			
			People.aggregate(pipe, function(err, docs){
				if(docs){
					Session.set("stat", docs);
				}
			});
		}
	});
}

if (Meteor.isServer) {
	Meteor.startup(function() {
		if(People.find().count() == 0){
			People.insert({
				"name" : "jeeeyul",
				"favoriteColor" : "red"
			});
			People.insert({
				"name" : "ameluna",
				"favoriteColor" : "pink"
			});
			People.insert({
				"name" : "kim jeongil",
				"favoriteColor" : "red"
			});
			People.insert({
				"name" : "someone",
				"favoriteColor" : "black"
			});
			People.insert({
				"name" : "other",
				"favoriteColor" : "red"
			});
			People.insert({
				"name" : "pink mania",
				"favoriteColor" : "pink"
			});
		}
	});
}
