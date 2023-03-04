"use strict";

// let form=document.querySelector("form")
// form.addEventListener("submit",function(e){
//     e.preventDefault()
//     console.log("form submited");
// })

// let dragElems = document.querySelectorAll(".drag-elem");
// let dropElem = document.querySelector(".drop-elem");


// dragElem.ondragstart = () => {
//     console.log("drag-start");
// }
// dragElem.ondrag = () => {
//     console.log("drag-continue");
// }
// dragElem.ondragend = () => {
//     console.log("drag-end");
// }

// dragElem.ondragstart = (e) => {
//     e.dataTransfer.setData("id",e.target.getAttribute("id"))
// }


// dragElems.forEach(element => {
//     element.ondragstart = (e) => {
//         e.dataTransfer.setData("id",e.target.getAttribute("id"))
//     }
// });
// dropElem.ondragover=(e)=>{
//     e.preventDefault()
// }
// dropElem.ondrop=(e)=>{
//     let id=e.dataTransfer.getData("id")
//     let elem=document.getElementById(id)
//     dropElem.append(elem)
// }



let input=document.querySelector("input");
let icon=document.querySelector("i");
let tableBody=document.querySelector("table tbody")

icon.addEventListener("click",function(){
    this.nextElementSibling.click();
})

input.addEventListener("change",function(e){
    for (const file of e.target.files) {
        let reader=new FileReader();
        reader.onloadend=(event)=>{

            let base64=event.currentTarget.result
            tableBody.innerHTML+=`  <tr>
            <td><img src="${base64}" alt=""></td>
            <td>${file.name}</td>
            <td>${file.size/1024} kb</td>
        </tr>`
            console.log(event.currentTarget.result+"---"+file.name+"---"+file.size);
        }
        reader.readAsDataURL(file);
    }
})