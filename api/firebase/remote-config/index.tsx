import { getRemoteConfig } from 'firebase/remote-config'
import { firebaseApp } from '..';
import { REMOTE_CONFIG_DEFAULT_VALUES, RemoteConfigKeys } from '../../../constants/strings';

export const remoteConfig = getRemoteConfig(firebaseApp)

remoteConfig.settings = {
    minimumFetchIntervalMillis: 1000, //1 sec for dev
    //minimumFetchIntervalMillis: 3600000, // 1 hour for prod
    fetchTimeoutMillis: 60000,   
};

let defaultConfig = require('../../../remote_config_defaults.json')
remoteConfig.defaultConfig = defaultConfig