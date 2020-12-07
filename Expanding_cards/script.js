const panels = document.querySelectorAll('.panel')

images = ["url('images/Palawan.jpg')","url('images/Bali.jpg')","url('images/Paris.jpg')","url('images/Seljalandfoss.jpg')","url('images/Himalayas.jpg')"]
index = 0
panels.forEach((panel) => {
  
  panel.addEventListener('click',()=>{
    removeActiveClasses()
    panel.classList.add('active')
    document.body.style.backgroundImage =  panel.style.backgroundImage
  })
});

function removeActiveClasses(){
  panels.forEach(panel=>{
      panel.classList.remove('active')
  })
}