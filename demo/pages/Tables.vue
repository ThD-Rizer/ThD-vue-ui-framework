<template>
  <UiMain>
    <UiTable
      :columns="columns"
      :rows="rows"
    />
  </UiMain>
</template>

<script>
  export default {
    name: 'PageTables',
    data: () => ({
      columns: [
        {
          key: 'id',
          title: 'ID',
          sortable: true,
          class: '',
          style: '',
        },
        {
          key: 'name',
          title: 'Имя',
          sortable: false,
          class: '',
          style: '',
        },
      ],
      rows: [
        {
          id: 1,
          name: 'Вася',
        },
        {
          id: 2,
          name: 'Олег',
        },
        {
          id: 3,
          name: 'Марина',
        },
      ],
    }),
  };
</script>
