import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useState } from 'react';

const Section = styled.section`
    margin-top: 20px;
`;

const Form = styled.form`
    display: flex;
    justify-content: center;
    column-gap: 10px;

    .address-name {
        min-width: 20%;
    }

    .address-value {
        min-width: 30%;
    }
`

export default function Editor({item, close, action}) {
    const dispatch = useDispatch();
    const [name, setName] = useState(item?.name);
    const [address, setAddress] = useState(item?.address);

    const dispatchAction = (e) => {
        e.preventDefault();

        dispatch(action( {
            name,
            address,
            id: item.id,
        }))
    }

    return (
        <Section>
            <Form>
                <input type="text" className="address-name" value={name} onChange={(e)=> setName(e.target.value)} placeholder={"Enter name"}></input>
                <input type="text" className="address-value" onChange={(e)=> setAddress(e.target.value)} value={address} placeholder={"Enter address"}></input>
                <menu>
                    <button type="submit" onClick={(e) => { dispatchAction(e); close(); }}>Save</button>
                    <button type="button" onClick={() => close()}>Cancel</button>
                </menu>
            </Form>
        </Section>
    )
};