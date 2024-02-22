export function getPhraseAPI() {
    fetch('https://api.quotable.io/quotes/random')
        .then(response => response.json())
        .then(data => document.getElementById('quote')!.innerHTML = data[0].content)
}