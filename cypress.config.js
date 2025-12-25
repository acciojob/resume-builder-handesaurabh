module.exports = {
  e2e: {
    setupNodeEvents(on, config) {
      on('before:browser:launch', (browser) => {
        if (browser.name === 'electron') {
          return {
            args: ['--disable-gpu-sandbox', '--disable-dev-shm-usage']
          };
        }
      });
    }
  }
};