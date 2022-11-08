document.addEventListener('DOMContentLoaded', function(){
    let inputTel = document.querySelectorAll('input[type=tel]');

    inputTel.forEach(input => {
        const mask = '+7 (___) ___-__-__';
        input.value = mask;

        input.addEventListener('input', function(event){
            let input = event.target;
            let inputNumberValue = input.value;
            let coretkaPos = input.selectionStart;
            let foramatted;

            //Запрет ввода букв
            if (/[^)(+_-\s\d]/g.test(inputNumberValue)){
               --coretkaPos
               input.value = '+' + inputNumberValue.replace(/[^)(_-\s\d]/g, '');
               input.selectionStart = input.selectionEnd = coretkaPos;
               return               
            }

            function getNum(foramatted, coretkaPos, indexCoretka) {
                
                let len = indexCoretka == 4 || indexCoretka == 9 ? 3 : 2;
                let controlIndex = indexCoretka == 4 ? 1 : indexCoretka == 9 ? 2 : indexCoretka == 13 ? 3 : 4
                console.log(len)
                if (foramatted[controlIndex].length < len) {
                    switch (coretkaPos){

                        case indexCoretka:
                            foramatted[controlIndex] = '_' + foramatted[controlIndex]
                            break
                        case indexCoretka + 1:
                            foramatted[controlIndex] = foramatted[controlIndex][0] + '_' + (foramatted[controlIndex][1] ?foramatted[controlIndex][1] :'')
                            break
                        case indexCoretka + 2:
                            foramatted[controlIndex] = foramatted[controlIndex] + '_'
                            break
                        default:
                            foramatted = ['7', '___', '___', '__', '__']
                    }
                }else if (foramatted[controlIndex].length >= len){
                    switch (coretkaPos){

                        case indexCoretka + 1:
                            foramatted[controlIndex] = foramatted[controlIndex][0] + foramatted[controlIndex].substring(2)
                            break
                        case indexCoretka + 2:
                            foramatted[controlIndex] = foramatted[controlIndex].substring(0, 2) + foramatted[controlIndex].substring(3)
                            break
                        case indexCoretka + 3:
                            foramatted[controlIndex] = foramatted[controlIndex].substring(0, 3) + foramatted[controlIndex].substring(4)                        
                            break
                        default:
                            foramatted = ['7', '___', '___', '__', '__']
                    }
                }
                console.log(foramatted, coretkaPos)
                return `+7 (${foramatted[1]}) ${foramatted[2]}-${foramatted[3]}-${foramatted[4]}`
            }
            if (coretkaPos >= 4 && coretkaPos < 8) {                
                foramatted = inputNumberValue.match(/[\d_]+/g)
                input.value = getNum(foramatted, coretkaPos, 4)
                input.selectionStart = input.selectionEnd = coretkaPos;
            } else if(coretkaPos >= 9 && coretkaPos < 13){
                foramatted = inputNumberValue.match(/[\d_]+/g)
                input.value = getNum(foramatted, coretkaPos, 9)
                input.selectionStart = input.selectionEnd = coretkaPos;
            } else if(coretkaPos >= 13 && coretkaPos < 16){
                foramatted = inputNumberValue.match(/[\d_]+/g)
                input.value = getNum(foramatted, coretkaPos, 13)
                input.selectionStart = input.selectionEnd = coretkaPos;
            } else if(coretkaPos >= 16 && coretkaPos < 19){
                foramatted = inputNumberValue.match(/[\d_]+/g)
                input.value = getNum(foramatted, coretkaPos, 16)
                input.selectionStart = input.selectionEnd = coretkaPos;
            }
            else{
                input.value = '+7 (___) ___-__-__'
            }
        })
        input.addEventListener('focus', function(event){
            let input = event.target;
            let inputNumberValue = input.value;
            let coretkaPos = 4;

            if (mask == inputNumberValue) {
                input.selectionStart = input.selectionEnd = coretkaPos;    
            }
        })
    })
})

