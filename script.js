const initialPrice = document.querySelector("#initial-price");
const quantityOfStocks = document.querySelector("#quantity");
const currentPrice = document.querySelector("#current-price");
const tellMeBtn = document.querySelector("#tell-me-btn");
const message = document.querySelector("#message-output");

 tellMeBtn.addEventListener("click",btnHandler);
  
 
 function calculateProfitOrLoss(initial,current,quantity){
    if(current > initial ){
        var profit = (current-initial)*quantity;
        var profitPercentage = (profit/initial)*100;
        message.style.color = "green";
        showmessage(`Yay! 🤑🤑🥳🥳your profit is ${profit} and profit percentage ${profitPercentage.toFixed(2)}%`);
    }
    else if(initial > current){
        var loss = (initial-current)*quantity;
        var lossPercentage = (loss/initial)*100;
        message.style.color = "red";
        showmessage(`uffff! 😔😌😩😩your loss is ${loss} and loss percentage ${lossPercentage.toFixed(2)}%`);
    
    }
    else{
        showmessage(`No pain no gain , no gain no pain 🐱‍🏍🐱‍🏍!!`);
    }
}

 function btnHandler(){
     var initial = Number(initialPrice.value);
     var current = Number(currentPrice.value);
     var quantity = Number(quantityOfStocks.value);

     var profitOrLoss = calculateProfitOrLoss(initial,current,quantity);

 }


 function showmessage(msg){
     message.innerText = msg;      
 }