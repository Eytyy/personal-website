import React from 'react'
import { vars } from '../styles'

const Eye = () => {
  return (
    <svg width="206px" height="123px" viewBox="0 0 206 123">
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g transform="translate(-577.000000, -338.000000)">
          <g id="eye" transform="translate(581.000000, 341.000000)">
            <circle
              id="Oval"
              fill={`${vars.colors.blue}`}
              cx="99"
              cy="58"
              r="31"
            ></circle>
            <path
              d="M4.26325641e-14,60.5063669 C33.0598754,20.168789 66.0572611,3.98565664e-15 98.9921569,0 C131.927053,0 164.924438,19.9161848 197.984314,59.7485544 C160.760376,97.7136115 127.76299,116.69614 98.9921569,116.69614 C70.2213236,116.69614 37.2239379,97.9662157 4.26325641e-14,60.5063669 Z"
              id="Path"
              stroke={`${vars.colors.blue}`}
              strokeWidth="6"
            ></path>
            <path d="" id="Path-2" stroke={`${vars.colors.blue}`}></path>
          </g>
        </g>
      </g>
    </svg>
  )
}

export default Eye
