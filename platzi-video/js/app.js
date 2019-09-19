import VideoPlay from './VideoPlay.js'
import Comments from './Comments.js'

const videoPlay = new VideoPlay({
	video: 'video',
	videoPlay: 'videoPlay',
	playIcon: '.fa-play'
});
videoPlay.init()

const comments = new Comments({
	input: 'input',
	commentsBox: 'commentsBox',
	form: 'form'
});
comments.init()

