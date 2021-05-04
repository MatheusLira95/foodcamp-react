import Opcao from "./Opcao";
export default function Opcoes(){

    //3 OPÇOES (ARRAY/OBJ)
    return (
        <>
            <div class="opcoes pratos">
                
                <Opcao />
                <Opcao />
                <Opcao />
                <div class="opcao prato-carne" onclick="selecionarPrato('.prato-carne', 'Carne Yin Yang', 17.90)">
                    <img src="img/frango_yin_yang.png" />
                    <div class="titulo">Carne Yin Yang</div>
                    <div class="descricao">Um pouco de batata, um pouco de salada</div>
                    <div class="preco">R$ 17,90</div>
                    <div class="check">
                    <ion-icon name="checkmark-circle"></ion-icon>
                    </div>
                </div>

                <div class="opcao prato-peixe" onclick="selecionarPrato('.prato-peixe', 'Peixe Yin Yang', 16.90)">
                    <img src="img/frango_yin_yang.png" />
                    <div class="titulo">Peixe Yin Yang</div>
                    <div class="descricao">Um pouco de batata, um pouco de salada</div>
                    <div class="preco">R$ 16,90</div>
                    <div class="check">
                    <ion-icon name="checkmark-circle"></ion-icon>
                    </div>
                </div>
            </div>
        </>
    );
}