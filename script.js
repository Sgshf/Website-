const wordDetailsContainer = document.getElementById('wordDetails');
const searchInput = document.getElementById('searchInput');

function searchWord() {
    const searchTerm = searchInput.value.trim().toLowerCase();
    if (searchTerm === '') {
        alert('Please enter a word to search.');
        return;
    }
    // Simulate API call or use an actual API
    const wordDetails = {
        word: searchTerm,
        synonyms: ['similar1', 'similar2', 'similar3'],
        antonyms: ['opposite1', 'opposite2'],
        definition: 'Word definition goes here.',
        examples: ['Example sentence 1', 'Example sentence 2']
    };
    displayWordDetails(wordDetails);
}

function displayWordDetails(word) {
    wordDetailsContainer.innerHTML = `
        <h2>${word.word}</h2>
        <p><strong>Definition:</strong> ${word.definition}</p>
        <p><strong>Synonyms:</strong> ${word.synonyms.join(', ')}</p>
        <p><strong>Antonyms:</strong> ${word.antonyms.join(', ')}</p>
        <h3>Examples:</h3>
        <ul>
            ${word.examples.map(example => `<li>${example}</li>`).join('')}
        </ul>
    `;
}
