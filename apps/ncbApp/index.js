/**
 * @format
 */

import {AppRegistry, Platform} from 'react-native';
import {ScriptManager, Script, Federated} from '@callstack/repack/client';
import App from './App';
import {name as appName} from './app.json';

ScriptManager.shared.addResolver(async (scriptId, caller) => {
  /**
   * This call is made to User-Module Permissions Backend Service
   * Returns the list of URLs of each Module that user has access to for his given Shell version and platform
   * For simplicty, shell version and platform are not considered here
   */
  const containersURL = `http://localhost:3000/host`;
  const containersResponse = await fetch(containersURL);
  const {userModuleAccess} = await containersResponse.json();

  const resolveURL = Federated.createURLResolver({
    containers: userModuleAccess,
  });

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
