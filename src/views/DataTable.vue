<script setup>
import { ref, onMounted } from "vue";
// REF
const dataFromApi = ref();
const loading = ref(true);
// FUNCTION
const fetchDataFromApi = async () => {
  const responseDataFromApi = await fetch(
    "https://666182d763e6a0189fea3d54.mockapi.io/lol/koko",
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }
  )
    .then((response) => response.json())
    .catch((error) => error.json());

  dataFromApi.value = responseDataFromApi;
  loading.value = false;
};
const convertTimeStamp = (timestamp) => {
  const months = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Augustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];
  const date = new Date(timestamp);
  const day = String(date.getDate()).padStart(2, "0");
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  return `${day}-${month}-${year}`;
};
// MOONTED
onMounted(async () => {
  await fetchDataFromApi();
});
</script>

<template>
  <div class="container d-flex justify-content-center mt-5">
    <table class="table table-bordered">
      <thead>
        <tr>
          <th scope="col">No</th>
          <th scope="col">Date</th>
          <th scope="col">Name</th>
          <th scope="col">Avatar</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in dataFromApi">
          <th scope="row">{{ item.id }}</th>
          <td>{{ convertTimeStamp(item.createdAt) }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.avatar }}</td>
        </tr>
      </tbody>
    </table>
    <div v-if="loading" class="ms-2 spinner-border" role="status" />
  </div>
</template>

<style scoped>
.table {
  max-width: 800px;
}
</style>
