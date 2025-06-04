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
