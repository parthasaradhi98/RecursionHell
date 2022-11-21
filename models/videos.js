module.exports = (sequelize, Sequelize) => {
    const Video = sequelize.define("video", {
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      uploaded_at: {
        type: DataTypes.DATE
      },
      uploaded_by:{
        type: Sequelize.STRING.STRING
      }
    });
  
    return Video;
  };