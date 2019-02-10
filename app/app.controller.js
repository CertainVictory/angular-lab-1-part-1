"use strict";

function TodoController(){
    const vm = this;
    vm.newTask = {};
    vm.editing = false;
    vm.tasks = [
        // { task: "Walk the dog", completed: false },
        // { task: "Woke up", completed: true },  
        // { task: "Eat dinner", completed: false },  
        // { task: "Said nice things to people", completed: true},  
    ];
    vm.add = function (addTask) {
        // vm.contacts.push({
        //     name: newContact.name,
        // })
        vm.tasks.push(angular.copy(addTask));
        console.log(addTask)
        console.log(vm.tasks)
        vm.addTask = {};
    }

vm.editTask = function(updatedTask) {
  vm.editing = vm.tasks.indexOf(vm.task);
  vm.newTask = angular.copy(updatedTask);
}

vm.saveTask = function(updatedTask) {
console.log(vm.tasks)
return updatedTask;
};

// vm.cancel = function(newTask) {
//   if (vm.editing !== false) {
//       vm.tasks[vm.editing] = vm.newTask;
//       vm.editing = false;
//   }

//   };

// vm.editing = false;
//         vm.tasks = angular.copy(vm.newTask);
//         delete vm.newTask;
//         todo
// };


    //deletes the contacts from the array
    //takes 
    vm.delete = function (index) {
        vm.tasks.splice(index, 1)
    }
}



angular
    .module("todoApp")
    .controller("TodoController",TodoController)