/**
 * Created by Smit on 6/18/2017.
 */
(function () {
    'use strict';
    angular.module('myRestaurant')
        .service('fetchDataService',['$resource',function ($resource) {

            function getUserData(){
                return $resource("http://localhost:3000/users/?",null);
            }
            return{
                getUserData:getUserData
            };
        }])
        .constant('version',{
            Application_Name : 'Food Bazaar',
            Version : '0.1.17'
        });
})();

