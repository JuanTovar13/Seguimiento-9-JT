
const chatContainer = document.getElementById("chatcontainer");
const input1 = document.getElementById("input1");

const input2 = document.getElementById("input2");


let messages1 = [];

let messages2 = [];


function renderMessages() {
    chatContainer.innerHTML = ""; 
    
   
    for (let i = 0; i < messages1.length; i++) {

        const chat = messages1[i];
        chatContainer.innerHTML += `
        <div class="message1">${chat}</div>`;
    }
    
   
    for (let i = 0; i < messages2.length; i++) {
        const chat = messages2[i];


        chatContainer.innerHTML += `
        <div class="message2">${chat}</div>`;
    }


}


function addMessage1() {
    const message = input1.value;
    if (message !== "") {
        messages1.push(message);
        input1.value = "";
        renderMessages();
    }
}


function addMessage2() {
    const message = input2.value;
    if (message !== "") {
        messages2.push(message);
        input2.value = ""; 
        renderMessages(); 
    }
}
