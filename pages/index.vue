<template>
  <main>
    <Button
      label="Open location in map"
      :href="href"
      target="_blank"
      rel="noopener"
      as="a"
    />
    <p>{{ location.lat }}</p>
    <p>{{ location.long }}</p>
  </main>
</template>

<script setup>
import { reactive, ref } from "vue";

const href = ref("");
const location = ref({
  lat: 0,
  long: 0,
});

const options = {
  enableHighAccuracy: true,
  maximumAge: 3000,
  timeout: 27000,
};

const getGeolocation = () => {
  if (navigator.geolocation) {
    navigator.geolocation.watchPosition(
      (pos) => {
        href.value = `https://www.google.com/maps/search/?api=1&query=${pos.coords.latitude},${pos.coords.longitude}`;
        location.value.lat = pos.coords.latitude;
        location.value.long = pos.coords.longitude;
        console.log({ pos });
      },
      error,
      options
    );
  }
};

function error(error) {
  alert(error.message);
}

getGeolocation();
</script>
