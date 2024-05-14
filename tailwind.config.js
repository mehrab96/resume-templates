/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    screens: {
        'minixl': '400px',
        'mini': '480px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
    },
    extend: {
        backgroundImage : {
          'svgTopHead' : "url('/src/images/nav-edge.svg')",
        },
        colors:{
            sidebar:{
                text: '#9899ac',
                svgHover: '#009ef7',
                bgHover: '#1B1B28',
            },
            body: {
                light: '#F0F0F6',
            },
            white: {
                DEFAULT: '#ffffff',
                active: '#F5F8FA',
            },
            primary: {
                DEFAULT: '#057DCD',
                active: '#1E3D58',
                light: '#C3E0E5',
                medium: '#41729F',
            },
            light: {
                DEFAULT: '#F5F8FA',
                active: '#eff2f5',
                white: '#ffffff',
            },
            secondary: {
                DEFAULT: '#E4E6EF',
                active: '#b5b5c3',
            },
            success: {
                DEFAULT: '#50CD89',
                active: '#47be7e',
                light: '#E8FFF3',
            },
            info: {
                DEFAULT: '#7239EA',
                active: '#5014d0',
                light: '#F8F5FF',
            },
            warning: {
                DEFAULT: '#FFC700',
                active: '#f1bc00',
                light: '#FFF8DD',
            },
            danger: {
                DEFAULT: '#F1416C',
                active: '#d9214e',
                light: '#FFF5F8',
            },
            dark: {
                DEFAULT: '#181C32',
                active: '#131628',
                light: '#EFF2F5',
            },
        }
    },
},
plugins: [require('@tailwindcss/forms'),  require('tailwindcss-rtl') ,require('@tailwindcss/typography')],
}