<template>
  <div class="box">
    <p class="box-value">{{ value }}</p>
    <p class="box-description">{{ description }}</p>
  </div>
</template>

<script>
export default {
  props: ["value", "description"],
};
</script>

<style scoped>
.box-value {
  width: 90px;
  height: 90px;
  font-size: 50px;
  background: linear-gradient(to bottom, #eee, #fff, #eee);
  box-shadow: 0 2px 2px 1px #222;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.box-description {
  font-size: 20px;
}
.box {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
