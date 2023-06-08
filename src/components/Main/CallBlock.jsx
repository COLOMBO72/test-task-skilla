import React from 'react';

const CallBlock = () => {
  return (
    <div className="call_block">
      <div>
        <img src="../assets/icon-timeline.svg" className="arrow_img" alt="" />
        <span>19:00</span>
        <img src="../assets/avatar.jpg" className="avatar_img" width={32} />
        <span>+7984848484</span>
      </div>
      <div className="info_2">
        <span>Rabota.Ru</span>
        <span>Отлично</span>
        <span>12:06</span>
      </div>
    </div>
  );
};

export default CallBlock;
