import "./Formulario.css"
import CampoTexto from "../CampoTexto"


const Formulario = () => {
    return(
        <section className="formulario">
            <form>
                <h2>Prencha os dados para criar o card do colaborador</h2>
                <CampoTexto label="Nome" placeholder="Digite seu nome"/>
                <CampoTexto label="Cargo" placeholder="Digite seu cargo"/>
                <CampoTexto label="Imagem" placeholder="Digite o endereço da imagen"/>
            </form>
        </section>
    )
}

export default Formulario