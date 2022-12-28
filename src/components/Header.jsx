import React from 'react'
import { Link } from 'react-router-dom';
import {HashLink} from "react-router-hash-link";

const Header = () => {
  return (
    <nav>
      <h1>Techy</h1>
      <main>
        <HashLink to = {"/"}>Home</HashLink>
        <HashLink to = {"/#about"}>About</HashLink>
        <HashLink to = {"/#brands"}>Brands</HashLink>
      </main>
    </nav>
  )
}

export default Header