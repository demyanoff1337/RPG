import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import Tooltip from '@mui/material/Tooltip';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


const Enemy = ({
                 hp,
                 id,
                 setProgress,
                 progress,
                 description,
                 name,
                 damage,
                 armor,
                 bleeding,
                 critical,
                 dodge,
                 counterattack
               }) => {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = (id) => {
    setOpen(false);
    setProgress([id, ...progress]);
  };

  const simpleClose = () => {
    setOpen(false);
  };


  function controlProgress(id) {
    if (((id - 1) === progress[0] && id !== 1) || (progress.length < 1 && id === 1)) {
      return (
        <>
          <DialogTitle>ПОДУМАЙ ХОРОШЕНЬКО!</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              <div className="text-before-fight">
                    <span className="hero-characteristics">
                      <h5>НАЗВАНИЕ</h5>
                  <div>ЗДОРОВЬЕ </div>
                  <div>АТАКА </div>
                  <div>ЗАЩИТА </div>
                  <div>КРОВОТЕЧЕНИЕ </div>
                  <div>ШАНС КРИТА</div>
                  <div>ШАНС УВОРОТА </div>
                  <div>ШАНС ОТВЕТКИ </div>
                </span>
                <span className="hero-characteristics">
                  <h5>ТВОИ</h5>
                  <div>{hp}</div>
                  <div>{damage}</div>
                  <div>{armor}</div>
                  <div>{bleeding}</div>
                  <div>{critical}</div>
                  <div>{dodge}</div>
                  <div>{counterattack}</div>
                </span>
                <span className="hero-characteristics">
                  <h5>ВРАГА</h5>
                  <div>1</div>
                  <div>2</div>
                  <div>3</div>
                  <div>4</div>
                  <div>5</div>
                  <div>6</div>
                  <div>7</div>
                </span>
              </div>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => simpleClose(id)}>Боюсь!</Button>
            <Button onClick={() => handleClose(id)}>Я смелый!</Button>
          </DialogActions>
        </>
      );
    } else if (!progress.includes(id)) {
      return (<>
        <DialogTitle>ТЫ НЕ ДОСТОИН СРАЖЕНИЯ СО МНОЙ!;
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={simpleClose}>ЛАДНО ПОЙДУ БИТЬ ДРУГОГО!</Button>
        </DialogActions>
      </>);
    } else {
      return (
        <>
          <DialogTitle>ОТСТАНЬ ОТ МЕНЯ! Я БЕДНЫЙ ПОБЕЖДЁННЫЙ ЁЖИК!
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={simpleClose}>ЛАДНО ПОЙДУ БИТЬ ДРУГОГО!</Button>
          </DialogActions>
        </>
      );
    }
  }

  return (
    <>
      <div className="enemy">
        <Tooltip title={description}>
          <p sx={{ m: 1 }} style={{ margin: Math.random() * 30 + "px" }} className="description-photo">
            <figure>
              <img className="enemyimg" variant="outlined" onClick={handleClickOpen}
                   src="https://st2.depositphotos.com/4831675/7181/v/600/depositphotos_71817179-stock-illustration-hedgehog.jpg"/>
              <figcaption>
                <p><i>
                  {name}
                </i></p>
              </figcaption>
            </figure>
          </p>
        </Tooltip>

        <Dialog
          open={open}
          TransitionComponent={Transition}
          keepMounted
          onClose={simpleClose}
          aria-describedby="alert-dialog-slide-description"
        >
          {controlProgress(id)}

        </Dialog>
      </div>
    </>
  );
};

export default Enemy;
