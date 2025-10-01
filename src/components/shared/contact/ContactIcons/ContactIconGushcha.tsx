import React from "react";



const ContactIconGushcha: React.FC<{size?: number}> = ({size = 16}) => (
  <svg 
    viewBox="0 0 256 256" 
    width={size} 
    height={size} 
    role="img"
    className='inline-block text-white dark:text-gray-700'>
    <g>
      <rect fill="url(#svg_11)" stroke="#000" x="0" y="0" width="256" height="256" id="svg_10" strokeWidth={0} />
      <path fill="currentColor" d="m44.16635,37.08415l-14.41467,178.93545l175.84675,16.89517l17.08509,-121.88319l-100.37186,-3.3809l-7.81943,57.97471l54.94559,-11.31968l-7.4722,22.79974l-71.21852,-7.61777l6.59682,-76.15011l127.59921,3.21053l8.0547,-61.29036l-188.83148,1.82642z" id="svg_1" stroke="#000" strokeWidth="0" opacity="0.5"/>
      <path strokeWidth="0" fill="currentColor" d="m52.02589,44.95836l-13.60978,163.41658l159.4334,16.042l15.27638,-105.8405l-83.45969,-2.79454l-5.62325,39.69799l56.90934,-11.22678l-13.07764,40.79818l-85.9642,-8.77639l7.9527,-90.82377l127.65228,2.60349l6.4007,-44.46645l-171.89024,1.37019z" id="svg_2" stroke="#000"/>
    </g>
    <defs>
      <linearGradient id="svg_11" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#8246ff" />
        <stop offset="1" stopColor="#ff1e50"/>
      </linearGradient>
    </defs>
  </svg>
);

export default ContactIconGushcha;