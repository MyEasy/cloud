<template>
  <div class="sc-fw-div">FW
    <el-switch
      @change="openOrClose"
      v-model="value"
      active-text="开启语音识别"
      inactive-text="关闭语音识别">
    </el-switch>
    <el-button @click="axiosBtnClick">请求</el-button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value: ''
    }
  },
  created () {
    // debugger
  },
  methods: {
    axiosBtnClick () {
      this.$axios({
        method: 'GET',
        url: 'users/zcw'
      }).then((res) => {
        debugger
      })
    },
    openOrClose () {
      var self = this
      try {
        var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
        var recognition = new SpeechRecognition()
        recognition.continuous = true
        recognition.onstart = function () {
          debugger
          self.$message({
            showClose: true,
            message: '语音识别功能激活！请对着麦克风讲话。',
            type: 'error'
          })
          // instructions.text('语音识别功能激活！请对着麦克风讲话。')
        }
        recognition.onspeechend = function () {
          debugger
          self.$message({
            showClose: true,
            message: '长时间未说话，已自动关闭录音。',
            type: 'error'
          })
          // instructions.text('长时间未说话，已自动关闭录音。')
        }
        recognition.onerror = function (event) {
          if (event.error === 'no-speech') {
            debugger
            self.$message({
              showClose: true,
              message: '未检测到语音，请再试一次。',
              type: 'error'
            })
            // instructions.text('未检测到语音，请再试一次。')
          }
        }
        recognition.onresult = function (event) {
          debugger
          // event 是一个SpeechRecognitionEvent 对象
          // 保存了所有历史捕获对象
          // 我们只取当前的内容
          var current = event.resultIndex
          // 获取此前所说话的记录
          var transcript = event.results[current][0].transcript
          // 将当前记录添加到笔记内容中
          var noteContent
          noteContent += transcript

          self.$message({
            showClose: true,
            message: noteContent,
            type: 'success'
          })
          // noteTextarea.val(noteContent)
        }
        recognition.start()
      } catch (e) {
        console.error(e)
      }
      debugger
    }
  }
}
</script>

<style scoped>
  .sc-fw-div{
    width: 500px;
    height: 1500px;
  }
</style>
