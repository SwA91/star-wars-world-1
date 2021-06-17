<template>
  <Card>
    <template #title>
      Starship Detail
    </template>
    <template #content>
      <div class="p-fluid p-formgrid p-grid">
        <!-- Nombre -->
        <div class="p-field p-col-12 p-md-6">
          <label for="name">Name</label>
          <div class="p-inputgroup">
            <span class="p-inputgroup-addon">
              <i class="pi pi-send"></i>
            </span>
            <InputText id="name" type="text" v-model="starship.name" disabled />
          </div>
        </div>
        <!-- Modelo -->
        <div class="p-field p-col-12 p-md-6">
          <label for="model">Model</label>
          <div class="p-inputgroup">
            <span class="p-inputgroup-addon">
              <i class="pi pi-android"></i>
            </span>
            <InputText
              id="model"
              type="text"
              v-model="starship.model"
              disabled
            />
          </div>
        </div>
        <!-- Manofactura -->
        <div class="p-field p-col-12 p-md-4">
          <label for="manufacturer">Manufacturer</label>
          <InputText
            id="manufacturer"
            type="text"
            v-model="starship.manufacturer"
            disabled
          />
        </div>
        <!-- Coste -->
        <div class="p-field p-col-12 p-md-4">
          <label for="cost_in_credits">Cost</label>
          <InputNumber
            id="cost_in_credits"
            mode="currency"
            currency="USD"
            locale="en-US"
            v-model="starship.cost_in_credits"
            disabled
          />
        </div>
        <!-- Capacidad -->
        <div class="p-field p-col-12 p-md-4">
          <label for="cargo_capacity">Capacity</label>
          <InputNumber
            id="cargo_capacity"
            v-model="starship.cargo_capacity"
            disabled
          />
        </div>
        <!-- Longitud -->
        <div class="p-field p-col-12 p-md-4">
          <label for="length">Length</label>
          <div class="p-inputgroup">
            <InputText
              id="length"
              type="text"
              v-model="starship.length"
              disabled
            />
            <span class="p-inputgroup-addon">
              meters
            </span>
          </div>
        </div>
        <!-- Pasajeros -->
        <div class="p-field p-col-12 p-md-4">
          <label for="passengers">Passengers</label>
          <InputText
            id="passengers"
            type="text"
            v-model="starship.passengers"
            disabled
          />
        </div>
        <!-- Maxima velocidad -->
        <div class="p-field p-col-12 p-md-4">
          <label for="max_atmosphering_speed">Maximum atmospheric speed</label>
          <div class="p-inputgroup">
            <InputText
              id="max_atmosphering_speed"
              type="text"
              v-model="starship.max_atmosphering_speed"
              disabled
            />
            <span class="p-inputgroup-addon">
              kph
            </span>
          </div>
        </div>
        <!-- Tripulacion -->
        <div class="p-field p-col-12 p-md-4">
          <label for="crew">Crew</label>
          <InputText id="crew" type="text" v-model="starship.crew" disabled />
        </div>
        <!-- Consumibles -->
        <div class="p-field p-col-12 p-md-4">
          <label for="consumables">Consumables</label>
          <InputText
            id="consumables"
            type="text"
            v-model="starship.consumables"
            disabled
          />
        </div>
        <!-- Hyperdrive rating -->
        <div class="p-field p-col-12 p-md-4">
          <label for="hyperdrive_rating">Hyperdrive rating</label>
          <InputText
            id="hyperdrive_rating"
            type="text"
            v-model="starship.hyperdrive_rating"
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
    const starship = useRoute().params;
    starship["cost_in_credits"] = GeneralUtils.isFieldWithValue(
      starship["cost_in_credits"]
    )
      ? Number(starship["cost_in_credits"])
      : null;
    starship["cargo_capacity"] = GeneralUtils.isFieldWithValue(
      starship["cargo_capacity"]
    )
      ? Number(starship["cargo_capacity"])
      : null;
    const router = useRouter();
    // Funciones del panel
    const goBack = () => {
      // Volvemos al panel de listado
      router.push({ name: "StarshipsList" });
    };
    return {
      goBack,
      starship,
    };
  },
};
</script>
