let input = document.querySelectorAll('input[type="tel"]')
let mask = '+7 (___) ___-__-__'

input.forEach((input) =>{
    input.addEventListener('input', (event) => {
        let input = event.target;

        let value = input.value;
        let data = event.data;
        let caretPos = input.selectionStart;
        let regNumber = value.match(/[\d_]/g)
        
        if (data == '_') {
            value = value.slice(0, caretPos-1) + value.slice(caretPos,);
            regNumber = value.match(/[\d_]/g);
        }
        if (regNumber == null) {
            input.value = mask;
            return
        }

        if (regNumber.length == 12 && /\d/.test(data)) {

            value = value.slice(0,caretPos-1) + value.slice(caretPos,)
            regNumber = value.match(/[\d_]/g)
            
            let indexRegNumber = regNumber.indexOf('_')

            if (indexRegNumber != -1) {
                regNumber.splice(indexRegNumber, 1, data)
            }

        }

        if (regNumber.length < 11) {

            let multiplyStr = [];
            let border = 11 - regNumber.length

            for (let i = 0; i < border; i++){
                multiplyStr.push('_')
            }

            value = value.slice(0, caretPos) + multiplyStr.join('') + value.slice(caretPos,)
            regNumber = value.match(/[\d_]/g)      
            
            if (regNumber[0] != 7) {
                regNumber.unshift(7);
            } 
        }

        if (value.length < 18 && caretPos >= 4) {

            if (caretPos == 15) {
                value = value.slice(0, caretPos - 1) + '_' + value.slice(caretPos,)
            } else if (caretPos == 12) {
                value = value.slice(0, caretPos - 1) + '_' + value.slice(caretPos,)     
            } else if (caretPos == 8 || caretPos == 7 || caretPos == 6) {
                value = value.slice(0, caretPos - 2) + '_' + value.slice(caretPos,)     
            }
            regNumber = value.match(/[\d_]/g)
        }

        input.value = `+7 (${regNumber.slice(1, 4).join('')}) ${regNumber.slice(4, 7).join('')}-${regNumber.slice(7, 9).join('')}-${regNumber.slice(9, 11).join('')}`

        function getCaretPos(value) {

            let caretPos;
            let index = value?.match('_')?.index;
            let flag = /\d/.test(`${index}`)

            caretPos = flag ? index : 19;

            return caretPos == null ? 4 : caretPos;
        }


        caretPos = getCaretPos(input.value);
        input.setSelectionRange(caretPos, caretPos)
    })
    input.addEventListener('click', (event) => {
        let value = event.target.value
        let index = value?.match('_')?.index
        if (index) {
            event.target.setSelectionRange(index, index)
        } else return;
    })
    input.addEventListener('focus', (event) => {
        event.target.value = mask;
    }, {once: true})
})





window.onload = function(event) {

    function putCenterIconServices() {
        
        let icons = document.querySelectorAll('.img_icon_services img:last-child')
        let size = {}
        let i = 0

        for(let i = 0; i < icons.length; i++) {

            let item = icons[i];
            let width = item.clientWidth;
            let height = item.clientHeight;

            let centerWidth = Math.floor(width / 2);
            let centerHeight = Math.floor(height / 2);

            centerWidth = 35 - centerWidth;
            centerHeight = 35 - centerHeight;

            item.style.cssText = `
                position: absolute;
                top: ${centerHeight}px;
                left: ${centerWidth}px;
                visibility: visible;`
        }
    }

    putCenterIconServices()
}