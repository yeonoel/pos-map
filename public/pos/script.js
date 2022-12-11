
// const agents = {
//         "Momo1": {"lat" :5.3512941, "lon":-3.9164684, 'phone': 0565676324 },
//         "Momo2": {"lat" :5.363452, "lon":-3.998047, 'phone': 24446666 },
//         "Momo3": {"lat" :5.372926, "lon":-3.929186, 'phone': 0565676324 },
//         "Momo4": {"lat" :5.363888, "lon":-3.954507, 'phone': 545466133 },
//         "Momo5": {"lat" :5.358032, "lon":-3.964742, 'phone': 24446666 },
//         "Momo6": {"lat" :5.297658, "lon":-3.983285, 'phone': 0565676324 }
//     };


    // button find

    const btn_submit =  document.querySelector('.btn_submit');
    const btn_find = document.querySelector('.btn_find');
    const operator = document.querySelector('.operator');
    let netWork = operator.value
    const location_on = document.querySelector('.location_on');



    operator.addEventListener('change', (e) => {
        if(e.target.value) {
            netWork = e.target.value;
            location_on.addEventListener('change', (e) => {
                if (e.target.checked = true) {
                    btn_submit.removeAttribute('disabled');
                } else {
                    btn_submit.setAttribute('disabled', true);
                }
            })
        } else {
             btn_submit.setAttribute('disabled', true);
        }
    });


    

/**
 * calculateDistance - Calculate distance between two points
 * @lat1: latitude of the first point (my position)
 * @long1: longitude of the first point (my position)
 * @lat2: latitude of the second point
 * @long2:  ongitude of the second point
 * @Retrun the distence in km
 **/
 function calculateDistance(lat1, long1, lat2, long2) {
    let p = 0.017453292519942295; // Math.PI
    let c = Math.cos;
    let a = 0.5 - c((lat2 - lat1) * p)/2 +
        c(lat1 * p) * c(lat2 * p) *
        (1 - c((long2 - long1) * p))/2;

    return (12742 * Math.asin(Math.sqrt(a)));
}


    // location_on.addEventListener('change', (e) => {
    //     if(e.target.checked = true) {
            
    //         operator.addEventListener('change', (e) => {
    //             if (e.target.value) {
    //                 btn_submit.removeAttribute('disabled');
    //             } else {
    //                 btn_submit.setAttribute('disabled', true);
    //             }
    //         })
    //     } else {
    //          btn_submit.setAttribute('disabled', true);
    //     }
    // });

    
    
     // Get databases pos
    
    
// Navigation icon

const nav_icon = document.querySelector('.nav_icon');
const nav = document.querySelector('.nav');

nav_icon.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    nav.classList.toggle('tog');
})


const tableau = [];
const array2 = [];

let map = L.map('myMap').setView([5.3536727, -3.914263], 13);


L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    minZoom: 1,
    maxZoom: 20,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


let markers = L.markerClusterGroup();

let merkerUserPosition = L.markerClusterGroup();

let icone = L.icon({
    iconUrl: "../images/placeholderchange.png",
    iconSize: [50, 50],
    iconAnchor: [25, 50],
    popupAnchor: [0, -50]
})

let iconeMyP = L.icon({
    iconUrl: "../images/myposition.png",
    iconSize: [50, 50],
    iconAnchor: [25, 50],
    popupAnchor: [0, -50]
})




// if (e.target.value) {
//     test de varification
// }

// on rzegroupe les marqueur dans un groupe leaflet

let marker;
let valuesResponse = [];
fetch('http://localhost:5500/api/v1/pos')
        .then((res) => {
            if (res.ok) {
                return ( res.json())
            }
        }).then((values) => {
            
            console.log(values.response);
            for (let value in values.response) {
                valuesResponse.push(values.response[value]);
                
                marker = L.marker([values.response[value].latitude, values.response[value].longitude], {icon: icone});
                
                
                marker.bindPopup(`<p>${values.response[value].agency_name}</p> 
                                     <p> ${values.response[value].city} </p>
                                     <p> ${values.response[value].phone} </p>`);
                
                markers.addLayer(marker);
                
                tableau.push(marker);
                
            }
            map.addLayer(markers);
            console.log(valuesResponse);

            // filtrePoint(valuesResponse, )
            
            
            let group = new L.featureGroup(tableau);

            // on adapte le zoo au groupe
            map.fitBounds(group.getBounds().pad(0.5));


        })
        .catch((error) => console.error(error));





// Localiser ma position
let myPosiMarker ;
let myPosition;
let id;


location_on.addEventListener('change', (e) => {
    if (navigator.geolocation) {
        
        if(e.target.checked) {
                geolocation();


        } else {
            if (!confirm('Votre position sera desactiver, voullez vous continuer?')) {
                location_on.checked = true;
 
            } else {
                map.removeLayer(myPosiMarker);
                location_on.checked = false;              
            }
        }
            
            
    } else {
        
    };
       
});



