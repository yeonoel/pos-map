

const pos_inscription_location = document.querySelector('#pos_inscription_location');
const pos_latitude =  document.querySelector('.pos_latitude');
const pos_longitude = document.querySelector('.pos_longitude ');
const pos_state = document.querySelector('.state');
const inputElements = document.querySelectorAll('.inputElements');
const inputElementsRequired = document.querySelectorAll('.requiredd');
const confirm_password  = document.querySelector('.confirm_password');
const check_mdp = document.querySelector('.check_mdp');


console.log(inputElements);


const city = document.querySelector('.city');
const submit_btn = document.querySelector('#btn');

const municipality = document.querySelector('.municipality');
const pos_operator1 = document.querySelector('.pos_operator1');
const pos_operator2 = document.querySelector('.pos_operator2');
const pos_operator3 = document.querySelector('.pos_operator3');
const pos_operator4 = document.querySelector('.pos_operator4');
const agency_name = document.querySelector('.pos_operator4');
const phone = document.querySelector('.phone');
const visibility = document.querySelector('.visibility');
const password = document.querySelector('.password');



// pos_operator4.addEventListener('change', (e)=> {
//     console.log(e.target.value)
// })


// user active location

let posPosition;
pos_inscription_location.addEventListener('change', (e) => {
    if (e.target.checked) {
        if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                posPosition = position

                const {latitude, longitude} = posPosition.coords;
                pos_latitude.value = latitude;
                pos_longitude.value = longitude;

                elementFetch();
                console.log(pos_latitude.value)
            })
        }
    }
})

// btn.addEventListener('click', (e) => {
//     if(pos_state.value) {
//         if (city.value) {
//             if (municipality.value)
//         } else {
//             city.classList('input_red');
//         }
//     } else {
//         pos_state.classList('input_red');
//     }
// })


// let field_error = 0;
// pos_state.addEventListener('change', (e) => {
//     if (e.target.value) {
        
//     } else {
//         e.target.classList('input_red'); 
//         field_error ++;
//     }
// })

// city.addEventListener('change', (e) => {
//     if (e.target.value) {
        
//     } else {
//         e.target.classList('input_red');
//         field_error ++;
//     }
// })

// municipality.addEventListener('change', (e) => {
//     if (e.target.value) {
        
//     } else {
//         e.target.classList('input_red'); 
//         field_error ++;
//     }
// })

// pos_operator1.addEventListener('change', (e) => {
//     if (e.target.value) {
        
//     } else {
//         e.target.classList('input_red'); 
//         field_error ++;
//     }
// })

// agency_name.addEventListener('change', (e) => {
//     if (e.target.value) {
        
//     } else {
//         e.target.classList('input_red'); 
//         field_error ++;
//     }
// })

// password.addEventListener('change', (e) => {
//     if (e.target.value) {
        
//     } else {
//         e.target.classList('input_red'); 
//         field_error ++;
//     }
// })

// phone.addEventListener('change', (e) => {
//     if (e.target.value) {
        
//     } else {
//         e.target.classList('input_red'); 
//         field_error ++;
//     }
// })



let pass = password.value;

if (pass != confirm_password.value) {
    check_mdp.classList.toggle('in_correct');
    password.classList.toggle('input_red');
    
}


password.addEventListener('change', (e) => {
    confirm_password.addEventListener('change', (x) => {
        if (e.target.value && x.target.value == null) {
            confirm_password.classList.toggle('input_red');
        }
    })
})










const applicationPos = {
    agency_name : "" ,
    phone: "",
    contry : "",
    city : "",
    commune : "",
    moov : "",
    mtn : "",
    orange : "",
    wave : "",
    latitude: "",
    longitude : "",
    visibility : "",
    password : ""
}






// }

// const tab = ["agency_name", "phone", "contry", "commune", "latitude", "longitude", "password", "city"];
//     const operator = ["moov", "mtn", "orange", "wave"];

//     for (let x = 0; x < inputElements; x++) {
//         inputElements[x].addEventListener () => {
//             if (input.classList.contains('input_red')) {

//             }
//         } 
//     }
 

function elementFetch () {
    
    const tab = ["agency_name", "phone", "contry", "commune", "latitude", "longitude", "password", "city"];
    operator = ["moov", "mtn", "orange", "wave"];
    
    submit_btn.onclick = async (e) => {
        e.preventDefault();
        e.stopPropagation()
        let field_error = 0;
        let numberOperator = 0
        const contentEmptyArr = [];
        let contentEmpty = 0;
        
        

        for (let i = 0; i < inputElements.length; i++) {
            const input = inputElements[i];
            const inputName = input.name;
            const value = input.value;


            for (let j = 0; j < operator.length; j++) {
                if (operator[j] == inputName && value == 1) {
                    numberOperator ++;
                }
            }
            
            for (let x = 0; x < tab.length; x++) {
                if (tab[x] == inputName && !value) {
                    input.classList.add('input_red');
                    contentEmptyArr.push(input);
                    contentEmpty ++;
                }
            }
            
            if (value != "on") {
                console.log(inputName + ":" + value);  
                applicationPos[inputName] = value;
            }
            
        }
        function validField(e) {
            if (e.target.value) {
                e.target.classList.remove('input_red');
                e.target.classList.add('green');
            } else {
                e.target.classList.add('input_red');
                e.target.classList.remove('green');
            }
        }

      
        if (numberOperator == 0) {
            pos_operator1.addEventListener('change', (e) => {
                validField(e);
            });
            field_error ++;
        }

        if (contentEmpty) {
            
            
            confirm_password.addEventListener('change', (e) => {
                validField(e);
            });
            for (let x = 0; x < contentEmptyArr.length; x++) {
                
                contentEmptyArr[x].addEventListener('change', (e) => {
                    validField(e);
                })
            } 
            
            field_error ++;
        }

        
        
            
        


        //tes de vefication//
        console.log(applicationPos);
        
        
        console.log(JSON.stringify(applicationPos));
        
        if (field_error == 0) {
            console.log(applicationPos);
            const res = await fetch('http://localhost:5500/api/v1/auth/signup', {
                method : 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body : JSON.stringify(applicationPos)
            });
            res.json().then((data) => { console.log(data) });
            window.location.href="../dashbord/dashbord.html" ; 
        }
    
    }


}




let test = 0;
password.addEventListener('change', (e) => {
    
    confirm_password.addEventListener('change', (x) => {
        if (e.target.value == '' || x.target.value == '' ||
             e.target.value != x.target.value ) {
            check_mdp.classList.add('in_correct');
            password.classList.add('input_red');
            confirm_password.classList.add('input_red');
            test = 1;
        } else {
            if (test != 0) {
                check_mdp.classList.remove("in_correct");
                password.classList.remove('input_red');
                confirm_password.classList.remove('input_red');
                test = 0;
            }
            
        }
    })
        
})


// function validate() { 
//     var msg; 
//     var str = document.getElementById("mdp").value; 
//     if (str.match( /[0-9]/g) && 
//             str.match( /[A-Z]/g) && 
//             str.match(/[a-z]/g) && 
//             str.match( /[^a-zA-Z\d]/g) &&
//             str.length >= 10) 
//         msg = "<p style='color:green'>Mot de passe fort.</p>"; 
//     else 
//         msg = "<p style='color:red'>Mot de passe faible.</p>"; 
//     document.querySelector("msg").innerHTML= msg; 
// } 
    
    






    