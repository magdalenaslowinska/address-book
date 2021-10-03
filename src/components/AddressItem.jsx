import styled from 'styled-components';
import { useState } from 'react';
import Editor from './Editor';
import { editAddress } from '../store/adresses/action';

const EditButton = styled.button`
    margin-left: 10px;
    background-color: #0080006b;
    height: 30px;
    border: 1px solid gray;
`;

export default function AddressItem({item}) {
    const [isEdited, setIsEdited] = useState(false);
    return (
        <>
        <li>{item.name} {item.address} <EditButton onClick={()=> setIsEdited(true)}>Edit</EditButton></li> 
        { isEdited && <Editor item={item} close={()=>setIsEdited(false)} action={editAddress}></Editor> }
        </>
    );
}