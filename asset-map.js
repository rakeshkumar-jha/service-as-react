export default function generateAssetMap () {
  return {
      name: 'generate-asset-map', // this name will show up in warnings and errors
      generateBundle (outputOptions, bundle) {
         const assets = Object.keys(bundle);
          const assetMap = {
              "dev": {
                  "0.0.1": {
                      'entrypoints': [],
                      appUrl: 'http://localhost:4141/'
                  }
              }
          };
          assets.forEach((key) => {
              if(key.endsWith('.js') && key.includes('index'))   {
                  const jsEntryPoint = {
                      'src': key,
                      'once': true,
                      'systemjs': false,
                      'type': 'module'
                  };
                  assetMap.dev['0.0.1'].entrypoints.push(jsEntryPoint);

              }

              if(key.endsWith('.css')) {
                  const cssEntryPoint = {
                      'src': key,
                  };
                  assetMap.dev['0.0.1'].entrypoints.push(cssEntryPoint);

              }
          });

          // write the assetMap to disk
          this.emitFile({
              type: 'asset',
              fileName: 'registry.json',
              source: JSON.stringify(assetMap, null, 2)
          });
      }
  };
}
