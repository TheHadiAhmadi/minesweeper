import 'virtual:windi.css'
import './style.css'

import {Game} from './game'
console.log(Game)
console.log(Game({size: 100, mines: 50}).getData())

function createItem(data) {
  return `<div class="tile${data.revealed ? ' tile-revealed' : ''}">${data.value}</div>`
}

function createRow(data) {
  const children = data.map(d => createItem(d)).join('')
  return `<div class="table-row flex flex-row">${children}</div>`
}

function createTable(data) {
  const children =data.map(d => createRow(d)).join('')
  return `<div class="table flex flex-col">${children}</div>`
}

function updateUI() {
  const data = Game({size: 10}).getData()


  // const zoomIn = document.getElementById('zoom-in')
  // const zoomEqual = document.getElementById('zoom-equal')
  // const zoomOut = document.getElementById('zoom-out')

  // zoomIn.addEventListener('click', () => {
  //   console.log('zoomIn')
  // })  
  // zoomOut.addEventListener('click', () => {
  //   console.log('zoomOut')
  // })  
  // zoomEqual.addEventListener('click', () => {
  //   console.log('zoomEqual')
  // })


  const table = document.getElementById('table')

  table.innerHTML = createTable(data)
}

updateUI()