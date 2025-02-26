export default function Input({type, onChangeHandler, ref, id}) {
    return <input id={id} type={type} ref={ref} onChange={onChangeHandler}></input>
}