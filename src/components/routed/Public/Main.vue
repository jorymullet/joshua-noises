<script>
export default {
  name: 'PublicMain',
  data () {
    return {
      buttons: {
        generic: [
          {
            name: 'Yip',
            url: 'https://firebasestorage.googleapis.com/v0/b/joshua-noises.appspot.com/o/noises%2Fdeploy-yip.mp3?alt=media&token=0260165d-5df4-4f78-9bd4-dec69ab52dd3',
          },
          {
            name: 'Disbelief',
            url: 'https://firebasestorage.googleapis.com/v0/b/joshua-noises.appspot.com/o/noises%2Fdisbelief.mp3?alt=media&token=9ad78441-c00d-490d-a0eb-33486ac69b6a',
          },
          {
            name: 'Fancy Scat',
            url: 'https://firebasestorage.googleapis.com/v0/b/joshua-noises.appspot.com/o/noises%2Ffancy-skat.mp3?alt=media&token=72f9bc1a-9142-4fce-bf4a-fd43470f3f96',
          },
          {
            name: 'Standard',
            url: 'https://firebasestorage.googleapis.com/v0/b/joshua-noises.appspot.com/o/noises%2Fgeneric-short.mp3?alt=media&token=537f87e2-5cbb-4fe8-9858-0822a7e39bb4',
          },
          {
            name: 'Incoherent',
            url: 'https://firebasestorage.googleapis.com/v0/b/joshua-noises.appspot.com/o/noises%2Fincoherent.mp3?alt=media&token=8de6783e-f8e8-4ec0-885d-be3d0057c6b5',
          },
          {
            name: 'High Voice Scat',
            url: 'https://firebasestorage.googleapis.com/v0/b/joshua-noises.appspot.com/o/noises%2Fsick-skat.mp3?alt=media&token=23c1328b-fb7f-41cc-99f2-72d939b250e9',
          },
          {
            name: 'Deployed Excite',
            url: 'https://firebasestorage.googleapis.com/v0/b/joshua-noises.appspot.com/o/noises%2Fstandard-deployed.mp3?alt=media&token=7942a1c1-799e-4096-8c37-012f7f529359',
          },
          {
            name: 'Turkey Boi',
            url: 'https://firebasestorage.googleapis.com/v0/b/joshua-noises.appspot.com/o/noises%2Fturkey.mp3?alt=media&token=202cb1ef-28ac-4b00-a9f0-eb82ba93e883',
          },
          {
            name: 'Someone is really poppin off',
            url: 'https://firebasestorage.googleapis.com/v0/b/joshua-noises.appspot.com/o/noises%2Fwho-is-going-to-stop-this-person.mp3?alt=media&token=3ee68668-3b6a-44c1-b459-ebe64139b4fb',
          },
        ],
      },
    }
  },
  methods: {
    play (url) {
      const audio = new Audio(url)
      audio.play()
    },
  },
}
</script>


<template lang="pug">
  .public-main-main
    .public-main-container
      .header Joshua Noises
      .content
        .generic-area.area
          .title Generic Noises
          .noises-holder
            .noise(
              v-for='noise in buttons.generic'
              @click='play(noise.url)'
            ) {{noise.name}}

</template>

<style lang="sass">
  @import '$vars'
  @import '$styles/transitions.sass'
  .public-main-main
    .public-main-container
      > *
        padding: 3rem
      .header
        font-size: 48px
        font-weight: bold
        color: white
        background: black
      .content 
        display: grid
        grid-template-columns: 1fr 1fr
        columns-gap: 2rem
        .area
          .title
            font-size: 22px
            margin-bottom: 2rem
          .noises-holder
            display: grid
            grid-template-columns: 1fr 1fr
            column-gap: 1rem
            row-gap: 1rem
            .noise
              padding: 3rem
              background: black
              border-radius: 1rem
              color: white
              cursor: pointer
              width: fit-content
              height: fit-content
              transition: all .1s
              &:hover
                transform: rotate(4deg) scale(1.1)
</style>
