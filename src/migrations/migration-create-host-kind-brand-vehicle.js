'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('host-kind-brand-vehicle', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            hostId: {
                type: Sequelize.INTEGER
            },
            kindId: {
                type: Sequelize.INTEGER
            },
            brandId: {
                type: Sequelize.INTEGER
            },
            vehicleId: {
                type: Sequelize.INTEGER
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
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('host-kind-brand-vehicle');
    }
};