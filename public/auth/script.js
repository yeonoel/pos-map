const pos_inscription_location = document.querySelector('#pos_inscription_location');
const pos_latitude =  document.querySelector('.pos_latitude');
const pos_longitude = document.querySelector('.pos_longitude ');
const pos_state = document.querySelector('.state');
const inputElements = document.querySelectorAll('.inputElements');
const confirm_password  = document.querySelector('.confirm_password')

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



function elementFetch () {

    submit_btn.onclick = async (e) => {
        e.preventDefault();
        e.stopPropagation()
        let field_error = 0;
        
        const form = new FormData();
        
        console.log(inputElements);

        for (let i = 0; i < inputElements.length; i++) {
              
            const input = inputElements[i];
            const inuputName = input.name;

            if (input.value == "" ) {
                return;
            }

            if (input.value != "on") {
                console.log(inuputName + ":" + input.value);  
                applicationPos[inuputName] = input.value;
            } 

            
            
        }


        //tes de vefication//
        console.log(applicationPos);
        console.log(form);
        
        form.append('agency_name', applicationPos.agency_name );
        form.append('phone', applicationPos.phone );
        form.append('contry', applicationPos.contry);
        form.append('city', applicationPos.city);
        form.append('commune', applicationPos.commune );
        form.append('moov', applicationPos.moov); 
        form.append('mtn', applicationPos.mtn);
        form.append('orange', applicationPos.orange);
        form.append('wave', applicationPos.wave);
        form.append('latitude',   applicationPos.latitude);
        form.append('longitude', applicationPos.longitude);
        form.append('visibility', applicationPos.visibility);
        form.append('password', applicationPos.password );
    
        
        
        if (field_error == 0) {
            console.log(form);
            const res = await fetch('http://localhost:5500/api/v1/auth/signup', {
                method : 'POST',
                mode : 'no-cors',
                body : form
            })
            .then((agent) => {console.log(agent)})
            .catch((error) => {console.log(error)})

            console.log(res);
            
        }
    
    
    }
    
    
}


const check_mdp = document.querySelector('.incorrect_mdp')
let pass = password.value;
if (pass == confirm_password.value) {

}


password.addEventListener('change', (e) => {
    let test = 0;
    confirm_password.addEventListener('change', (x) => {
        if (e.target.value != x.target.value ) {
            check_mdp.classList.add('in_correct');
            test = 1;
        } else {
            if (test != 0) {
                check_mdp.classList.remove("in_correct");
                test = 0;
            }
            
        }
    })
        
})
    
    






    