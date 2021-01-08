import { pascalToKebab } from '@/utils';

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
  page('Grid'),
  page('Buttons'),
  page('Forms'),
  page('Inputs'),
  page('Checkboxes'),
  page('RadioButtons'),
  page('Selects'),
  // page('Tables'),
  page('Modals'),
  page('Icons'),
  page('Other'),
  page('Logger'),
  page('Testing'),
  {
    path: '*',
    component: () => import('@root/demo/pages/ErrorNotFound.vue'),
  },
];
