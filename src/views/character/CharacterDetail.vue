<template>
  <Card>
    <template #title>
      Character Detail
    </template>
    <template #content>
      <div class="p-fluid p-formgrid p-grid">
        <!-- Nombre -->
        <div class="p-field p-col-12 p-md-9">
          <label for="name">Name</label>
          <div class="p-inputgroup">
            <span class="p-inputgroup-addon">
              <i class="pi pi-user"></i>
            </span>
            <InputText
              id="name"
              type="text"
              v-model="character.name"
              disabled
            />
          </div>
        </div>
        <!-- Sexo -->
        <div class="p-field p-col-12 p-md-3">
          <label for="gender">Gender</label>
          <div class="p-inputgroup">
            <span class="p-inputgroup-addon">
              <i class="pi pi-android"></i>
            </span>
            <InputText
              id="gender"
              type="text"
              v-model="character.gender"
              disabled
            />
          </div>
        </div>
        <!-- Altura -->
        <div class="p-field p-col-12 p-md-4">
          <label for="height">Height</label>
          <div class="p-inputgroup">
            <InputText
              id="height"
              type="text"
              v-model="character.height"
              disabled
            />
            <span class="p-inputgroup-addon">
              cm
            </span>
          </div>
        </div>
        <!-- Peso -->
        <div class="p-field p-col-12 p-md-4">
          <label for="mass">Mass</label>
          <div class="p-inputgroup">
            <InputText
              id="mass"
              type="text"
              v-model="character.mass"
              disabled
            />
            <span class="p-inputgroup-addon">
              kg
            </span>
          </div>
        </div>
        <!-- Año nacimiento -->
        <div class="p-field p-col-12 p-md-4">
          <label for="birth_year">Birth Year</label>
          <div class="p-inputgroup">
            <span class="p-inputgroup-addon">
              <i class="pi pi-calendar"></i>
            </span>
            <InputText
              id="birth_year"
              type="text"
              v-model="character.birth_year"
              disabled
            />
          </div>
        </div>
        <!-- Color de pelo -->
        <div class="p-field p-col-12 p-md-4">
          <label for="hair_color">Hair Color</label>
          <InputText
            id="hair_color"
            type="text"
            v-model="character.hair_color"
            disabled
          />
        </div>
        <!-- Color de piel -->
        <div class="p-field p-col-12 p-md-4">
          <label for="skin_color">Skin Color</label>
          <InputText
            id="skin_color"
            type="text"
            v-model="character.skin_color"
            disabled
          />
        </div>
        <!-- Color de ojos -->
        <div class="p-field p-col-12 p-md-4">
          <label for="eye_color">Eye Color</label>
          <InputText
            id="eye_color"
            type="text"
            v-model="character.eye_color"
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
export default {
  setup() {
    // Variables del router
    const character = useRoute().params;
    const router = useRouter();
    // Funciones del panel
    const goBack = () => {
      // Volvemos al panel de listado
      router.push({ name: "CharacterList" });
    };
    return {
      goBack,
      character,
    };
  },
};
</script>
