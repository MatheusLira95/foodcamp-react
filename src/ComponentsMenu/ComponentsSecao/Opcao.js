import React from "react"
export default function Opcao(props){
    //console.log(props)
    //const [selecionado, setSelecionado] = React.useState("opcao");
    //const [counter, setCounter] = React.useState(0);
    // let contador = props.contador;
    

    // console.log(props.id)
   
    
    return (
        <>
            <div className={props.selecionado} onClick={() => props.markedItem(props.id, props.idSecao)}>
                <img src={props.imagem} />
                <div className="titulo">{props.item}</div>
                <div className="descricao">{props.descricao}</div>
                <div className="preco">R$ {props.preco}</div>
                <div className="check">
                    <ion-icon name="checkmark-circle"></ion-icon>
                    <div className="contador">
                        <button onClick={(e) => props.remove(e, props.id, props.idSecao)} >-</button>
                        <span>{props.contador}</span>
                        <button onClick={(e) => props.add(e, props.id, props.idSecao)} >+</button>
                    </div>
                </div>
            </div>
        </>
    );
}

