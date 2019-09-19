class VideoPlay {
	constructor({ video, videoPlay, playIcon }) {
		this.videoUI = document.getElementById(video)
		this.videoPlayUI = document.getElementById(videoPlay)
		this.playIcon = document.querySelector(playIcon)
	}

	init() {
		this.watchingPlayIcon = null
		this.videoPlayUI.addEventListener('click', this.togglePlay.bind(this))
	}
	
	togglePlay() {
		if(this.videoUI.paused) {
			this.videoUI.play()
			this.playIcon.classList.replace('fa-play', 'fa-pause')
			this.watchingPlayIcon = setInterval(this.watchPlayIcon.bind(this), 100)
		} else {
			this.videoUI.pause()
			this.playIcon.classList.replace('fa-pause', 'fa-play')
		}
	}

	watchPlayIcon() {
		if(this.videoUI.paused) {
			this.playIcon.classList.replace('fa-pause', 'fa-play')
			clearInterval(this.watchingPlayIcon)
		}
	}
}

export default VideoPlay
