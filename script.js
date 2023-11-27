
window.addEventListener("keydown",(event)=>{
    let code=event.keyCode;
    let keyElement=document.querySelector(`div[data-key="${code}"]`)
    if(keyElement){
        console.log('postoji');
    }
    else{
        return;
    }
    let audio=document.querySelector(`audio[data-key="${code}"]`);
    audio.currentTime=0;
    audio.play();
 
});
