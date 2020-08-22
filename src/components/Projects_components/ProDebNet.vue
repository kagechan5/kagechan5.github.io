<template>
  	<v-container>
      <v-layout row wrap mt-3 mb-3>
		  <h1 class="display-0" style="background-color:#808080; color:#ffffff">ProDebNet: Projector Deblurring using Convolutional Neural Network</h1>
      </v-layout>
      <strong>Introduction</strong>
        <p>
            Projection blur can occur in practical use cases that have non-planar and/or multi-projection display surfaces with various scattering characteristics because the surface often causes defocus and subsurface scattering. To address this issue, we propose ProDebNet, an end-to-end real-time projection deblurring network that synthesizes a projection image to minimize projection blur. The proposed method generates a projection image without explicitly estimating any geometry or scattering characteristics of the projection screen, which makes real-time processing possible. 
            <br>
            &nbsp;&nbsp;The experimental result is shown in Fig.1 and Fig.2.
            In this projection setup (Fig. 1), due to the defocus, the projected result without compensation become strongly blurry (Fig. 2(b)) when we project a target image (Fig. 2(a)).
            Using the target image and the initial projected result, ProDebNet generates the compensation image (Fig.2 (c)), and when we project the compensation image, the projected result is deblurred (Fig2. (d)).
        
        </p>

     <div style="text-align:center">
     <img src="../../assets/images/projects/ProDebNet/Result.png" alt="prodebnet" width="1000">
     </div>
      <br>
      <strong>Publications</strong>
      <ul>
        
      <li>Yuta Kageyama, Mariko Isogawaω, Daisuke Iwai, Kosuke Sato "ProDebNet: projector deblurring using a convolutional neural network"，Optics Express, Vol. 28, No. 14, pp. 20391-20403, 2020 <a href="https://www.osapublishing.org/oe/abstract.cfm?uri=oe-28-14-20391" target ="_blank"> [PDF (2.9MB)]</a></li>
      </ul>
    <br>
    <strong>Bibtex</strong>
      <pre><code>
        @article{kageyama2020prodebnet,
        title={ProDebNet: projector deblurring using a convolutional neural network},
        author={Kageyama, Yuta and Isogawa, Mariko and Iwai, Daisuke and Sato, Kosuke},
        journal={Optics Express},
        volume={28},
        number={14},
        pages={20391--20403},
        year={2020},
        publisher={Optical Society of America}
        }
        </code></pre>
  	</v-container>
</template>

<style>
</style>