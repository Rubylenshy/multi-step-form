

var stepOne = document.querySelector('.step-information-one');
var stepTwo = document.querySelector('.step-information-two');
var stepThree = document.querySelector('.step-information-three');
var stepFour = document.querySelector('.step-information-four');
var stepFive = document.querySelector('.step-information-five');
/* Mobile-buttons */
const mobileFooter = document.querySelector('.mobile-footer')
const prev = mobileFooter.querySelector('.go-back')
const next = mobileFooter.querySelector('.next-step-btn')

/*Step Two Switch */
const switchPlan = document.querySelector('.switch')
const price = document.querySelectorAll('.bill-price')
const addOnBill = stepThree.querySelectorAll('.add-on-bill')
switchPlan.addEventListener('click', ()=>{
    switchPlan.classList.toggle('active')
    if (switchPlan.classList.contains('active')) {
        document.querySelectorAll('.yearly-bonus').forEach( item =>{
            item.style.display = 'block'
        })
        
        for (let i = 0; i < price.length; i++) {
            price[0].textContent = '$90/yr'
            price[1].textContent = '$120/yr'
            price[2].textContent = '$150/yr'

            addOnBill[0].textContent = '+$10/yr'
            addOnBill[1].textContent = '+$20/yr'
            addOnBill[2].textContent = '+$20/yr'
        }
    }
    else{ 
        document.querySelectorAll('.yearly-bonus').forEach( item =>{
            item.style.display = 'none'
        })
        for (let i = 0; i < price.length; i++) {
            price[0].textContent = '$9/mo'
            price[1].textContent = '$12/mo'
            price[2].textContent = '$15/mo'

            addOnBill[0].textContent = '+$1/mo'
            addOnBill[1].textContent = '+$2/mo'
            addOnBill[2].textContent = '+$2/mo'
        }
        }
})

