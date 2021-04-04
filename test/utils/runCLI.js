import { run }             from '@oclif/core';

import { getPackagePath }  from '@typhonjs-node-utils/package-util';

/**
 * Invokes CLI with args.
 *
 * @param {string[]} args - args to pass to CLI.
 *
 * @returns {Promise<void>}
 */
export default function runCLI(args)
{
   const result = getPackagePath({
      filepath: import.meta.url,
      callback: (data) => data.packageObj.name === '@typhonjs-fvtt/fvttdev'
   });

   if (result.packageObj === void 0) { throw new Error('Could not find `fvttdev` package.json'); }

   return run(args, result.packagePath);
}
