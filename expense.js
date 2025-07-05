let budget = 0;
let totalExpense = 0;
let remaining = 0;

const budgetInput = document.getElementById('budget');
const budgetDisplay = document.getElementById('display-budget');
const expenseDisplay = document.getElementById('display-expense');
const remainingDisplay = document.getElementById('display-remaining');
const expenseList = document.getElementById('expense-list');


document.getElementById('set-budget-form').addEventListener('submit', function (e) {
  e.preventDefault();
  if (budgetInput.value === '' || isNaN(budgetInput.value) || parseFloat(budgetInput.value) <= 0 ) {
    alert("please enter a valid budget amount");
    return ;
  }
  
  budget = parseFloat(budgetInput.value);
  updateDisplays();
  budgetInput.value = '';
});
document.getElementById('add-expense-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('expense-name').value.trim();
  const date = document.getElementById('expense-date').value;
  const amount = parseFloat(document.getElementById('expense-amount').value);

  if (name === '' || date === '' || isNaN(amount) || amount <= 0) return;

  totalExpense += amount;
  updateDisplays();
  addExpenseToList(name, date, amount);
  this.reset();
});

function updateDisplays() {
  remaining = budget - totalExpense;
  budgetDisplay.textContent = `₹${budget}`;
  expenseDisplay.textContent = `₹${totalExpense}`;
  remainingDisplay.textContent = `₹${remaining}`;
}

function addExpenseToList(name, date, amount) {
  const row = document.createElement('tr');
  row.innerHTML = `
    <td>${name}</td>
    <td>${date}</td>
    <td>₹${amount}</td>
  `;
  expenseList.appendChild(row);
}
