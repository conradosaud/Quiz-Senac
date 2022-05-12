import Apresentacao from "./Apresentacao";

const Final = ( props ) => {
    return (
        <div>
            <h1> Parabéns! </h1>
            <p> Você terminou o Quiz. </p>
            <button onClick={()=> props.alteraTela( <Apresentacao alteraTela={props.alteraTela}/> ) } > Recomeçar </button>
        </div>
    );
}
 
export default Final;