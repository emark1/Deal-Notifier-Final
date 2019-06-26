'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    phoneNumber: DataTypes.STRING,
    case: DataTypes.BOOLEAN,
    cooler: DataTypes.BOOLEAN,
    hdd: DataTypes.BOOLEAN,
    headphones: DataTypes.BOOLEAN,
    ssd: DataTypes.BOOLEAN,
    fan: DataTypes.BOOLEAN,
    psu: DataTypes.BOOLEAN,
    prebuilt: DataTypes.BOOLEAN,
    cpucooler: DataTypes.BOOLEAN,
    webcam: DataTypes.BOOLEAN,
    controller: DataTypes.BOOLEAN,
    laptop: DataTypes.BOOLEAN,
    monitor: DataTypes.BOOLEAN,
    vr: DataTypes.BOOLEAN,
    ram: DataTypes.BOOLEAN,
    headset: DataTypes.BOOLEAN,
    opticaldrive: DataTypes.BOOLEAN,
    fan: DataTypes.BOOLEAN,
    cpu: DataTypes.BOOLEAN,
    os: DataTypes.BOOLEAN,
    motherboard: DataTypes.BOOLEAN,
    speakers: DataTypes.BOOLEAN,
    keyboard: DataTypes.BOOLEAN,
    networking: DataTypes.BOOLEAN,
    furniture: DataTypes.BOOLEAN,
    gpu: DataTypes.BOOLEAN,
    mouse: DataTypes.BOOLEAN,
    processor: DataTypes.BOOLEAN,
    hometheaterpc: DataTypes.BOOLEAN,
    cablea: DataTypes.BOOLEAN,
    flashdrive: DataTypes.BOOLEAN,
    router: DataTypes.BOOLEAN,
    mic: DataTypes.BOOLEAN
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};