let _name = document.querySelector('.name_lastn');
_name.addEventListener('change', (_name) => {
    let {value} = _name.target;
    
    console.log(value);
})

let checkbox = document.querySelector(".checkbox");
let button = document.querySelector(".button");
let subtitle = document.querySelector(".subtitle");
let subtitle2 = document.querySelector(".subtitle2")

console.log(checkbox.checked);

button.addEventListener("click", (evt) => {

    evt.preventDefault();
    if (checkbox.checked) {
        console.log("Ви відправили форму");
        subtitle2.style.display = "block";
    }
    
    else {
        console.log("Натисніть галочку для відправки форми");
        subtitle.style.display = "block";
    }
})
