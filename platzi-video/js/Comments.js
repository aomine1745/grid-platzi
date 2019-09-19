class Comments {
  constructor({ form, input, commentsBox }) {
    this.form = document.getElementById(form)
    this.input = document.getElementById(input)
    this.commentsBox = document.getElementById(commentsBox)
  }

  init() {
    if(window.localStorage.getItem('comments')) {
      this.commentsBox.innerHTML = window.localStorage.getItem('comments');
    }
    this.form.addEventListener('submit', this.addComment.bind(this))
  }

  addComment(e) {
    e.preventDefault()
    if (this.input.value) {
      const comments = this.commentsBox.innerHTML
      this.commentsBox.innerHTML = `<div class='video__comentarios'> <img src='img/user1.jpg' alt='avatar' class='video__comentarios-avatar'><p class='video__comentarios-name'>Gordon Caroll</p><p class='video__comentarios-comment'>${this.input.value}</p></div>${comments}`
      window.localStorage.setItem('comments', this.commentsBox.innerHTML);
      this.input.value = ''
    }
  }
}

export default Comments