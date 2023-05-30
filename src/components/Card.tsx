import { Container } from "@/styles/Card.styled";

const Card = ({currency, amount, convertedAmt, convertedCurrency}:any) => {
    return (
        <Container>
            <p>You&apos;re converting: {`${currency?.symbol}${amount}`} </p>
            <p>You&apos;ll get: {`${convertedCurrency} ${convertedAmt}`}</p>
            <p>Source: {currency?.currency} wallet</p>
        </Container>
    )
}

export default Card;