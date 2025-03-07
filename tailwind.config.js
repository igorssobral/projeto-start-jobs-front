/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
	extend: {
		screens: {
		  sm: '640px',
		  // => @media (min-width: 640px) { ... }
  
		  md: '768px',
		  // => @media (min-width: 768px) { ... }
  
		  lg: '1024px',
		  // => @media (min-width: 1024px) { ... }
  
		  xl: '1280px',
		  // => @media (min-width: 1280px) { ... }
  
		  '2xl': '1536px',
		  // => @media (min-width: 1536px) { ... }
		},
	  },
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
  plugins: [],
};
