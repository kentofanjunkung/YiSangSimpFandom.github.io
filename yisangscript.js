function praise(){
    alert(
        "The Ideal Has Been Realized."
    );
}

let totalPraise = 0;

function increasePraise(){

    totalPraise++;

    document.getElementById("counter")
        .textContent = totalPraise;

    if(totalPraise === 10){
        alert(
            "Yi Sang appreciates your dedication."
        );
    }

}
