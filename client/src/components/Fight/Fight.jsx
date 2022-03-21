const Fight = () => {
  return ( <>
    <div class="attacks show-btns">

<button type="button" id="top" class="btns"></button>
<button type="button" id="mid" class="btns"></button>
<button type="button" id="bottom" class="btns"></button>

</div>

<div class="defend show-btns">

<button type="button" id="top-def" class="btns-def"></button>
<button type="button" id="mid-def" class="btns-def"></button>
<button type="button" id="bottom-def" class="btns-def"></button>

</div>

<div class="pers pers1"></div>

<img id="bang-enemy" class="bang-enemy" src="bang.png"/>

<div class="question-mark-1 q-show">?</div>

<div class="pers1-dodged-1 on-start-dodge">
<img src="hedgehog1.svg"/>
</div>

<div class="pers1-dodged-2 on-start-dodge">
<img src="hedgehog1.svg"/>
</div>


<div id="pers1-attack" class="pers1-attack on-start">
<img src="hedgehog-attack.svg"/>
</div>

<div class="pers1-attack s1-1 on-start">
<img src="hedgehog-attack.svg"/>
</div>

<div class="pers1-attack s1-2 on-start">
<img src="hedgehog-attack.svg"/>
</div>

<div class="pers1-attack s1-3 on-start">
<img src="hedgehog-attack.svg"/>
</div>

<div class="pers1-throw on-start-throw">
<img src="apple.png"/>
</div>

<div id="pers1-fireball" class="pers1-fireball on-start-fire">
<img src="fireball.png"/>
</div>

<div class="pers1-fireball sf-1 on-start-fire">
<img src="fireball.png"/>
</div>

<div class="pers1-fireball sf-2 on-start-fire">
<img src="fireball.png"/>
</div>

{/* <!-- ------------------------------------- --> */}

<div class="pers pers2"> </div>

<img id="bang-me" class="bang-me" src="bang.png"/>

<div class="question-mark-2 q-hide">?</div>

<div class="pers2-dodged-1 on-start-dodge-1">
<img src="beaver1.svg"/>
</div>

<div class="pers2-dodged-2 on-start-dodge-1">
<img src="beaver1.svg"/>
</div>

<div id="pers2-attack" class="pers2-attack on-start">
<img src="beaver-attack.svg"/>
</div>

<div class="pers2-attack sd1-1 on-start">
<img src="beaver-attack.svg"/>
</div>

<div class="pers2-attack sd1-2 on-start">
<img src="beaver-attack.svg"/>
</div>

<div class="pers2-attack sd1-3 on-start">
<img src="beaver-attack.svg"/>
</div>

<div class="pers2-throw on-start-throw">
<img src="apple.png"/>
</div>

<div id="pers2-fireball" class="pers2-fireball on-start-fire">
<img src="fireball.png"/>
</div>

<div class="pers2-fireball sfd-1 on-start-fire">
<img src="fireball.png"/>
</div>

<div class="pers2-fireball sfd-2 on-start-fire">
<img src="fireball.png"/>
</div>

<img class="back" src="back.jpg"/>
  </> );
}
 
export default Fight;
