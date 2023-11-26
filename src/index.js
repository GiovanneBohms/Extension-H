
function removeElementos(){
  const ids = ["ad1","ad2","area_player","bnr","google-center-div","aswift_2_host"]

  ids.forEach(id => {
    const anuncio = document.getElementById(id)
    if(anuncio){anuncio.remove()}
  });
}

function disparos (){
  const tempos =[200,400,600,800,1000,1200,1400,1600,1800,2000]
  tempos.forEach(e => {
    setTimeout(removeElementos,e)
  });
}

disparos()