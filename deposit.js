// add event listener to the deposit button
//  document.getElementById('btn-deposit').addEventListener('click',function(){
//     const depositField = document.getElementById('deposit-field');
//     const newDepositAmountSttring = depositField.value;
//     const newDepositAmount = parseFloat(newDepositAmountSttring);
//     // console.log(newDepositAmount);


//     depositField.value = '';
//     const depositTotalelement = document.getElementById('deposit-total');
//     const previousDepositTotalSring = depositTotalelement.innerText;
//     const previousDepositTotal = parseFloat(previousDepositTotalSring);

//     const newDepositTotal = previousDepositTotal + newDepositAmount;
//     depositTotalelement.innerText = newDepositTotal;

//     const balanceTotalElement = document.getElementById('balance-total');
//     const previousBalanceTotalString = balanceTotalElement.innerText;
//     const previousBalanceTotal = parseFloat(previousBalanceTotalString);

//     const newBalanceTotal = previousBalanceTotal + newDepositAmount;
//     balanceTotalElement.innerText = newBalanceTotal;
//  })


document.getElementById('btn-deposit').addEventListener('click',function(){
   const newDepositAmount = getInputFieldValueById('deposit-field');
   const previousDepositTotal = getTextElementValueById('deposit-total');
   const newDepositTotal = previousDepositTotal + newDepositAmount;
   setTextElementValueById('deposit-total',newDepositTotal);


   const previousBalanceTotal = getTextElementValueById('balance-total')
   const newBalanceTotal = previousBalanceTotal + newDepositAmount;
   setTextElementValueById('balance-total', newBalanceTotal);
})


