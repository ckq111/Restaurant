(function(){
    "use strict";
    angular
        .module("common.services")
        .factory("restaurantResource",["$resource",restaurantResource]);

    function restaurantResource($resource){
        return $resource ("/api/dishes/",null,  {'update':{method:'PUT' }});
    }

}());
