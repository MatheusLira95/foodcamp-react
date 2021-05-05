import Title from "./ComponentsSecao/Title";
import Opcoes from "./ComponentsSecao/Opcoes";

export default function Secao (props){

    return(
        <>
            <div class="secao">
                    <Title tituloSecao={props.tituloSecao}/>
                    <Opcoes opcoesSecao={props.opcoesSecao}/>                    
            </div>
        </>
    );
}