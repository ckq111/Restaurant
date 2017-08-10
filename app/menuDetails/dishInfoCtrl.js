/**
 * Created by Smit on 8/10/2017.
 */
(function () {
    'use strict';
    angular.module('myRestaurant')
        .controller('menuItemInfoController',['dish',MenuItemInfoController]);

    function MenuItemInfoController(dish){
        var vm = this;
        vm.dish = dish;
    }
})();