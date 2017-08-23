/**
 * Created by Smit on 8/10/2017.
 */
(function () {
    'use strict';
    angular.module('myRestaurant')
        .controller('menuItemInfoController',['dish',"$state",'toastr',MenuItemInfoController]);

    function MenuItemInfoController(dish,$state,toastr){
        var vm = this;
        vm.dish = dish;

        // Using JSON.parse & JSON.stringify to completely copy object not by referance
        vm.dishOriginal = JSON.parse(JSON.stringify(vm.dish));
        vm.isEditModeOn = false;

        //toggleEditMode is called to open edit form for selected dish & on cancel to return to original view.
        vm.toggleEditMode = function () {
          vm.isEditModeOn = !vm.isEditModeOn;
          //vm.dish = JSON.parse(JSON.stringify(vm.dishOriginal));
            vm.dish.category = vm.dishOriginal.category;
            vm.dish.price = vm.dishOriginal.price;
            vm.dish.description = vm.dishOriginal.description;
        };

        // on submit clicked dish.$save method will send POST request to $httpBackend
        vm.submit = function () {
            vm.dish.$save(function(){
                toastr.success('Thanks!', 'Dish Updated Successfully',{
                    timeOut:2000
                });
                $state.go('storeFront');
            });
        }
    }
})();