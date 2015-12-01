angular.module('mytodoApp', [])
  .controller('TodoListController', function ($scope, $filter) {
      

      $scope.todos = [{ text: 'Send email to client', done: false },
                      { text: 'visit the site', done: false }
      ];

     

      $scope.getTotalTodod = function () {
           return $scope.todos.length;
      } ;

      $scope.addTodo = function () {
          $scope.todos.push({ text: $scope.formTodoText, done: false });
          $scope.formTodoText = '';
      };

      $scope.clearCompleted = function () {
         
           $scope.todos = $filter('filter')($scope.todos, function (todo) {
               return !todo.done;
          })
      }

    
     
});