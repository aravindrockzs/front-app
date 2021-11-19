function ProfileIcon(props) {
  let fillColor = '#C4C4C4';
  if (props.current === 'profile') {
    fillColor = '#F9F9F9';
  }
  return (
    <div onClick={props.onClick}>
      <svg
        width='31'
        height='33'
        viewBox='0 0 31 33'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M0.68 29V22H3.27C3.83 22 4.29333 22.0933 4.66 22.28C5.02667 22.4667 5.3 22.7233 5.48 23.05C5.66 23.3767 5.75 23.7433 5.75 24.15C5.75 24.5367 5.66333 24.8933 5.49 25.22C5.31667 25.54 5.04667 25.8 4.68 26C4.31333 26.1933 3.84333 26.29 3.27 26.29H1.96V29H0.68ZM1.96 25.25H3.19C3.63667 25.25 3.95667 25.1533 4.15 24.96C4.35 24.76 4.45 24.49 4.45 24.15C4.45 23.8033 4.35 23.5333 4.15 23.34C3.95667 23.14 3.63667 23.04 3.19 23.04H1.96V25.25ZM6.72422 29V24.04H7.86422L7.98422 24.97C8.16422 24.65 8.40755 24.3967 8.71422 24.21C9.02755 24.0167 9.39422 23.92 9.81422 23.92V25.27H9.45422C9.17422 25.27 8.92422 25.3133 8.70422 25.4C8.48422 25.4867 8.31089 25.6367 8.18422 25.85C8.06422 26.0633 8.00422 26.36 8.00422 26.74V29H6.72422ZM12.9812 29.12C12.5012 29.12 12.0678 29.01 11.6812 28.79C11.3012 28.57 10.9978 28.2667 10.7712 27.88C10.5512 27.4867 10.4412 27.0333 10.4412 26.52C10.4412 26.0067 10.5545 25.5567 10.7812 25.17C11.0078 24.7767 11.3112 24.47 11.6912 24.25C12.0778 24.03 12.5112 23.92 12.9912 23.92C13.4645 23.92 13.8912 24.03 14.2712 24.25C14.6578 24.47 14.9612 24.7767 15.1812 25.17C15.4078 25.5567 15.5212 26.0067 15.5212 26.52C15.5212 27.0333 15.4078 27.4867 15.1812 27.88C14.9612 28.2667 14.6578 28.57 14.2712 28.79C13.8845 29.01 13.4545 29.12 12.9812 29.12ZM12.9812 28.01C13.3145 28.01 13.6045 27.8867 13.8512 27.64C14.0978 27.3867 14.2212 27.0133 14.2212 26.52C14.2212 26.0267 14.0978 25.6567 13.8512 25.41C13.6045 25.1567 13.3178 25.03 12.9912 25.03C12.6512 25.03 12.3578 25.1567 12.1112 25.41C11.8712 25.6567 11.7512 26.0267 11.7512 26.52C11.7512 27.0133 11.8712 27.3867 12.1112 27.64C12.3578 27.8867 12.6478 28.01 12.9812 28.01ZM16.8956 29V25.11H16.2156V24.04H16.8956V23.46C16.8956 22.86 17.0456 22.4333 17.3456 22.18C17.6523 21.9267 18.0656 21.8 18.5856 21.8H19.1356V22.89H18.7856C18.5656 22.89 18.409 22.9333 18.3156 23.02C18.2223 23.1067 18.1756 23.2533 18.1756 23.46V24.04H21.3756V29H20.0956V25.11H18.1756V29H16.8956ZM20.7456 23.33C20.5123 23.33 20.319 23.26 20.1656 23.12C20.019 22.98 19.9456 22.8033 19.9456 22.59C19.9456 22.3767 20.019 22.2033 20.1656 22.07C20.319 21.93 20.5123 21.86 20.7456 21.86C20.979 21.86 21.169 21.93 21.3156 22.07C21.469 22.2033 21.5456 22.3767 21.5456 22.59C21.5456 22.8033 21.469 22.98 21.3156 23.12C21.169 23.26 20.979 23.33 20.7456 23.33ZM22.7301 29V21.8H24.0101V29H22.7301ZM27.728 29.12C27.228 29.12 26.7846 29.0133 26.398 28.8C26.0113 28.5867 25.708 28.2867 25.488 27.9C25.268 27.5133 25.158 27.0667 25.158 26.56C25.158 26.0467 25.2646 25.59 25.478 25.19C25.698 24.79 25.998 24.48 26.378 24.26C26.7646 24.0333 27.218 23.92 27.738 23.92C28.2246 23.92 28.6546 24.0267 29.028 24.24C29.4013 24.4533 29.6913 24.7467 29.898 25.12C30.1113 25.4867 30.218 25.8967 30.218 26.35C30.218 26.4233 30.2146 26.5 30.208 26.58C30.208 26.66 30.2046 26.7433 30.198 26.83H26.428C26.4546 27.2167 26.588 27.52 26.828 27.74C27.0746 27.96 27.3713 28.07 27.718 28.07C27.978 28.07 28.1946 28.0133 28.368 27.9C28.548 27.78 28.6813 27.6267 28.768 27.44H30.068C29.9746 27.7533 29.818 28.04 29.598 28.3C29.3846 28.5533 29.118 28.7533 28.798 28.9C28.4846 29.0467 28.128 29.12 27.728 29.12ZM27.738 24.96C27.4246 24.96 27.148 25.05 26.908 25.23C26.668 25.4033 26.5146 25.67 26.448 26.03H28.918C28.898 25.7033 28.778 25.4433 28.558 25.25C28.338 25.0567 28.0646 24.96 27.738 24.96Z'
          fill={fillColor}
        />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M11.5 4.25C11.5 1.90279 13.4028 0 15.75 0C18.0972 0 20 1.90279 20 4.25C20 6.59721 18.0972 8.5 15.75 8.5C13.4028 8.5 11.5 6.59721 11.5 4.25ZM15.75 1.5C14.2312 1.5 13 2.73122 13 4.25C13 5.76878 14.2312 7 15.75 7C17.2688 7 18.5 5.76878 18.5 4.25C18.5 2.73122 17.2688 1.5 15.75 1.5Z'
          fill={fillColor}
        />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M11.75 11.5C10.5074 11.5 9.5 12.5074 9.5 13.75V14.9383C9.5 14.9564 9.51311 14.9718 9.53097 14.9747C13.6497 15.6472 17.8503 15.6472 21.969 14.9747C21.9869 14.9718 22 14.9564 22 14.9383V13.75C22 12.5074 20.9926 11.5 19.75 11.5H19.4091C19.3828 11.5 19.3566 11.5042 19.3315 11.5123L18.466 11.795C16.7012 12.3712 14.7988 12.3712 13.034 11.795L12.1685 11.5123C12.1434 11.5042 12.1172 11.5 12.0909 11.5H11.75ZM8 13.75C8 11.6789 9.67893 10 11.75 10H12.0909C12.2754 10 12.4587 10.0292 12.6341 10.0864L13.4996 10.3691C14.9619 10.8465 16.5381 10.8465 18.0004 10.3691L18.8659 10.0864C19.0413 10.0292 19.2246 10 19.4091 10H19.75C21.8211 10 23.5 11.6789 23.5 13.75V14.9383C23.5 15.6915 22.9541 16.3337 22.2107 16.4551C17.9319 17.1537 13.5681 17.1537 9.28927 16.4551C8.54588 16.3337 8 15.6915 8 14.9383V13.75Z'
          fill={fillColor}
        />
      </svg>
    </div>
  );
}

export default ProfileIcon;