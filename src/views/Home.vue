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
        <div class="col-10 mt-3 bg-white" v-for="item in products" :key="item.id">
          <div class="row">
            <div class="col-4 bgStyle" :style="{ backgroundImage: `url(${item.image_url})` }"></div>
            <div class="col-8 px-0">
              <div class="px-3 pt-3">
                <div class="mb-2">
                  <a href="">{{ item.agency }}</a>
                  <a href=""><i class="fas fa-star ml-2"></i>X{{ item.rating }}</a>
                </div>
                <div>
                  <h6 class="font-weight-bold">{{ item.title }}</h6>
                </div>
                <div class="d-flex my-3 flex-wrap">
                  <div class="hashtag" v-for="tag in item.tags" :key="tag">
                    {{ tag }}
                  </div>
                </div>
              </div>
              <div class="d-flex px-3 py-3 border-top justify-content-between align-items-center">
                <div class="d-flex flex-wrap">
                  <div class="groupItems" v-for="groupItem in item.group" :key="groupItem.id">
                    <div class="text-center">
                      {{ groupItem.date | date }}
                    </div>
                    <div class="groupItems_border">{{ groupItem.quantity | sale }}</div>
                  </div>
                </div>
                <div>
                  <div class="PriceBox">
                    <span>{{ item.tour_days }}</span> 天<span>{{ item.min_price }}</span> 元起
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
export default {
  data() {
    return {
      products: [],
      categorys: ['精選評分', '價格', '天數', '出發日期'],
      checkSizeIndex: 0,
    };
  },
  methods: {
    sort_method(value) {
      this.axios.get(`https://interview.tripresso.com/tour/search?sort=${value}`).then((res) => {
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
    this.axios.get('https://interview.tripresso.com/tour/search').then((res) => {
      this.products = res.data.data.tour_list;
      console.log(res);
      console.log(this.products);
    });
  },
};
</script>
