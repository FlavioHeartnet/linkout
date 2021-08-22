import { Injectable } from '@nestjs/common';
import { linkoutAppURL } from './Model/linkoutAppURL';

const ANDROID = 1;
const IOS = 2;
@Injectable()
export class AppService {
  getLinkOutKorea(deviceos: number): linkoutAppURL {
    const linkout = new linkoutAppURL();
    if (deviceos == ANDROID) {
      linkout.appName = 'kr.co.bmwkorea.plus';
      linkout.appUrl =
        'https://play.google.com/store/apps/details?id=' + linkout.appName;
    } else if (deviceos == IOS) {
      linkout.appName = 'bmwplus://';
      linkout.appUrl =
        'itms-apps://itunes.apple.com/app/apple-store/id1281874994';
    } else {
      linkout.appName = 'Invalid OS';
      linkout.appUrl = deviceos.toString();
    }
    return linkout;
  }
}
