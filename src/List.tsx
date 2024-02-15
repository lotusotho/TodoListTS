import * as React from "react";
import { IList } from "./Interfaces";
import DOMPurify from 'dompurify';


const textArr: string[] = [];

const listText: IList = {
    text: ''
}

export function List() {
    return (
        <>
            <form action="" onSubmit={handleSumbit}>
                <input type="text" name="123" id="textInput" className="input-text-field-form"/>
                <button className="btn-default">Add line</button>
                <br />
            </form>
            <form action="" onSubmit={DeleteListElementButton}>
                <CreateStructureList/>
                <aside>
                    <button className="btn-default" id="btnDeleteLine" hidden>Delete line</button>
                    <br />
                    <br />
                </aside>
            </form>
        </>
    )
}

function handleSumbit(event: React.SyntheticEvent<HTMLFormElement>) {
    event.preventDefault();


    const form = event.currentTarget;

    const formElements = form.elements as typeof form.elements & {
        textInput: HTMLInputElement,
    }

    if (formElements.textInput.value != '') {
        listText.text = formElements.textInput.value;

        CreateListElement();

        console.log(textArr)

        formElements.textInput.value = '';
    }
}

function CreateStructureList() {
    return (
        <div className="list-container-frame" id="wholeList" hidden>
            <table>
                <tbody id="textList" className="dataRow">
                    
                </tbody>
            </table>
        </div>
    )
}

function UpdateArrayList(){
    DOMPurify.sanitize(document.getElementById("textList")!.innerHTML = textArr.join().replace(/,/gm, '') + '\n');

    if(textArr.length === 0){
        document.getElementById("wholeList")!.hidden = true;
        document.getElementById('btnDeleteLine')!.hidden = true;
    } else {
        document.getElementById("wholeList")!.hidden = false;
        document.getElementById('btnDeleteLine')!.hidden = false;
    }

}

function CreateListElement() {
    const lineFormat: string = `<tr><td>${listText.text}</td></tr>`;

    if(listText.text.length > 44){
        alert("Try something smaller...");
    } else if(listText.text.includes('<script>') || listText.text.includes('</script>')) {
        alert("Yeaaaah, that's not going to work...");
    } else {
        textArr.push(lineFormat);
    }

    UpdateArrayList();
}

function DeleteListElementButton(event: React.SyntheticEvent<HTMLFormElement>) {
    event.preventDefault();
    DeleteListElement();
}

function DeleteListElement(){
    textArr.pop();
    
    UpdateArrayList();
}