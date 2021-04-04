import { getPackagePath }  from '@typhonjs-node-utils/package-util';

const result = getPackagePath({
   filepath: import.meta.url,
   callback: (data) => data.packageObj.name === '@typhonjs-fvtt/fvttdev'
});

if (result.error) { throw new Error('Could not find `fvttdev` package.json'); }

const packageVersion = result.packageObj.version;

export default packageVersion;
