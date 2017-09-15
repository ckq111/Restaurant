/**
 * Created by Smit on 8/3/2017.
 */

(function(){
"use strict";

var app = angular.module('myRestaurant',
    [   "ngResource",
        "common.services",
        "ui.router",
        "restaurantMenuMock",
        "ui.mask",
        "ngMessages",
        "ngAutocomplete",
        "ui.bootstrap",
        "toastr",
        "chart.js",
        "lettersOnlyApp"
    ]
    );

    app.config(["$stateProvider","$urlRouterProvider",function ($stateProvider,$urlRouterProvider) {
        $urlRouterProvider.otherwise("/");
        $stateProvider

            .state("home",{
                url:"/",
                templateUrl:"app/homeView.html"
            })
            .state("home.userSignUp",{
                url:"signUpUser",
                templateUrl:"app/UserDetails/userSignUpForm.html"
            })
            .state("home.merchantSignUp",{
                url:"signUpMerchant",
                templateUrl:"app/UserDetails/merchantSignUpForm.html"
            })
            .state("home.login",{
                url:"login",
                templateUrl:"app/LoginPage/LoginPage.html"
            })
            .state("storeFront",{
                url:"/storedetails",
                views:{
                    '':{
                        templateUrl:"app/menuDetails/menuDetails.html",
                        controller: "menuListController as vm"
                    },
                    'reviews@storeFront': {
                        templateUrl: 'app/menuDetails/restReviewsView.html',
                        controller: 'reviewController as vm'
                    }
                }
            })
            .state("dishDetail",{
                url:"/dishDetails/:dishId",
                templateUrl:"app/menuDetails/dishInfo.html",
                controller: "menuItemInfoController as vm",
                resolve:{
                    restaurantResource :"restaurantResource",
                    dish: function(restaurantResource,$stateParams) {

                        var dishId = $stateParams.dishId;
                        return restaurantResource.getRestaurantInfoFor('dishes').get({dishId: dishId}).$promise;
                    }
                }
            })
            .state("newDish",{
                url:"/newDish/:dishId",
                templateUrl:"app/menuDetails/newDishEntry.html",
                controller: "newDishEntryController as vm",
                resolve:{
                    restaurantResource :"restaurantResource",
                    dish: function(restaurantResource,$stateParams) {

                        var dishId = $stateParams.dishId;
                        return restaurantResource.getRestaurantInfoFor('dishes').get({dishId: dishId}).$promise;
                    }
                }
            })
            .state("restaurantsList",{
                url:"/restaurantsList",
                templateUrl:"app/RestaurantInfo/restaurantsList.html",
                controller:"ResListController as vm"
            })
            .state("restaurants",{
                abstract:true,
                url:"/restaurants/:resId",
                templateUrl:"app/RestaurantInfo/restaurantDetails.html",
                controller: "ResDetailsController as vm",
                resolve:{
                    restaurantResource :"restaurantResource",
                    restaurant: function(restaurantResource,$stateParams) {

                        var resId = $stateParams.resId;
                        return restaurantResource.getRestaurantInfoUser('restaurants').get({resId: resId}).$promise;
                    }
                }
            })
            .state("restaurants.menu",{
                url:"/menu",
                templateUrl:"app/RestaurantInfo/restaurantMenuDetails.html"
            })
            .state("restaurants.reviews",{
                url:"/reviews",
                templateUrl:"app/menuDetails/restReviewsView.html",
                controller:"reviewController as vm"
            })
            .state("analytics",{
                url:"/analytics",
                templateUrl:"app/DataAnalytics/sellAnalysisView.html",
                controller:"sellAnalysisCtrl as vm"
            })
    }]);
}());