import { pascalToKebab } from '@/utils/helpers';

const page = (component) => ({
  path: `/${pascalToKebab(component)}`,
  component: () => import(`@root/demo/pages/${component}.vue`),
  title: component,
});

export default [
  {
    path: '/',
    component: () => import('@root/demo/pages/Main.vue'),
    title: 'Main',
  },
  page('Typography'),
  page('Buttons'),
  page('Forms'),
  page('Tables'),
  page('Grid'),
  page('Modals'),
  page('Other'),
  page('Testing'),
];
