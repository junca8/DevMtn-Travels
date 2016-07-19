angular.module('devmtnTravel').controller('bookedCtrl', function($scope, $stateParams, mainSrv) {

  var id = $stateParams.id;
  $scope.booked = mainSrv.booked(id);

});
