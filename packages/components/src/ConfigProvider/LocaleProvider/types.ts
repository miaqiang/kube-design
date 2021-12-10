import { ModalLocale } from '../../Modal/locale';
import { PickerLocale } from '../../DatePicker/generatePicker';

export interface ILocale {
  Modal?: ModalLocale;
  DatePicker?: PickerLocale;
}

export type Locale = 'en' | 'zh' | 'zh-tw' | 'es';
