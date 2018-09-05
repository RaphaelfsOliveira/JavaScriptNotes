
var array = ["value1", "value2", "value3", "value4"];

// items in array
var todoList = [
  "Get Cat Food",
  "Go UpTown for a walk",
  "Call friend",
  "Learn some JavaScript",
  "Finish Udemy Course",
  "Make some things"
];

document.write("<br><br><br>");

function printTodoList(list) {
  document.write("<h4>Todo List</h4>");
  for (var i = 0; i < list.length; i++) {
    document.write("<p>"+ list[i] +"</p>");
  }
}

printTodoList(todoList);
