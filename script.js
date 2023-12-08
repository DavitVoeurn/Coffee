const header =document.querySelector("header");

window.addEventListenera("scroll",function(){
    header.classList.toggle("sticky",this.window.scrollY>0);
})


function searchProducts(event) {
    // Get the search term from the input field
    const searchTerm = document.getElementById("product-search").value.toLowerCase();
  
    // Get all product elements
    const products = document.querySelectorAll(".product");
  
    // Loop through each product
    products.forEach(product => {
      // Get the product name
      const productName = product.querySelector(".product-info h4").textContent.toLowerCase();
  
      // Check if the product name contains the search term
      if (productName.includes(searchTerm)) {
        // Show the product
        product.style.display = "block";
      } else {
        // Hide the product
        product.style.display = "none";
      }
    });
  }
  const searchButton = document.getElementById("search-button");
  searchButton.addEventListener("click", searchProducts);
  const searchBar = document.getElementById("product-search");
  searchBar.addEventListener("keydown", event => {
    if (event.keyCode === 13) {
      searchProducts(event);
    }
  });
      


