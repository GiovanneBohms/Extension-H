function delay(tempo) {
  return new Promise((resolve) => {
    setTimeout(resolve, tempo);
  });
}

function removeElementos() {
  const ids = [
    "ad1",
    "ad2",
    "area_player",
    "bnr",
    "google-center-div",
    "aswift_2_host",
    "cto_banner_content",
    "ad_unit",
  ];
  const tags = "center";

  ids.forEach((id) => {
    const anuncio = document.getElementById(id);
    if (anuncio) {
      console.log(anuncio);
      anuncio.remove();
    }
  });
  // console.log(window.location.href);
}

async function disparos() {
  await delay(1000 * 1);
  removeElementos();
  disparos();
}

disparos();