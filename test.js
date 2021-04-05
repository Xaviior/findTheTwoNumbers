// tr, th , Td * 3

function createLine(text) {
  let tr = document.createElement("tr");
  let th = document.createElement("th");
  let td = document.createElement("td");
  return tr, th, td, td, td;
}

function append(parent, children) {
  children.forEach(function (child) {
    parent.appendchild(child);
  });
}
