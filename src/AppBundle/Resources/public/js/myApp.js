//// Code goes here
//
//var app = angular.module('plunker', []);
//
//app.controller('RootController', function($scope, $http) {
//    var xmlhttp = new XMLHttpRequest();
//    var url = "http://www.w3schools.com/website/Customers_MYSQL.php";
//    var x = JSON.parse(xmlhttp.responseText);
//    xmlhttp.open("GET", url, true);
//    xmlhttp.send();
//
//    var vm = this;
//    vm.data = {
//        availableOptions: [
//            {id: '1', name: 'Sourabh', options: ['Gandu', 'Laudu', 'Chutiya']},
//            {id: '2', name: 'Sachin', options: ['Acha Ladka', 'Faadu Launda']},
//            {id: '3', name: 'Utkarsh', options: ['Chudanna', 'Kauwa', 'Taare Zameen Par']}
//        ],
//    };
//});
//
//
//app.filter('qualityFilter', function() {
//    return function(data, selectedName) {
//        var filteredQualities;
//        if (selectedName) {
//            for (var i = 0; i < data.length; i++) {
//                if (data[i].id == selectedName.id) {
//                    filteredQualities = data[i].options;
//                }
//            }
//        }
//        return filteredQualities;
//    };
//});
//
//
//////var app = angular.module("myShoppingList", []);
////app.controller("myCtrl", function($scope) {
////    $scope.xmlhttp = new XMLHttpRequest();
////    $scope.url = "http://www.w3schools.com/website/Customers_MYSQL.php";
////
////    $scope.xmlhttp.onreadystatechange = function() {
////        if ($scope.xmlhttp.readyState == 4 && $scope.xmlhttp.status == 200) {
////            $scope.myFunction($scope.xmlhttp.responseText);
////        }
////    }
////    $scope.xmlhttp.open("GET", $scope.url, true);
////    $scope.xmlhttp.send();
////
////    $scope.myFunction = function(response) {
////        $scope.arr = JSON.parse(response);
//////        $scope.i;
////        $scope.out = "<table>";
////
////        for (i = 0; i < $scope.arr.length; i++) {
////            $scope.out += "<tr><td>" +
////                    $scope.arr[i].Name +
////                    "</td><td>" +
////                    $scope.arr[i].City +
////                    "</td><td>" +
////                    $scope.arr[i].Country +
////                    "</td></tr>";
////        }
////        $scope.out += "</table>";
////        angular.element( document.querySelector( 'id01' ) ).innerHTML = $scope.out;
//////        document.getElementById("id01").innerHTML = $scope.out;
////    }
////});
//
//
////var app = angular.module("myShoppingList", []);
////app.controller("myCtrl", function($scope) {
////    $scope.products = ["Milk", "Bread", "Cheese"];
////    $scope.addItem = function () {
////        $scope.errortext = "";
////        if (!$scope.addMe) {return;}
////        if ($scope.products.indexOf($scope.addMe) == -1) {
////            $scope.products.push($scope.addMe);
////        } else {
////            $scope.errortext = "The item is already in your shopping list.";
////        }
////    }
////    $scope.removeItem = function (x) {
////        $scope.errortext = "";
////        $scope.products.splice(x, 1);
////    }
////});
//
////var xmlhttp = new XMLHttpRequest();
////var url = "http://www.w3schools.com/website/Customers_MYSQL.php";
////
////xmlhttp.onreadystatechange=function() {
////    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
////        myFunction(xmlhttp.responseText);
////    }
////}
////xmlhttp.open("GET", url, true);
////xmlhttp.send();
////
////function myFunction(response) {
////    var arr = JSON.parse(response);
////    var i;
////    var out = "<table>";
////
////    for(i = 0; i < arr.length; i++) {
////        out += "<tr><td>" +
////        arr[i].Name +
////        "</td><td>" +
////        arr[i].City +
////        "</td><td>" +
////        arr[i].Country +
////        "</td></tr>";
////    }
////    out += "</table>";
////    document.getElementById("id01").innerHTML = out;
////}



//{% extends 'base.html.twig' %}
//
//{% block javascripts %}
//    <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min.js"></script>    
//    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.2/jquery.min.js"></script>
//    <script>document.write("<base href=\"" + document.location + "\" />");</script>
//    {% javascripts '@AppBundle/Resources/public/js/*' %}
//    <script src="{{ asset_url }}"></script>
//    {% endjavascripts %}
//{% endblock %}
//
//{% block body %}
//
//{% verbatim %}
//<div ng-app="App" ng-controller="TodoCtrl">
//  <ul>
//    <li ng-repeat="todo in todos">
//      {{todo.text}} - <em>{{todo.done}}</em>
//    </li>
//  </ul>
//</div>
//{% endverbatim %}
//    
//{#{% verbatim %}
//<h1>Customers</h1>
//<div ng-app="myShoppingList" ng-controller="myCtrl">
//<div>{{out}}</div>
//<div id="id01"></div>
//</div>
//{% endverbatim %}#}
//    {#{% verbatim %}            
//        <div ng-app="myShoppingList" ng-controller="myCtrl">
//
//            <ul>
//                <li ng-repeat="x in products">{{x}}<span ng-click="removeItem($index)">×</span></li>
//            </ul>
//            <input ng-model="addMe">
//            <button ng-click="addItem()">Add</button>
//            <p>{{errortext}}</p>
//
//        </div>
//    {% endverbatim %}
//    <p>Try to add the same item twice, and you will get an error message.</p>#}
//
//{% endblock %}
//
//{% block stylesheets %}
//
//{% endblock %}