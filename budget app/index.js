const budget = document.querySelector("#budget")
const budgetbtn = document.querySelector("#budgetbtn")
const expensesName = document.querySelector("#expensesName")
const amount = document.querySelector("#amount")
const amountbtn = document.querySelector("#amountbtn")
const budgetamount = document.getElementById('budgetamount')
const amountExpenses = document.getElementById('amountExpenses')
const balance = document.getElementById('balance')
const list = document.getElementById('list')


budgetbtn.addEventListener('click', function(){
    const budgetamount = document.getElementById('budgetamount')
    let budgetbox = budget.value
    budgetamount.innerText = budgetbox;
    
});

amountbtn.addEventListener('click', function() {
    const amountExpenses = document.getElementById('amountExpenses')
    const budgetamount = document.getElementById('budgetamount')
    const balance = document.getElementById('balance')
    
    let amountValue = amount.value;
    amountExpenses.innerText = amountValue;
    balance.innerText = budgetamount.innerText - amountExpenses.innerText

    list.innerText = expensesName.value + " " + amountExpenses.innerText
    list.style.display = 'flex'
    list.style.justifyContent = 'space-between'
    list.style.alignItems = 'center'
    
});




