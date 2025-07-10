const express = require("express");
const Events = require("../models/eventModel");
const createEvent = async (req, res) => {
  try {
    const { title, description, category, date, time, poster, entryFee } =
      req.body;

    const newEvent = await Events.create({
      id: Date.now(), // Simple ID generation for demonstration
      title,
      description,
      category,
      date,
      time,
      poster,
      entryFee,
      collegeId: req.user.collegeId,
      createdBy: req.user._id,
    });

    res.status(201).json({
      message: "Event created successfully",
      event: newEvent,
    });
  } catch (error) {
    console.error("Error creating event:", error);
    res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};
const getEvents = async (req, res) => {};
