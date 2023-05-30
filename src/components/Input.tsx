import { Input as StyledInput, Error } from "@/styles/Input.styled"
import { FC, InputHTMLAttributes } from "react"


export const Input:FC<InputHTMLAttributes<HTMLInputElement>& {errMessage?:string}> = (props) => {
    return (
        <div>
            <StyledInput isError={!!props.errMessage} {...props} />
            {!!props.errMessage && <Error>{props.errMessage}</Error>}
        </div>
    )
}