/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // 这里可以扩展或覆盖默认主题
      colors: {
        // 自定义颜色
      },
      // 自定义断点
      screens: {
      },
      // 自定义间距
      spacing: {
      },
    },
  },
  plugins: [],
}
