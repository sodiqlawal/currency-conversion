"use client"
import { CURRENCIES } from "@/constants";
import { Container, Header, Section, Result, Content, LeftSection } from "@/styles/Currency.styled";
import { ConvertedCurrency, Currency } from "@/types";
import { useEffect, useState } from "react";
import Card from "./Card";
import Dropdown from "./Dropdown";
import { Input } from "./Input";

const calculate = (amount:number, rate:number) => {
        return (amount * rate).toFixed(2);
}

const CurrencyComponent = () => {
    const [selectCurrency, setSelectCurrency] = useState<Currency | null>(CURRENCIES[0]);
    const [selectConvertCurrency, setConvertCurrency] = useState<Currency | null>(null);
    const [result, setResult] = useState<ConvertedCurrency | null>(null);

    const [amount, setAmount] = useState('')


    const convertCurrency = () => {
        fetch(`https://api.exchangerate-api.com/v4/latest/${selectCurrency?.currency!}`).then((res) => res.json()).then((data) => {
            setResult(data)
        })
    }

    useEffect(() => {
        convertCurrency()
    },[selectCurrency?.currency])

    return (
        <Container>
            <Header>Convert from one to another currency</Header>


            <Content>

                    <LeftSection>

                        {/* naira section */}
                        <Section mb>
                            <Dropdown label={`${selectCurrency?.currency} Wallet`} selectedCurrency={selectCurrency} setSelectedCurrency={setSelectCurrency} filterBy={selectConvertCurrency} />
                            <Input type='number' value={amount} onChange={(e) => setAmount(e.target.value)} errMessage={(Number(amount) > selectCurrency?.balance!) ? `Amount must not be higher than ${selectCurrency?.balance}` : ''} />
                        </Section>

                        {/* dollar section */}
                        <Section>
                            <Dropdown label={`Convert to ${selectConvertCurrency?.currency || ''}`} selectedCurrency={selectConvertCurrency} setSelectedCurrency={setConvertCurrency} filterBy={selectCurrency} />
                            <Result>{(result && selectConvertCurrency) ? calculate(Number(amount),result.rates[selectConvertCurrency?.currency!]) : null}</Result>
                        </Section>
                    </LeftSection>


                    <Card currency={selectCurrency} amount={amount} convertedAmt={calculate(Number(amount),result.rates[selectConvertCurrency?.currency!])} convertedCurrency={selectConvertCurrency?.symbol} />
            </Content>


        </Container>
    )
}

export default CurrencyComponent;