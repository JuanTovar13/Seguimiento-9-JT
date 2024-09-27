
const container = document.getElementById("container")

function renderPhrases(list) {
    container.innerHTML = ""
    for(let i = 0; i < list.length; i++) {
        const phrase = list[i]
        container.innerHTML += `
        <div class="quote-item">
            <input type="checkbox">
            <p>${phrase}</p>
        </div>
        `
    }
}

function search() {
    const input = document.getElementById("input")
    const value = input.value
    if(value === "") {
        renderPhrases(moviePhrases)
    } else {
        let list = []
        for(let i = 0; i < moviePhrases.length; i++) {
            const phrase = moviePhrases[i]
            if(phrase.includes(value)) {
                list.push(phrase)
            }
        }
        renderPhrases(list)
        }
    }

renderPhrases()