import React from 'react'
// import { useTheme } from '@edan/designable-react'
import logo from '../../src/assets/images/logo.svg';

// const logo = {
//   dark: '//img.alicdn.com/imgextra/i2/O1CN01NTUDi81fHLQvZCPnc_!!6000000003981-55-tps-1141-150.svg',
//   light:
//     '//img.alicdn.com/imgextra/i2/O1CN01Kq3OHU1fph6LGqjIz_!!6000000004056-55-tps-1141-150.svg',
// }

// export const LogoWidget: React.FC = () => {
//   const url = logo[useTheme()]
//   return (
//     <div style={{ display: 'flex', alignItems: 'center', fontSize: 14 }}>
//       <img
//         src={url}
//         style={{ margin: '12px 8px', height: 18, width: 'auto' }}
//       />
//     </div>
//   )
// }

export const LogoWidget: React.FC = () => {
  return (
    <div className='dn-logo'>
      <img src={logo} className='dn-logo-img' />· 设计表单
    </div>
  );
};
