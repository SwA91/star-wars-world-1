<template>
  <Card>
    <template #title>
      Planet Detail
    </template>
    <template #content>
      <div class="p-fluid p-formgrid p-grid">
        <!-- Nombre -->
        <div class="p-field p-col-12 p-md-9">
          <label for="name">Name</label>
          <div class="p-inputgroup">
            <span class="p-inputgroup-addon">
              <i class="pi pi-globe"></i>
            </span>
            <InputText id="name" type="text" v-model="planet.name" disabled />
          </div>
        </div>
        <!-- Terreno -->
        <div class="p-field p-col-12 p-md-3">
          <label for="terrain">Terrain</label>
          <div class="p-inputgroup">
            <span class="p-inputgroup-addon">
              <i class="pi pi-flag"></i>
            </span>
            <InputText
              id="terrain"
              type="text"
              v-model="planet.terrain"
              disabled
            />
          </div>
        </div>
        <!-- Periodo rotación -->
        <div class="p-field p-col-12 p-md-4">
          <label for="rotation_period">Rotation Period</label>
          <div class="p-inputgroup">
            <InputText
              id="rotation_period"
              type="text"
              v-model="planet.rotation_period"
              disabled
            />
            <span class="p-inputgroup-addon">
              days
            </span>
          </div>
        </div>
        <!-- Periodo orbital -->
        <div class="p-field p-col-12 p-md-4">
          <label for="orbital_period">Orbital Period</label>
          <div class="p-inputgroup">
            <InputText
              id="orbital_period"
              type="text"
              v-model="planet.orbital_period"
              disabled
            />
            <span class="p-inputgroup-addon">
              days
            </span>
          </div>
        </div>
        <!-- Gravedad -->
        <div class="p-field p-col-12 p-md-4">
          <label for="gravity">Gravity</label>
          <div class="p-inputgroup">
            <span class="p-inputgroup-addon">
              <i class="pi pi-android"></i>
            </span>
            <InputText
              id="gravity"
              type="text"
              v-model="planet.gravity"
              disabled
            />
          </div>
        </div>
        <!-- Diametro -->
        <div class="p-field p-col-12 p-md-4">
          <label for="diameter">Diameter</label>
          <div class="p-inputgroup">
            <InputNumber id="diameter" v-model="planet.diameter" disabled />
            <span class="p-inputgroup-addon">
              km
            </span>
          </div>
        </div>
        <!-- Población -->
        <div class="p-field p-col-12 p-md-4">
          <label for="population">Population</label>
          <div class="p-inputgroup">
            <span class="p-inputgroup-addon">
              <i class="pi pi-users"></i>
            </span>
            <InputNumber id="population" v-model="planet.population" disabled />
          </div>
        </div>
        <!-- Clima -->
        <div class="p-field p-col-12 p-md-4">
          <label for="climate">Climate</label>
          <InputText
            id="climate"
            type="text"
            v-model="planet.climate"
            disabled
          />
        </div>
      </div>
    </template>
    <template #footer>
      <Button
        type="button"
        label="Go Back"
        class="p-button-outlined"
        @click="goBack"
        icon="pi pi-arrow-left"
        iconPos="left"
      />
    </template>
  </Card>
</template>
<script>
import { useRoute, useRouter } from "vue-router";
import { GeneralUtils } from "@/utils/general.utils.js";
export default {
  setup() {
    // Variables del router
    const planet = useRoute().params;
    // Parseamos a number que es lo que necesita el componente
    planet["diameter"] = GeneralUtils.isFieldWithValue(planet["diameter"])
      ? Number(planet["diameter"])
      : null;
    planet["population"] = GeneralUtils.isFieldWithValue(planet["population"])
      ? Number(planet["population"])
      : null;
    const router = useRouter();
    // Funciones del panel
    const goBack = () => {
      // Volvemos al panel de listado
      router.push({ name: "PlanetsList" });
    };
    return {
      goBack,
      planet,
    };
  },
};
</script>
