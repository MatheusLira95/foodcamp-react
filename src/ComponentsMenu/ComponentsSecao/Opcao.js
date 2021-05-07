import React from "react"
export default function Opcao(props){
    const [selecionado, setSelecionado] = React.useState("opcao");
    const [counter, setCounter] = React.useState(0);
    
    function markedItem(){
        if(selecionado === "opcao"){
            setSelecionado("opcao selecionado")
            setCounter(1)
            
        }else {
            return;
        }
        
    }
    function add(){
        setCounter(counter + 1)
    }
    function remove(){
        (counter <= 0) ? setSelecionado("opcao") : setCounter(counter - 1);
        
    }
    return (
        <>
            <div className={selecionado} onClick={markedItem}>
                <img src={props.imagem} />
                <div className="titulo">{props.item}</div>
                <div className="descricao">{props.descricao}</div>
                <div className="preco">R$ {props.preco}</div>
                <div className="check">
                    <ion-icon name="checkmark-circle"></ion-icon>
                    <div className="contador">
                        <button onClick={remove}>-</button>
                        <span>{counter}</span>
                        <button onClick={add}>+</button>
                    </div>
                </div>
            </div>
        </>
    );
}

//COLOCAR DIV DO CONTADOR
//