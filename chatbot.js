let chatbotMsgList = ["Hi", "Hey", "Good Morning", "Good Evening", "How can I help you?", "Thank You"];
let inp = document.getElementById("userInput");
let div1 = document.getElementById("chatContainer");
let send = document.getElementById("sendMsgBtn");
send.onclick = function() {
    let head = document.createElement("div");
    head.classList.add("msg-to-chatbot-container");
    div1.appendChild(head);
    let sp = document.createElement("span");
    sp.textContent = inp.value;
    sp.classList.add("msg-to-chatbot");
    head.appendChild(sp);
    inp.value = null;
    getreplyfromchatbot();
};

function getreplyfromchatbot() {
    let head = document.createElement("div");
    head.classList.add("msg-from-chatbot-container");
    div1.appendChild(head);
    let k = chatbotMsgList.length;
    let sp = document.createElement("span");
    sp.textContent = chatbotMsgList[Math.ceil(Math.random() * k - 1)];
    sp.classList.add("msg-from-chatbot");
    head.appendChild(sp);
    inp.value = null;
}