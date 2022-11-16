// import icons from '../img/icon.svg'
const iconUrl = '/asset/img/icon.svg'

export const fontFamily = {
  notoSans300: {
    fontFamily: "'Noto Sans KR', sans-serif",
    fontWeight: 300
  },
  notoSans400: {
    fontFamily: "'Noto Sans KR', sans-serif",
    fontWeight: 400
  },
  notoSans500: {
    fontFamily: "'Noto Sans KR', sans-serif",
    fontWeight: 500
  },
  notoSans700: {
    fontFamily: "'Noto Sans KR', sans-serif",
    fontWeight: 700
  }
};

export const palette = {
  common: {
    white: '#FFF',
    black: '#000'
  },
  black: {
    main: '#333'
  },
  gray: {
    main: '#333',
    dark: '',
    light55: '#555',
    light88: '#888',
    light99:'#999999',
    lightA7: '#A7A7A7',
    lightAA: '#AAA',
    lightBB: '#BBB',
    light: '#CCC',
    lightDD: '#DDD',
    lightEE: '#EEE',
    lightEC: '#ECECEC',
    lightF1: '#F1F1F1',
    lightF7: '#F7F7F7',
    lightF9: '#F9F9F9',
    lightFA: '#FAFAFA',
    lightFb: '#FbFbFb',
    lightF6: '#F6F6F6',
  },
  red: {
    main: '#FF4C4C',
    over: '#FF0000',
    lightFF7B: '#FF7B7B',
  },
  green: {
    main: '#6DAB3F',
    over: '#4D8E1C',
    light: '#73B200',
    dark: '#548300'
  }
};

export const fontSizes = {
  f10: {
    fontSize: '10px'
  },
  f11: {
    fontSize: '11px'
  },
  f12: {
    fontSize: '12px'
  },
  f13: {
    fontSize: '13px'
  },
  f14: {
    fontSize: '14px'
  },
  f15: {
    fontSize: '15px'
  },
  f16: {
    fontSize: '16px'
  },
  f17: {
    fontSize: '17px'
  },
  f18: {
    fontSize: '18px'
  },
  f20: {
    fontSize: '20px'
  },
  f22: {
    fontSize: '22px'
  },
  f25: {
    fontSize: '25px'
  }
};

export const radius = {
  micro: {
    borderRadius: 3
  },
  mini: {
    borderRadius: 5
  },
  small: {
    borderRadius: 10
  },
  medium: {
    borderRadius: 20
  },
  big: {
    borderRadius: 30
  }
};

export const border = {
  grayMain: {
    border: `solid 1px ${palette.gray.main}`
  },
  grayMedium: {
    border: `solid 1px ${palette.gray.lightAA}`
  },
  grayLight: {
    border: `solid 1px ${palette.gray.light}`
  },
  grayLightAA: {
    border: `solid 1px ${palette.gray.lightAA}`
  },
  grayLightBB: {
    border: `solid 1px ${palette.gray.lightBB}`
  },
  grayLightDD: {
    border: `solid 1px ${palette.gray.lightDD}`
  },
  grayLightEC: {
    border: `solid 1px ${palette.gray.lightEC}`
  },
  grayLightEE: {
    border: `solid 1px ${palette.gray.lightEE}`
  },
  grayLightF6: {
    border: `solid 1px ${palette.gray.lightF6}`
  },
  grayLightF7: {
    border: `solid 1px ${palette.gray.lightF7}`
  },
  grayLightF1: {
    border: `solid 1px ${palette.gray.lightF1}`
  },
  grayLightDashed: {
    border: `dashed 1px ${palette.gray.light}`
  },
  whiteMain: {
    border: `solid 1px ${palette.common.white}`
  },
  blackMain: {
    border: `solid 1px ${palette.common.black}`
  },
  greenLight2x: {
    border: `solid 2px ${palette.green.light}`
  },
  greenOver: {
    border: `solid 2px ${palette.green.over}`
  },
  redMain: {
    border: `solid 1px ${palette.red.main}`
  }

};

export const shadow = {
  grayMain: {
    boxShadow: `1px 1px 0 0 ${palette.gray.main}`
  },
  grayBigMain: {
    boxShadow: `2px 2px 0 0 ${palette.gray.main}`
  },
  grayLight: {
    boxShadow: `1px 1px 0 0 ${palette.gray.light}`
  },
  whiteMain: {
    boxShadow: `0px 1px 0 0 ${palette.gray.lightDD}`
  },
  whiteLight: {
    boxShadow: `0px 1px 0 0 ${palette.common.white}`
  },
  blackMain: {
    boxShadow: `1px 1px 0 0 ${palette.common.black}`
  }
}

export const letterSpacing = {
  main: {
    letterSpacing: '-0.5px'
  }
}

export const backgroundIcons = {
  backgroundImage: `url(${iconUrl})`,
  backgroundRepeat: 'no-repeat',
}