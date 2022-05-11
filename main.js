window.addEventListener('scroll', onScroll)
onScroll()

function onScroll() {
  showNav()
  showBtt()
  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(contact)
  activateMenuAtCurrentSection(about)
}

function activateMenuAtCurrentSection(section) {
  const targetLine = scrollY + innerHeight / 2
  const sectionTop = section.offsetTop
  const sectionHeight = section.offsetHeight
  const sectionEndsAt = sectionTop + sectionHeight
  const sectionTopReachedOrPassedTargetLine = targetLine >= sectionTop
  const sectionEndPassedTargetLine = sectionEndsAt <= targetLine
  const sectionId = section.getAttribute('id')
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)
  menuElement.classList.remove('active')
  console.log('hey')
  const sectionBoundries =
    sectionTopReachedOrPassedTargetLine && !sectionEndPassedTargetLine
  if (sectionBoundries) {
    menuElement.classList.add('active')
  }
}

function showNav() {
  if (scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}

function showBtt() {
  if (scrollY > 600) {
    btt.classList.add('show')
  } else {
    btt.classList.remove('show')
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700
}).reveal(`
#home,
#home img, 
#home .stats,
#services,
#services header,
#services .card
#about,
#about header,
#about .content
 `)
