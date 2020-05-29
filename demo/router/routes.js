import { pascalToKebab } from '@/utils/helpers';

const page = (component) => ({
  path: `/${pascalToKebab(component)}`,
  component: () => import(`@root/demo/pages/${component}.vue`),
  name: component,
  heading: component,
});

export default [
  {
    path: '/',
    component: () => import('@root/demo/pages/Main.vue'),
    name: 'Changelog',
    heading: '',
  },
  page('Typography'),
  page('Buttons'),
  page('Forms'),
  page('Tables'),
  page('Grid'),
  page('Modals'),
  page('Other'),
  page('Testing'),
  {
    path: '*',
    component: () => import('@root/demo/pages/ErrorNotFound.vue'),
  },
];
