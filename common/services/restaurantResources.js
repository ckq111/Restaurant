(function(){
    "use strict";
    angular
        .module("common.services")
        .service("restaurantResource",["$resource",restaurantResource]);

    function restaurantResource($resource){

        function getRestaurantInfoFor(resString) {
            return $resource ("/api/"+resString+"/:dishId");
        }
        function getRestaurantInfoUser(resString) {
            return $resource ("/api/"+resString+"/:resId");
        }
        function getMenuDetailsFor(menuId){
            return $resource ("/api/menus/"+menuId);
        }
        return{
            getRestaurantInfoFor:getRestaurantInfoFor,
            getRestaurantInfoUser:getRestaurantInfoUser,
            getMenuDetailsFor:getMenuDetailsFor
        }
    }

}());
