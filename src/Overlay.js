export default function Overlay(){
    return (
        <>
            <div className="overlay escondido">
                <div className="confirmar-pedido">
                    <div className="titulo">Confirme seu pedido</div>
                    <ul>
                    <li className="prato">
                        <div className="nome">Frango Yin Yang</div>
                        <div className="preco">14,90</div>
                    </li>
                    <li className="bebida">
                        <div className="nome">Coquinha gelada</div>
                        <div className="preco">4,90</div>
                    </li>
                    <li className="sobremesa">
                        <div className="nome">Pudim</div>
                        <div className="preco">7,90</div>
                    </li>
                    <li className="total">
                        <div>Total</div>
                        <div>R$ 27,70</div>
                    </li>
                    </ul>
                    <button className="confirmar">Tudo certo, pode pedir!</button>
                    <button className="cancelar">Cancelar</button>
                </div>
            </div>
        </>
    );
}