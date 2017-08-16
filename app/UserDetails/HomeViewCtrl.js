/**
 * Created by Smit on 8/15/2017.
 */
(function () {
    angular.module('myRestaurant')
        .controller('HomeViewController',homeViewController);

    function homeViewController() {
        var vm = this;
        vm.isGetttingStartClicked = false;
        vm.confirmPassword = '';
        vm.user = {};
        vm.merchant = {};
        vm.isPwdMatches = function () {
            if(vm.confirmPassword === '' || vm.user.password === vm.confirmPassword)
                return true;
            else
                return false;

        }
    }
})();
