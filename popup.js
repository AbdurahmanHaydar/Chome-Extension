
function setTodos(event) {
  var thingToBeDone =   document.getElementById('todoId').value;
  var key = 'key' + Math.floor((Math.random() * 100) + 1);
  localStorage.setItem(key.toString(),thingToBeDone);
  showTodos(key);
}



$(document).ready(function(){

    for(var key in localStorage){
      showTodos(key);
  }
});


function clearTodo(event){
  localStorage.clear();

}


  chrome.extension.getBackgroundPage().console.log('here');

function showTodos(key){


    // chrome.extension.getBackgroundPage().debugger;



    var display =localStorage.getItem(key);
    if(display==null){
      return;
    }
    var div = document.getElementById('todoThings');
    div.innerHTML += '<p>'+ display + '</p>';
}



document.getElementById('saveId').addEventListener('click', setTodos);

document.getElementById('deleteId').addEventListener('click', clearTodo);
