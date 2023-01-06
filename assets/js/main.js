
const sideBarBtn = document.querySelectorAll('.step-circle')

for (let i = 0; i < sideBarBtn.length; i++) {
    var stepOne = document.querySelector('.step-information-one');
    var stepTwo = document.querySelector('.step-information-two');
    var stepThree = document.querySelector('.step-information-three');
    var stepFour = document.querySelector('.step-information-four');
    var stepFive = document.querySelector('.step-information-five');
    window.addEventListener('load', ()=>{
        sideBarBtn[0].classList.add('active')
    })
    sideBarBtn[0].addEventListener('click', ()=>{
        stepOne.style.display = 'block'
    })
    sideBarBtn[1].addEventListener('click', ()=>{
        stepTwo.style.display = 'block'
        stepOne.style.display = 'none'
        stepThree.style.display = 'none'
    })
    sideBarBtn[2].addEventListener('click', ()=>{
        stepThree.style.display = 'block'
        stepOne.style.display = 'none'
        stepTwo.style.display = 'none'
    })
}

const switchPlan = document.querySelector('.switch')
const price = document.querySelectorAll('.bill-price')
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
        }
        }
})

const addOns = document.querySelectorAll('.add-ons')
movie_list.addEventListener('click', (add)=>{
    if (add.target.title == 'delete') {
        const li = add.target.parentElement;
        li.parentNode.removeChild(li);
    }
});