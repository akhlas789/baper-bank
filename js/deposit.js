document.getElementById('btn-deposit').addEventListener('click',function(){
    const depositFild = document.getElementById('deposit-fild')
    const newDepositAmountString = depositFild.value
    const newDepositAmount = parseFloat(newDepositAmountString)

    const depositTotalElement = document.getElementById('deposit-total')
    const PreviusDepositTotalString = depositTotalElement.innerText
    const PreviusDepositTotal = parseFloat(PreviusDepositTotalString)
    const currentDepositTotal = newDepositAmount + PreviusDepositTotal
    depositTotalElement.innerText = currentDepositTotal

    depositFild.value = ''
})