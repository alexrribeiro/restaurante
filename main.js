const botaoMenu = document.querySelector('.icon-menu');
const menuItem = document.querySelector('.header-nav');
const linkCardapio = document.querySelector('.link-cardapio');
const fecharMenu = document.querySelector('#close-menu');

botaoMenu.addEventListener('click', () => {
    menuItem.classList.remove('hidden');
    linkCardapio.classList.add('hidden');
});

fecharMenu.addEventListener('click', () => {
    menuItem.classList.add('hidden');
    linkCardapio.classList.remove('hidden');
});

const links = document.querySelectorAll('.header-menu-link')

for (const link of links) {
  link.addEventListener('click', function () {
    menuItem.classList.add('hidden');
  })
}