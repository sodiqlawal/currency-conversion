"use client"

import { CURRENCIES } from "@/constants";
import { Container, DropdownListCover, DropdownList, Header } from "@/styles/Dropdown.styled";
import { Currency } from "@/types";
import { Dispatch, FC, SetStateAction, useState } from "react";

const Dropdown:FC<{label:string; filterBy:Currency | null; selectedCurrency:Currency | null; setSelectedCurrency: Dispatch<SetStateAction<Currency | null>>}> = ({selectedCurrency, filterBy, setSelectedCurrency, label}):any => {
    const [show, setShow] = useState(false);

    const toggle = () => {setShow(!show)};

    const select = (currency:Currency) => {
        setSelectedCurrency(currency);
        setShow(false)
    }

    const filteredData = CURRENCIES.filter((c) => c.currency !== filterBy?.currency )
    
    return (
        <Container>
            <Header onClick={toggle}>
                <p>{label}</p>
                <div></div>
                {selectedCurrency ? <div>
                    <small>Balance</small>
                    <p>{`${selectedCurrency?.symbol} ${selectedCurrency?.balance}`}</p>
                </div> : null}
            </Header>

            {show && <DropdownListCover>
                {
                    filteredData.map((c) => (
                        <DropdownList key={c.currency} onClick={() => select(c)}>
                            {c.currency}
                        </DropdownList>

                    ))
                }
            </DropdownListCover>}
        </Container>
    )
}

export default Dropdown;