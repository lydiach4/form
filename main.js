let password = document.getElementById("password");
let name = document.getElementById("name");
let email = document.getElementById("email");
let afficher = document.getElementById("afficher");
let submit = document.getElementById("button");
let gender = document.getElementById('select');
let mr = '';
let country = document.getElementById('pays');
let image = document.getElementById('image');

submit.onclick = function () {

  if (name.value && email.value && password.value.length > 8) {
    afficher.style.color = 'green';
    if( gender.value == 'man'){
mr = 'Mr ' + name.value ;
    }
    else {
        mr = ' Miss ' + name.value ;
    }
    afficher.innerText = "Welcome to the website " + mr;
    if ( country.value == 'algeria'){
image.src = ' https://img.freepik.com/photos-gratuite/drapeau-algerie_1401-52.jpg' ;
    }
    else if (country.value == 'tunisia'){
image.src = " https://img.freepik.com/photos-gratuite/drapeau-tunisie_1401-243.jpg" ;
    }
    else {
image.src ="https://img.freepik.com/vecteurs-premium/drapeau-du-maroc-tous-drapeaux-pays_1177305-62.jpg " ;
    }
  } else  {
    afficher.style.color = 'red';
    afficher.innerText = "Check your inputs";
  }
};
