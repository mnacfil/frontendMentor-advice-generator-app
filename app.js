const adviceMessage = document.querySelector('.advice-center p');
const advanceID = document.querySelector('.adviceID')
const fetchBtn = document.querySelector('.advice-btn');

// advice API
const url = 'https://api.adviceslip.com/advice'

const fetchAdvice = async() => {
    adviceMessage.innerHTML = 'loading...'
    try {
        const response = await fetch(url)
        const data = await response.json()
        return data
    } catch(error) {
        console.log(error)
    }
}

const displayAdvice = async () => {
    const {slip: {id, advice}}= await fetchAdvice()
    advanceID.textContent = id
    adviceMessage.textContent = advice
}

window.addEventListener('DOMContentLoaded', displayAdvice)
fetchBtn.addEventListener('click', displayAdvice)
