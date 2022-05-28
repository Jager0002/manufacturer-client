import React from "react"

const MyPortfolio = () => {
  return (
    <div className="m-20">
      <div>
        <h2>Name : Faisal Moin</h2>
        <h2>Email : faisalmoin8991@gmail.com</h2>
        <h2>Education Background : Brac University(3rd year)</h2>
        <h2>
          Skills : Good knowledge on html,css,javaScript, React,node.js, mongoDb
          , SQL, NoSQL, Java, Algorithm etc.
        </h2>
        <h2>Projects Links : </h2>
        <a className="underline" href="https://boi-bari.web.app/">
          Project on WareHouse
        </a>
        <br />
        <a
          className="underline"
          href="https://idyllic-maamoul-3adcf8.netlify.app"
        >
          Project On Routing
        </a>
        <br />
        <a
          className="underline"
          href="https://independent-service-prov-96779.web.app/"
        >
          Project on learning Authentication
        </a>
      </div>
    </div>
  )
}

export default MyPortfolio
