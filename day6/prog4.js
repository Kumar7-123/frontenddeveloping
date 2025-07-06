var selectedRow = null;
function onFormSubmit() {
var formData = readFormData();
if(isValid()){
    if(selectedRow == null) {
    insertNewRecord(formData);
    alert("Your details are saved Sucessfully........");
  }
 else{
  updateRecord(formData);
 }
  resetForm();
}
}

function readFormData() {
  var formData = {};
  formData["facName"] = document.getElementById("facName").value;
  formData["CorName"] = document.getElementById("CorName").value;
  formData["ColName"] = document.getElementById("ColName").value;
  formData["facDep"] = document.getElementById("facDep").value;
  formData["facSub"] = document.getElementById("facSub").value;
  formData["facAge"] = document.getElementById("facAge").value;
  formData["facPlace"] = document.getElementById("facPlace").value;
  return formData;
}
function resetForm() {
  document.getElementById("facName").value = "";
  document.getElementById("facDep").value = "";
  document.getElementById("facSub").value = "";
  document.getElementById("facAge").value = "";
  document.getElementById("facPlace").value = "";
  document.getElementById("ColName").value = "";
  document.getElementById("CorName").value = "";
  selectedRow = null;
}
function insertNewRecord(data) {
  var table = document
    .getElementById("faclist")
    .getElementsByTagName("tbody")[0];
  var newRow = table.insertRow(table.length);
  cell1 = newRow.insertCell(0);
  cell1.innerHTML = data.facName;
  cell2 = newRow.insertCell(1);
  cell2.innerHTML = data.CorName;
  cell3 = newRow.insertCell(2);
  cell3.innerHTML = data.ColName;
  cell4 = newRow.insertCell(3);
  cell4.innerHTML = data.facDep;
  cell5 = newRow.insertCell(4);
  cell5.innerHTML = data.facSub;
  cell6 = newRow.insertCell(5);
  cell6.innerHTML = data.facAge;
  cell7 = newRow.insertCell(6);
  cell7.innerHTML = data.facPlace;
  cell8 = newRow.insertCell(7);
  cell8.innerHTML = `<a onClick="onEdit(this)">Update</a><a onClick="onDelete(this)">Delete</a>`;
}
function onEdit(td)
{
    if(confirm("Are you upadate your details")){
selectedRow=td.parentElement.parentElement;  
document.getElementById("facName").value=selectedRow.cells[0].innerHTML;
document.getElementById("CorName").value=selectedRow.cells[1].innerHTML;
document.getElementById("ColName").value=selectedRow.cells[2].innerHTML;
document.getElementById("facDep").value=selectedRow.cells[3].innerHTML;
document.getElementById("facSub").value=selectedRow.cells[4].innerHTML;
document.getElementById("facAge").value=selectedRow.cells[5].innerHTML;
document.getElementById("facPlace").value=selectedRow.cells[6].innerHTML;
}}
function updateRecord(formData)
{
  alert("Your form updated sucessfully.......")
selectedRow.cells[0].innerHTML=formData.facName;
selectedRow.cells[1].innerHTML=formData.CorName;
selectedRow.cells[2].innerHTML=formData.ColName;
selectedRow.cells[3].innerHTML=formData.facDep;
selectedRow.cells[4].innerHTML=formData.facSub;
selectedRow.cells[5].innerHTML=formData.facAge;
selectedRow.cells[6].innerHTML=formData.facPlace;

}
function onDelete(td)
{
if(confirm("are you want to delete this record")){
  row=td.parentElement.parentElement;
  document.getElementById("faclist").deleteRow(row.rowIndex);
  resetForm();
}
}

function isValid(){
// var a = document.getElementById("facName").value;
// if(a==""|| a==null )
// return alert("Enter your name pleace.."),false;

//  var c= document.getElementById("facSub").value;
//  if(isNaN(c)==false)
//  return
// //  var e= document.getElementById("facPlace").value;

// var  b = document.getElementById("facDep").value;
// if(isNaN(b)==false)
// return true,alert("Enter an correct foam of character department");

var d = document.getElementById("facAge").value;
if(isNaN(d) || d<18 || d>65){
  alert("Pleace enter the age between 18 to 65..!");
}
else{return true;}



