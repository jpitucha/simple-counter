<template>
  <div class="box">
    <div class="box-value">{{ value }}</div>
    <div class="box-description">{{ description }}</div>
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
  color: #000;
}
.box-description {
  font-size: 20px;
}
@media (max-width: 768px) {
  .box-value {
    font-size: 20px;
    width: 10vw;
  height: 10vw;
  }
}
.box {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
}
</style>
