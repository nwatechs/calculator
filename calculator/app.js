const allBtns = document.querySelectorAll('.numpad button')
const expBox = document.querySelector('.exp')
const resultBox = document.querySelector('.result')


allBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
        if (btn.className === '') {
            expBox.innerText += btn.innerHTML
        } 
        
        if (btn.classList.contains('operator')) {
            if (btn.classList.contains('square')) {
                expBox.innerText += ' ** 2'
            } else if (btn.classList.contains('pi')) {
                resultBox.innerText += +eval(expBox.innerText * Math.PI).toFixed(5)
            } else {
                expBox.innerText += btn.innerHTML
            }
        }
         
        if (btn.classList.contains('equals')) {
            try {
                resultBox.innerText = eval(expBox.innerText)
            } catch (e) {
                resultBox.innerText = 'Syntax error'
            }
        } 

        if (btn.classList.contains('delete')) {
            resultBox.innerText = ''
            expBox.innerText = expBox.innerText.slice(0, -1)
        }
    })
})