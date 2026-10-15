const expenseName = document.getElementById("expenseName");
const expenseAmount = document.getElementById("expenseAmount");
const addBtn = document.getElementById("addBtn");
const expenseList = document.getElementById("expenseList");
const total = document.getElementById("total");


let totalAmount = 0;


addBtn.addEventListener("click", function() {
const name = expenseName.value.trim();
const amount = Number(expenseAmount.value);


if (name === "" || expenseAmount.value === "" || amount <= 0) {
    alert("Please enter a valid expense!");
    return;
}


const li = document.createElement("li");


const expenseText = document.createElement("span");
expenseText.textContent = name + " - ₹" + amount;


const deleteBtn = document.createElement("button");
deleteBtn.textContent = "Delete";
deleteBtn.classList.add("deleteBtn");


li.appendChild(expenseText);
li.appendChild(deleteBtn);
expenseList.appendChild(li);


totalAmount += amount;
total.textContent = totalAmount;


deleteBtn.addEventListener("click", function() {
    totalAmount -= amount;
    total.textContent = totalAmount;


    li.remove();
});


expenseName.value = "";
expenseAmount.value = "";


});