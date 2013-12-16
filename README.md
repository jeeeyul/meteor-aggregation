meteor-aggregation
==================
Aggregation supports for meteor.

### How to Install

    mrt add aggregation
    
### Usage

Client Usage (CBP is required):

    People = new Meteor.Collection("people");
    People.aggregate(pipe, function(err, docs){
        if(docs){
            Session.set("result", docs);
        }
    });
    
Server Side Usage:

    People = new Meteor.Collection("people");
    var docs = People.aggregate(pipe);
    
A Pipe can be created like below:

    // creates pipe
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

### Demo

* [Demo](http://aggr-example.meteor.com)
* [Source](https://github.com/jeeeyul/meteor-aggregation/tree/master/example)

### Warning

This project is very experimental. I'm just testing meteor packaging system.
Result documents are *not reactive*! 
