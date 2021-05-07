import Title from "./ComponentsSecao/Title";
import Opcoes from "./ComponentsSecao/Opcoes";

export default function Secao (props){

    return(
        <>
            <div className="secao">
                    <Title tituloSecao={props.tituloSecao} />
                    <Opcoes opcoesSecao={props.opcoesSecao}/>                    
            </div>
        </>
    );
}