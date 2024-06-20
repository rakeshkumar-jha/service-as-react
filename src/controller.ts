/* eslint-disable */
const stub = {
  initialiseInstance: () => {
    return stub.namespace();
  },
  namespace: () => {
    return {
      publish: () => {},
      subscribe: () => {
        return () => {};
      },
    };
  },
  registerAppInstance: () => {},
  getInstanceId: () => {},
  getMFEQueryParams: () => {},
  get: async () => {},
};
/* eslint-enable */


declare global {
    interface Window {
        MFEController?:any; //eslint-disable-line
    }
}

const MFEController = window.MFEController || stub;
let MFEInstance;
let shellUrl = '*';
let MFEroot: HTMLElement;
export function createMFEInstance(namespace, appProps, container) {
  shellUrl = appProps.shellUrl;
  MFEroot = container;
  MFEInstance = MFEController.initialiseInstance(namespace, {
      trigger: async (params: unknown) => {
        console.log(`Calling trigger in ${namespace} ${params}`);
      },
  });
}


export { MFEController, MFEInstance, shellUrl, MFEroot };
