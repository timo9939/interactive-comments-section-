// Get the template element
var template = document.getElementById("template_comment");
let second_section=document.getElementById("second-section");
let comment_content=document.getElementById("comment_content");




function submit(){
    alert("function works")
    var clone = document.importNode(template.content, true);
    second_section.appendChild(clone);
    console.log(comment_content.textContent)

}

// Test the submit button
// Check if the template exists
if (template) {
    // Clone the template content
    var clone = document.importNode(template.content, true);

    // Get the container where the cloned content will be appended
    var container = document.getElementById("second-section");

    // Check if the container exists
    if (container) {
        // Append the cloned content to the container
        container.appendChild(clone);
    } else {
        console.error("Container element not found.");
    }
} else {
    console.error("Template element not found.");
}