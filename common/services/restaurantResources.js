(function(){
    "use strict";
    angular
        .module("common.services")
        .service("restaurantResource",["$resource",restaurantResource]);

    function restaurantResource($resource){
        function getRestaurantInfoFor(resString) {
            return $resource ("/api/"+resString+"/",null,  {'update':{method:'PUT' }});
        }

        return{
            getRestaurantInfoFor:getRestaurantInfoFor
        }
    }

}());
