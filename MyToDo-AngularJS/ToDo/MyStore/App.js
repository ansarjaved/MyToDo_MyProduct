(function () {
    var app = angular.module('Store', ['store-products']);
    app.controller('StoreController', function (GetProducts) {

        this.products = GetProducts.products();
              
  });

    //app.controller('StoreController', ['$http', function ($http) {
    //    var store = this;
    //    store.products = [];
    //    $http.get('http://private-37e26-products43.apiary-mock.com/Products').success(function (data) {
    //        store.products = data;
    //    });

    //}]);

    

    app.controller('StoreController', function (GetLiveProducts) {

        this.products = GetLiveProducts.getProducts();

    });

})();