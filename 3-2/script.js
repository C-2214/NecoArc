document.addEventListener("DOMContentLoaded", function () {
  
  var outputList = document.getElementById("output-list");

  // Запускаємо цикл, який виводить числа від 1 до 10
  for (var i = 1; i <= 10; i++) {
    
    var listItem = document.createElement("li");

    
    listItem.textContent = "Число " + i;

    
    outputList.appendChild(listItem);
  }
});
