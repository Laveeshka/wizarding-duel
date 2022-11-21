import { Howl } from "howler";

function callMySound(src){
    const sound = new Howl({
        src, 
        html5: true
      });
      sound.play();
}

export default callMySound;