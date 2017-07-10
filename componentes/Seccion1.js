export default ()=>(
  <section>
    <div className="contenedor-seccion1">
      <div className="presupuesto">
        <img src="/static/img/money.png"/>
        <h3>Presupuesto.</h3>
        <p>Un presupuesto a su alcance</p>
      </div>
      <div className="presupuesto">
        <img src="/static/img/fast.png"/>
        <h3>Rapidez</h3>
        <p>Ejecutamos sus proyectos con rapidez y confianza</p>
      </div>
    </div>
    <style jsx>
      {
        `
          .contenedor-seccion1{
            display:flex;

          }
          .contenedor-seccion1 div{
            flex:1 1 50%;
            border-right:1px solid #ccc;
            text-align:center;
            padding:30px 50px;

          }
          img{
            height:50%;
          }
          @media (max-width:480px){
            .contenedor-seccion1{
              flex-direction:column;

            }
            img{height:100px;}
          }
        `
      }

    </style>
  </section>
)
