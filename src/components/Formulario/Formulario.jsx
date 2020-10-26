import React from 'react'
import './style.css'

function Formulario(){
    return(
        <>
        <div className="containerForm">
            <div className="landPageForm">
                <h2>Mais informações?</h2>
                <p>Preencha este formulário para que possamos entrar em contato com você!</p>
                <p>Ficaremos muito felizes em ajudar!</p>
                <form>
                    <input type="text" name="nome" placeholder="Seu Nome aqui"/>
                    <input type="e-mail" name="email" placeholder="Seu e-mail"/>
                    <input type="phone" name="phone" placeholder="Seu telefone"/>
                    <button>Enviar</button> 
                </form>
            </div>
        </div>
        </>
    )
}

export default Formulario;