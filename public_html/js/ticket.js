var helpTicketStatus = document.getElementById("ticket-select-category-help-icon");

helpTicketStatus.addEventListener("mouseover",toggleHelpDisplay);
helpTicketStatus.addEventListener("mouseout",toggleHelpDisplay);

function toggleHelpDisplay(){
    let popupBox = document.getElementById("ticket-select-category-help-popup");
    popupBox.classList.toggle("show-help-box");
}
