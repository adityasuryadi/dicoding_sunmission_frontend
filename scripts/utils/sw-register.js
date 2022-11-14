import runtime from 'serviceworker-webpack-plugin/lib/runtime';

const swRegister = async () => {
  if ('serviceWorker' in navigator) {
    await runtime.register();
    // eslint-disable-next-line no-useless-return
    return;
  }
};

export default swRegister;
