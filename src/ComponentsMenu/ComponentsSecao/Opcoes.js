import Opcao from "./Opcao";
export default function Opcoes(props){

    const opcoes = props.opcoesSecao;
    
    return (
        <>
            <div className="opcoes pratos">                
                {opcoes.map(opcao => (<Opcao imagem={opcao.imagem} item={opcao.item} descricao={opcao.descricao} preco={opcao.preco}/>))}                
            </div>
        </>
    );
}