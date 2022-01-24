//Créer un générateur de mot de passe qui me permet de choisir:
//- la longueur du mot de passe (avec un minimum de 8 caractères)
//- la présence de chiffres
//- la présence de caractères spéciaux
//- la présence de majuscules
//Utiliser un `<form>` contenant les différents `<inputs>` ainsi qu’un bouton `type=submit`.
//Au clic sur le bouton, ajouter une div avec le mot de passe généré (attention à ne pas recharger la page)
//Le mot de passe doit changer à chaque clic.
//Vous pouvez choisir de préparer le HTML dans le fichier .html ou bien bien de tout générer avec du .js.
//Pour le reste, vous avez le choix de votre UX, mais ne passez pas trop de temps sur le CSS.*/

    // déclarations des variables 
const number_total = document.getElementById('number_total');
const check_number = document.getElementById('check_number');
const check_maj = document.getElementById('check_maj');
const check_special = document.getElementById('check_special');
const submit = document.getElementById('submit');
const result_password = document.getElementById('result_password');

    // lettre aléatoire : getLetters
const letters = ['abcdefghijklmnopqrstuvwxyz']; 

function getLetters(){
    let alphabetSize = letters[0].length ;
    let random = getNumber(alphabetSize) ; 

    let resultAlphabet = letters[0][random]; 
    return resultAlphabet ; 
}

    // presence d'un chiffre aleatoire : getNumber
function getNumber(){ 
    let result =  Math.floor(Math.random()*10);
    return result ;
};
 
    // presence de caractère speciaux : getChara
const charaSpe = ['!@#$%^&*()_+~`|}{[]\:;?><,./-='];

function getChara(){
    let charaSize = charaSpe[0].length ;
    let random = getNumber(charaSize) ; 

    let resultChara = charaSpe[0][random]; 
    return resultChara ; 
}

    // presence majuscule 
    // fonction toUpperCase();

// jusque là zero problème après j'ai un peu bataillé pour utiliser mes fonctions dans le html, et j'ai du mal a comprendre pourquoi sans le i++ ça ne marche pas 
// ecrire les données dans le HTML 
    submit.addEventListener('click', function (e){
        e.preventDefault();

        let password = '';
    
        for(let i = 0; i < number_total.value; i++){
            if (check_number.checked){
                password = password + getNumber();
                i++;
            }
            if (check_special.checked){
                password = password + getChara();
                i++;
            }
            if (check_maj.checked){
                password = password + getLetters().toUpperCase();
                i++;
            }
            password = password + getLetters();
        }
        password = password.split('').sort(
            function(){
                return 0.5-Math.random()
            }).join('').substring(0, number_total.value); // alors ça j'ai googlé 
        
        result_password.value = password;

        return password;
    });
    