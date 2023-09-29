document.getElementById('btn-withdrow').addEventListener('click', function () {
    const withdrowFild = document.getElementById('withdrow-fild')
    const withdrowFildString = withdrowFild.value
    const newWithdroeAmount = parseFloat(withdrowFildString)

    const WithdrowTotalElement = document.getElementById('withdrow-total')
    const previusWithdrowTotalString = WithdrowTotalElement.innerText
    const previusWithdrowTotal = parseFloat(previusWithdrowTotalString)

    const currentWithdrowToatal = previusWithdrowTotal + newWithdroeAmount;
    WithdrowTotalElement.innerText = currentWithdrowToatal

    const balancTotalElement = document.getElementById('balance-total')
    const previusBalanceTotalString = balancTotalElement.innerText
    const previusBalanceTotal = parseFloat(previusBalanceTotalString)
    
    const newBalanceTotal = previusBalanceTotal - newWithdroeAmount
    balancTotalElement.innerText = newBalanceTotal

    withdrowFild.value = ''

})