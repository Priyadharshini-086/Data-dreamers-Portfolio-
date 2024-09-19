document.getElementById("contactForm").addEventListener("submit", function(event){
    event.preventDefault();
    alert("Thank you for your message, we'll get back to you soon!");
});

function showProjectDetails(title, description) {
    const detailsDiv = document.getElementById("project-details");
    detailsDiv.style.display = "block";
    detailsDiv.querySelector("h3").textContent = title;
    detailsDiv.querySelector("p").textContent = description;
}