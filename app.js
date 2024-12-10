let body = "";

fetch("https://fakestoreapi.com/products")
    .then(res => res.json())
    .then(data => {
        data.forEach(element => {
            body += 
`<div class="col">
    <div class="card shadow-sm">
        <img src="${element.image}" alt="">
        <div class="card-body">
            
            <p class="card-text">${element.description}</p>
            <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                    <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                    <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                </div>
                <small class="text-body-secondary">${element.price}</small>
            </div>
        </div>
    </div>
</div>`

        console.log(element);
        });
        document.getElementById("row").innerHTML = body;
    })






