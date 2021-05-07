import Title from "./ComponentsSecao/Title";
import Opcoes from "./ComponentsSecao/Opcoes";

export default function Secao (props){
    
    const secaoData = props.secaoData;
    const markedItem = props.markedItem;
    return(
        <>
            <div className="secao">
                    <Title tituloSecao={secaoData.titulo} />
                    <Opcoes  itemSession={secaoData.itemSession} idSecao={secaoData.idSecao} markedItem={markedItem} add={props.add} remove={props.remove}/>                    
            </div>
        </>
    );
}