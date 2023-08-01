const chatButton = document.getElementById('chatbotButton');
const chatBox = document.getElementById('chatbox');
const chatLogs = document.getElementById('chatlogs');
const userInput = document.getElementById('userInput');
const sendButton = document.getElementById('sendButton');


const responses = {
  'hello': 'Hello! How can I assist you?',
  'what you do': 'I am a web developer.',
  'what is your experience in web development?': 'I have worked as a web developer for 2 years and have successfully completed various projects. You can see some of them in my projects section!',
  'how are you': 'I am fine, What About you?',
  'bye': 'Goodbye! Have a great day!',
  'what technologies do you work with?': 'I am proficient in HTML, CSS, JavaScript, and various front-end frameworks like React and Vue.js. Additionally, I have experience with back-end technologies like Node.js and Express.',
  'can you show me examples of websites you have developed?': 'Sure! You can find some of my previous work in the projects section of this website. Each project comes with a detailed description and showcases my web development skills.',
  'how do you ensure websites are mobile-friendly?': 'I prioritize responsive web design during development to ensure that websites adapt and function seamlessly on various devices, including mobile phones and tablets.',
  'what is your approach to website security?': 'I take website security seriously and implement best practices such as data encryption, regular security updates, and input validation to protect against potential vulnerabilities.',
  'do you offer website maintenance services?': 'Yes, I provide website maintenance services to keep your website up-to-date and running smoothly. Regular maintenance includes software updates, content changes, and bug fixes.',
  'how do you handle website hosting and domain registration?': ("I can assist you with website hosting recommendations and domain registration. We will discuss the best options based on your website's needs and your preferences."),
  'what is your process for making changes or revisions during development?': "I value client feedback, and during development, we can collaborate to make necessary changes and revisions to ensure the final product meets your expectations.",
  'how can I get in touch with you to discuss my project': "You can reach out to me through the contact section of this website. I'll be happy to discuss your project and answer any questions you may have!",
  'what is your pricing model for web development projects?': 'My pricing model is tailored to the complexity and scope of each project. After discussing your requirements, I will provide you with a fair and transparent quote.',
  'do you provide e-commerce website development services?': 'Absolutely! I have experience developing e-commerce websites with secure payment gateways, user-friendly interfaces, and efficient inventory management.',
  'how do you optimize websites for speed and performance?': 'Website speed is crucial for user experience and SEO. I optimize images, leverage caching, and employ code minification techniques to ensure fast-loading websites.',
  'what is your policy on meeting project deadlines?': 'Meeting deadlines is a top priority. I plan projects diligently, set realistic timelines, and work diligently to deliver a polished product on time.',
  'can you help with website content creation and SEO?': ("Yes, I collaborate with talented content creators and can assist with SEO optimization to improve your website's visibility and search engine rankings."),
  'what additional support do you provide after the website launch?': 'I provide post-launch support to address any issues or questions that may arise. Additionally, I offer training on website management, so you can confidently maintain your site.',
  // Add more responses as needed
  // Add more responses as needed
};

function appendChat(message, sender) {
  const chatElement = document.createElement('div');
  chatElement.className = `chat ${sender}`;
  chatElement.textContent = message;
  chatLogs.appendChild(chatElement);
  chatLogs.scrollTop = chatLogs.scrollHeight;
}

function handleUserInput() {
  const userMessage = userInput.value.toLowerCase();
  appendChat(userMessage, 'user');
  userInput.value = '';

  const botResponse = responses[userMessage] || "I'm sorry, I don't understand.";
  setTimeout(() => {
    appendChat(botResponse, 'bot');
  }, 500); // Simulate bot typing delay
}

userInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    handleUserInput();
  }
});

chatButton.addEventListener('click', () => {
  chatBox.style.display = chatBox.style.display === 'none' ? 'block' : 'none';
});

sendButton.addEventListener('click', () => {
  handleUserInput();
});







// Function to toggle between light mode and dark mode
function toggleDarkMode() {
  const body = document.body;
  body.classList.toggle('dark-mode');
}

// Event listener for the chatbot button
chatButton.addEventListener('click', () => {
  chatBox.style.display = chatBox.style.display === 'none' ? 'block' : 'none';
});

// Event listener for the send button
sendButton.addEventListener('click', () => {
  handleUserInput();
});

// Event listener for toggling dark mode
document.addEventListener('keydown', (e) => {
  // Check if the 'D' key is pressed while holding the 'Control' key (Ctrl)
  if (e.key === 'd' && e.ctrlKey) {
    toggleDarkMode();
  }
});




function ShowPro() {
  document.getElementById("projects").style.display = "";
  document.getElementById("skills").style.display = "none";
  document.getElementById("contact-us").style.display = "none";
  document.getElementById("about-me").style.display = "none";
  document.getElementById("home").style.display = "none";
  document.getElementById("landing").style.backgroundColor = "#020e35";
  document.getElementById("nav").style.backgroundColor = "#020e35";
  document.getElementById("bdy").style.backgroundColor = "#020e35";
}

function ShowSkill() {
  document.getElementById("projects").style.display = "none";
  document.getElementById("skills").style.display = "";
  document.getElementById("contact-us").style.display = "none";
  document.getElementById("about-me").style.display = "none";
  document.getElementById("home").style.display = "none";
  document.getElementById("landing").style.backgroundColor = "#002729";
  document.getElementById("nav").style.backgroundColor = "#002729";
  document.getElementById("bdy").style.backgroundColor = "#002729";
}

function ShowCont() {
  document.getElementById("projects").style.display = "none";
  document.getElementById("skills").style.display = "none";
  document.getElementById("contact-us").style.display = "";
  document.getElementById("about-me").style.display = "none";
  document.getElementById("home").style.display = "none";
  document.getElementById("landing").style.backgroundColor = "#191825";
  document.getElementById("nav").style.backgroundColor = "#191825";
  document.getElementById("bdy").style.backgroundColor = "#191825";
}

function ShowAbt() {
  document.getElementById("projects").style.display = "none";
  document.getElementById("skills").style.display = "none";
  document.getElementById("contact-us").style.display = "none";
  document.getElementById("about-me").style.display = "";
  document.getElementById("home").style.display = "none";
  document.getElementById("landing").style.backgroundColor = "#1d2838";
  document.getElementById("nav").style.backgroundColor = "#1d2838";
  document.getElementById("bdy").style.backgroundColor = "#1d2838";
}

/*

var message = "function disabled";

function rtclickcheck(keyp){ if (navigator.appName == "Netscape" && keyp.which == 3){ alert(message); return false; }

if (navigator.appVersion.indexOf("MSIE") != -1 && event.button == 2) { alert(message); return false; } }

document.onmousedown = rtclickcheck
*/



document.addEventListener('DOMContentLoaded', function() {
  const aboutMeCard = document.getElementById('about-me-card');

  aboutMeCard.addEventListener('click', function() {
    this.classList.toggle('open');
  });
});
