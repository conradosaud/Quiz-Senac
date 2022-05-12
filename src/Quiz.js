import React from 'react';

import Final from "./Final";

const Quiz = ( props ) => {

    const alteraTela = props.alteraTela;

    const [ etapa, alteraEtapa ] = React.useState( 0 );

    const [ pontos, alteraPontos ] = React.useState( 0 );

    const perguntas = [
        {
            pergunta: "Qual a cor do cavalo branco de Napoleão?",
            respostas: [ "Preto", "Amarelo", "Branco", "Azul" ],
            correta: 0
        },
        {
            pergunta: "Por que você ainda não assistiu Rick and Morty?",
            respostas: [ "Porque eu sou uma pessoa triste", "Eu assisti", "Vou assistir chegando em casa", "Não tenho Netflix/HBO e to com preguiça de procurar pirata na internet o/" ],
            correta: 2 
        }
    ];

    const verificaResposta = ( i ) => {

        const resposta_correta = perguntas[ etapa ].correta;
        if( resposta_correta == i ){
            alteraPontos( pontos + 5 );
        }

        if( etapa + 1 < perguntas.length ){
            alteraEtapa( etapa + 1);
        }else{
            alteraTela( <Final alteraTela={alteraTela} /> );
        }

    }

    return (
        <div>
            
            <p> Você tem <strong> { pontos } </strong> pontos. </p>

            <h1> { perguntas[ etapa ].pergunta } </h1>
            <ul>
                {
                    perguntas[ etapa ].respostas.map( (r, i) => {
                        return <li onClick={()=> verificaResposta(i) } > { r } </li> 
                    })
                }
            </ul>

        </div>
    );
}
 
export default Quiz;