import React from 'react'

function Header() {
  return (
    <nav className="grey darken-4">
            <div className="nav-wrapper">
                <a href="/" className="brand-logo">React Shop</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href="https://github.com/DariaDovydova/React-Shop" target='_blank' rel="noreferrer">REPO</a></li>
                </ul>
            </div>
        </nav>
  )
}

export {Header};