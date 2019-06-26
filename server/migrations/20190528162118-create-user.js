'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      phoneNumber: {
        type: Sequelize.STRING
      },
      case: {
        type: Sequelize.BOOLEAN
      },
      cooler: {
        type: Sequelize.BOOLEAN
      },
      hdd: {
        type: Sequelize.BOOLEAN
      },
      headphones: {
        type: Sequelize.BOOLEAN
      },
      ssd: {
        type: Sequelize.BOOLEAN
      },
      fan: {
        type: Sequelize.BOOLEAN
      },
      psu: {
        type: Sequelize.BOOLEAN
      },
      prebuilt: {
        type: Sequelize.BOOLEAN
      },
      cpucooler: {
        type: Sequelize.BOOLEAN
      },
      webcam: {
        type: Sequelize.BOOLEAN
      },
      controller: {
        type: Sequelize.BOOLEAN
      },
      laptop: {
        type: Sequelize.BOOLEAN
      },
      monitor: {
        type: Sequelize.BOOLEAN
      },
      vr: {
        type: Sequelize.BOOLEAN
      },
      ram: {
        type: Sequelize.BOOLEAN
      },
      headset: {
        type: Sequelize.BOOLEAN
      },
      opticaldrive: {
        type: Sequelize.BOOLEAN
      },
      fan: {
        type: Sequelize.BOOLEAN
      },
      cpu: {
        type: Sequelize.BOOLEAN
      },
      os: {
        type: Sequelize.BOOLEAN
      },
      motherboard: {
        type: Sequelize.BOOLEAN
      },
      speakers: {
        type: Sequelize.BOOLEAN
      },
      keyboard: {
        type: Sequelize.BOOLEAN
      },
      networking: {
        type: Sequelize.BOOLEAN
      },
      furniture: {
        type: Sequelize.BOOLEAN
      },
      gpu: {
        type: Sequelize.BOOLEAN
      },
      mouse: {
        type: Sequelize.BOOLEAN
      },
      processor: {
        type: Sequelize.BOOLEAN
      },
      hometheaterpc: {
        type: Sequelize.BOOLEAN
      },
      cablea: {
        type: Sequelize.BOOLEAN
      },
      flashdrive: {
        type: Sequelize.BOOLEAN
      },
      router: {
        type: Sequelize.BOOLEAN
      },
      mic: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  }
};