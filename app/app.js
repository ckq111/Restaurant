/**
 * Created by Smit on 8/3/2017.
 */

(function(){
"use strict";

var app = angular.module('myRestaurant',
    ["common.services",
        "ui.router",
        "restaurantMenuMock"
    ]
    );

    app.config(["$stateProvider","$urlRouterProvider",function ($stateProvider,$urlRouterProvider) {
        $urlRouterProvider.otherwise("/");
        $stateProvider

            .state("home",{
                url:"/",
                templateUrl:"app/homeView.html"

            })
            .state("storeFront",{
                url:"/storedetails",
                templateUrl:"app/menuDetails/menuDetails.html",
                controller: "menuListController as vm"
            })
            .state("dishDetail",{
                url:"/dishDetails/:dishId",
                templateUrl:"app/menuDetails/dishInfo.html",
                controller: "menuItemInfoController as vm",
                resolve:{
                    restaurantResource :"restaurantResource", //defining dependency, key name can be any name
                    dish: function(restaurantResource,$stateParams) {

                        var dishId = $stateParams.dishId;
                        return restaurantResource.getRestaurantInfoFor('dishes').get({dishId: dishId}).$promise;
                    }
                }
            })
    }]);
}());