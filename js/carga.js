window.addEventListener("DOMContentLoaded", () => {
    showLoader();
  })
  
  window.addEventListener("load", () => {
    setTimeout(() => {
        hideLoader();
      }, 5000);
  })
  
  
  const loader = Comparador.getElementById("loaderPagina");
  const showLoader = () => {
   loader.classList.add("show_loader");
  }
  const hideLoader = () => {
    loader.classList.remove("show_loader");
  }