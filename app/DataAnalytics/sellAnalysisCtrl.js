/**
 * Created by Smit on 8/22/2017.
 */
angular.module("myRestaurant")
    .config(['ChartJsProvider', function (ChartJsProvider) {
        // Configure all charts
        ChartJsProvider.setOptions({
            colors: ['#1A0DB0', '#1A0DB0', '#1A0DB0', '#1A0DB0', '#1A0DB0', '#1A0DB0', '#1A0DB0'],
            responsive: false
        });
    }])
    .controller("sellAnalysisCtrl",["restaurantResource",SellAnalysisCtrl]);

    function SellAnalysisCtrl(restaurantResource) {
        var vm = this;

        restaurantResource.getRestaurantInfoFor('dishes').query(function(data){
            vm.dishes = data;
            vm.labels = [];
            vm.data = [];
            vm.colors = [];
            vm.series = ['Sales Analysis'];
            var newColor =
                {
                    backgroundColor: "rgba(159,204,0, 1)",
                    pointBackgroundColor: "rgba(159,204,0, 0.4)",
                    pointHoverBackgroundColor: "rgba(159,2,0, 1)",
                    borderColor: "rgba(159,204,0, 1)",
                    pointBorderColor: '#fff',
                    pointHoverBorderColor: "rgba(159,204,0, 1)"
                }
            ;
            for(var i=0;i<vm.dishes.length;i++)
            {
                vm.data.push(vm.dishes[i].sellCount);
                vm.labels.push(vm.dishes[i].name);
                vm.colors.push(newColor);
            }


        });


    }