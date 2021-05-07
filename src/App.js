import React from "react";
import Overlay from "./Overlay";
import Header from "./Header";
import Menu from "./Menu";
import Footer from "./Footer";
export default function App(){
    const [data, setData] = React.useState(
        [
            {titulo: "Primeiro, seu prato", 
            itemSession:[{ id: 0,imagem:"img/frango_yin_yang.png", item:"Frango Yin Yang", descricao:"Um pouco de batata, um pouco de salada", preco:"16,90", contador: 0, selecionado: "opcao" },
                          { id: 1,imagem:"img/frango_yin_yang.png", item:"Carne Yin Yang", descricao:"Um pouco de batata, um pouco de salada", preco:"14,90", contador: 0, selecionado: "opcao" },
                          { id: 2, imagem:"img/frango_yin_yang.png", item:"Peixe Yin Yang", descricao:"Um pouco de batata, um pouco de salada", preco:"17,90", contador: 0, selecionado: "opcao" }   
                        ],
            idSecao: 0
                
            },
            {titulo: "Agora, sua bebida", 
             itemSession:[{ id: 0,imagem:"img/coquinha_gelada.png", item:"Coquinha gelada", descricao:"Lata 350ml", preco:"6,90", contador: 0, selecionado: "opcao" },
                         { id: 1,imagem:"img/coquinha_gelada.png", item:"Guarana gelado", descricao:"Lata 350ml", preco:"4,90", contador: 0, selecionado: "opcao" },
                         { id: 2,imagem:"img/coquinha_gelada.png", item:"Suquinho gelado", descricao:"Garrafa 450ml", preco:"7,90", contador: 0, selecionado: "opcao" }   
                        ],
            idSecao: 1
            
            },
            {titulo: "Por fim, sua sobremesa", 
            itemSession:[{ id: 0,imagem:"img/pudim.png", item:"Pudim", descricao:"Apenas um pudim", preco:"6,90", contador: 0, selecionado: "opcao" },
                         { id: 1,imagem:"img/pudim.png", item:"Mousse", descricao:"Apenas uma mousse", preco:"4,90", contador: 0, selecionado: "opcao" },
                         { id: 2,imagem:"img/pudim.png", item:"Brownie", descricao:"Apenas um brownie", preco:"7,90", contador: 0, selecionado: "opcao" }   
                        ],
            idSecao: 2
            }
    ]
    );
    function markedItem(id, idSecao){
        if(data[idSecao].itemSession[id].selecionado === "opcao"){
                setData([...data], data[idSecao].itemSession[id].selecionado = "opcao selecionado", data[idSecao].itemSession[id].contador++);
            }else {
                return;
        }
    }
     function add(e, id, idSecao){
        e.stopPropagation();
        setData([...data], data[idSecao].itemSession[id].contador++)
     }
     function remove(e, id, idSecao){
        e.stopPropagation();
        setData([...data], data[idSecao].itemSession[id].contador--)
        console.log(data[idSecao].itemSession[id].contador);
         if(data[idSecao].itemSession[id].contador === 0){
            setData([...data], data[idSecao].itemSession[id].selecionado = "opcao")
             
         }else{
            return;
         }     
     }

    return (
        <>
            <Overlay data={data} />
            <Header />
            <Menu data={data} markedItem={markedItem} add={add} remove={remove} />
            <Footer data={data} />  

        </>
    );
}