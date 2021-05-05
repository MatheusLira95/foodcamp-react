export default function Opcao(props){
    return (
        <>
            <div class="opcao prato-frango" onclick="selecionarPrato('.prato-frango', 'Frango Yin Yang', 14.90)">
                <img src={props.imagem} />
                <div class="titulo">{props.item}</div>
                <div class="descricao">{props.descricao}</div>
                <div class="preco">R$ {props.preco}</div>
                <div class="check">
                <ion-icon name="checkmark-circle"></ion-icon>
                </div>
            </div>
        </>
    );
}