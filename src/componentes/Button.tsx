interface ButtonProps{
    color:string;
    childreen:string;
}
export function Button(props:ButtonProps){
    return (
/* jsx html dentro do js */
        <button type="button" style={{backgroundColor:props.color}}>
            {props.color}
            {props.childreen}
            <strong>
            testte
            </strong>
        </button>
    );
}