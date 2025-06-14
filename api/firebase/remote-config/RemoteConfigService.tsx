// services/RemoteConfigService.ts
import { fetchAndActivate, getRemoteConfig, getValue } from 'firebase/remote-config';
import { RemoteConfigKeys } from '../../../constants/strings';
import { remoteConfig } from '.';

export const getHomeScreenContent = async (): Promise<string> => {
  return fetchAndActivate(remoteConfig)
      .then(() => {
        return getValue(remoteConfig, RemoteConfigKeys.homeContent).asString()
      })
}

export const getDumpSiteScreenContent = async (): Promise<string> => {
  return fetchAndActivate(remoteConfig)
      .then(()=> {
        return getValue(remoteConfig, RemoteConfigKeys.dumpSiteContent).asString()
      })
}

export const getMaintenanceScreenContent = async (): Promise<string> => {
  return fetchAndActivate(remoteConfig)
      .then(()=> {
        return getValue(remoteConfig, RemoteConfigKeys.maintenanceContent).asString()
      })
}