import { mount } from '@vue/test-utils';
import UiCheckbox from '@/components/UiCheckbox/UiCheckbox';

describe('UiCheckbox', () => {
  const wrapper = mount(UiCheckbox, {
    propsData: {
      value: false,
    },
  });

  it('isBooleanState', () => {
    expect(wrapper.vm.isBooleanState).toBe(true);
  });
  it('isChecked', () => {
    expect(wrapper.vm.isChecked).toBe(true);
  });
});
