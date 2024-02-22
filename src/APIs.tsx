type phrase = {
    _id: string,
    content: string,
    author: string,
    tags: string[],
    authorSlug: string,
    length: number,
    dateAdded: string,
    dateModified: string
}

let content: phrase;

const apiGet = (): phrase => {
    fetch('https://api.quotable.io/quotes/random')
        .then(response => response.json())
        .then(data => content = JSON.parse(data))

    return content;
}

export const ApiCall = () => {
    return (
        <>
            <h3 className="caption-title-bluePhrase"><i>{`${apiGet().content}`}</i></h3>
        </>
    )
}