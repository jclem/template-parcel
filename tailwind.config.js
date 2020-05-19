module.exports = {
  purge: ['src/**/*.postcss', 'src/**/*.js', 'src/**/*.html'],
  theme: {
    extend: {
      colors: {
        gray: {
          '0': 'var(--oc-gray-0)',
          '1': 'var(--oc-gray-1)',
          '2': 'var(--oc-gray-2)',
          '3': 'var(--oc-gray-3)',
          '4': 'var(--oc-gray-4)',
          '5': 'var(--oc-gray-5)',
          '6': 'var(--oc-gray-6)',
          '7': 'var(--oc-gray-7)',
          '8': 'var(--oc-gray-8)',
          '9': 'var(--oc-gray-9)'
        },
        red: {
          '0': 'var(--oc-red-0)',
          '1': 'var(--oc-red-1)',
          '2': 'var(--oc-red-2)',
          '3': 'var(--oc-red-3)',
          '4': 'var(--oc-red-4)',
          '5': 'var(--oc-red-5)',
          '6': 'var(--oc-red-6)',
          '7': 'var(--oc-red-7)',
          '8': 'var(--oc-red-8)',
          '9': 'var(--oc-red-9)'
        },
        pink: {
          '0': 'var(--oc-pink-0)',
          '1': 'var(--oc-pink-1)',
          '2': 'var(--oc-pink-2)',
          '3': 'var(--oc-pink-3)',
          '4': 'var(--oc-pink-4)',
          '5': 'var(--oc-pink-5)',
          '6': 'var(--oc-pink-6)',
          '7': 'var(--oc-pink-7)',
          '8': 'var(--oc-pink-8)',
          '9': 'var(--oc-pink-9)'
        },
        grape: {
          '0': 'var(--oc-grape-0)',
          '1': 'var(--oc-grape-1)',
          '2': 'var(--oc-grape-2)',
          '3': 'var(--oc-grape-3)',
          '4': 'var(--oc-grape-4)',
          '5': 'var(--oc-grape-5)',
          '6': 'var(--oc-grape-6)',
          '7': 'var(--oc-grape-7)',
          '8': 'var(--oc-grape-8)',
          '9': 'var(--oc-grape-9)'
        },
        violet: {
          '0': 'var(--oc-violet-0)',
          '1': 'var(--oc-violet-1)',
          '2': 'var(--oc-violet-2)',
          '3': 'var(--oc-violet-3)',
          '4': 'var(--oc-violet-4)',
          '5': 'var(--oc-violet-5)',
          '6': 'var(--oc-violet-6)',
          '7': 'var(--oc-violet-7)',
          '8': 'var(--oc-violet-8)',
          '9': 'var(--oc-violet-9)'
        },
        indigo: {
          '0': 'var(--oc-indigo-0)',
          '1': 'var(--oc-indigo-1)',
          '2': 'var(--oc-indigo-2)',
          '3': 'var(--oc-indigo-3)',
          '4': 'var(--oc-indigo-4)',
          '5': 'var(--oc-indigo-5)',
          '6': 'var(--oc-indigo-6)',
          '7': 'var(--oc-indigo-7)',
          '8': 'var(--oc-indigo-8)',
          '9': 'var(--oc-indigo-9)'
        },
        blue: {
          '0': 'var(--oc-blue-0)',
          '1': 'var(--oc-blue-1)',
          '2': 'var(--oc-blue-2)',
          '3': 'var(--oc-blue-3)',
          '4': 'var(--oc-blue-4)',
          '5': 'var(--oc-blue-5)',
          '6': 'var(--oc-blue-6)',
          '7': 'var(--oc-blue-7)',
          '8': 'var(--oc-blue-8)',
          '9': 'var(--oc-blue-9)'
        },
        cyan: {
          '0': 'var(--oc-cyan-0)',
          '1': 'var(--oc-cyan-1)',
          '2': 'var(--oc-cyan-2)',
          '3': 'var(--oc-cyan-3)',
          '4': 'var(--oc-cyan-4)',
          '5': 'var(--oc-cyan-5)',
          '6': 'var(--oc-cyan-6)',
          '7': 'var(--oc-cyan-7)',
          '8': 'var(--oc-cyan-8)',
          '9': 'var(--oc-cyan-9)'
        },
        teal: {
          '0': 'var(--oc-teal-0)',
          '1': 'var(--oc-teal-1)',
          '2': 'var(--oc-teal-2)',
          '3': 'var(--oc-teal-3)',
          '4': 'var(--oc-teal-4)',
          '5': 'var(--oc-teal-5)',
          '6': 'var(--oc-teal-6)',
          '7': 'var(--oc-teal-7)',
          '8': 'var(--oc-teal-8)',
          '9': 'var(--oc-teal-9)'
        },
        green: {
          '0': 'var(--oc-green-0)',
          '1': 'var(--oc-green-1)',
          '2': 'var(--oc-green-2)',
          '3': 'var(--oc-green-3)',
          '4': 'var(--oc-green-4)',
          '5': 'var(--oc-green-5)',
          '6': 'var(--oc-green-6)',
          '7': 'var(--oc-green-7)',
          '8': 'var(--oc-green-8)',
          '9': 'var(--oc-green-9)'
        },
        lime: {
          '0': 'var(--oc-lime-0)',
          '1': 'var(--oc-lime-1)',
          '2': 'var(--oc-lime-2)',
          '3': 'var(--oc-lime-3)',
          '4': 'var(--oc-lime-4)',
          '5': 'var(--oc-lime-5)',
          '6': 'var(--oc-lime-6)',
          '7': 'var(--oc-lime-7)',
          '8': 'var(--oc-lime-8)',
          '9': 'var(--oc-lime-9)'
        },
        yellow: {
          '0': 'var(--oc-yellow-0)',
          '1': 'var(--oc-yellow-1)',
          '2': 'var(--oc-yellow-2)',
          '3': 'var(--oc-yellow-3)',
          '4': 'var(--oc-yellow-4)',
          '5': 'var(--oc-yellow-5)',
          '6': 'var(--oc-yellow-6)',
          '7': 'var(--oc-yellow-7)',
          '8': 'var(--oc-yellow-8)',
          '9': 'var(--oc-yellow-9)'
        },
        orange: {
          '0': 'var(--oc-orange-0)',
          '1': 'var(--oc-orange-1)',
          '2': 'var(--oc-orange-2)',
          '3': 'var(--oc-orange-3)',
          '4': 'var(--oc-orange-4)',
          '5': 'var(--oc-orange-5)',
          '6': 'var(--oc-orange-6)',
          '7': 'var(--oc-orange-7)',
          '8': 'var(--oc-orange-8)',
          '9': 'var(--oc-orange-9)'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Fira Code', 'monospace']
      }
    }
  },
  variants: {},
  plugins: []
}
