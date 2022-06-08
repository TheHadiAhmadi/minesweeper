// all used html template strings.
const flagSvg = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--mdi" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6h-5.6Z"></path></svg>'
const mineSvg = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--mdi" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M23 13v-2h-3.07a7.988 7.988 0 0 0-1.62-3.9l2.19-2.17l-1.43-1.43l-2.17 2.19A7.988 7.988 0 0 0 13 4.07V1h-2v3.07c-1.42.18-2.77.74-3.9 1.62L4.93 3.5L3.5 4.93L5.69 7.1A7.988 7.988 0 0 0 4.07 11H1v2h3.07c.18 1.42.74 2.77 1.62 3.9L3.5 19.07l1.43 1.43l2.17-2.19c1.13.88 2.48 1.44 3.9 1.62V23h2v-3.07c1.42-.18 2.77-.74 3.9-1.62l2.17 2.19l1.43-1.43l-2.19-2.17a7.988 7.988 0 0 0 1.62-3.9H23M12 8a4 4 0 0 0-4 4H6a6 6 0 0 1 6-6v2Z"></path></svg>'   

const numbers = {
    1: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--carbon" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32"><path fill="currentColor" d="M16 10v12v-12m1-1h-5v2h3v10h-3v2h8v-2h-3V9Z"></path></svg>',
    2: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--carbon" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32"><path fill="currentColor" d="M20 23h-8v-6a2 2 0 0 1 2-2h4v-4h-6V9h6a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-4v4h6Z"></path></svg>',
    3: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--carbon" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32"><path fill="currentColor" d="M18 9h-6v2h6v4h-4v2h4v4h-6v2h6a2 2 0 0 0 2-2V11a2 2 0 0 0-2-2Z"></path></svg>',
    4: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--carbon" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32"><path fill="currentColor" d="M18 10v8v-8m1-1h-2v8h-3V9h-2v10h5v4h2v-4h1v-2h-1V9Z"></path></svg>',
    5: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--carbon" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32"><path fill="currentColor" d="M18 23h-6v-2h6v-4h-6V9h8v2h-6v4h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2Z"></path></svg>',
    6: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--carbon" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32"><path fill="currentColor" d="M18 14h-4v-3h5V9h-5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2Zm-4 7v-5h4v5Z"></path></svg>',
    7: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--carbon" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32"><path fill="currentColor" d="M20 9h-8v4h2v-2h3.85L13 23h2.16L20 11V9z"></path></svg>',
    8: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--carbon" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32"><path fill="currentColor" d="M18 9h-4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V11a2 2 0 0 0-2-2Zm0 2v4h-4v-4Zm-4 10v-4h4v4Z"></path></svg>',
}

export const tileValue = ({revealed, isFlag, isMine, value}) => {
    // return mineSvg;
    const result = document.createElement('div')
    result.innerHTML = '';

    if(revealed){
        if(isMine) {
            result.innerHTML = mineSvg
            result.classList.add('mine')
        } else if(value !== 0) {
            result.innerHTML = numbers[value]
            result.classList.add('number')
            result.classList.add('number-' + value)
        }
    } else if(isFlag) {
        result.innerHTML = flagSvg
        result.classList.add('flag')

    }
  
    return result;

}

export const tile = ({revealed=false, isFlag=false, isMine=false, value=0, onClick, onRightClick}) => {
    let className = "tile"
    if(revealed) {
        className += ' tile-revealed'
    } else {
        className += ' -depth'
    }
    if(isMine) {
        className += ' tile-mine'
    }
    if(isFlag) {
        className += ' tile-flag'
    }
    className += ` tile-${value}`

    const element = document.createElement('div')
    element.className = className

    const val = tileValue({revealed, isFlag, isMine, value})
    element.appendChild(val);

    element.addEventListener('click', () => {
        onClick()
    })
    element.addEventListener('contextmenu', (e) => {
        e.preventDefault()
        onRightClick()
    })
    

    return element;
}

export const table = (data) => {
    const table = document.createElement('div')
      
    table.className = "table depth grid-cols-10 grid-rows-10 bg-[#404040] select-none"

    data.map(d => {
        d.map(cell => {
            table.appendChild(tile(cell)); 
        })
    })



    return table;
}