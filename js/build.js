
disableButton = () => {
    document.getElementById("validate").disabled = true;
};



//////////////////////////////////////////////////////////////////
//CHECK FOR 5 TOPPINGS & 1 SAUCE////////////////////////////////////////////
//////////////////////////////////////////////////////////////////

checkForFive = () => {

    let sauceOptions = document.getElementsByName("sauces");
    let sauceArray = [];
    let ingredientOptions = document.getElementsByName("ingredients");
    let ingArray = [];

    for(let i = 0; i < ingredientOptions.length; i++ ) {
        if(ingredientOptions[i].checked){
            ingArray.push(ingredientOptions [i].value);
        };
    };

    for (let i = 0; i < sauceOptions.length; i++ ) {
        if (sauceOptions[i].checked) {
            sauceArray.push(sauceOptions[i].value);
        };
    };

    if((ingArray.length >= 5)&&(sauceArray.length >= 1)) {
        document.getElementById("validate").disabled = false;
    } else {
        document.getElementById("validate").disabled = true;
    };

};



//////////////////////////////////////////////////////////////////
//ADD SUB/////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////

let subOrder = [];

addSub = () => {

    let subCost = 0;
    let subName = document.getElementById("name").value;
    let breadOption = document.getElementsByName("bread");
    let breadValue

    for(let i = 0; i < breadOption.length; i++ ){

        if(breadOption [i].checked){
            breadValue = breadOption [i].value;
            subCost = subCost + + breadOption [i].dataset.cost;
        };

    };

    //////////////////////////////////////////////////////////////////

    let ingredientOptions = document.getElementsByName("ingredients");
    let ingArray = [];

    for(let i = 0; i < ingredientOptions.length; i++ ){

        if(ingredientOptions [i].checked){
            ingArray.push(ingredientOptions [i].value);
            subCost = subCost + + ingredientOptions [i].dataset.cost;
        };

    };
    
    let sauceOptions = document.getElementsByName("sauces");
    let sauceArray = [];

    for(let i = 0; i < sauceOptions.length; i++ ){

        if(sauceOptions [i].checked){
            sauceArray.push(sauceOptions [i].value);
            subCost = subCost + + sauceOptions [i].dataset.cost;
        };

    };

    //////////////////////////////////////////////////////////////////

    subOrder.push({
        subName: subName,
        subBread: breadValue,
        subPrice: subCost,
        subIngredients: ingArray,
        subSauces: sauceArray
    });

    document.getElementById("subForm").reset();
    document.getElementById("activeCost").innerHTML = "R0.00"

};

//////////////////////////////////////////////////////////////////
//ACTIVE COST/////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////

activeCost = () => {

    activePrice = 0; 

    let breadOption = document.getElementsByName("bread"); 

    for(let i = 0; i < breadOption.length; i++ ){

        if(breadOption[i].checked){
            activePrice = activePrice + + breadOption[i].dataset.cost
        };

    };


    let ingredientOptions = document.getElementsByName("ingredients");

    for(let i = 0; i < ingredientOptions.length; i++ ){
        if(ingredientOptions[i].checked){
            activePrice = activePrice + + ingredientOptions[i].dataset.cost
        };
    };


    let sauceOptions = document.getElementsByName("sauces");

    for(let i = 0; i < sauceOptions.length; i++ ){
        if(sauceOptions[i].checked){
            activePrice = activePrice + + sauceOptions[i].dataset.cost
        };
    };

    document.getElementById("activeCost").innerHTML = "R" + activePrice + ".00"

};

//////////////////////////////////////////////////////////////////
//CREATE CARDS////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////

createCard = () => {

    let card = document.getElementById("subs");
    let total = document.getElementById("subsTotal");

    card.innerHTML = "";

    let orderTotal = 0; 

    for(let i = 0; i < subOrder.length; i++ ){

        let name = subOrder [i].subName;
        let bread = subOrder [i].subBread;
        let ingredients = subOrder [i].subIngredients;
        let sauces = subOrder [i].subSauces;
        let price = subOrder [i].subPrice; 

        orderTotal += price;

        card.innerHTML += 

            `
                <div class="card">
                    <div class="card-content">
                        <h5>${name}</h5>
                        <p>Bread: ${bread}</p>
                        <p>Ingredients: ${ingredients.join(", ")}</p>
                        <p>Sauces: ${sauces.join(", ")}</p>
                        <p>Cost: R${price}.00</p>
                    </div>
                </div>
            `

        total.innerHTML = "R" + orderTotal + ".00"

    };
};


//////////////////////////////////////////////////////////////////
//SEND TO CHECKOUT////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////

goToCheckout = () => {

    let data = JSON.stringify(subOrder);
    localStorage.setItem("finalOrder", data);

};




