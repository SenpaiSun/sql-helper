import React from "react"
import './Main.css'
import { Link } from "react-router-dom"

const Main: React.FC = () => {
  return (
    <main className="helper">
      <h1 className="helper__title">Your assistant for clients with various SQL GUI:</h1>
      <Link to="/in-helper" className="helper__in-helper-router"><span className="helper__mnemonic-left">&#187;&#187;&#187;</span> In-Helper <span className="helper__mnemonic-right">&#171;&#171;&#171;</span></Link>
      <p className="helper__in-helper-text">Convert values from column to row using your GUI syntax</p>
      <Link to="/get-value" className="helper__get-value-router"><span className="helper__mnemonic-left">&#187;&#187;&#187;</span> Get Value <span className="helper__mnemonic-right">&#171;&#171;&#171;</span></Link>
      <p className="helper__in-helper-text">Get values from your json file</p>
    </main>
  )
}

export default Main