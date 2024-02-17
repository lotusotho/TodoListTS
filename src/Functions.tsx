import * as React from "react";
import { IList } from "./Interfaces";
import DOMPurify from 'dompurify';

let textArr: string[] =  [];

const listText: IList = {
    text: ''
}

export function handleSumbit(event: React.SyntheticEvent<HTMLFormElement>) {
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

export function CreateStructureList() {
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
// localStorage['textArr']
function CreateListElement() {
    const lineFormat: string = `<tr><td>${listText.text}</td></tr>`;

    if(listText.text.length > 44){
        alert("Try something smaller...");
    } else if(listText.text.includes('<script>') || listText.text.includes('</script>')) {
        alert("Yeaaaah, that's not going to work...");
    } else {
        textArr.push(lineFormat);
        UpdateToCache(textArr);
        UpdateArrayList();
    }
}

export function DeleteListElementButton(event: React.SyntheticEvent<HTMLFormElement>) {
    event.preventDefault();
    DeleteListElement();
}

function UpdateToCache(value: string[]) {
    localStorage['textArr'] === value;
}

function DeleteListElement(){
    textArr.pop();
    UpdateToCache(textArr);
    
    UpdateArrayList();
}