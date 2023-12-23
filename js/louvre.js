function syt1()
{
  const navOn = document.getElementById('nav-menu');
  if (navOn.className.match('show-menu'))
  {
    navOn.classList.remove('show-menu')
  }
  else 
  {
    navOn.classList.add('show-menu')
  }
}

