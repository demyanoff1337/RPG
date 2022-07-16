import React, { useEffect } from 'react';
import critica from '../audio/criticalAtack.mp3';
import lose from '../audio/hahaLose.mp3';
import win from '../audio/woohooWin.mp3';
import mortaKombat from '../audio/ortal_combat_toasty.mp3';
import handHit from '../audio/handHit.mp3';
import weaponHit from '../audio/weaponHit.mp3';
import magicHit from '../audio/magicHit.mp3';
import miss from '../audio/hahaMiss.mp3';
import useSound from "use-sound";

const Audio = () => {
  const [playCrit] = useSound(critica);
  const [playLose] = useSound(lose);
  const [playWin] = useSound(win);
  const [playHit] = useSound(handHit);
  const [playMk] = useSound(mortaKombat);
  const [playWH] = useSound(weaponHit);
  const [playMH] = useSound(magicHit);
  const [playMiss] = useSound(miss);

  useEffect(() => {
    playCrit();
  }, [])
  return (
    <div>
      <button onClick={playCrit}>critica</button>
      <button onClick={playLose}>lose</button>
      <button onClick={playWin}>win</button>
      <button onClick={playMk}>mortaKombat</button>
      <button onClick={playHit}>handHit</button>
      <button onClick={playWH}>weaponHit</button>
      <button onClick={playMH}>magicHit</button>
      <button onClick={playMiss}>miss</button>
    </div>
  );
};

export default Audio;
