// document.getElementById('btn-withdraw').addEventListener('click',function(){
//   const withdrawField = document.getElementById('withdraw-field');
//   const withdrawAmountString = withdrawField.value;
//   const withdrawTAmount = parseFloat(withdrawAmountString);
//    //   console.log(withdrawTotal); 
//    withdrawField.value = '';

//    const withdrawTotalElement = document.getElementById('withdraw-total');
//    const previousWithdrawTotalString = withdrawTotalElement.innerText;
//    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
// //    withdrawTotalElement.innerText = previousWithdrawTotal;
//    const newWithdrawTotal = previousWithdrawTotal + withdrawTAmount;
//    withdrawTotalElement.innerText = newWithdrawTotal;

//    const balanceElement = document.getElementById('balance-total');
//    const previousBalanceTotalString = balanceElement.innerText;
//    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

//    const newbalanceTotal = previousBalanceTotal - withdrawTAmount;
//     balanceElement.innerText = newbalanceTotal;
// })


document.getElementById('btn-withdraw').addEventListener('click',function(){
    const newWithdrawAmount = getInputFieldValueById('withdraw-field');
    const previousWithdrawTotal = getTextElementValueById('withdraw-total');
    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    setTextElementValueById('withdraw-total', newWithdrawTotal);

    const previousBalanceTotal = getTextElementValueById('balance-total');
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    setTextElementValueById('balance-total', newBalanceTotal);
})