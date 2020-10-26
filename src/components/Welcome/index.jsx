import React from 'react';
import './style.css';
import Ortodontia from "../images/ortodontia.jpg";
import Formulario from "../Formulario/Formulario";

function Welcome(){
    return(
        <>
            <div className="container">
                <div className="firstLine">
                    <div className="imgTratamento">
                        <img src={Ortodontia} />
                    </div>
                    <div className="text">
                        <h1>Bem-vindo a nossa clínica!</h1>
                        <h2>Cuide de sua saúde bucal com a gente!</h2>
                        <p>Veja mais sobre nossos planos de Ortodontia!</p>
                    </div>                    
                </div>

                <div className="formPosition">
                    <Formulario/>
                </div>


                <div className="productText">
                    <h3>Como é o processo?</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam leo lorem, faucibus vel nibh ut, feugiat tempor erat. Vestibulum suscipit fringilla tristique. Ut vel ullamcorper arcu, ac efficitur lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet ex elementum, tempor metus ac, semper risus. Mauris consectetur nibh eget maximus dignissim. Maecenas blandit metus non libero aliquet, vitae cursus orci euismod. Maecenas tristique vulputate ipsum, eu congue nibh ultrices in. Donec faucibus, leo id elementum gravida, magna orci porta magna, vel scelerisque augue metus nec arcu. Etiam fermentum dolor neque, eget pellentesque risus eleifend quis.</p>
                    <h3>1. Diagnóstico</h3>
                    <p>Pular etapas pode comprometer seriamente o sucesso do tratamento e prejudicar não apenas a estética do paciente, mas também sua saúde bucal. Além disso, muitas vezes a previsão de duração do tratamento pode se estender devido a imprevistos, como a necessidade de extração, cirurgia ou surgimento de problemas decorrentes da má higiene.</p>
                    <p>Após estudar o caso, o profissional deve informar ao paciente sobre as alterações encontradas, determinar o diagnóstico e apresentar as opções de tratamento.</p>
                    <h3>2. Instalação do aparelho</h3>
                    <p>A colocação do aparelho representa o início do tratamento propriamente dito. Após a decisão do paciente, podem ser feitos novos exames e fotos para registrar a situação inicial, e, então, o aparelho ortodôntico é instalado nos dentes.</p>
                    <p>Cada tipo de aparelho é colocado de uma maneira diferente, mas a partir desse momento os dentes já começam a se movimentar, promovendo a correção do problema.</p>
                    <p>Durante o tratamento, é importante manter uma higiene impecável, prevenindo cáries e outras doenças que prejudicam a saúde bucal.</p>
                </div>
                
            </div>
        </>
    )
}

export default Welcome;