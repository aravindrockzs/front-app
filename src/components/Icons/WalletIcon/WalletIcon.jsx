function WalletIcon(props) {
  let fillColor = '#C4C4C4';
  if (props.current === 'wallet') {
    fillColor = '#F9F9F9';
  }
  return (
    <div onClick={props.onClick}>
      <svg
        width='31'
        height='34'
        viewBox='0 0 31 34'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M18.4252 8.47717C18.4252 7.64875 19.0968 6.97717 19.9252 6.97717C20.7537 6.97717 21.4252 7.64875 21.4252 8.47717C21.4252 9.3056 20.7537 9.97717 19.9252 9.97717C19.0968 9.97717 18.4252 9.3056 18.4252 8.47717Z'
          fill={fillColor}
        />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M23.3666 3.15119C22.7088 1.60553 21.2554 0.494403 19.5259 0.312405L18.874 0.243809C15.5817 -0.102644 12.261 -0.0797977 8.97374 0.311922L8.5418 0.363394C6.873 0.562254 5.55075 1.86606 5.32847 3.5319C4.89051 6.81421 4.89051 10.1402 5.32847 13.4225C5.55075 15.0883 6.873 16.3921 8.5418 16.591L8.97374 16.6425C12.261 17.0342 15.5817 17.057 18.874 16.7106L19.5259 16.642C21.2554 16.46 22.7088 15.3488 23.3666 13.8032C24.4058 13.4938 25.199 12.5928 25.3292 11.4796C25.5625 9.48477 25.5625 7.4696 25.3292 5.47481C25.199 4.36159 24.4058 3.46062 23.3666 3.15119ZM18.7171 1.73557C15.536 1.40082 12.3274 1.4229 9.15123 1.80138L8.71929 1.85286C7.73048 1.97069 6.947 2.74323 6.8153 3.73029C6.3949 6.88093 6.3949 10.0734 6.8153 13.2241C6.947 14.2111 7.73048 14.9837 8.71929 15.1015L9.15123 15.153C12.3274 15.5315 15.536 15.5535 18.7171 15.2188L19.3689 15.1502C20.2195 15.0607 20.972 14.6415 21.4936 14.0191C19.9854 14.1071 18.4572 14.0678 16.967 13.9012C15.6976 13.7594 14.671 12.7598 14.5213 11.4796C14.288 9.48477 14.288 7.4696 14.5213 5.47481C14.671 4.19455 15.6976 3.19501 16.967 3.05314C18.4572 2.88659 19.9854 2.84729 21.4936 2.93524C20.972 2.31292 20.2195 1.89367 19.3689 1.80417L18.7171 1.73557ZM22.2026 4.49188C22.2032 4.49572 22.2038 4.49956 22.2044 4.5034L22.2105 4.54229L22.4091 4.51144C22.5119 4.52161 22.6145 4.53242 22.7169 4.54386C23.3043 4.60951 23.7721 5.07366 23.8394 5.64907C24.0591 7.52807 24.0591 9.4263 23.8394 11.3053C23.7721 11.8807 23.3043 12.3449 22.7169 12.4105C22.6145 12.422 22.5119 12.4328 22.4091 12.4429L22.2105 12.4121L22.2044 12.451C22.2038 12.4548 22.2032 12.4587 22.2026 12.4625C20.524 12.6143 18.8024 12.597 17.1336 12.4105C16.5462 12.3449 16.0784 11.8807 16.0111 11.3053C15.7914 9.4263 15.7914 7.52807 16.0111 5.64907C16.0784 5.07366 16.5462 4.60951 17.1336 4.54386C18.8024 4.35735 20.524 4.34002 22.2026 4.49188Z'
          fill={fillColor}
        />
        <path
          d='M2.1 30L0.25 23H1.62L2.88 28.57L4.36 23H5.77L7.21 28.57L8.47 23H9.85L7.95 30H6.43L5.04 24.81L3.61 30H2.1ZM11.8913 30.12C11.4646 30.12 11.1146 30.0533 10.8413 29.92C10.5679 29.78 10.3646 29.5967 10.2313 29.37C10.0979 29.1433 10.0313 28.8933 10.0313 28.62C10.0313 28.16 10.2113 27.7867 10.5713 27.5C10.9313 27.2133 11.4713 27.07 12.1913 27.07H13.4513V26.95C13.4513 26.61 13.3546 26.36 13.1613 26.2C12.9679 26.04 12.7279 25.96 12.4413 25.96C12.1813 25.96 11.9546 26.0233 11.7613 26.15C11.5679 26.27 11.4479 26.45 11.4013 26.69H10.1513C10.1846 26.33 10.3046 26.0167 10.5113 25.75C10.7246 25.4833 10.9979 25.28 11.3313 25.14C11.6646 24.9933 12.0379 24.92 12.4513 24.92C13.1579 24.92 13.7146 25.0967 14.1213 25.45C14.5279 25.8033 14.7313 26.3033 14.7313 26.95V30H13.6413L13.5213 29.2C13.3746 29.4667 13.1679 29.6867 12.9013 29.86C12.6413 30.0333 12.3046 30.12 11.8913 30.12ZM12.1813 29.12C12.5479 29.12 12.8313 29 13.0313 28.76C13.2379 28.52 13.3679 28.2233 13.4213 27.87H12.3313C11.9913 27.87 11.7479 27.9333 11.6013 28.06C11.4546 28.18 11.3813 28.33 11.3813 28.51C11.3813 28.7033 11.4546 28.8533 11.6013 28.96C11.7479 29.0667 11.9413 29.12 12.1813 29.12ZM15.9527 30V22.8H17.2327V30H15.9527ZM18.5406 30V22.8H19.8206V30H18.5406ZM23.5385 30.12C23.0385 30.12 22.5952 30.0133 22.2085 29.8C21.8218 29.5867 21.5185 29.2867 21.2985 28.9C21.0785 28.5133 20.9685 28.0667 20.9685 27.56C20.9685 27.0467 21.0752 26.59 21.2885 26.19C21.5085 25.79 21.8085 25.48 22.1885 25.26C22.5752 25.0333 23.0285 24.92 23.5485 24.92C24.0352 24.92 24.4652 25.0267 24.8385 25.24C25.2118 25.4533 25.5018 25.7467 25.7085 26.12C25.9218 26.4867 26.0285 26.8967 26.0285 27.35C26.0285 27.4233 26.0252 27.5 26.0185 27.58C26.0185 27.66 26.0152 27.7433 26.0085 27.83H22.2385C22.2652 28.2167 22.3985 28.52 22.6385 28.74C22.8852 28.96 23.1818 29.07 23.5285 29.07C23.7885 29.07 24.0052 29.0133 24.1785 28.9C24.3585 28.78 24.4918 28.6267 24.5785 28.44H25.8785C25.7852 28.7533 25.6285 29.04 25.4085 29.3C25.1952 29.5533 24.9285 29.7533 24.6085 29.9C24.2952 30.0467 23.9385 30.12 23.5385 30.12ZM23.5485 25.96C23.2352 25.96 22.9585 26.05 22.7185 26.23C22.4785 26.4033 22.3252 26.67 22.2585 27.03H24.7285C24.7085 26.7033 24.5885 26.4433 24.3685 26.25C24.1485 26.0567 23.8752 25.96 23.5485 25.96ZM29.2272 30C28.7072 30 28.2905 29.8733 27.9772 29.62C27.6639 29.3667 27.5072 28.9167 27.5072 28.27V26.11H26.6572V25.04H27.5072L27.6572 23.71H28.7872V25.04H30.1272V26.11H28.7872V28.28C28.7872 28.52 28.8372 28.6867 28.9372 28.78C29.0439 28.8667 29.2239 28.91 29.4772 28.91H30.0972V30H29.2272Z'
          fill={fillColor}
        />
      </svg>
    </div>
  );
}

export default WalletIcon;
