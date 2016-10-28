var App = angular.module('App', []);

App.controller('TodoCtrl', function($scope, $http) {
//    window.alert('hi');
  $http.get(Routing.generate('@AppBundle/Resources/public/js/todos.json'))
       .then(function(res){
          $scope.todos = res.data;                
        });
});

//<script type="text/javascript" src="{{ asset('AppBundle/Resources/views/todos.json') }}"></script>
