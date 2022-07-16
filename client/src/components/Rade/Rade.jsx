import React, { useEffect, useState } from 'react';
import Enemy from "../Enemy/Enemy";
import { IoExitOutline } from "react-icons/io5";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import Button from "@mui/material/Button";
import Tooltip from '@mui/material/Tooltip';
import { useNavigate } from "react-router-dom";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Rade = () => {
  const [enemies, setEnemies] = useState([]);
  const [progress, setProgress] = useState([]);
  const [open, setOpen] = React.useState(false);


  const navigate = useNavigate();

  useEffect(() => {
    fetch('/rade/enemies').then(r => r.json().then((data) => setEnemies(data)));
  }, []);

  const handleClickExitOpen = () => {
    setOpen(true);
  };

  const handleClickExitClose = () => {
    setOpen(false);
  };


  return (
    <>

      <div className="enemy">

        <Dialog
          open={open}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClickExitClose}
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle>НУ ЧТО СЛАБАК ПОКИДАЕШЬ НАС?</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              Если выйдете, то вы потеряете прогресс этого рейда!
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClickExitClose}>НЕТ, Я НЕ СЛАБАК!</Button>
            <Button onClick={handleClickExitClose}>ДА, Я СДАЮСЬ. НЕ БЕЙТЕ МЕНЯ!</Button>
          </DialogActions>
        </Dialog>
      </div>


      <Tooltip title="ЕСЛИ БУДЕТ БОЛЬНО ЖМИ СЮДА!">
        <div className="exit-icon">
          <p sx={{ m: 1 }}/>
          <h1><IoExitOutline onClick={handleClickExitOpen}/></h1>
        </div>
      </Tooltip>
      <div className="enemy">
        {enemies.map((el) =>
          <Enemy setProgress={setProgress} id={el.id} progress={progress} key={el.id} description={el.description}
                 hp={el.hp} name={el.name}
                 damage={el.damage} armor={el.armor}
                 bleeding={el.bleeding}
                 critical={el.critical}
                 dodge={el.dodge} counterattack={el.counterattack}/>)}
      </div>
      {/*<img className="rade-back" src="https://coop-land.ru/uploads/posts/2020-12/1609163135_ss_6d7ef9d1695ada490ebb45af590c47a7173e44b1.1920x1080.jpg"/>*/}
    </>
  );
};

export default Rade;
