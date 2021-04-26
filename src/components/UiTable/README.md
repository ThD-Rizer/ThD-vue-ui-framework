@TODO: Скорректировать

# UiTable

## Installation

```js
import { components } from '@thd/vue-ui-framework';

const { UiTable } = components;

export default {
  components: {
    UiTable
  }
}
```

Or if you want to use this component like Vue plugin

```js
import { components } from '@thd/vue-ui-framework';

const { UiTable } = components;

Vue.use(UiTable);
```

## Usage

```vue
<template>
  <UiTable :columns="columns" :rows="rows" />
</template>

<script>
export default {
  data: () => ({
    columns: [
      { key: 'id', title: 'User ID' },
      { key: 'name', title: 'User name' },
    ],
    rows: [
      { id: 1, name: 'Vasya' },
      { id: 2, name: 'Oleg' },
    ],
  }),
};
</script>
```

`columns` property gets `Array<Object>` with following structure:

| Field    | Required | Description                  |
|----------|----------|------------------------------|
| key      | Yes      | Unique column id             |
| title    | No       | Column title                 |
| sortable | No       | Allows sort by column        |
| class    | No       | Column custom class          |
| style    | No       | Column custom styles         |

##### You can use slots for markdown customization

Custom column title
```vue
<UiTable :columns="columns" :rows="rows">
  <div v-slot:column="{ title }" style="color: red;">
    {{ title }}
  </div>

  <!-- or customize specific column by using keyed column slot -->
  <div v-slot:column-email="{ title }" style="color: blue;">
    {{ title }}
  </div>
</UiTable>
```

Custom rows
```vue
<UiTable :columns="columns" :rows="rows">
  <template v-slot:row="row">
    <UiTableCell cols="2">{{ row.email }}</UiTableCell>
    <UiTableCell>
      <UiIcon name="dots" />
    </UiTableCell>
  </template>

  <!-- or customize only specific row by using indexed row slot -->
  <template v-slot:row-0="row">
    <UiTableCell cols="3">
      Row with "td colspan = 3" inside
    </UiTableCell>
  </template>
</UiTable>
```

Custom cells. Slot name equals column key for each row cell.
```vue
<UiTable :columns="columns" :rows="rows">
  <template v-slot:email="{ value, row }">
    <ui-tile :hint="row.hint" class="py-0">
      {{ value }}
    </ui-tile>
  </template>
</UiTable>
```

Also, you can add `tfoot` for your table using `foot` slot
```vue
<UiTable :columns="columns" :rows="rows">
  <template v-slot:foot>
    <UiTableRow>
      <UiTableCell rows="2">Common column</UiTableCell>
      <UiTableCell>Column 1</UiTableCell>
      <UiTableCell>Column 2</UiTableCell>
    </UiTableRow>
    <UiTableRow>
      <UiTableCell>Column 3</UiTableCell>
      <UiTableCell>Column 4</UiTableCell>
    </UiTableRow>
  </template>
</UiTable>
```

#### Sort

```vue
<UiTable v-model="sort" :columns="columns" :rows="rows" />

<script>
export default {
  data: () => ({
    sort: {
      column: 'email',
      direction: 'desc',
    },
  }),
};
</script>
```

#### With related rows

```vue
<template>
  <UiTable :columns="columns" :rows="rows" related-rows="friends" />
</template>

<script>
export default {
  data: () => ({
    columns: [
      { key: 'id', title: 'User ID' },
      { key: 'name', title: 'User name' },
    ],
    rows: [
      {
        id: 1,
        name: 'Vasya',
      },
      {
        id: 2,
        name: 'Oleg',
        friends: [
          { id: 3, name: 'Denis' },
          { id: 4, name: 'Gosha' },
        ],
      },
    ],
  }),
};
</script>
```

Customize the markdown using slot for all related rows
```vue
<UiTable :columns="columns" :rows="rows" related-rows="friends">
    <template v-slot:related>
      <UiTableRow key="related" related>
        <UiTableCell :cols="columns.length">
          My custom markdown for related slot
        </UiTableCell>
      </UiTableRow>
    </template>
   
    <!-- or customize the markdown only for specific related rows using indexed slot -->
    <template v-slot:related-1>
      <UiTableRow key="related" related>
        <UiTableCell :cols="columns.length">
          My custom markdown for related slot with index 1
        </UiTableCell>
      </UiTableRow>
    </template>
</UiTable>
```

Customize the markdown using slot for single related row
```vue
<UiTable :columns="columns" :rows="rows" related-rows="friends">
    <template v-slot:related-row>
        <UiTableCell :cols="columns.length">
          My custom markdown for related slot
        </UiTableCell>
    </template>
   
    <!-- or customize the markdown only for specific related row using indexed slot -->
    <template v-slot:related-row-1-1>
        <UiTableCell :cols="columns.length">
          My custom markdown for related slot with index 1
        </UiTableCell>
    </template>
</UiTable>
```

## API

#### Props

| Name        | Type            | Default value | Allowed values    | Description               |
|-------------|-----------------|---------------|-------------------|---------------------------|
| columns     | `Array<Object>` | []            |                   | Table columns             |
| rows        | `Array<Object>` | []            | button, div, a    | Table rows with data      |
| relatedRows | `String`        | `null`        | button, div, a    | Need for expandable rows  |
| sort        | `Object`        | `null`        | button, div, a    | Sort column and direction |

#### Events

| Name         | Payload                             | Description                  |
|--------------|-------------------------------------|------------------------------|
| change       | `Object`                            | Dispatch on each sort change |
| column-click | `MouseEvent`, column key            | Dispatch on column click     |
| row-click    | `MouseEvent`, row index             | Dispatch on row click        |
| cell-click   | `MouseEvent`, row index, column key | Dispatch on each sort change |

#### Slots

| Name                                   | Description                         |
|----------------------------------------|-------------------------------------|
| column                                 | Column title slot                   |
| column-${key}                          | Keyed column title slot             |
| body                                   | Table body slot                     |
| row                                    | Row content slot                    |
| row-${index}                           | Indexed row content slot            |
| ${key}                                 | Column cell content slot            |
| related                                | Slot for all related rows           |
| related-${index}                       | Indexed slot for all related rows   |
| related-row                            | Slot for single related row         |
| related-row-${parentRowIndex}-${index} | Indexed Slot for single related row |
| foot                                   | Table tfoot slot                    |

#### Scoped slots

| Name                                   | Props                             | Description                                       |
|----------------------------------------|-----------------------------------|---------------------------------------------------|
| column                                 | column                            | Column title slot                                 |
| column-${key}                          | column                            | Keyed column title slot                           |
| row                                    | { row, expandedRowIndex }         | Row content slot                                  |
| row-${index}                           | { row, expandedRowIndex }         | Indexed row content slot                          |
| related                                | { rows, parent, parentIndex }     | Slot for all related rows                         |
| related-${index}                       | { rows, parent, parentIndex }     | Indexed slot for all related rows                 |
| related-row                            | { row, parent, expandedRowIndex } | Slot for single related row                       |
| related-row-${parentRowIndex}-${index} | { row, parent, expandedRowIndex } | Indexed Slot for single related row               |
| ${key}                                 | { value, row }                    | Column cell content slot                          |
| ${key}-${index}                        | { value, row }                    | Column cell content slot for specific row         |
| ${key}-${parentRowIndex}-${index}      | { value, row }                    | Column cell content slot for specific related row |
