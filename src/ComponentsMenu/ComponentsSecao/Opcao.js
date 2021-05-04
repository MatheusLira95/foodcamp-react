export default function Opcao(){
    return (
        <>
            <div class="opcao prato-frango" onclick="selecionarPrato('.prato-frango', 'Frango Yin Yang', 14.90)">
                <img src="img/frango_yin_yang.png" />
                <div class="titulo">Frango Yin Yang</div>
                <div class="descricao">Um pouco de batata, um pouco de salada</div>
                <div class="preco">R$ 14,90</div>
                <div class="check">
                <ion-icon name="checkmark-circle"></ion-icon>
                </div>
            </div>
        </>
    );
}