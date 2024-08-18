
const menuButton = document.getElementById('menuButton')
const menuBar = document.getElementById('menuBar')

menuBar.style.display = 'none'

menuButton.addEventListener('click', function() {
  if(menuBar.style.display === 'none') {
  menuBar.style.display = 'block'
}else {
  menuBar.style.display = 'none'
}
})