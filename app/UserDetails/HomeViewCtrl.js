/**
 * Created by Smit on 8/15/2017.
 */
(function () {
    var app = angular.module('myRestaurant')
        app.controller('HomeViewController',['toastr','$state',homeViewController]);
    function homeViewController(toastr,$state) {
        var vm = this;
        vm.isGetttingStartClicked = false;
        vm.confirmPassword = '';
        vm.user = {};
        vm.merchant = {};
        vm.isMerchant = false;
        sessionStorage.isMerchantLoggedIn = false;

        // Fake Test Input
        //sessionStorage.isMerchantLoggedIn = false;
        sessionStorage.uId = 'Merchant12#';

        vm.isPwdMatches = function () {
            if(vm.confirmPassword === '' || vm.user.password === vm.confirmPassword || vm.merchant.password === vm.confirmPassword)
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

        vm.submitData = function (isMerchant) {
            //console.log(data);
            //console.log(data.userId);
            if(typeof(Storage) !== "undefined"){
                vm.isMerchant = isMerchant; // TO determine active tabs - for User or for Merchant
                if(isMerchant){
                    sessionStorage.uId = vm.merchant.merchantId;
                    toastr.success('Welcome '+vm.merchant.merchantId, 'Thanks for Signing up! Enjoy',{
                        closeButton: true,
                        timeOut:2000
                    });
                    $state.go('storeFront');
                }
                else{
                    sessionStorage.uId = vm.user.userId;
                    toastr.success('Welcome '+vm.user.userId, 'Thanks for Signing up! Enjoy',{
                        closeButton: true,
                        timeOut:1000
                    });
                    $state.go('restaurantsList');
                }
                sessionStorage.isMerchantLoggedIn = isMerchant;
                document.getElementById('uwelcome').innerHTML = "Welcome " + sessionStorage.uId;
            }
        };
        // OK everything related to Login page starts from here.
        vm.userId = null;
        vm.password = null;
        vm.loginClicked = function(){
          console.log(vm.userId + "    " + vm.password);
        };
    }
})();
