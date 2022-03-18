import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Enemy = ({ hp, damage, armor, bleeding, critical, dodge, counterattack }) => {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const randomName = async () => {
    const responce = await fetch('https://randomus.ru/name?type=5&sex=0&count=10');
    console.log(responce);
  };
  randomName();

  return (
    <>
      <div>
        {/*<Button variant="outlined" onClick={handleClickOpen}>*/}
        <img className="enemyimg" variant="outlined" onClick={handleClickOpen}
             src="https://st2.depositphotos.com/4831675/7181/v/600/depositphotos_71817179-stock-illustration-hedgehog.jpg"/>
        {/*</Button>*/}
        <Dialog
          open={open}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          aria-describedby="alert-dialog-slide-description"
        >
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
            <Button onClick={handleClose}>Боюсь!</Button>
            <Button onClick={handleClose}>Я смелый!</Button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  );
};

export default Enemy;
