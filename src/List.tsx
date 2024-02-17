import { CreateStructureList, handleSumbit, DeleteListElementButton } from './Functions';

export function List() {
    return (
        <>
            <form action="" onSubmit={handleSumbit}>
                <input type="text" name="123" id="textInput" className="input-text-field-form"/>
                <button className="btn-default">Add task</button>
                <br />
            </form>
            <form action="" onSubmit={DeleteListElementButton}>
                <CreateStructureList/>
                <aside>
                    <button className="btn-default-delete" id="btnDeleteLine" hidden>Delete task</button>
                    <br />
                    <br />
                </aside>
            </form>
        </>
    )
}