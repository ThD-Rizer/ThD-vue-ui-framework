import { pascalToKebab } from '@/utils/helpers';

const page = (component) => ({
  path: `/${pascalToKebab(component)}`,
  component: () => import(`@root/demo/pages/${component}.vue`),
  text: component,
});

export default [
  {
    path: '/',
    component: () => import('@root/demo/pages/Main.vue'),
    text: 'Main',
  },
  page('Typography'),
  page('Buttons'),
  page('Forms'),
  // page('Tables'),
  page('Grid'),
  page('Other'),
  page('Testing'),
];
