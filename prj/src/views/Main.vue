<template>
  <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="100vh"
      img-height="100vh"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <b-carousel-slide
        img-src="https://picsum.photos/1920/1080/?image=1"
        style="height: 100vh"
      >
          <h1 class="carousel-caption">안녕하세요! IoT 및 Embedded 개발자를 희망하는 <br> 강인배 입니다.</h1>
      </b-carousel-slide>

      <b-carousel-slide
        img-src="https://picsum.photos/1920/1080/?image=1006"
        style="height: 100vh"
      >
        <h1 class="carousel-caption">저는 배우는 것을 좋아합니다.<br/>그리고 개발을 좋아합니다. </h1>
      </b-carousel-slide>

      <b-carousel-slide
        img-src="https://picsum.photos/1920/1080/?image=192"
        style="height: 100vh"
      >
        <h1 class="carousel-caption">선배들과 좋은 관계 속에서<br/>도움이 되고 싶습니다.<br/>감사합니다.</h1>
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    }
  }
</script>

<style>
  .carousel-caption{
    top: 50%;
    transform: translateY(-45%);
  }
</style>
