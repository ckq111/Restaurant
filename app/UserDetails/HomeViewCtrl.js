/**
 * Created by Smit on 8/15/2017.
 */
(function () {
    var app = angular.module('myRestaurant')
        app.controller('HomeViewController',homeViewController);
    function homeViewController() {
        var vm = this;
        vm.isGetttingStartClicked = false;
        vm.confirmPassword = '';
        vm.user = {};
        vm.merchant = {};
        vm.isMerchant = false;

        // Fake Test Input
        sessionStorage.isMerchantLoggedIn = false;
        sessionStorage.uId = 'Sam12#';

        vm.isPwdMatches = function () {
            if(vm.confirmPassword === '' || vm.user.password === vm.confirmPassword)
                return true;
            else
                return false;

        }

        vm.result1 = '';
        vm.options1 = {
            country: 'usa',
            types: '(cities)'
        };
        vm.details1 = '';

        vm.showResult = function () {
          console.log(vm.result1 + vm.details1);
          var details = vm.result1.split(',');
          vm.merchant.resAddcity = details[0];
          vm.merchant.resAddState = details[1];
        };

        vm.submitData = function (data,isMerchant) {
            //console.log(data);
            //console.log(data.userId);
            if(typeof(Storage) !== "undefined"){
                sessionStorage.uId = data.userId;
                vm.isMerchant = isMerchant;
                document.getElementById('uwelcome').innerHTML = "Welcome " + sessionStorage.uId;
            }
        };
    }
})();
