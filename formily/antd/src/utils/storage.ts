import { IDesignerLocaleStore } from '@edan-kit/designable-core';
import { Path } from '@formily/path';
import { observable } from '@formily/reactive';
import { isEmpty } from 'lodash';

const DESIGNER_GLOBAL_STORE: IDesignerLocaleStore = observable.ref({});

const DESIGNER_GlobalStore = {
  setStorage(fieldName: string, value: any) {
    try {
      Path.setIn(DESIGNER_GLOBAL_STORE.value, fieldName, value);
    } catch (error) {
    }
  },
  getStorage(fieldName: string): any {
    if (isEmpty(fieldName)) {
      return DESIGNER_GLOBAL_STORE.value;
    }
    return DESIGNER_GLOBAL_STORE.value[fieldName];
  },
};

export const GlobalStore = DESIGNER_GlobalStore;
