function HomeIcon(props) {
  let fillColor = '#C4C4C4';
  if (props.current === 'home') {
    fillColor = '#F9F9F9';
  }
  return (
    <div onClick={props.onClick}>
      <svg
        width='29'
        height='38'
        viewBox='0 0 29 38'
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
      >
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M15.5578 5.53423C14.6873 4.69887 13.3127 4.69887 12.4422 5.53423L7.81574 9.97357C7.70239 10.0823 7.62614 10.224 7.5978 10.3785C7.04367 13.4004 7.00277 16.494 7.47681 19.5295L7.58933 20.25H10.5658V14.0387C10.5658 13.6244 10.9016 13.2887 11.3158 13.2887H16.6842C17.0984 13.2887 17.4342 13.6244 17.4342 14.0387V20.25H20.4107L20.5232 19.5295C20.9972 16.494 20.9563 13.4004 20.4022 10.3785C20.3739 10.224 20.2976 10.0823 20.1843 9.97357L15.5578 5.53423ZM11.4036 4.45191C12.8546 3.05965 15.1454 3.05965 16.5964 4.45191L21.2228 8.89125C21.5634 9.21804 21.7925 9.64373 21.8776 10.108C22.4621 13.2956 22.5053 16.559 22.0052 19.7609L21.8245 20.9184C21.7497 21.3971 21.3374 21.75 20.8529 21.75H16.6842C16.27 21.75 15.9342 21.4142 15.9342 21V14.7887H12.0658V21C12.0658 21.4142 11.73 21.75 11.3158 21.75H7.14706C6.66258 21.75 6.25029 21.3971 6.17554 20.9184L5.99478 19.7609C5.49473 16.559 5.53787 13.2956 6.1224 10.108C6.20754 9.64373 6.43662 9.21804 6.77719 8.89125L11.4036 4.45191Z'
          fill={fillColor}
        />
        <path
          d='M0.68 34V27H1.96V29.91H5.1V27H6.38V34H5.1V30.95H1.96V34H0.68ZM10.0905 34.12C9.61055 34.12 9.17721 34.01 8.79055 33.79C8.41055 33.57 8.10721 33.2667 7.88055 32.88C7.66055 32.4867 7.55055 32.0333 7.55055 31.52C7.55055 31.0067 7.66388 30.5567 7.89055 30.17C8.11721 29.7767 8.42055 29.47 8.80055 29.25C9.18721 29.03 9.62055 28.92 10.1005 28.92C10.5739 28.92 11.0005 29.03 11.3805 29.25C11.7672 29.47 12.0705 29.7767 12.2905 30.17C12.5172 30.5567 12.6305 31.0067 12.6305 31.52C12.6305 32.0333 12.5172 32.4867 12.2905 32.88C12.0705 33.2667 11.7672 33.57 11.3805 33.79C10.9939 34.01 10.5639 34.12 10.0905 34.12ZM10.0905 33.01C10.4239 33.01 10.7139 32.8867 10.9605 32.64C11.2072 32.3867 11.3305 32.0133 11.3305 31.52C11.3305 31.0267 11.2072 30.6567 10.9605 30.41C10.7139 30.1567 10.4272 30.03 10.1005 30.03C9.76055 30.03 9.46721 30.1567 9.22055 30.41C8.98055 30.6567 8.86055 31.0267 8.86055 31.52C8.86055 32.0133 8.98055 32.3867 9.22055 32.64C9.46721 32.8867 9.75721 33.01 10.0905 33.01ZM13.775 34V29.04H14.905L15.015 29.71C15.175 29.47 15.385 29.28 15.645 29.14C15.9117 28.9933 16.2183 28.92 16.565 28.92C17.3317 28.92 17.875 29.2167 18.195 29.81C18.375 29.5367 18.615 29.32 18.915 29.16C19.2217 29 19.555 28.92 19.915 28.92C20.5617 28.92 21.0583 29.1133 21.405 29.5C21.7517 29.8867 21.925 30.4533 21.925 31.2V34H20.645V31.32C20.645 30.8933 20.5617 30.5667 20.395 30.34C20.235 30.1133 19.985 30 19.645 30C19.2983 30 19.0183 30.1267 18.805 30.38C18.5983 30.6333 18.495 30.9867 18.495 31.44V34H17.215V31.32C17.215 30.8933 17.1317 30.5667 16.965 30.34C16.7983 30.1133 16.5417 30 16.195 30C15.855 30 15.5783 30.1267 15.365 30.38C15.1583 30.6333 15.055 30.9867 15.055 31.44V34H13.775ZM25.5502 34.12C25.0502 34.12 24.6069 34.0133 24.2202 33.8C23.8336 33.5867 23.5302 33.2867 23.3102 32.9C23.0902 32.5133 22.9802 32.0667 22.9802 31.56C22.9802 31.0467 23.0869 30.59 23.3002 30.19C23.5202 29.79 23.8202 29.48 24.2002 29.26C24.5869 29.0333 25.0402 28.92 25.5602 28.92C26.0469 28.92 26.4769 29.0267 26.8502 29.24C27.2236 29.4533 27.5136 29.7467 27.7202 30.12C27.9336 30.4867 28.0402 30.8967 28.0402 31.35C28.0402 31.4233 28.0369 31.5 28.0302 31.58C28.0302 31.66 28.0269 31.7433 28.0202 31.83H24.2502C24.2769 32.2167 24.4102 32.52 24.6502 32.74C24.8969 32.96 25.1936 33.07 25.5402 33.07C25.8002 33.07 26.0169 33.0133 26.1902 32.9C26.3702 32.78 26.5036 32.6267 26.5902 32.44H27.8902C27.7969 32.7533 27.6402 33.04 27.4202 33.3C27.2069 33.5533 26.9402 33.7533 26.6202 33.9C26.3069 34.0467 25.9502 34.12 25.5502 34.12ZM25.5602 29.96C25.2469 29.96 24.9702 30.05 24.7302 30.23C24.4902 30.4033 24.3369 30.67 24.2702 31.03H26.7402C26.7202 30.7033 26.6002 30.4433 26.3802 30.25C26.1602 30.0567 25.8869 29.96 25.5602 29.96Z'
          fill={fillColor}
        />
      </svg>
    </div>
  );
}

export default HomeIcon;