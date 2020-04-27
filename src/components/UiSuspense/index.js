import factoryComponentPlugin from '@/utils/factoryComponentPlugin';
import { STATE_TYPES } from './constants';
import UiSuspense from './UiSuspense';

export { STATE_TYPES };
export default factoryComponentPlugin(UiSuspense);
