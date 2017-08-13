/**
 * Created by Smit on 8/10/2017.
 */
(function (){
    'use strict';
    angular.module('myRestaurant')
        .controller('newDishEntryController',['dish','$state',NewDishEntryController]);

    function NewDishEntryController(dish,$state) {
        var vm = this;
        vm.dish = dish;

        // similar to dishInfo this will save new dish.
        vm.submit = function () {
            vm.dish.$save(function(){
                alert("Saved Data Successfully!");
                $state.go('storeFront');
            });
        };
    }
})();