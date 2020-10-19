<template>
  <div>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-8 px-0">
          <ul class="nav nav-pills">
            <li class="nav-item">
              <a class="nav-link active" href="#">精選評分</a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                data-toggle="dropdown"
                href="#"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
                >價格</a
              >
              <div class="dropdown-menu">
                <a class="dropdown-item" href="#">價格：低至高</a>
                <a class="dropdown-item" href="#">價格：高至低</a>
              </div>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                data-toggle="dropdown"
                href="#"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
                >天數</a
              >
              <div class="dropdown-menu">
                <a class="dropdown-item" href="#">天數：少至多</a>
                <a class="dropdown-item" href="#">天數：多至少</a>
              </div>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">出發日期</a>
            </li>
          </ul>
        </div>
        <div class="col-8" v-for="item in products" :key="item.id">
          <div class="row">
            <div class="col-4 bgStyle" :style="{ backgroundImage: `url(${item.image_url})` }"></div>
            <div class="col-8 py-3">
              <div>
                <div class="mb-2">
                  <a href="">{{ item.agency }}</a>
                  <a href="">{{ item.rating }}</a>
                </div>
                <div>
                  <h6>{{ item.title }}</h6>
                </div>
                <div class="d-flex mb-2">
                  <div v-for="tag in item.tags" :key="tag">
                    {{ tag }}
                  </div>
                </div>
              </div>
              <div class="d-flex">
                <div class="d-flex">
                  <div v-for="groupItem in item.group" :key="groupItem.id">
                    <div>
                      {{ groupItem.date | date }}
                    </div>
                    <div>{{ groupItem.quantity | sale }}</div>
                  </div>
                </div>
                <div>
                  <div>
                    {{ item.tour_days }} <span>天</span>{{ item.min_price }} <span>元起</span>
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
.bgStyle {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
<script>
export default {
  data() {
    return {
      products: [],
    };
  },
  created() {
    this.axios.get('https://interview.tripresso.com/tour/search').then((res) => {
      this.products = res.data.data.tour_list;
      console.log(this.products);
    });
  },
};
</script>
