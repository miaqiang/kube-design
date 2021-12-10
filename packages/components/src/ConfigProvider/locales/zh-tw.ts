import { ILocale } from '../LocaleProvider/types';
import PickerLocale from '../../DatePicker/locales/zh-tw';

const localeValues: ILocale = {
  Modal: {
    okText: '確定',
    cancelText: '取消',
    justOkText: '知道了',
  },
  DatePicker: PickerLocale,
};

export default localeValues;
