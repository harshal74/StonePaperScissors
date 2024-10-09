let stone = document.querySelector('#stone');
let paper = document.querySelector('#paper');
let scissors = document.querySelector('#scissors');
let result = document.querySelector('#result');
let result1 = document.querySelector('#result1');

const choices = document.querySelectorAll('.img')
let cscore = 0;
let hscore = 0;

choices.forEach((choice) =>{
    choice.addEventListener('click', ()=>{
        // const choiceId = choice.getAttribute('id');
        // play(choiceId);
        let randomValue = Math.random();
        if (randomValue <0.33) {
            cscore += 1;
            document.getElementById('cscore').textContent = cscore;
            result1.textContent = 'You loose..!';
            result1.style.padding = '5px 10px';
        }else if(randomValue < 0.66){
            hscore += 1;
            document.getElementById('hscore').textContent = hscore;
            result1.textContent = 'You won..!';
            result1.style.padding = '5px 10px';
        }else{
            result1.textContent = 'It\'s a tie!';
            result1.style.padding = '5px 10px';
        }
    })
})

result.addEventListener('click', ()=>{
    location.reload();
});