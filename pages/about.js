import Link from 'next/link'
import MainLayout from '../layouts/MainLayout'
export default ()=>(
  <div>
    <MainLayout>
      <div className="jumbo">
        Esta es la pagina About

        <style jsx>
          {
            `
              .jumbo{
                height:600px;
                background:url(/static/img/background1.jpg);
                background-size:cover;
                font-size:56px;
                text-align:center;
                color:white;
                padding-top:100px;
              }
            `
          }
        </style>
      </div>
    </MainLayout>

  </div>

)
