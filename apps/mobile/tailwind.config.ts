import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "../../packages/ui/**/*.{js,ts,jsx,tsx}" // 중요: UI 패키지 경로 포함
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

export default config