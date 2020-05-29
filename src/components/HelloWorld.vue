<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <video ref="myVideo" id="myVideo" width="400px" autoplay muted playsinline></video>
    <video ref="theirVideo" id="theirVideo" width="400px" autoplay muted playsinline></video>
    <div>
      あなたのID：<input typp="text" id="myId" v-model="myId" readonly />
    </div>
    <div>
      発信相手のID：<input type="text" id="theirId" v-model="theirId" />
      <button id="makeCall" @click="onclick">発信</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      myId: "",
      theirId: "",
      localStream: ""
    }
  },
  methods: {
    // 発信処理
    onclick: function(){
      const theirID = this.theirId;
      const mediaConnection = peer.call(theirID, this.localStream);
      this.setEventListener(mediaConnection);
    },
    setEventListener: function(mediaConnection) {
      mediaConnection.on('stream', stream => {
        // video要素にカメラ映像をセットして再生
        const videoElm = this.$refs.theirVideo;
        videoElm.srcObject = stream;
        videoElm.play();
      });
}
  },
  mounted: function(){
    // カメラ映像取得
    navigator.mediaDevices.getUserMedia({video: true, audio: true})
      .then( stream => {
      // 成功時にvideo要素にカメラ映像をセットし、再生
      const videoElm = this.$refs.myVideo;
      videoElm.srcObject = stream;
      videoElm.play();
      // 着信時に相手にカメラ映像を返せるように、グローバル変数に保存しておく
      this.localStream = stream;
    }).catch( error => {
      // 失敗時にはエラーログを出力
      console.error('mediaDevice.getUserMedia() error:', error);
      return;
    });

    //PeerID取得
    peer.on('open', () => {
        this.myId = peer.id;
    });

    //着信処理
    peer.on('call', mediaConnection => {
      mediaConnection.answer(this.localStream);
      this.setEventListener(mediaConnection);
    });

    // エラー
    peer.on('error', err => {
      alert(err.message);
    });
  }
}

// import
import Peer from 'skyway-js';
const peer = new Peer({key: '59093eb6-f094-476c-af62-ab068434ec23'});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
