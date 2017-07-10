import Link from 'next/link'
export default ()=>(
  <header>
    <div className="nav">
      <div className="brand">The Company</div>
      <ul>
        <li><Link href="/"><a>Home</a></Link></li>
        <li><Link href="/about"><a>About</a></Link></li>
      </ul>

    </div>
    <style jsx>
      {
        `
          header{
            background:linear-gradient(#E1BEE7,#4A148C);
            font-size:24px;
            color:white;
            padding:20px;
          }
          .nav{
            display:flex;
            justify-content:space-between;
          }
          .brand {
            font-size:48px;
          }
          ul{
            list-style:none;
            padding:0;
          }
          li{
            display:inline-block;
            margin-right:10px;
          }
        `
      }
    </style>
  </header>
)
