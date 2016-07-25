## get-youtube-subtitle-url [![Build Status](https://travis-ci.org/joegesualdo/get-youtube-subtitle-url-node.svg?branch=master)](https://travis-ci.org/joegesualdo/get-youtube-subtitle-url-node)
> Get the url for a youtube video's subtitles.

## Install
```
$ npm install --save @joegesualdo/get-youtube-subtitle-url-node
```

## Usage
```javascript
import getYoutubeSubtitleUrl from '@joegesualdo/get-youtube-subtitle-url-node';

const videoId ='TImPW-khOww'
getYoutubeSubtitleUrl('TImPW-khOww')
.then((result) => {
  console.log(result)
  // {
  //   automaticallyGenerated: false,
  //   url: 'https://www.youtube.com/api/timedtext?lang=en&fmt=vtt&name=&v=TImPW-khOww'
  // }
})
.catch(err => {
  // Executed if subtitles are not available for this video.
})
```

## API
### `getYoutubeSubtitleUrl(videoId)`
> Fetches the url for the subtitles 

| Name | Type | Description |
|------|------|-------------|
| videoId | `String` | The id of the youtube video |

Returns: `Object`, with the url and whether or not the subtitles were automatically generated.

```javascript
import getYoutubeSubtitleUrl from '@joegesualdo/get-youtube-subtitle-url-node';

const videoId ='TImPW-khOww'
getYoutubeSubtitleUrl('TImPW-khOww')
.then((result) => {
  console.log(result)
  // {
  //   automaticallyGenerated: false,
  //   url: 'https://www.youtube.com/api/timedtext?lang=en&fmt=vtt&name=&v=TImPW-khOww'
  // }
})
.catch(err => {
  // Executed if subtitles are not available for this video.
})
```
## Test
```
$ npm test
```
## License
MIT © [Joe Gesualdo]()
