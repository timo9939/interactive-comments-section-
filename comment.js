// Get the template element
let template = document.getElementById("template_comment");
let second_section=document.getElementById("second-section");
let after_second_section =document.getElementById("mainContainer")



// Function of the submit button
function submit(){

    let comment_content=document.getElementById("comment_content");
    let inputContent=document.getElementById("input").value;
    // console.log(inputContent.value)
    // console.log(typeof(inputContent.value))
    // console.log("commentContent is",comment_content)
    // console.log("commentContent is",typeof(comment_content));
   

    // Clone the template content
    let clone = document.importNode(template.content, true);

    // Update the cloned content with the input value
    clone.querySelector("#comment_content").textContent = inputContent;

    // Append the cloned content to the second_section
    after_second_section.append(clone);

}

