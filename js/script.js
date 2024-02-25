


   // Récupérer les valeurs du formulaire
const btn = document.getElementById('menu-btn');
const overlay = document.getElementById('overlay');
const menu = document.getElementById('mobile-menu');
const counters = document.querySelectorAll('.counter');
let scrollStarted = false;




btn.addEventListener('click', navToggle);
document.addEventListener('scroll', scrollPage);


function navToggle() {
  btn.classList.toggle('open');
  overlay.classList.toggle('overlay-show');
  document.body.classList.toggle('stop-scrolling');
  menu.classList.toggle('show-menu');
}


function scrollPage() {
  const scrollPos = window.scrollY;


  if (scrollPos > 100 && !scrollStarted) {
    countUp();
    scrollStarted = true;
  } else if (scrollPos < 100 && scrollStarted) {
    reset();
    scrollStarted = false;
  }
}


function countUp() {
  counters.forEach((counter) => {
    counter.innerText = '0';


    const updateCounter = () => {
      // Get count target
      const target = +counter.getAttribute('data-target');
      // Get current counter value
      const c = +counter.innerText;


      // Create an increment
      const increment = target / 100;


      // If counter is less than target, add increment
      if (c < target) {
        // Round up and set counter value
        counter.innerText = `${Math.ceil(c + increment)}`;


        setTimeout(updateCounter, 75);
      } else {
        counter.innerText = target;
      }
    };


    updateCounter();
  });
}



function reset() {
  counters.forEach((counter) => (counter.innerHTML = '0'));
}


function verifierFormulaire() {
  var name = document.getElementById("name").value
  var fname = document.getElementById("fname").value
  var password = document.getElementById("password").value
  var email = document.getElementById("email").value
  var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  var message = document.getElementById("message").value
  var checkbox = document.getElementById('formCheck-1');
  var label = document.getElementById('age');

 

  if (name === "") {
    
    document.getElementById("name").classList.add("error");
  
  }
    
    
   else {
    document.getElementById("name").classList.add("valid");
    document.getElementById("name").classList.remove("error");
    
  
  }

  if (fname === "") {
    document.getElementById("fname").classList.add("error");
    
  } else {
    document.getElementById("fname").classList.add("valid");
    document.getElementById("fname").classList.remove("erro");
    
  }

  if (password == ''  | password.length < 8) {
    document.getElementById("password").classList.add("error");
    pwd.classList.remove('invisible');
    
  } else {
    pwd.classList.add('invisible');
    document.getElementById("password").classList.add("error");
    document.getElementById("password").classList.remove("error");
    
  }

  if  (email === '' || !emailPattern.test(email)){
    document.getElementById("email").classList.add("error"); 
    
  } else {
    document.getElementById("email").classList.add("valid");
    document.getElementById("email").classList.remove("error"); 
    }

  if (message === "") {
    document.getElementById("message").classList.add("error");
    
  } else {
    document.getElementById("message").classList.add("valid");
    document.getElementById("message").classList.remove("error");
    
  }

  

  if (checkbox.checked) {
    label.style.color = 'green'; 
} else {
    label.style.color = 'red'; 
}
}




function verifierFormulaire2() {
  var password = document.getElementById("password").value
  var email = document.getElementById("email").value
  var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  var passwordValide = false;
  var emailValide = false;
 
  if (password == ''  | password.length < 8) {
    document.getElementById("password").classList.add("error");
    pwd.classList.remove('invisible');
    
  } else {
    pwd.classList.add('invisible');
    document.getElementById("password").classList.add("valid");
    document.getElementById("password").classList.remove("error");
  }

  if  (email === '' || !emailPattern.test(email)){
    document.getElementById("email").classList.add("error"); 
    
  } else {
    document.getElementById("email").classList.add("valid");
    document.getElementById("email").classList.remove("error"); 
    }

    if (emailValide && passwordValide) {
      // Charger le fichier JSON contenant les informations d'identification
      fetch('accounts.json')
        .then(response => response.json())
        .then(data => {
          // Vérifier si l'email et le mot de passe correspondent à ceux du fichier JSON
          const user = data.find(user => user.email === email && user.password === mdp);
          if (user) {
            // Si les informations d'identification sont valides, afficher la page de bienvenue
            afficherPageBienvenue(user);
            console.log('Bienvenue, ', user.nom, "Votre email est : ", user.email, "et votre mot de passe est : ", user.password);
          } else {
            // Sinon, afficher un message d'erreur ou effectuer une autre action
            alert('Email ou mot de passe incorrect.');
            console.log("Email ou mot de passe incorrect.");
          }
        })
        .catch((error) => {
          // Handle network errors and exceptions
          console.error("Une erreur est intervenu : ", error);
        });
    }
  }
  
  
  // Fonction pour afficher la page de bienvenue
  function afficherPageBienvenue(user) {
    // Récupérer l'élément formulaire de connexion
    const formulaireConnexion = document.getElementById('formulaire-connexion');
    
    // Vérifier si l'élément existe
    if (formulaireConnexion) {
      // Cacher le formulaire de connexion
      formulaireConnexion.style.display = 'none';
    }
  
    // Afficher la page de bienvenue avec les informations de l'utilisateur
    const welcomeMessage = document.createElement('div');
    welcomeMessage.classList.add('custom-banniere');
    welcomeMessage.innerHTML = `<h2>Bienvenue, ${user.nom} !</h2>`;
    document.body.appendChild(welcomeMessage);
  }
  





  





