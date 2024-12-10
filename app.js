const names=["saman","kamal","nimal","sunil","shehan"];

loadData();

function loadData(){
    let body="";
    for (const name of names) {
        body+=`<li>${name}</li>`;
    }
    document.getElementById("ordertList").innerHTML = body;
}

function addName(){
    let inputName = document.getElementById("txtName").value;
    names.push(inputName);
    loadData();
}