// Trouver le point le point pos le plus proche de ma position


// cette function prend quatre arguments dont les deux premiers representent 
// la latitudes et la longitude de ma position
// les deux autres representent defferentes posiitons represente
// sur ma carte 



function geolocation() {
    var myLatitude = 0;
    var myLongitude  = 0;
    navigator.geolocation.getCurrentPosition((position) => {
        myPosition = position;
        const {latitude, longitude} = myPosition.coords;
        myLatitude = myPosition.coords.latitude;
        myLongitude = myPosition.coords.longitude;
        myPosiMarker = L.marker([latitude, longitude], {icon: iconeMyP});
        map.addLayer(myPosiMarker);
        
        console.log(valuesResponse);
        console.log(latitude);
        console.log(netWork);
        
        array2.push(myPosition);
        
        btn_find.addEventListener('click', (e) => {
            if(operator.value && location_on.checked) {
                netWork = operator.value;
                console.log(operator.value);
                let mostBehind;
                
                fetch(`http://localhost:5500/api/v1/pos/${netWork}`)
                    .then((res) =>{
                        if(res.ok) {
                            return (res.json());
                        }
                    })
                    .then((values) => {
                        console.log(values.response);
                        let operatorSelected = values.response;
                        let mostBehind;
                        let distance = 0;
                        let newDistance = 0;
                        
                        for (let i = 0; i < operatorSelected.length; i++) {
                            newDistance = calculateDistance(latitude, longitude, operatorSelected[i].latitude, operatorSelected[i].longitude);
                            if (i == 0) {
                                distance =  newDistance;
                            } else {
                                
                                if (newDistance <= distance) {
                                    distance = newDistance;
                                    mostBehind = operatorSelected[i];
                    
                                }  
                            }
                        }
                        console.log(mostBehind);
                        map.removeLayer(markers);
                        merkerUserPosition = L.marker([mostBehind.latitude, mostBehind.longitude], {icon: icone});
                        merkerUserPosition.bindPopup(`<p>${mostBehind.agency_name}</p> 
                                     <p> ${mostBehind.city} </p>
                                     <p> ${mostBehind.phone} </p>`);
                        
                        array2.push(merkerUserPosition);
                        map.addLayer(merkerUserPosition);
                        L.Routing.control({
                            waypoints: [
                              L.latLng(latitude, longitude),
                              L.latLng(mostBehind.latitude, mostBehind.longitude)
                            ],
                            createMarker: function (i, start, n){
                                var marker_icon = null
                                if (i == 0) {
                                    // This is the first marker, indicating start
                                    marker_icon =  iconeMyP
                                } else if (i == n -1) {
                                    
                                    //This is the last marker indicating destination
                                    marker_icon = icone
                                }
                                var marker = L.marker (start.latLng, {
                                            draggable: true,
                                            bounceOnAdd: false,
                                            bounceOnAddOptions: {
                                                duration: 1000,
                                                height: 800, 
                                                function(){
                                                    (merkerUserPosition.bindPopup(`<p>${mostBehind.agency_name}</p> 
                                                    <p> ${mostBehind.city} </p>
                                                    <p> ${mostBehind.phone} </p>`).openOn(map))
                                                }
                                            },
                                            icon: marker_icon
                                })
                                return marker
                            },
                            routeWhileDragging: true,
                            
                          }, {icon: icone}).addTo(map);
                        
                    })
                    .catch((error) => {console.log(error)});
                    

            }
           
        })
        
        // tableau.push(markerPos)fe
       operator.addEventListener('change', (e) => {
        if (e.target.value) {
            btn_submit.removeAttribute('disabled');
        }
       });

       return(myLatitude);

}, (error) => {
    // check if the user denied geolocation, or if there was any other problem
    if (error.code == error.PERMISSION_DENIED) {
        location_on.checked = false;
        alert('Geolocation has been disabled on this page');
        
    } else {
        alert('Unable to find your position, try again later.');
        location_on.checked = false;
    }
});

}



// function filtrePoint(arr, latitude, longitude) {
//     let newDistance = 0;
//     let distance  = 0;
//     let = mostBehind;
//     console.log(arr);
//     console.log(latitude);
//     for (let i = 0; i < arr.length; i++) {
//         newDistance = calculateDistance(latitude, arr[i].latitude, longitude, arr[i].longitude);
//         if (i == 0) {
//             distance =  newDistance;
//         } else {
            
//             if (newDistance <= distance) {
//                 distance = newDistance;
//                 mostBehind = arr[i];

//             }  
//         }
//     }

// }




