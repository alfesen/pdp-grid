const burgerBtn = document.querySelector('.nav__mobile-burger')
const burger = document.querySelector('.hamburger')
const mobNavBody = document.querySelector('.nav__mobile-body')
const mobNavItems = document.querySelectorAll('.nav__mobile-link')
const boxes = document.querySelectorAll('.boxes__box')

const handleNav = () => {
  burger.classList.toggle('is-active')
  mobNavBody.classList.toggle('show-nav')
  document.body.classList.toggle('sticky')
  hideNav()
}

const hideNav = () => {
  mobNavItems.forEach(item => {
    item.addEventListener('click', () => {
      burger.classList.remove('is-active')
      mobNavBody.classList.remove('show-nav')
      document.body.classList.remove('sticky')
    })
  })
}

const handleBoxClosing = () => {
  boxes.forEach(box => {
    box.addEventListener('click', () => {
      box.firstElementChild.classList.toggle('open')
    })
  })
}

handleBoxClosing()
burgerBtn.addEventListener('click', handleNav)
