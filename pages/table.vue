<template>
  <div class="card">
    <DataTable
      :value="products"
      showGridlines
      tableStyle="margin-top: 10px;"
      paginator
      :rows="5"
      :rowsPerPageOptions="[5, 10, 20, 50]"
    >
      <Column field="code" header="Code"></Column>
      <Column field="name" header="Name" sortable>
        <template #body="slotProps">
          {{ slotProps.data.name.full_name }}
        </template>
      </Column>
      <Column field="category" header="Category"></Column>
      <Column field="quantity" header="Quantity"></Column>
      <Column field="size" header="Size">
        <template #body="slotProps">
          {{ slotProps.data.name.size }}
        </template>
      </Column>
    </DataTable>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const products = ref([
  {
    code: crypto.randomUUID(),
    name: {
      full_name: "watch",
      short_name: "mini watch",
      size: 4,
    },
    category: "Watch",
    quantity: 5,
  },
  {
    code: crypto.randomUUID(),
    name: {
      full_name: "watch",
      short_name: "mini watch",
      size: 4,
    },
    category: "Watch",
    quantity: 5,
  },
  {
    code: crypto.randomUUID(),
    name: {
      full_name: "watch",
      short_name: "mini watch",
      size: 4,
    },
    category: "Watch",
    quantity: 5,
  },
  {
    code: crypto.randomUUID(),
    name: {
      full_name: "watch",
      short_name: "mini watch",
      size: 4,
    },
    category: "Watch",
    quantity: 5,
  },
]);
</script>
