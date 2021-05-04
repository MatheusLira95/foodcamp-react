import Secao from "./ComponentsMenu/Secao";
export default function Menu(){
    return(
        <>
            <div class="menu">
                <Secao />
                <Secao />
                <Secao />

                <div class="secao">
                    <div class="titulo">Agora, sua bebida</div>
                    <div class="opcoes bebidas">
                        <div class="opcao bebida-coca" onclick="selecionarBebida('.bebida-coca', 'Coquinha gelada', 6.90)">
                            <img src="img/coquinha_gelada.png" />
                            <div class="titulo">Coquinha gelada</div>
                            <div class="descricao">Lata 350ml</div>
                            <div class="preco">R$ 6,90</div>
                            <div class="check">
                            <ion-icon name="checkmark-circle"></ion-icon>
                            </div>
                        </div>

                        <div class="opcao bebida-guarana" onclick="selecionarBebida('.bebida-guarana', 'Guaraná gelado', 4.90)">
                            <img src="img/coquinha_gelada.png" />
                            <div class="titulo">Guaraná gelado</div>
                            <div class="descricao">Lata 350ml</div>
                            <div class="preco">R$ 4,90</div>
                            <div class="check">
                            <ion-icon name="checkmark-circle"></ion-icon>
                            </div>
                        </div>

                        <div class="opcao bebida-suco" onclick="selecionarBebida('.bebida-suco', 'Suquinho gelado', 7.90)">
                            <img src="img/coquinha_gelada.png" />
                            <div class="titulo">Suquinho gelado</div>
                            <div class="descricao">500ml</div>
                            <div class="preco">R$ 7,90</div>
                            <div class="check">
                            <ion-icon name="checkmark-circle"></ion-icon>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="secao">
                    <div class="titulo">Por fim, sua sobremesa</div>
                    <div class="opcoes sobremesas">
                        <div class="opcao sobremesa-pudim" onclick="selecionarSobremesa('.sobremesa-pudim', 'Pudim', 7.90)">
                            <img src="img/pudim.png" />
                            <div class="titulo">Pudim</div>
                            <div class="descricao">Apenas um pudim</div>
                            <div class="preco">R$ 7,90</div>
                            <div class="check">
                            <ion-icon name="checkmark-circle"></ion-icon>
                            </div>
                        </div>

                        <div class="opcao sobremesa-mousse" onclick="selecionarSobremesa('.sobremesa-mousse', 'Mousse', 6.90)">
                            <img src="img/pudim.png" />
                            <div class="titulo">Mousse</div>
                            <div class="descricao">Cremoso, gostoso</div>
                            <div class="preco">R$ 6,90</div>
                            <div class="check">
                            <ion-icon name="checkmark-circle"></ion-icon>
                            </div>
                        </div>

                        <div class="opcao sobremesa-brownie" onclick="selecionarSobremesa('.sobremesa-brownie', 'Brownie', 4.90)">
                            <img src="img/pudim.png" />
                            <div class="titulo">Brownie</div>
                            <div class="descricao">É um bolinho</div>
                            <div class="preco">R$ 4,90</div>
                            <div class="check">
                            <ion-icon name="checkmark-circle"></ion-icon>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}