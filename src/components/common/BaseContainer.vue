<template>
  <component :is="tag" class="base-container" :class="containerClasses">
    <slot />
  </component>
</template>

<script>
export default {
  name: 'BaseContainer',
  props: {
    tag: {
      type: String,
      default: 'div',
    },
    padding: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    containerClasses() {
      return {
        'base-container--no-padding': !this.padding,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.base-container {
  flex-direction: column;
  width: 100%;
  max-width: 1824px;
  padding-left: 32px;
  padding-right: 32px;
  margin-left: auto;
  margin-right: auto;
  &--no-padding {
    max-width: 1760px;
    padding-left: 0;
    padding-right: 0;
  }
}
</style>
