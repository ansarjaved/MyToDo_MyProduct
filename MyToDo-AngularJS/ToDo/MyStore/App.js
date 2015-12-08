(function () {
    var app = angular.module('Store', []);
  app.controller('StoreController', function () {

      this.products = gems;
      
  });

  
    //products array
  var gems = [
      {
          name: 'computer',
          price: 222,
          description: 'In the keynote session of AngularConnect in London, Brad Green gave attendees a status update on the Angular 2 project. There is still no ..',
          canPurchase: true,
          soldOut: false,
          //images array for the product
          images: [
                {
                    thumb: 'Images/TNproduc1.jpg',
                    full: 'Images/Product1.jpg'

                }
          ],

          //reviews array for the product
          reviews: [
              {
                  stars: 5,
                  body: "I love this product",
                  author: "abc@hotmail.com"

              },
              {
                  stars: 1,
                  body: "This product is okay",
                  author: "abc@yahoo.com"

              }

          ]
      },
      {
          name: 'Mobile',
          price: 100,
          description: 'mobile descritiip',
          canPurchase: true,
          soldOut: false,
          //images array for the product
          images: [
                {
                    thumb: 'Images/TNproduc1.jpg',
                    full: 'Images/Product1.jpg'

                }
          ],

          //reviews array for the product
          reviews: [
              {
                  stars: 4,
                  body: "This product is fantastic",
                  author: "hhhh@hotmail.com"

              }

          ]
      }
  ];
    /// end of products array


    //custom directive as productTitle
  app.directive("productTitle", function () {
      return {
          // E stands for Element or we can use A which is attribute basicaly but will have to use different way in html page
          restric: 'E',
          templateUrl: 'product-title.html'
      };

  });



    //Panel controller to associate with products panels
  app.controller('productPanels', function () {
      this.tab = 1;
      this.selectTab = function (setTab) {
          this.tab = setTab;
      };

      this.isSelected = function (checkTab) {
          return this.tab === checkTab;
      };
  });
    // end of Panel controller to associate with products panels




  app.directive("productGalary", function () {
      return {
          // E stands for Element or we can use A which is attribute basicaly but will have to use different way in html page
          restric: 'E',
          templateUrl: 'product-title.html'
      };

  });




    //Review controller
  app.controller("productReviewController", function () {
      this.review = {};
      this.addReview = function (product) {
          product.reviews.push(this.review);
          this.review = {};
      };
  });

    //end of review controller

   





    

  



})();