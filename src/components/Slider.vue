<template>
  <div :class="style.slideshow">
    <Button @click="left" :buttonClass="[this.currentSlide == 0 ? style.hide : '', style.btn]"><</Button>
    <Button @click="right" :buttonClass="[this.currentSlide == this.limit ? style.hide : '', style.btn]">></Button>

    <div :class="style.content" :style="{ backgroundPosition: (bgPosition  + 'px 0px')}">
      <div :class="style.parallaxbg" :style="{ backgroundPosition: (parallaxPosition  + 'px 0px')}"></div>
      <ul :class="style.slider" :style="{ left: sliderPosition + '%', width: sliderSize + '%' }">
        <Slide v-for="slide in slides" :title="slide.title" :imageSrc="slide.img" :list="slide.list"></Slide>
      </ul>
    </div><!-- sp-content -->

  </div><!-- sp-slideshow -->
</template>

<script>
  import Button from './Button.vue';
  import Slide from './Slide.vue';
  import style from './Slider.module.scss'
  import SlidesArray from './../assets/slides.json'

    export default {
        name: 'HelloWorld',
        components: {
            Button,
            Slide
        },
        props: {
            msg: String
        },
        data () {
          return      {
              style,
              slides: SlidesArray,
              sliderPosition: 0,
              bgPosition: 0,
              parallaxPosition: 0,
              limit: 0,
              currentSlide: 0,
              sliderSize: 0,
          }
        },
        methods: {
            limitCount: function () {
                this.limit = this.slides.length;
                this.sliderSize = (100 * this.limit) + 100;
            },
            left: function () {
                console.log('click left');
                if(this.currentSlide > 0) {
                  this.sliderPosition += 100;
                  this.bgPosition += 100;
                  this.parallaxPosition += 200;
                  this.currentSlide -= 1;
                }
            },
            right: function () {
                if(this.currentSlide != (this.limit - 1)) {
                    this.sliderPosition -= 100;
                    this.bgPosition -= 100;
                    this.parallaxPosition -= 200;
                    this.currentSlide += 1;
                }
            }
        },
        created: function () {
            this.limitCount();
        }
    }
</script>

<style lang="scss" module>
  /*@import "./HelloWorld.module.css";*/
</style>
