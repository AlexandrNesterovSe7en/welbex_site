document.addEventListener('DOMContentLoaded', function(){
    let inputTel = document.querySelectorAll('input[type=tel]');

    inputTel.forEach(input => {
        const mask = '+7 (___) ___-__-__';
        input.value = mask;

        input.addEventListener('input', function(event){
            let input = event.target;
            let inputNumberValue = input.value;
            let coretkaPos = input.selectionStart;
            console.log(inputNumberValue)
           
            //Запрет ввода букв
            // if (/\D/g.test(inputNumberValue)){
            //    coretkaPos = inputNumberValue.match(/\D/).index;
            //    input.value = inputNumberValue.replace(/\D/g, '');
            //    input.selectionStart = input.selectionEnd = coretkaPos;
            // }
        })
        input.addEventListener('click', function(event){
            let input = event.target;
            let inputNumberValue = input.value;
            let coretkaPos = 4;

            if (mask == inputNumberValue) {
                input.selectionStart = input.selectionEnd = coretkaPos;    
            }
        })
        input.addEventListener('keydown', function(event){
            let input = event.target
            let key = event.code
            let coretkaPos = input.value.match(/_/)?.index

            if (/\d/.test(key) && coretkaPos >= 4 && coretkaPos < 7) {
                input.value = input.value.replace(/_/, key.replace(/\D/g, ''))
                input.selectionStart = input.selectionEnd = ++coretkaPos;
            }
            if (/\d/.test(key) && coretkaPos >= 9 && coretkaPos < 12) {
                input.value = input.value.replace(/_/, key.replace(/\D/g, ''))
                input.selectionStart = input.selectionEnd = ++coretkaPos;
            }
            if (/\d/.test(key) && coretkaPos >= 13 && coretkaPos < 15) {
                input.value = input.value.replace(/_/, key.replace(/\D/g, ''))
                input.selectionStart = input.selectionEnd = ++coretkaPos;
            }
            if (/\d/.test(key) && coretkaPos >= 16 && coretkaPos < 18) {
                input.value = input.value.replace(/_/, key.replace(/\D/g, ''))
                input.selectionStart = input.selectionEnd = ++coretkaPos;
            }
        })
    })
})