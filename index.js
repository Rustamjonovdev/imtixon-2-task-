const url = "https://api.adviceslip.com/advice"
const number = document.querySelector(".number");
const text = document.querySelector(".text")
const btnRef = document.querySelector('.refresh')



function startGenerator(){
    

    btnRef.addEventListener('click', () => {
        fetch(url).then((data) => {
            return data.json()
        }).then((posts) => {
            randomAdvice(posts)
        }).catch((error) => {
            console.log(error);
        } )
    })  
    
    function randomAdvice(data){
        console.log(data);
    
        text.textContent = data.slip.advice
        number.textContent = '#' + data.slip.id
    } 
}

startGenerator()