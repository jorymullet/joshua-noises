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
        people: [
          {
            name: 'Alex: The Employer',
            url: 'https://firebasestorage.googleapis.com/v0/b/joshua-noises.appspot.com/o/noises%2Falex-employer.mp3?alt=media&token=3990cb5e-9cfc-493f-bd8f-851971871c49',
          },
          {
            name: 'Alex: Holy Smokes',
            url: 'https://firebasestorage.googleapis.com/v0/b/joshua-noises.appspot.com/o/noises%2Falex-lets-go.mp3?alt=media&token=f3ad21a9-8c48-4109-938f-7cedfbab8d23',
          },
          {
            name: 'Alex: Nobody',
            url: 'https://firebasestorage.googleapis.com/v0/b/joshua-noises.appspot.com/o/noises%2Falex-nobody.mp3?alt=media&token=9eafc609-a679-41df-81d0-5698bbf0cfe9',
          },
          {
            name: 'Alex: Plowing',
            url: 'https://firebasestorage.googleapis.com/v0/b/joshua-noises.appspot.com/o/noises%2Falex-plowing.mp3?alt=media&token=e2217c74-632b-4072-91af-e1ef2983ce86',
          },
          {
            name: 'Catlin: Oh Wow',
            url: 'https://firebasestorage.googleapis.com/v0/b/joshua-noises.appspot.com/o/noises%2Fcat-a-lot.mp3?alt=media&token=939b86ff-f327-4eaf-9206-c4afddc8d785',
          },
          {
            name: 'Catlin: Machine',
            url: 'https://firebasestorage.googleapis.com/v0/b/joshua-noises.appspot.com/o/noises%2Fcat-machine.mp3?alt=media&token=39550f92-36e5-41c5-adba-6e39870450b3',
          },
          {
            name: 'Chris: Scat',
            url: 'https://firebasestorage.googleapis.com/v0/b/joshua-noises.appspot.com/o/noises%2Fchris-skat.mp3?alt=media&token=127447bb-66ba-48c3-b1be-3c24c6aec5ce',
          },
          {
            name: 'Chris: Topher',
            url: 'https://firebasestorage.googleapis.com/v0/b/joshua-noises.appspot.com/o/noises%2Fchris-topher.mp3?alt=media&token=9dbbf1a8-d6fa-4dc2-ba4f-728597d15cc5',
          },
          {
            name: 'David: Plantation',
            url: 'https://firebasestorage.googleapis.com/v0/b/joshua-noises.appspot.com/o/noises%2Fdave-frying-pan.mp3?alt=media&token=951dc760-ebbe-4d40-9d20-673acc7715f8',
          },
          {
            name: 'David: Take A Rest',
            url: 'https://firebasestorage.googleapis.com/v0/b/joshua-noises.appspot.com/o/noises%2Fdave-resting.mp3?alt=media&token=14109ab1-a9fe-404a-a576-5b2948f1aa18',
          },
          {
            name: 'Jules: Dededeployed',
            url: 'https://firebasestorage.googleapis.com/v0/b/joshua-noises.appspot.com/o/noises%2Fjules-deployed.mp3?alt=media&token=18822843-9aee-48dc-b034-5fd27f2930e0',
          },
          {
            name: 'Jules: Holy',
            url: 'https://firebasestorage.googleapis.com/v0/b/joshua-noises.appspot.com/o/noises%2Fjules-beautiful.mp3?alt=media&token=63107f09-37d7-4d4b-872a-4f6891c1c16b',
          },
          {
            name: 'Kenny: Jaminfranklin',
            url: 'https://firebasestorage.googleapis.com/v0/b/joshua-noises.appspot.com/o/noises%2Fkenny-franklin.mp3?alt=media&token=efc23789-8852-4bae-a9d4-c1da3d58301c',
          },
          {
            name: 'Kenny: Get After It',
            url: 'https://firebasestorage.googleapis.com/v0/b/joshua-noises.appspot.com/o/noises%2Fkenny-get-after-it.mp3?alt=media&token=5a0b7768-fab3-46f1-a82b-b8432244cf74',
          },
          {
            name: 'Michael: Mikey',
            url: 'https://firebasestorage.googleapis.com/v0/b/joshua-noises.appspot.com/o/noises%2Fmichael-mikey.mp3?alt=media&token=142775c3-7443-4ace-b955-e4ca860a9536',
          },
          {
            name: 'Michael: Semicolons',
            url: 'https://firebasestorage.googleapis.com/v0/b/joshua-noises.appspot.com/o/noises%2Fmichael-semicolons.mp3?alt=media&token=9b1325f8-7445-422e-8c92-80d00540acf9',
          },
          {
            name: 'Paul: Ballin\'',
            url: 'https://firebasestorage.googleapis.com/v0/b/joshua-noises.appspot.com/o/noises%2Fpaul-ballin.mp3?alt=media&token=0e52e13b-4d9d-454a-9cb1-bb58be9fcdc0',
          },
          {
            name: 'Paul: Mick-dow-well',
            url: 'https://firebasestorage.googleapis.com/v0/b/joshua-noises.appspot.com/o/noises%2Fpaul-mickdowwell.mp3?alt=media&token=15d2bfdb-40fa-416c-ba31-dda6f231e015',
          },
        ]
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
          .title Generic
          .noises-holder
            .noise(
              v-for='noise in buttons.generic'
              @click='play(noise.url)'
            ) {{noise.name}}
        .people-area.area
          .title People
          .noises-holder
            .noise(
              v-for='noise in buttons.people',
              @click='play(noise.url)'
            ) {{noise.name}}

</template>

<style lang="sass">
  @import '$vars'
  @import '$styles/transitions.sass'
  .public-main-main
    .public-main-container
      > *
      .header
        font-size: 48px
        font-weight: bold
        color: white
        background: black
        padding: 3rem
      .content 
        display: grid
        grid-template-columns: 1fr 1fr
        @media (max-width: 1000px)
          grid-template-columns: 1fr
        .area
          background: white
          &.people-area
            background: black
            color: white
            .noises-holder
              .noise
                color: black
                background: white
          padding: 3rem
          .title
            font-size: 22px
            margin-bottom: 2rem
          .noises-holder
            display: grid
            grid-template-columns: 1fr 1fr
            //justify-items: center
            column-gap: 1rem
            row-gap: 1rem
            @media (max-width: 1000px)
              display: flex
              flex-wrap: wrap
            .noise
              padding: 3rem
              user-select: none
              background: black
              border-radius: 1rem
              color: white
              cursor: pointer
              width: fit-content
              height: fit-content
              transition: all .1s
              &:hover
                transform: rotate(2deg) scale(1.1)
</style>
