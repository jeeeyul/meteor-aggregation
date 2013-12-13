meteor-aggregation
==================
Aggregation supports for meteor

### How to Install

    mrt add aggregation
    
### Usage

    People = new Meteor.Collection("people");
    
    if(Meteor.isClient){
      var pipe = [];
      
      pipe.push({
        $match : {
          favoriteColor : {
            $exists : 1
          }
        }
      });
      
      pipe.push({
        $group : {
          _id : "favoriteColor",
          count : {
            $sum : 1
          }
        }
      });
    
      People.aggregate(pipe, function(err, docs){
        if(docs){
          Session.set("result", docs);
        }
      });
    }
