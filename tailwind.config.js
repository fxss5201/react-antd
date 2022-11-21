/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        // 增加字体配置
        // text-12 = font-size: 12px;
        // text-sm = font-size: 24px;line-height: 21px;
        12: '12px',
        14: '14px',
        16: '16px',
        18: '18px',
        20: '20px',
        24: '24px',
        30: '30px',
        sm: ['14px', '21px'],
        md: ['16px', '24px'],
        lg: ['20px', '30px'],
        xl: ['24px', '36px']
      },
      lineHeight: {
        // 增加行高配置
        // leading-12 = line-height: 12px;
        12: '12px',
        14: '14px',
        16: '16px',
        18: '18px',
        20: '20px',
        21: '21px',
        24: '24px',
        27: '27px',
        30: '30px',
        36: '36px',
        45: '45px'
      },
      borderRadius: {
        // 增加圆角配置
        // rounded-2 = border-radius: 2px;
        0: '0px',
        2: '2px',
        4: '4px',
        6: '6px',
        8: '8px',
        10: '10px',
        12: '12px',
        14: '14px',
        16: '16px',
        18: '18px',
        20: '20px',
        22: '22px',
        24: '24px',
        26: '26px',
        28: '28px',
        30: '30px'
      }
    }
  },
  // 使用变体新增状态类
  variants: {
    extend: {
      backgroundColor: ['active', 'disabled', 'visited', 'first', 'last', 'odd', 'even'],
      backgroundOpacity: ['active', 'disabled', 'visited', 'first', 'last', 'odd', 'even'],
      borderColor: ['active', 'disabled', 'visited', 'first', 'last', 'odd', 'even'],
      borderOpacity: ['active', 'disabled', 'visited', 'first', 'last', 'odd', 'even'],
      boxShadow: ['active', 'disabled', 'visited', 'first', 'last', 'odd', 'even'],
      opacity: ['active', 'disabled', 'visited', 'first', 'last', 'odd', 'even'],
      outline: ['active', 'disabled', 'visited', 'first', 'last', 'odd', 'even'],
      textColor: ['active', 'disabled', 'visited', 'first', 'last', 'odd', 'even'],
      textOpacity: ['active', 'disabled', 'visited', 'first', 'last', 'odd', 'even'],
      margin: ['first', 'last', 'odd', 'even'],
      padding: ['first', 'last', 'odd', 'even']
    }
  },
  plugins: [],
}
