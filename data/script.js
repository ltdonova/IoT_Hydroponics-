function logoutButton() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "/logout", true);
  xhr.send();
  setTimeout(function(){ window.open("/logged-out","_self"); }, 1000);
}

function openTab(evt, tabName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tabs" and remove the class "active"
  tablinks = document.getElementsByClassName("tabs");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}



var tableData = [
  {id:1, name:"Billy Bob", age:"12", gender:"male", height:1, col:"red", dob:"", cheese: 1},
]
/* 
var tableData2 = [
{cheese: 1},
]*/

var table = new Tabulator("#example-table", {
  data:tableData, //set initial table data

  columns:[
      {title:"Name", field:"name"},
      {title:"Age", field:"age"},
      {title:"Gender", field:"gender"},
      {title:"Height", field:"height"},
      {title:"Favourite Color", field:"col"},
      {title:"Date Of Birth", field:"dob"},
      {title:"Cheese Preference", field:"cheese"},
  ],
});

