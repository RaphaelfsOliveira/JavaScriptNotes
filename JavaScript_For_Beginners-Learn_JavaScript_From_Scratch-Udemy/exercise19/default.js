
var array = ["value1", "value2", "value3", "value4"];

// items in array
var todoList = [
  "Go UpTown for a walk",
  "Learn some JavaScript",
  "Finish Udemy Course"
];

document.write("<br><br><br>");

function printList(list) {
  document.write("<h4>Todo List</h4>");
  for (var i = 0; i < list.length; i++) {
    document.write("<p>"+ list[i] +"</p>");
  }
}

printList(todoList);

document.write("---------------------------- add items in array");

todoList.unshift("begin mag", "buy bread", "sunday morning");

todoList.push("final day", "rock'n roll pub");

printList(todoList);

document.write("---------------------------- remove items in array");

todoList.shift();
todoList.shift();

todoList.pop();
todoList.pop();
todoList.pop();
todoList.pop();

printList(todoList);
