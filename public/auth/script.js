const pos_inscription_location = document.querySelector('.pos_inscription_location');
const pos_latitude =  document.querySelector('.pos_latitude');
const pos_longitude = document.querySelector('.pos_longitude ');
const pos_state = document.querySelector('.state');

const city = document.querySelector('.city');

const municipality = document.querySelector('.municipality');
const pos_operator1 = document.querySelector('.pos_operator1');
const pos_operator2 = document.querySelector('.pos_operator2');
const pos_operator3 = document.querySelector('.pos_operator3');
const pos_operator4 = document.querySelector('.pos_operator4');
const agency_name = document.querySelector('.pos_operator4');
const phone = document.querySelector('.phone');
const visibility = document.querySelector('.visibility');
const password = document.querySelector('.password');



pos_operator4.addEventListener('change', (e)=> {
    console.log(e.target.value)
})


let posPosition;
pos_inscription_location.addEventListener('change', (e) => {
    if (e.target.checked) {
        if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                posPosition = position

                const {latitude, longitude} = posPosition.coords;
                pos_latitude.value = latitude;
                pos_longitude.value = longitude;
                console.log(pos_longitude.value)
            })
        }
    }
})