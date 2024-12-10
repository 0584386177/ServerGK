const mongoose = require("mongoose");

const artistSchema = new mongoose.Schema({
  name: { type: String, required: true, default: "Unknown Artist" }, 
});

const trackSchema = new mongoose.Schema({
  title: { type: String, required: true, default: "Unknown Title" }, 
  artist: { type: artistSchema, required: true }, 
});

const playlistSchema = new mongoose.Schema({
  playlist_id: { type: String, required: true },
  name: { type: String, required: true, default: "Unknown Playlist" },
  description: { type: String, default: "" }, 
  cover_url: { type: String, default: "" }, 
  tracks: { type: [trackSchema], default: [] },
});

const Playlist = mongoose.model("Playlist", playlistSchema);
module.exports = Playlist;
