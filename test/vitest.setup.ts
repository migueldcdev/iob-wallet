// Mock window.matchMedia for Chakra provider test setup
globalThis.matchMedia =
  globalThis.matchMedia ||
  function () {
    return {
      matches: false,
      addListener: function () { },
      removeListener: function () { },
    };
  };

//https://github.com/jsdom/jsdom/issues/2177#issuecomment-1724971596
const originalConsoleError = console.error;
const jsDomCssError = 'Error: Could not parse CSS stylesheet';
console.error = (...params) => {
  if (!params.find(p => p.toString().includes(jsDomCssError))) {
    originalConsoleError(...params);
  }
};
