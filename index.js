var toDoList = Array();
var i = 0;
function getInput() {
    toDoList.push(document.getElementById("addlist").value);
    // "<li>" +
    // "<button>X</button>" +
    // '<input type="checkbox" id="checkList" />' +
    // '<div id="newlist">' +
    // "</div>" +
    // "</li>";
    document.querySelector("ul").innerHTML =
        "<li>" +
        '<button onclick="DeleteOne()">X</button>' +
        '<input type="checkbox" id="checkList" onclick="is_checked()"/>' +
        '<div id="newlist">' +
        toDoList[i] +
        "</div>" +
        "</li>";
    i++;
}
// for (var i = 0; i < toDoList.length; i++) {
//     toDoList[i] = toDoList;
// }

const Delete = () => {
    var j = toDoList.length;
    toDoList.splice(0, j);
    document.querySelector("ul").innerHTML = "";
    i = 0;
};
function is_checked() {
    var checkbox = document.getElementById("checkList");
    var is_checked = checkbox.checked;
    if (is_checked) {
        document.getElementById("newlist").style.color = "rgba(200, 200, 200, 100";
        document.getElementById("newlist").style.textDecoration = "line-through";
    } else {
        document.getElementById("newlist").style.color = "black";
        document.getElementById("newlist").style.textDecoration = "none";
    }
}

function DeleteOne() {}
