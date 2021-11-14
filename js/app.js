let contextSW = '/20213-PWA-U2-P7/sw.js';
let url = window.location.href;

let player = $('#player');
let btnCamera = $('#btnCamera');
let btnCameraBack = $('#btnCameraBack');
let btnTakePhoto = $('#btnTakePhoto');
let photoUser = $('#photoUser');

let photoText = "";

const camera = new Camera(player[0]);

btnCamera.on('click',()=>{
    photoText = "Camara Frontal"
    camera.on().then(result=>{
        if(!result){
            alert("Error al iniciar la camara")
        }
    });
});

btnCameraBack.on('click',()=>{
    photoText = "Camara Trasera"
    camera.onBack().then(result=>{
        if(!result){
            alert("Error al iniciar la camara")
        } 
    })
});

btnTakePhoto.on('click',()=>{
    camera.off();
    //photoUser.attr('src',);
    let photo = camera.takePhoto();
    let image = createImage(photo,photoText);
    $('#cardPhoto').append(image)
});

// <img id="photoUser" src="img/user.png" width="300px" height="300px">

function createImage(img, photo_text) {

    let card = $(`
    <div class="col-12 text-center">
        <h1 class="text-center">${photo_text}</h1>
        <img style="width: 300px; height: 300px;" src="${img}">        
    </div>
    `)
    return card
}

if(navigator.serviceWorker){
    if(url.includes('localhost')){
        contextSW = '/sw.js'
    }
    navigator.serviceWorker.register(contextSW);
}