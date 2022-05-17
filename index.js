var toDoList = "";
for (var i = 0; i < toDoList.length; i++) {
    let doList = toDoList;
    toDoList =
        toDoList +
        "<li>" +
        "<button>X</button>" +
        '<input type="checkbox" id="checkList" />' +
        '<div id="newlist">' +
        "toDoList[i]" +
        "</div>" +
        "</li>";
}
document.querySelector("ul").innerHTML = toDoList;

// const getInput = () => {
// };

// const Delete = () => {
//     let ul = (document.querySelector("ul").innerHTML = "");
// };
