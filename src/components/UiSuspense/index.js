import { factoryComponentPlugin } from '@/utils/helpers';
import { STATE_TYPES } from './constants';
import UiSuspense from './UiSuspense';

export { STATE_TYPES };
export default factoryComponentPlugin(UiSuspense);
