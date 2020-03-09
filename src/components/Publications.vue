<template>
  <v-container>
	  <v-layout text-xs-left wrap>
      <v-flex xs12 mb-6>
        <h1 class="display-1 font-weight-bold mb-5">Publications</h1>
      </v-flex>

      <!-- 国際会議 -->    
      <v-flex xs12 mb-5>
      <h1 class="display-0 mb-2">国際会議</h1>
      <v-divider class="mb-3"></v-divider>
      <ol>
        <li class="headline mb-2">
          <b>Yuta Kageyama</b>, Mariko Isogawa, Daisuke Iwai, Kosuke Sato "Generative Adversarial Network Based Image Blur Compensation for Projection-Based Mixed Reality"，2019 IEEE 8th Global Conference on Consumer Electronics, POS1
        </li> 
      </ol>
      </v-flex>

      <!-- 国内会議 -->    
      <v-flex xs12 mb-5>
      <h1 class="display-0 mb-2">国内会議</h1>
      <v-divider class="mb-3"></v-divider>
     <ol>
        <li class="headline mb-2">
          <b>影山雄太</b>，五十川麻理子，岩井大輔，佐藤宏介，"敵対的生成ネットワークを用いた映像投影時に生じるブラー補償"，第63回システム制御情報学会研究発表講演会講演論文集(SCI'19)，1438-1445，2019.5．
        </li> 
        <li class="headline mb-2">
          <b>影山雄太</b>，五十川麻理子，岩井大輔，佐藤宏介，"敵対的生成ネットワークを用いた投影型複合現実感のための実時間ボケ補償"，第22回　画像の認識・理解シンポジウム(MIRU2019)
        </li> 
        <li class="headline mb-2">
          岩井大輔，日浦慎作，宮崎大輔，米原枚子，伊藤勇太，松倉悠，Parinya Punpongsanon，<b>影山雄太</b>，"超多自由度照明による実物体の質感表現編集技術"，第8回　多元質感知　領域班会議
        </li> 
      </ol>
      </v-flex>
     
      <!-- 受賞 -->    
      <!-- <v-flex xs12 mb-5>      
      <h1 class="display-0 mb-2">受賞</h1>
      <v-divider class="mb-3"></v-divider>
      <ol>
        <li class="headline mb-2">
          ファーウェイ賞 (<b>佐藤優志</b>，"バーチャルハンドのPseudo-Haptic Feedbackによる材質感呈示手法") (2019.3).
        </li> 
        <li class="headline mb-2">
          SCI学生発表賞 (<b>佐藤優志</b>，田辺育暉，森田耕平，プンポンサノン パリンヤ，松倉悠，岩井大輔，佐藤宏介，"投影バーチャルハンドの疑似触覚フィードバックによる接触感呈示") (2019.5).
        </li> 
      </ol>
      </v-flex> --> -->

      <!-- その他・Web報道 -->    
      <!-- <v-flex xs12 mb-5>
      <h1 class="display-0 mb-2">その他・Web報道</h1>
      <v-divider class="mb-3"></v-divider>
      <ol>
        <li class="headline mb-2">
          Seamless (<a href="https://shiropen.com/seamless/farfeel" target="_blank">https://shiropen.com/seamless/farfeel</a>)
        </li> 
        <li class="headline mb-2">
          MoguraVR (<a href="https://www.moguravr.com/world-haptics-conference-2019" target="_blank">https://www.moguravr.com/world-haptics-conference-2019</a>)
        </li> 
      </ol>
      </v-flex> -->


    </v-layout>
	</v-container>
</template>

<style>

</style>
<!-- jsonから読み込む用

<script lang="ts"> 
import Publications from '@/static/data/publications.json';

export default {
  name: 'Publications',
  data() {
    return {
			items: Publications,
    };
  },
};
 -->
 
</script>
