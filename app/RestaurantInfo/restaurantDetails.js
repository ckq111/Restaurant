/**
 * Created by Smit on 8/17/2017.
 */
(function () {
    "use strict";

    angular.module("myRestaurant")
        .controller("ResDetailsController",['restaurant','restaurantResource',ResDetailsController]);

    function ResDetailsController(restaurant,restaurantResource) {
        var vm = this;
        vm.restaurant = restaurant;
        restaurantResource.getMenuDetailsFor(vm.restaurant.menuId).query(function(data){
            vm.menu = data;
        });
    }
})();