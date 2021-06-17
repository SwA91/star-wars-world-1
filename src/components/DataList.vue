<template>
  <Card>
    <template #title>
      {{ title }}
    </template>
    <template #content>
      <DataTable
        dataKey="id"
        selectionMode="single"
        :currentPageReportTemplate="currentPageReportTemplate"
        :paginatorTemplate="paginatorTemplate"
        filterDisplay="menu"
        :globalFilterFields="listNameFiltersGlobals"
        v-model:filters="filtersGlobals"
        :rowHover="true"
        :paginator="true"
        :loading="loading"
        :rows="3"
        :rowsPerPageOptions="[3, 6, 10]"
        :showGridlines="true"
        :value="dataProvider"
        responsiveLayout="scroll"
      >
        <template #header>
          <div class="p-d-flex p-jc-between">
            <Button
              type="button"
              icon="pi pi-filter-slash"
              label="Clear"
              class="p-button-outlined p-d-none p-d-md-inline-flex"
              @click="clearFiltersGlobals()"
            />
            <span class="p-input-icon-left">
              <i class="pi pi-search" />
              <InputText
                v-model="filtersGlobals['global'].value"
                placeholder="Keyword Search"
              />
            </span>
          </div>
        </template>
        <template #empty>
          We have not found anything
        </template>
        <template #loading>
          Loading. Please wait.
        </template>
        <Column
          v-for="(column, i) in columns"
          :key="i"
          :field="column['field']"
          :header="column['header']"
          :sortable="true"
        >
          <template #body="slotProps">
            <Button
              :label="slotProps.data[column['field']]"
              class="p-button-link"
              @click="clickLinkHandler(slotProps.data)"
            />
          </template>
        </Column>
        <template #paginatorLeft>
          <Button
            type="button"
            label="Go Back"
            class="p-button-outlined"
            @click="goBack"
            icon="pi pi-arrow-left"
            iconPos="left"
          />
        </template>
      </DataTable>
    </template>
  </Card>
</template>
<script>
import { ref } from "vue";
import { FilterMatchMode } from "primevue/api";
export default {
  name: "data-list",
  props: {
    loading: {
      type: Boolean,
      default: false,
    },
    clickLinkHandler: Function,
    goBack: Function,
    columns: {
      type: Array,
      default: [],
    },
    dataProvider: {
      type: Array,
      default: [],
    },
    title: {
      type: String,
      default: "",
    },
  },
  setup() {
    // Variables para trabajar con los filtros
    const filtersGlobalsStatic = {
      global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    };
    const filtersGlobals = ref(filtersGlobalsStatic);
    const listNameFiltersGlobals = ["name"];
    const clearFiltersGlobals = () => {
      filtersGlobals.value = {
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
      };
    };
    // Paginador de la tabla
    const paginatorTemplate =
      "CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown";
    const currentPageReportTemplate =
      "Showing {first} to {last} of {totalRecords}";
    return {
      clearFiltersGlobals,
      filtersGlobals,
      listNameFiltersGlobals,
      paginatorTemplate,
      currentPageReportTemplate,
    };
  },
};
</script>
