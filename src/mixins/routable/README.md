# Routable mixin

Add router link default properties

#### Props

| Name             | Type               | Default value | Allowed values               | Description                                                                                                                                                          |
|------------------|--------------------|---------------|------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| tag              | `String`           | `undefined`   |                              | Component mount tag                                                                                                                                                  |
| href             | `String`, `Object` | `undefined`   |                              | Native HTML href attribute for links                                                                                                                                 |
| to               | `String`, `Object` | `undefined`   |                              | `router-link` attribute                                                                                                                                              |
| native           | `Boolean`          | `false`       | `true`, `false`              | Use native Vue component for router links (router-link). By default used Nuxt links (nuxt-link).                                                                     |
| activeClass      | `String`           | `null`        |                              | Class name which will be applied when route is active                                                                                                                |
| append           | `Boolean`          | `false`       | `true`, `false`              | Add relative route path to current route                                                                                                                             |
| disabled         | `Boolean`          | `false`       | `true`, `false`              | Disable link                                                                                                                                                         |
| exact            | `Boolean`          | `false`       | `true`, `false`              | Exact route path match mode                                                                                                                                          |
| exactActiveClass | `String`           | `undefined`   |                              | Class name which will be applied when route is active                                                                                                                |
| replace          | `Boolean`          | `false`       | `true`, `false`              | Calling `router.replace` instead of `router.push`. See [this](https://router.vuejs.org/guide/essentials/navigation.html#router-replace-location-oncomplete-onabort). |
| target           | `String`           | `undefined`   | _blank, _self, _parent, _top | Native HTML link target attribute                                                                                                                                    |
