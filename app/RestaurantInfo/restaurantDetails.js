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
        vm.selectedDishIndex = -1;
        vm.dish = null;
        vm.addBagText = 'Add to Bag : ';
        vm.selectedQuantity = 1;
        // for quick info access - invoking this function will set currently selected dish
        vm.setSelectedDish = function (index) {
            if(vm.selectedDishIndex === (index - 1))
                vm.selectedDishIndex = -1;
            else
                vm.selectedDishIndex = index - 1;

            vm.dish = vm.menu[vm.selectedDishIndex];
            vm.addBagText = 'Add to Bag : ';
            vm.addBagText+='$'+vm.dish.price;

        };
        vm.updatePrice = function (isIncrease) {
            if(isIncrease)
                vm.selectedQuantity++;
            else
                vm.selectedQuantity--;
            vm.addBagText = 'Add to Bag : ';
            vm.addBagText+='$'+(vm.dish.price * vm.selectedQuantity);
        };
    }
})();