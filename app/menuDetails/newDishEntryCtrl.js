/**
 * Created by Smit on 8/10/2017.
 */
(function (){
    'use strict';
    angular.module('myRestaurant')
        .controller('newDishEntryController',['dish','$state','toastr',NewDishEntryController]);

    function NewDishEntryController(dish,$state,toastr) {
        var vm = this;
        vm.dish = dish;

        // similar to dishInfo this will save new dish.
        vm.submit = function () {
            vm.dish.$save(function(){
                $state.go('storeFront');
                toastr.success('Thanks!', 'Dish Added Successfully',{
                    timeOut:2000
                });
            });
        };
    }
})();