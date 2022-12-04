import fslightbox from "fslightbox";

const fslbox = new FsLightbox();


document.querySelector('.top__preview').addEventListener('click', () => {
  fslbox.props.sources = ['../video/main.mp4'];

  fslbox.open();
})
