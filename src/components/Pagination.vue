<template>
  <nav class="mt-3" aria-label="Page navigation example">
    <ul class="pagination">
      <li class="page-item">
        <a class="page-link" href="#">
          Previous
        </a>
      </li>
      <li class="page-item" v-for="page in prePages" :key="page">
        <a class="page-link" @click.prevent="getPage(page)" href="#">{{ page }}</a>
      </li>
      <li class="page-item"><a class="page-link" href="#">Next</a></li>
    </ul>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      prePages: [1, 2, 3, 4, 5],
      centerPage: 3,
      currentPage: 1,
    };
  },
  methods: {
    getPage(page) {
      let differernce = page - this.centerPage;
      this.prePages.forEach((item, index) => {
        switch (differernce) {
          case 0:
            differernce = 0;
            break;
          case 1:
            differernce = 1;
            break;
          case -1:
            differernce = -1;
            if (page === 1) {
              differernce = 0;
            } else if (page === 2) {
              differernce = 0;
            }
            break;
          case -2:
            differernce = -2;
            if (page === 2) {
              differernce = -1;
            } else if (page === 1) {
              differernce = 0;
            }
            break;
          default:
            differernce = 2;
            break;
        }
        this.$set(this.prePages, index, this.prePages[index] + differernce);
        // eslint-disable-next-line comma-spacing
        [, , this.centerPage, ,] = this.prePages;
      });
      this.currentPage = page;
      this.$emit('page', page);
    },
  },
};
</script>
