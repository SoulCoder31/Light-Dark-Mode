const toggleSwitch = document.querySelector('input[type="checkbox"]')
const nav = document.querySelector('#nav')
const toggleIcon = document.querySelector('#toggle-icon')
const image1 = document.querySelector('#image1')
const image2 = document.querySelector('#image2')
const image3 = document.querySelector('#image3')
const textBox = document.querySelector('#text-box')

function imageColor(mode){
    
    image1.src = `img/undraw_proud_coder_${mode}.svg`
    image2.src = `img/undraw_feeling_proud_${mode}.svg`
    image3.src = `img/undraw_conceptual_idea_${mode}.svg`

}


function darkMode(){
    nav.style.backgroundColor = 'rgb(0 0 0 / 50%)'
    textBox.style.backgroundColor = 'rgb(255 255 255 / 50%)'
    toggleIcon.children[0].textContent = 'Dark Mode'
    toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon')
    // toggleIcon.children[1].classList.add('fa-moon')
    imageColor("dark")
}

function lightMode(){
    nav.style.backgroundColor = 'rgb(255 255 255 / 50%)'
    textBox.style.backgroundColor ='rgb(0 0 0 / 50%)'
    toggleIcon.children[0].textContent = 'Light Mode'
    toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun')
    // toggleIcon.children[1].classList.add('fa-sun'
    imageColor("light")
}

function switchTheme(event){
    if(event.target.checked){
        // if true
        document.documentElement.setAttribute('data-theme','dark')
        // gets reference to root node of element i.e <html>
        darkMode()
    }else{
        // if false
        document.documentElement.setAttribute('data-theme','light')
        lightMode()
    }
    
}

toggleSwitch.addEventListener('change', switchTheme)