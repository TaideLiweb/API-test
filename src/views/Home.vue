<template>
  <div>
    <div class="container mt-3">
      <div class="row justify-content-center">
        <div class="col-10 px-0">
          <ul class="nav nav-pills bg-white">
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle py-3"
                data-toggle="dropdown"
                href="#"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
                @click="checkSize('精選評分')"
                :class="{ active: checkSizeIndex == 0 }"
                >精選評分</a
              >
              <div class="dropdown-menu">
                <a class="dropdown-item" @click="sort_method('rating_asc')" href="#"
                  >評分：低至高</a
                >
                <a class="dropdown-item" @click="sort_method('rating_desc')" href="#"
                  >評分：高至低</a
                >
              </div>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle py-3"
                data-toggle="dropdown"
                href="#"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
                @click="checkSize('價格')"
                :class="{ active: checkSizeIndex == 1 }"
                >價格</a
              >
              <div class="dropdown-menu">
                <a class="dropdown-item" @click="sort_method('price_asc')" href="#">價格：低至高</a>
                <a class="dropdown-item" @click="sort_method('price_desc')" href="#"
                  >價格：高至低</a
                >
              </div>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle py-3"
                data-toggle="dropdown"
                href="#"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
                @click="checkSize('天數')"
                :class="{ active: checkSizeIndex == 2 }"
                >天數</a
              >
              <div class="dropdown-menu">
                <a class="dropdown-item" @click="sort_method('tour_days_asc')" href="#"
                  >天數：少至多</a
                >
                <a class="dropdown-item" @click="sort_method('tour_days_desc')" href="#"
                  >天數：多至少</a
                >
              </div>
            </li>
            <li class="nav-item">
              <a
                class="nav-link py-3"
                href="#"
                @click="checkSize('出發日期')"
                :class="{ active: checkSizeIndex === 3 }"
                >出發日期</a
              >
            </li>
          </ul>
        </div>
        <product-list :products="products"></product-list>
        <pagination @page="getData"></pagination>
      </div>
    </div>
  </div>
</template>

<style>
body {
  background-color: #eeeeee;
}
.PriceBox {
  text-align: right;
  min-width: 140px;
}
.PriceBox span {
  color: #ff9800;
  font-size: 23px;
  font-weight: 700;
}
.groupItems_border {
  border: 1px solid #03a9f4;
  padding: 2px 5px;
  font-size: 12px;
  border-radius: 5px;
}
.groupItems {
  color: #03a9f4;
  font-size: 14px;
  margin-right: 10px;
}
.bgStyle {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.hashtag {
  font-size: 12px;
  border: 1px solid #03a9f4;
  padding: 2px 8px;
  border-radius: 20px;
  color: #03a9f4;
  margin: 5px 10px 0 0;
}
</style>

<script>
import pagination from '../components/Pagination.vue';
import productList from '../components/ProductList.vue';

export default {
  components: {
    pagination,
    productList,
  },
  data() {
    return {
      products: [],
      categorys: ['精選評分', '價格', '天數', '出發日期'],
      checkSizeIndex: 0,
      currentPage: 1,
    };
  },
  methods: {
    getData(num) {
      console.log(num);
      this.currentPage = num;
      this.axios
        .get(`https://interview.tripresso.com/tour/search?page=${this.currentPage}&row_per_page=5`)
        .then((res) => {
          this.products = res.data.data.tour_list;
          console.log(res);
          console.log(this.products);
        });
    },
    sort_method(value) {
      this.axios
        .get(`https://interview.tripresso.com/tour/search?row_per_page=5&sort=${value}`)
        .then((res) => {
          this.products = res.data.data.tour_list;
        });
    },
    checkSize(value) {
      this.categorys.forEach((category, index) => {
        if (value === category) {
          this.checkSizeIndex = index;
        }
      });
    },
  },
  created() {
    this.getData();
  },
};
</script>
