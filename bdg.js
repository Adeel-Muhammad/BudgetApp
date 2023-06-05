// getting Element thats is utilize for the changing the Websites Behaviour
var budgetvalue = document.getElementById("budget");
var addBudget = document.getElementById("budget-btn");
var budgetAmount = document.getElementById("bdg-rsl");
var balanceAmount= document.getElementById("balance");
var ExpensesAmount= document.getElementById("exp-rsl");
var productName= document.getElementById("product-Name");
var productPrice= document.getElementById("product-price");
var productDate= document.getElementById("product-date");
var productDescription= document.getElementById("product-description");
var ExpenseBtn=document.getElementById("expense-btn");
var tableofExpense=document.getElementById("table");
var deletbtn = document.createElement("button");


// create object so that change the budget Expense Balance insiosde Function with the help of the
let  bdg={
    vlues:""
}

// with this global scope variable we easily work on the expense and balance output
var Expensebdg=0;
var remainingbdg=0;

// this perform after Event onclick on the html file button for the Set budget
function AddBudget(){
        
 if(budgetvalue.value !="" && budgetvalue.value>=0){
            
            bdg.vlues=budgetvalue.value;
            remainingbdg=bdg.vlues;
            budgetAmount.innerHTML=remainingbdg;
            
    
    
        }
        else{
            alert("Error : Required a Value?");
        }
    }




// this function work after click on the addExpense to store Expense list and generate the row
function createExpense(){
    
var nameValue=productName.value;
// productPrice directly change into Number using function Number
var priceValue=Number(productPrice.value);
var dateValue=productDate.value;
var desValue=productDescription.value;


// condition perform the below the mandatory constraint
if(nameValue===''&& isNaN(nameValue)===nameValue &&priceValue>=0 && dateValue===''&& desValue===''  && isNaN(desValue)===desValue){

    alert("Erroe : Required the Values without values not work? ");

}

else if(remainingbdg>priceValue)
{

    remainingbdg-=priceValue;
    balanceAmount.innerHTML=remainingbdg;
    Expensebdg +=priceValue;
    ExpensesAmount.innerHTML=Expensebdg;

// creat row with the help of DOM
    
let Row=document.createElement("tr");

Row.innerHTML=`<td>${nameValue}</td>
<td>${priceValue}</td>
<td>${dateValue}</td>
<td>${desValue}</td><td><button class="Deletbtn">Delete</button></td>`;
tableofExpense.appendChild(Row);

// Delete the Row with the help of the addEvent listener and other method acesses the Row variable 

Row.addEventListener('click',function(e)
{
if(!e.target.classList.contains("Deletbtn")){

    return;



}
const btn = e.target;
btn.closest('tr').remove();
// chnage the result value
remainingbdg +=Expensebdg;
Expensebdg -=Expensebdg;

ExpensesAmount.innerHTML=Expensebdg
balanceAmount.innerHTML=remainingbdg;

})
}





else{
    alert("Error: 1. Write the budget? \n 2.Your Produc Price is Greater than the Budget? \n 3. Required Values");
}








}






