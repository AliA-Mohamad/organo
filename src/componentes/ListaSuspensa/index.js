import "./ListaSuspensa.css"

const ListaSuspensa = (props) => {

    const evento = (valor) => {
        props.aoAlterado(valor.target.value)
    }
    
    return(
        <div className="lista-suspensa">
            <label>{props.label}</label>
            <select onChange={evento} required={props.required} value={props.value}>
                {props.itens.map(item => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    )   
}

export default ListaSuspensa