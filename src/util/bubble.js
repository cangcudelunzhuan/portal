class Bubble {
  generateBubbles (id) {
    const glass = document.getElementById(id)
    for (let i = 0; i < 10; i++) {(function(time) {
            setTimeout(() => glass.appendChild(createBubble()), time)
        })(660 * i)
    }
    function createBubble () {
      const bubble = document.createElement('div')
      bubble.className = 'bubble'
      if (Math.random() < 0.2) {
          bubble.className += ' bubble--big'
      }
      bubble.style.left = `${5 + Math.random() * glass.offsetWidth}px`
      return bubble
    }
  }
}
export default new Bubble()
