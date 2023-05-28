<template>
  <h1 class="heading-1">Table</h1>
  <BaseTable
    :heads="table.heads"
    :columnTemplates="table.columnsTemplate"
    @sortingTable="sortingTable"
  >
    <TableRow
      v-for="book in booksSorting"
      :key="book.id"
      :columnTemplates="table.columnsTemplate"
      :bg="book.bg"
    >
      <TableCol :columnTitle="table.heads[0]">{{ book.id }}</TableCol>
      <TableCol :columnTitle="table.heads[1]">{{ book.author }}</TableCol>
      <TableCol :columnTitle="table.heads[2]">{{ book.title }}</TableCol>
      <TableCol isImg :srcImg="book.image" :altImg="book.title"></TableCol>
      <TableCol>
        <Button label="Read Online"></Button>
      </TableCol>
    </TableRow>
  </BaseTable>
</template>

<script setup>
import { ref, computed } from "vue";
import BaseTable from "../components/table/BaseTable.vue";
import TableRow from "../components/table/TableRow.vue";
import TableCol from "../components/table/TableCol.vue";
import Button from "../components/buttons/Button.vue";

const table = ref({
  heads: ["ID", "Author", "Title", "Cover", ""],
  columnsTemplate: "50px 1fr 2fr 150px 140px",
});

const books = ref([
  {
    id: 1,
    author: "Dmitry Glukhovsky",
    title: "Metro 2033",
    image:
      "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/81pNKLAG-cL._AC_UY436_FMwebp_QL65_.jpg",
    bg: "#FFA26B",
  },
  {
    id: 12,
    author: "James Clear",
    title: "Atomic Habits: An Easy",
    image:
      "https://m.media-amazon.com/images/P/0735211299.01._SCLZZZZZZZ_SX500_.jpg",
    bg: "#00C48C",
  },
  {
    id: 2,
    author: "J. K. Rowling",
    title: "Harry Potter and the Order of the Phoenix",
    image:
      "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/51bZujlJxlL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg",
    bg: "#00C48C",
  },
]);

const sortField = ref("id");
const typeSort = ref("asc");

const booksSorting = computed(() => {
  return books.value.sort((a, b) => {
    let modifier = 1;

    if (typeSort.value === "desc") modifier = -1;

    if (a[sortField.value] < b[sortField.value]) return -1 * modifier;
    if (a[sortField.value] > b[sortField.value]) return 1 * modifier;
    if (a[sortField.value] === b[sortField.value]) return 0;
  });
});

const sortingTable = (sortValue) => {
  if (sortField.value === sortValue) {
    typeSort.value = typeSort.value === "asc" ? "desc" : "asc";
  } else {
    sortField.value = sortValue;
  }
};
</script>
