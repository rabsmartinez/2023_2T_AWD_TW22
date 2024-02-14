function showLargeBox(day) {
    var existingBox = document.getElementById("largeBox");

    
    if (existingBox) {
        existingBox.style.transition = "all 2s"; 
        existingBox.style.opacity = 0; 
        existingBox.style.top = "-100px"; 
        setTimeout(function () {
            existingBox.remove();
        }, 400); 
    }

    
    var largeBox = document.createElement("div");

   
    largeBox.className = "Box";
    largeBox.id = "largeBox";

    
    var bgColor;
    switch (day) {
        case "Sunday":
            bgColor = "#3498db"; 
            break;
        case "Monday":
            bgColor = "#2ecc71"; 
            break;
        case "Tuesday":
            bgColor = "#e74c3c"; 
            break;
        case "Wednesday":
            bgColor = "#f39c12"; 
            break;
        case "Thursday":
            bgColor = "#9b59b6"; 
            break;
        case "Friday":
            bgColor = "#34495e"; 
            break;
        case "Saturday":
            bgColor = "#e67e22"; 
            break;
        default:
            break;
    }

   
    largeBox.style.right = "100px"; 

   
    largeBox.style.top = "-100px";

    
    largeBox.style.backgroundColor = bgColor;

    
    largeBox.style.border = "15px solid " + bgColor;

  
    document.body.appendChild(largeBox);


    void largeBox.offsetHeight;

    
    setTimeout(function () {
        
        largeBox.style.opacity = 1;
        
        largeBox.style.top = "200px"; 

        
        largeBox.style.border = "15px solid " + bgColor;

        
        largeBox.style.backgroundColor = "transparent";
    }, 200);
}
