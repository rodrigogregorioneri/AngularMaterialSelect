(function (app) {

  angular.module('custom.controllers', []).controller('FormaCtrl',["$timeout", "$q", "$log", "$http","$scope", function ($timeout, $q, $log, $http,$scope) {
 

    $scope.resp = null;
    /**
     * Build `components` list of key/value pairs
     */
    
      $http({
        method: 'GET',
        url: 'http://prova.formahomolog.com.br/api/Destiny',
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(function (response) {
        console.log(response.data.Response);
        $scope.resp = response.data.Response;

      }, function (){
        $scope.resp = response;
      });
    

   





  }])

})(app);