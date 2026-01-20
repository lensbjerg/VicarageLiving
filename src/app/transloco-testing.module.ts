import {
  TranslocoTestingModule,
  TranslocoTestingOptions,
} from '@jsverse/transloco';

import en from '../assets/i18n/en.json';
import sv from '../assets/i18n/sv.json';
import da from '@angular/common/locales/da';

export function getTranslocoTestModule(options: TranslocoTestingOptions = {}) {
  const { langs, translocoConfig, ...rest } = options;
  return TranslocoTestingModule.forRoot({
    langs: {
      en,
      sv,
      da,
      ...langs,
    },
    translocoConfig: {
      availableLangs: ['sv', 'en', 'da'],
      defaultLang: 'sv',
      ...translocoConfig,
    },
    ...rest,
  });
}
