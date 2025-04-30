const Image = require('../Model/uploadModel');

exports.uploadImage = async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded' });
  }

  try {
    const newImage = new Image({
      filename: req.file.filename,
      path: `/uploads/${req.file.filename}`
    });

    const savedImage = await newImage.save();

    res.status(201).json({
      message: 'Image uploaded and saved to database',
      image: savedImage
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to save image to database' });
  }
};
