import styled from "styled-components";
import { useSelector } from "react-redux";
import AddressItem from './AddressItem';

const ItemsList =  styled.ul`
    list-style-type: none;
    text-align: left;
    margin-top: 20px;

    li {
        margin-top: 10px;
    }
`;

export default function AddressList() {
    const addresses = useSelector(state => state.addresses);

    return (
        <ItemsList>
            { addresses.map((item) =>
                <AddressItem key={item.id} item={item}></AddressItem>
            )}
        </ItemsList>
    );
};