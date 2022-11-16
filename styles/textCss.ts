import { css } from '@emotion/react';
import { fontFamily, fontSizes, letterSpacing, palette } from './baseSytle'

// bold(700) > medium(500) > thin(400) > regular(300)

const gray25Bold = css`
  ${fontFamily.notoSans700};
  ${fontSizes.f25};
  ${letterSpacing.main};
  color: ${palette.gray.main};
`;

const gray22Bold = css`
  ${fontFamily.notoSans700};
  ${fontSizes.f22};
  ${letterSpacing.main};
  color: ${palette.gray.main};
`;

const gray20Medium = css`
  ${fontFamily.notoSans500}
  ${fontSizes.f20};
  ${letterSpacing.main};
  color: ${palette.gray.main};
`;

const gray20Bold = css`
  ${fontFamily.notoSans700};
  ${fontSizes.f20};
  ${letterSpacing.main};
  color: ${palette.gray.main};
`;

const gray18Bold = css`
  ${fontFamily.notoSans700}
  ${fontSizes.f18};
  ${letterSpacing.main};
  color: ${palette.gray.main};
`;

const gray17Bold = css`
  ${fontFamily.notoSans700}
  ${fontSizes.f17};
  ${letterSpacing.main};
  color: ${palette.gray.main};
`;

const gray16Bold = css`
  ${fontFamily.notoSans700}
  ${fontSizes.f16};
  ${letterSpacing.main};
  color: ${palette.gray.main};
`;

const gray16Thin = css`
  ${fontFamily.notoSans400}
  ${fontSizes.f16};
  ${letterSpacing.main};
  color: ${palette.gray.main};
`;

const gray16Medium = css`
  ${fontFamily.notoSans500}
  ${fontSizes.f16};
  ${letterSpacing.main};
  color: ${palette.gray.main};
`;

const gray13Bold = css`
  ${fontFamily.notoSans700}
  ${fontSizes.f13};
  ${letterSpacing.main};
  color: ${palette.gray.main};
`;

const gray13Medium = css`
  ${fontFamily.notoSans500}
  ${fontSizes.f13};
  ${letterSpacing.main};
  color: ${palette.gray.main};
`;

const gray13Thin = css`
  ${fontFamily.notoSans400}
  ${fontSizes.f13};
  ${letterSpacing.main};
  color: ${palette.gray.main};
`;

const gray13Regular = css`
  ${fontFamily.notoSans300}
  ${fontSizes.f13};
  ${letterSpacing.main};
  color: ${palette.gray.main};
`;

const gray14Bold = css`
  ${fontFamily.notoSans700}
  ${fontSizes.f14};
  ${letterSpacing.main};
  color: ${palette.gray.main};
`;

const gray14Medium = css`
  ${fontFamily.notoSans500}
  ${fontSizes.f14};
  ${letterSpacing.main};
  color: ${palette.gray.main};
`;

const gray14Medium99 = css`
  ${fontFamily.notoSans500}
  ${fontSizes.f14};
  ${letterSpacing.main};
  color: ${palette.gray.light99};
`;

const gray14Thin = css`
  ${fontFamily.notoSans400}
  ${fontSizes.f14};
  ${letterSpacing.main};
  color: ${palette.gray.main};
`;

const gray14Thin55 = css`
  ${fontFamily.notoSans500}
  ${fontSizes.f14};
  ${letterSpacing.main};
  color: ${palette.gray.light55};
`;

const gray14Regular = css`
  ${fontFamily.notoSans300}
  ${fontSizes.f14};
  ${letterSpacing.main};
  color: ${palette.gray.main};
`;

const gray15Medium = css`
  ${fontFamily.notoSans500}
  ${fontSizes.f15};
  ${letterSpacing.main};
  color: ${palette.gray.main};
`;

const gray12Regular = css`
  ${fontFamily.notoSans300}
  ${fontSizes.f12};
  ${letterSpacing.main};
  color: ${palette.gray.main};
`;

const gray12Thin = css`
  ${fontFamily.notoSans400}
  ${fontSizes.f12};
  ${letterSpacing.main};
  color: ${palette.gray.main};
`;

const gray12Medium = css`
  ${fontFamily.notoSans500}
  ${fontSizes.f12};
  ${letterSpacing.main};
  color: ${palette.gray.main};
`;

const white11Medium = css`
  ${fontFamily.notoSans500}
  ${fontSizes.f11};
  ${letterSpacing.main};
  color: ${palette.common.white};
`;

const white13Bold = css`
  ${fontFamily.notoSans700}
  ${fontSizes.f13};
  ${letterSpacing.main};
  color: ${palette.common.white};
`;

const white13Medium = css`
  ${fontFamily.notoSans500}
  ${fontSizes.f13};
  ${letterSpacing.main};
  color: ${palette.common.white};
`;

const white13Thin = css`
  ${fontFamily.notoSans400}
  ${fontSizes.f13};
  ${letterSpacing.main};
  color: ${palette.common.white};
`;


const white14Bold = css`
  ${fontFamily.notoSans700}
  ${fontSizes.f14};
  ${letterSpacing.main};
  color: ${palette.common.white};
`;

const white14Medium = css`
  ${fontFamily.notoSans500}
  ${fontSizes.f14};
  ${letterSpacing.main};
  color: ${palette.common.white};
`;

const white14Regular = css`
  ${fontFamily.notoSans300}
  ${fontSizes.f14};
  ${letterSpacing.main};
  color: ${palette.common.white};
`;

const white16Bold = css`
  ${fontFamily.notoSans700}
  ${fontSizes.f16};
  ${letterSpacing.main};
  color: ${palette.common.white};
`;

const red14Thin = css`
  ${fontFamily.notoSans400}
  ${fontSizes.f13};
  ${letterSpacing.main};
  color: ${palette.red.main};
`;

const white20Medium = css`
  ${fontFamily.notoSans500}
  ${fontSizes.f20};
  ${letterSpacing.main};
  color: ${palette.common.white};
`;

const textCss = {
  gray12Regular,
  gray12Thin,
  gray12Medium,
  gray13Regular,
  gray13Bold,
  gray13Medium,
  gray13Thin,
  gray14Bold,
  gray14Medium,
  gray14Thin55,
  gray14Medium99,
  gray14Regular,
  gray14Thin,
  gray15Medium,
  gray16Thin,
  gray16Medium,
  gray16Bold,
  gray17Bold,
  gray18Bold,
  gray20Bold,
  gray20Medium,
  gray22Bold,
  gray25Bold,

  white11Medium,
  white13Bold,
  white13Medium,
  white13Thin,
  white14Bold,
  white14Medium,
  white14Regular,
  white16Bold,
  white20Medium,

  red14Thin
};

export default textCss;