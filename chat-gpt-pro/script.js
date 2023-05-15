const chatContainer = document.getElementById('chat-container');
const questionInput = document.getElementById('question-input');
const submitBtn = document.getElementById('submit-btn');
const clearBtn = document.getElementById('clear-btn');

submitBtn.addEventListener('click', (event) => {
  event.preventDefault();
  
  const question = questionInput.value;
  
  const questionElement = document.createElement('div');
  questionElement.className = 'question';
  questionElement.innerText = question;
  
  chatContainer.appendChild(questionElement);
  fetch('/api/chatbot', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ question: question })
  })
  .then(response => response.json())
  .then(data => {
    const answer = data.answer;
    
    const answerElement = document.createElement('div');
    answerElement.className = 'answer';
    answerElement.innerText = answer;
    
    chatContainer.appendChild(answerElement);
  })
  .catch(error => {
    console.error(error);
  });
  
  questionInput.value = '';
});

clearBtn.addEventListener('click', (event) => {
  event.preventDefault();
  
  while (chatContainer.firstChild) {
    chatContainer.removeChild(chatContainer.firstChild);
  }
});
