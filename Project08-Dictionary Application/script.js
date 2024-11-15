const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const resultContainer = document.getElementById('result-container');
const wordTitle = document.getElementById('wordTitle');
const wordDescription = document.getElementById('wordDescription');
const audioButton = document.getElementById('audioButton');


searchButton.addEventListener("click",()=>{
    search();
});

searchInput.addEventListener("keyup",(event)=>{
    
    if(event.key === "Enter"){
        search();
    }
});

function search(){

    const searchTerm = searchInput.value.trim();
    if(searchTerm === ''){
        alert('Please Enter a word to Search..')
        return;
    }

    fetchDictionaryData(searchTerm);

}

async function fetchDictionaryData(searchTerm){

    try{
        const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchTerm}`);
        if(!response.ok){
            throw new Error('Failed to fetch the Data');    
        }

        const data = await response.json();
        displayResult(data);

    }catch(error){
        console.log(error);
        alert('An error Occured.');
    }

}

function displayResult(data){

    resultContainer.style.display = 'block';

    const wordData = data[0] 
    wordTitle.textContent = wordData.word;
    wordDescription.innerHTML =  `
       <ul> 
        ${wordData.meanings.map(meaning=>`
            <li>
                <p><strong>Part of Speech: </strong> ${meaning.partOfSpeech}</p>
                <p><strong>Definition: </strong> ${meaning.definitions[0].definition}</p>
            </li>
        
        `).join('\n')}

       </ul>

    `;

}


audioButton.addEventListener("click",()=>{

    const searchTerm = searchInput.value.trim();
    if(searchTerm === ''){
        alert('Please Enter a word to Search..')
        return;
    }

    speak(searchTerm);

});


function speak(word){

    const speech = new SpeechSynthesisUtterance(word);
    speech.lang = 'en-US';
    speech.volume = 2;
    speech.rate = 1;
    speech.pitch = 1;
    window.speechSynthesis.speak(speech);

}