var toDoList = Array();
var doToList = "";
var i = 0;
function getInput() {
    toDoList.push(document.getElementById("addlist").value);
    document.querySelector("ul").innerHTML = "";
    getInputInput();
}

function getInputInput() {
    doToList = "";
    i = 0;
    for (var k = 0; k < toDoList.length; k++) {
        doToList +=
            "<li>" +
            `<button class="delOne" onclick="DeleteOne(${k})">X</button>` +
            `<input type="checkbox" class="checkList" onclick="is_checked(${k})"/>` +
            '<div class="newlist">' +
            toDoList[i + k] +
            "</div>" +
            "</li>";
    }
    document.querySelector("ul").innerHTML = doToList;
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

function is_checked(value) {
    var checkbox = document.getElementsByClassName("checkList");
    var is_checked = checkbox[value].checked;
    var checkName = document.getElementsByClassName("newlist");
    if (is_checked) {
        checkName[value].style.color = "rgba(200, 200, 200, 100";
        checkName[value].style.textDecoration = "line-through";
    } else {
        checkName[value].style.color = "black";
        checkName[value].style.textDecoration = "none";
    }
}

function DeleteOne(value) {
    var oneDel = document.getElementsByClassName("delOne");
    toDoList.splice(value, 1);
    getInputInput();
}

var input = document.getElementById("addlist");
input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("reset").click();
    }
});
