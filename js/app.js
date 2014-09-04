angular.module("modules", ["modules.controllers", "ngRoute"])
  .config(function($routeProvider) {
    $routeProvider
    .when("/",
    {
      templateUrl:"views/home.html",
      controller: "homeController"
    })

    .when("/blog", {
        templateUrl: "views/posts/posts.html",
        controller: "postsController"
      })
    .otherwise({

      redirectTo: "/"
    });
  });

  angular.module("modules.controllers", []);
