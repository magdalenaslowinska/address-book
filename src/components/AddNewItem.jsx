import {useState } from 'react';
import Editor from './Editor';
import { addAddress } from '../store/adresses/action';

export default function AddNewItem() {
    const [isExpanded, setExpanded] = useState(false);

    return (
        <>
        <button onClick={()=> setExpanded(true)}>Add new</button>
        { isExpanded && <Editor item={{}} close={() => setExpanded(false)} action={addAddress}></Editor>}
        </>
    )
}