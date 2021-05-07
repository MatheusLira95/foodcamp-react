import Secao from "./ComponentsMenu/Secao";
export default function Menu(){   
    const porSecoes = [
        {titulo: "Primeiro, seu prato", 
        itemSession:[{ imagem:"img/frango_yin_yang.png", item:"Frango Yin Yang", descricao:"Um pouco de batata, um pouco de salada", preco:"16,90"},
                      { imagem:"img/frango_yin_yang.png", item:"Carne Yin Yang", descricao:"Um pouco de batata, um pouco de salada", preco:"14,90"},
                      { imagem:"img/frango_yin_yang.png", item:"Peixe Yin Yang", descricao:"Um pouco de batata, um pouco de salada", preco:"17,90"}   
                    ]       
        },
        {titulo: "Agora, sua bebida", 
        itemSession:[{ imagem:"img/coquinha_gelada.png", item:"Coquinha gelada", descricao:"Lata 350ml", preco:"6,90"},
                     { imagem:"img/coquinha_gelada.png", item:"Guarana gelado", descricao:"Lata 350ml", preco:"4,90"},
                     { imagem:"img/coquinha_gelada.png", item:"Suquinho gelado", descricao:"Garrafa 450ml", preco:"7,90"}   
                    ]
        },
        {titulo: "Por fim, sua sobremesa", 
        itemSession:[{ imagem:"img/pudim.png", item:"Pudim", descricao:"Apenas um pudim", preco:"6,90"},
                     { imagem:"img/pudim.png", item:"Mousse", descricao:"Apenas uma mousse", preco:"4,90"},
                     { imagem:"img/pudim.png", item:"Brownie", descricao:"Apenas um brownie", preco:"7,90"}   
       ]}
];
    
    
    return(
        <>
            <div className="menu">                
                {porSecoes.map(porSecao => (<Secao tituloSecao={porSecao.titulo} opcoesSecao={porSecao.itemSession} />))}                                
            </div>
        </>
    );
}