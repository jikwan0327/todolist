var toDoList = Array();
var doToList = "";
var i = 0;
var checknum = Array();
document.querySelector(".left-item").innerHTML = toDoList.length + "items left";

function getInput() {
    toDoList.push(document.getElementById("addlist").value);
    document.querySelector(".left-item").innerHTML = "";
    getInputInput();
}

function getInputInput() {
    doToList = "";
    i = 0;
    for (var k = 0; k < toDoList.length; k++) {
        if (checknum[k] === 1) {
            doToList +=
                "<li>" +
                `<button class="delOne" onclick="DeleteOne(${k})">X</button>` +
                `<input type="checkbox" class="checkList" onclick="is_checked(${k})" checked="true"/>` +
                '<div class="newlist" style="color: rgba(200, 200, 200, 100);text-decoration:line-through;" >' +
                toDoList[i + k] +
                "</div>" +
                "</li>";
        } else {
            doToList +=
                "<li>" +
                `<button class="delOne" onclick="DeleteOne(${k})">X</button>` +
                `<input type="checkbox" class="checkList" onclick="is_checked(${k})"/>` +
                '<div class="newlist">' +
                toDoList[i + k] +
                "</div>" +
                "</li>";
        }
    }
    document.querySelector("ul").innerHTML = doToList;
    document.querySelector(".left-item").innerHTML = toDoList.length + "items left";
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
        checknum[value] = 1;
    } else {
        checkName[value].style.color = "black";
        checkName[value].style.textDecoration = "none";
        checknum[value] = 0;
    }
}

function DeleteOne(value) {
    var oneDel = document.getElementsByClassName("delOne");
    checknum.splice(value, 1);
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

const active = (value) => {
    var activeSelect = document.getElementsByClassName("active");
    if (value === 1) {
        activeSelect[0].style.borderColor = "lightcoral";
        activeSelect[1].style.borderColor = "black";
        activeSelect[2].style.borderColor = "black";
    }
    if (value === 2) {
        activeSelect[0].style.borderColor = "black";
        activeSelect[1].style.borderColor = "lightcoral";
        activeSelect[2].style.borderColor = "black";
        for (var i = 0; i < toDoList.length; i++) {
            if (checknum[i] === 1) {
                checknum.splice(i, 1);
                toDoList.splice(i, 1);
                getInputInput();
            }
        }
    }
    if (value === 3) {
        activeSelect[0].style.borderColor = "black";
        activeSelect[1].style.borderColor = "black";
        activeSelect[2].style.borderColor = "lightcoral";
    }
};
