import Header from '../componentes/Header'
import Footer from '../componentes/Footer'

export default (props)=>(
  <div className="contenedor">
    <Header/>
    {props.children}
    <Footer/>
    <style jsx>
      {
        `
          .contenedor{
            position:relative;
            height:100vh;
          }
        `
      }
    </style>
  </div>
)
