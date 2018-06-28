<template>
  <div class="body-background">
    <div class="" style="margin: -10% 0 0 -9%; position:fixed;">
      <img src="http://4.bp.blogspot.com/-aplXFI9fzIs/U-O901KtK4I/AAAAAAAAAgI/8jf7Zeo0ouA/s1600/explosion_time_animate.gif" alt="" v-if='rocket.maju<=70'>
    </div>
    <div class="row">
      <div class="col s3">
        <img src="https://vignette.wikia.nocookie.net/spacemonsters/images/8/85/PNGPIX-COM-Earth-Planet-Globe-World-Transparent-PNG-Image.png/revision/latest?cb=20171217074041&path-prefix=id" alt="" style="margin: 50% 0 0 10%;">
      </div>
      <div class="track" style="padding-top:0%; position:fixed;">
        <img class="roket" src="https://image.flaticon.com/icons/png/128/214/214337.png" alt="" v-bind:style=" { margin: rocket.position + 'px' }"/>
      </div>
      <div class="col s3">
        <img src="https://orig00.deviantart.net/05db/f/2014/212/0/b/bright_full_moon_png_by_clairesolo-d7t4mdm.png" alt="" style="margin: 43% 0 0 230%; width:250px;">
      </div>
      <div class="" style="margin: 0 0 0 70%; position:fixed;">
        <img src="http://4.bp.blogspot.com/-aplXFI9fzIs/U-O901KtK4I/AAAAAAAAAgI/8jf7Zeo0ouA/s1600/explosion_time_animate.gif" alt="" v-if='rocket.maju>=1060'>
      </div>
      <div class="" style="margin: 0 0 0 0%; position:fixed;">
        <img src="https://media0.giphy.com/media/HUkOv6BNWc1HO/giphy.gif" alt="" v-if='rocket.maju<=300' style="width:200px; margin:10% 0 0 20%">
      </div>
    </div>
    <div class="">
      <a class="btn red" @click='maju' style="margin: 0 0 0 6%;" v-if='rocket.maju > 60'>Player 1</a>
      <a class="btn" @click='mundur' style="margin: 0 0 0 72%" v-if='rocket.maju < 1070'>Player 2</a>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      rocket: {
        maju: 550,
        position: "0 0 0 550"
      }
    }
  },
  methods: {
    maju () {
      this.rocket.maju += 10
      let position = '0 0 0 '+this.rocket.maju
      this.rocket.position = position
    },
    mundur () {
      this.rocket.maju -= 10
      let position = '0 0 0 '+this.rocket.maju
      this.rocket.position = position
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #ffffff;
}

.body-background{
  text-align: left;
  background-image: url('https://images.unsplash.com/photo-1502679726485-931beda67f88?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=de463bf685e4e3df80b0957fd4a2fa1c&auto=format&fit=crop&w=1355&q=80');
  height: 100%;
  width: 100%;
  background-size: cover;
  position: absolute;
}
.modal {
  overflow: hidden;
  width: 35%;
  height: 600px;
  margin-top: 0px;
  padding: 0 0 0 0;
}

h5
{
	font-weight: 400;
}

.container{
	margin: 0 0 0 0;
	width: 455px;
	height: 100%;
}

.tabs .indicator
{
	background-color: #1e2121;
	opacity: 0.3;
}

.form-container
{
	padding: 40px;
	padding-top: 10px;
}

.confirmation-tabs-btn
{
	position: absolute;
}
element.style {
    z-index: 1003;
    display: block;
    opacity: 1;
    top: 1%;
}
.roket {
  margin-top: 100%;
  transform: rotate(45deg);
}
.track {
  margin: 14% 0 0 0;
}
</style>
