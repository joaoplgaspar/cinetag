import React from 'react'
import { NavLink } from 'react-router-dom'

export default function CabecalhoLink( {to, children, styles} ) {
  return (
    <NavLink className={
        ({ isActive }) => {
            return isActive ? `${styles.link__destacado} ${styles.link}` : `${styles.link}`
        }
    }
    to={to}
    end>
        {children}
    </NavLink>
  )
}
