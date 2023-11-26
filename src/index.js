const ad1 = document.getElementById("ad1");
const ad2 = document.getElementById("ad2");
const adplayer = document.getElementById("area_player");
const bnr = document.getElementById("bnr");
const googleCenterDiv = document.getElementById("google-center-div");
const aswift_2_host = document.getElementById("aswift_2_host");

// if evita quebra de fluxo no código ( ͡° ͜ʖ ͡°)
function removeAd() {
  if (ad1) {
    ad1.remove();
  }
  if (ad2) {
    ad2.remove();
  }
  if (adplayer) {
    adplayer.remove();
  }
  if (bnr) {
    bnr.remove();
  }
  if (googleCenterDiv) {
    googleCenterDiv.remove();
  }
  if (aswift_2_host) {
    aswift_2_host.remove();
  }

}
function disparos (){
  const tempos =[200,400,600,800,1000,1200,1400,1600,1800,2000]
  tempos.forEach(e => {
    setTimeout(removeAd,e)
  });
}

disparos()