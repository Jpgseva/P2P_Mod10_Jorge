'use strict';

let deferredInstallPrompt; 
const installButton = document.getElementById('btnInstall');
installButton.addEventListener('click', installPWA);

window.addEventListener('beforeinstallprompt', saveBeforeInstallPromptEvent);

function saveBeforeInstallPromptEvent(evt) {
    deferredInstallPrompt = evt;
    installButton.removeAttribute('hidden');
}

function installPWA(evt) {
    deferredInstallPrompt.prompt();
    evt.srcElement.setAttribute('hidden', true);
    deferredInstallPrompt.userChoice.then((choice)=>{
        if(choice.outcome === "acepted") {
            console.log("aceptado");
        } else {
            console.log("No aceptado");
        }
        deferredInstallPrompt = null;
    })
}

window.addEventListener('appinstalled', logAppInstalled);

function logAppInstalled(evt) {
    console.log("Asteroides instalado");
}
