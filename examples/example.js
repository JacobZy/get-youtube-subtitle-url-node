var getYoutubeSubtitleUrl = require('./../dist/index.js').default;
// let id = 'vKosBJ1Uko0'
// let id = 'q_q61B-DyPk'
// let id ='TImPW-khOww'
let id = 'WvMPvPFWgTM'
getYoutubeSubtitleUrl(id, {
  type: 'either'
})
.then((result) => {
  console.log(result)
})
.catch(err => {
  console.log(err)
})
