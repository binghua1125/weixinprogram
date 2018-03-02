//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: [],
    videoSrc: '../../resources/voice.png',
    selectedWord:{text:'a',paraphrase:'aaa'},
    words: [[{ text: 'a', paraphrase: 'aaa' }, { text: 'b', paraphrase: 'bbb' }, { text: 'c', paraphrase: 'ccc' }], [{ text: 'd', paraphrase: 'ddd' }, { text: 'e', paraphrase: 'eee' }, { text: 'f', paraphrase: 'fff' }], [{ text: 'g', paraphrase: 'ggg' }, { text: 'h', paraphrase: 'hhh' }, { text: 'i', paraphrase: 'iii' }]]
  },
  changeWord: function (event) {
    this.setData({
      selectedWord: event.target.dataset.word
    })
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  }
})
