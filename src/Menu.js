import Secao from "./ComponentsMenu/Secao";
export default function Menu(props){   
    const secoesData = props.data;
    const markedItem = props.markedItem;
    
    return(
        <>
            <div className="menu">                
                {secoesData.map(secaoData => (<Secao secaoData={secaoData} markedItem={markedItem} add={props.add} remove={props.remove}/>))}                                
            </div>
        </>
    );
}