import Opcao from "./Opcao";
export default function Opcoes(props){
    const itemSessions = props.itemSession;
    
    const markedItem = props.markedItem;
    
    return (
        <>
            <div className="opcoes pratos">                
                {itemSessions.map((itemSession) => (<Opcao add={props.add} remove={props.remove} markedItem={markedItem} idSecao={props.idSecao} selecionado={itemSession.selecionado} contador={itemSession.contador} id={itemSession.id} imagem={itemSession.imagem} item={itemSession.item} descricao={itemSession.descricao} preco={itemSession.preco}/>))}                
            </div>
        </>
    );
}