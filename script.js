const togle = document.getElementById('togle')
const aside = document.getElementById('aside')
const profile = document.getElementById('profile')
const surat = document.getElementById('surat')

togle.addEventListener('click', function(){
    aside.classList.toggle("aside")
    aside.classList.toggle("aside-res")
    togle.classList.toggle("togle-r")
    profile.classList.toggle("display-none")
    surat.classList.toggle("display-none")
})