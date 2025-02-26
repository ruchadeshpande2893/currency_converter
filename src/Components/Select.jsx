import Option from "./Option";

export default function Select({optionValues, ref, onChangeHandler}) {
    return (
        <select ref={ref} onChange={onChangeHandler}>
            {optionValues.map((optionValue) => {
                return <Option value={optionValue}/>
            })}
        </select>
    )
}