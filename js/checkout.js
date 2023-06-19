loadCart = () => {
    
    let data = JSON.parse(localStorage.getItem("finalOrder"));
    
    let total = 0; 
    let cards = document.getElementById("checkoutOrder");
    let cost = document.getElementById("orderCost");
    

    for (let i = 0; i < data.length; i++ ){

        let name = data [i].subName;
        let bread = data [i].subBread;
        let ingredients = data [i].subIngredients;
        let sauces = data [i].subSauces;
        let price = data [i].subPrice; 
    
        total += price;

        cards.innerHTML += 
        
        `
            <div class="checkout-cards">
                <p><b>Name:</b> ${name}</p>
                <p><b>Bread:</b> ${bread}</p>
                <p><b>Ingredients:</b> ${ingredients.join(", ")}</p>
                <p><b>Sauces:</b> ${sauces.join(", ")}</p>
                <p><b>Cost:</b> R${price}.00</p>
            </div>
        `

        cost.innerHTML = "R" + total + ".00"

    };

console.log(cards);

};

//////////////////////////////////////////////////////////////////

usePromo = () => {

    let data = JSON.parse(localStorage.getItem("finalOrder"));
    let promo = document.getElementById("promo").value;
    let message = document.getElementById("message");
    let newOrderCost = document.getElementById("newOrderCost");
    let oldTotal = 0;
    
    for (let i = 0; i < data.length; i++ ){
        
        let price = data [i].subPrice;

        oldTotal += price;

        if (promo === "cheap"){
            
            let newTotal = oldTotal * 0.8;
            
            message.innerHTML = "your new total is: "
            newOrderCost.innerHTML = "R" + newTotal + ".00"
                
        } else {

            message.innerHTML = "your code was invalid, your total is still: "
            newOrderCost.innerHTML = "R" + oldTotal + ".00"

        };
    };

};

//////////////////////////////////////////////////////////////////

reset = () => {
    localStorage.removeItem("finalOrder");
};