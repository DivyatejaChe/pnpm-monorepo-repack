/**
 * @format
 */

import {AppRegistry, Platform} from 'react-native';
import {ScriptManager, Script, Federated} from '@callstack/repack/client';
import App from './App';
import {name as appName} from './app.json';

const resolveURL = Federated.createURLResolver({
  containers: {
    auth: 'http://localhost:9000/[name][ext]',
    transactions: 'http://localhost:9001/[name][ext]',
  },
});

ScriptManager.shared.addResolver(async (scriptId, caller) => {
  console.log('\n\n scriptId: ', scriptId, ' AND caller: ', caller, '\n');
  let url;
  if (caller === 'main') {
    url = Script.getDevServerURL(scriptId);
  } else {
    url = resolveURL(scriptId, caller);
  }

  console.log('*** URL: ', url, ' *** Platform: ', Platform.OS, '\n\n');

  if (!url) {
    return undefined;
  }

  return {
    url,
    cache: false, // For development
    query: {
      platform: Platform.OS,
    },
  };
});

AppRegistry.registerComponent(appName, () => App);
