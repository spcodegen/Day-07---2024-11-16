const names=["saman","kamal","nimal","sunil","shehan"];
document.getElementById("title").innerHTML = names.toString();
document.write(names);

//document.getElementById("ordertList").innerHTML = "<li>name[0]</li><li>name[1]</li><li>name[2]</li><li>name[3]</li>";
let body="";
for (const name of names) {
    body+=`<li>${name}</li>`;
}
document.getElementById("ordertList").innerHTML = body;

