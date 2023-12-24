// Get the template element
let template = document.getElementById("template_comment");
let second_section=document.getElementById("second-section");
let after_second_section =document.getElementById("mainContainer")



// Function of the mainsection submit button
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

    // Reset and clean the inputfield
    document.getElementById("input").value= " ";
}

// Reply button and function
let replyBtn=document.getElementsByClassName('replyBtn')
let mainInput=document.getElementById("input-section")
let replyinput=document.getElementById("reply-input")
function pressReply(button){
    // let number=button.id
    // console.log(number)
    // let commentNo=document.getElementById
    console.log("replyBtn Clicked")
    mainInput.style.display="none"
    replyinput.style.display="block"

 let GetSectionId = button.id;
        console.log("Clicked button in section with ID: " + GetSectionId)

// Append the Reply input below the specific comment

}    

function afterPressReply(GetSectionId){


  let replyinputContent=document.getElementById("Replyinput").value
    console.log("replyinputContent is ", replyinputContent)  

        // Clone the template content
        let clone = document.importNode(template.content, true);

        // Update the cloned content with the input value
        clone.querySelector("#comment_content").textContent = replyinputContent;
console.log("GetSectinId is ",GetSectionId)
        after_second_section.append(clone)

       
}
