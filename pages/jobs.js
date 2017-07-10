
import fetch from 'isomorphic-unfetch'
const Pedidos = (props)=>(
    <ul>
        {
            props.pedidos.map((pedido)=>{
                return (
                    <li>{pedido.descripcion}</li>
                )
            })
        }
    </ul>
)

Pedidos.getInitialProps = async ()=>{
    const res = await fetch('http://localhost:3000/pedidos')
    const pedidos = await res.json()
    console.log(pedidos)
    return {
        pedidos
    }
}
export default Pedidos