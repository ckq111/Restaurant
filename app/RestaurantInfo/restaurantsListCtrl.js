/**
 * Created by Smit on 8/3/2017.
 */
(function () {
    'use strict';
    angular.module('myRestaurant')
        .controller('ResListController',['restaurantResource',ResListController]);

    function ResListController(restaurantResource) {
        var vm = this;

        // getRestaurantInfoFor to modify api/"data" means supply dishes or reviews to get required data
        restaurantResource.getRestaurantInfoFor('restaurants').query(function(data){
            vm.restaurants = data;
        });






    }

}());

