export default function Course({name, detail="default detail"}){
    return(
        <div>
            <h3>{name}</h3>
            <p>{detail}</p>
        </div>
    )
}