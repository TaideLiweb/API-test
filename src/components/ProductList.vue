<template>
  <div class="col-10">
    <div class="row mt-3 bg-white" v-for="item in products" :key="item.id">
      <div
        class="col-md-4 col-12 bgStyle"
        :style="{ backgroundImage: `url(${item.image_url})` }"
        style="min-height:200px"
      ></div>
      <div class="col-md-8 col-12 px-0">
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
</template>
<script>
export default {
  props: ['products'],
};
</script>
