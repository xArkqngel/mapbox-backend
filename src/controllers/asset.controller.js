import { Asset } from "../models/Asset.js";
import {io} from '../server.js'

export const createAsset = async (req, res) => {
  try {
    const { name, description, latitude, longitude, type } = req.body;
    const newAsset = await Asset.create({ name, description, latitude, longitude, type, createdBy: req.userId });
    io.emit('new_asset', newAsset)
    res.status(201).json(newAsset);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

export const getAllAssets = async (req, res) => {
  try {
    const assets = await Asset.findAll();
    res.json(assets);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

export const getMyAssets = async (req, res) => {
  try {
    const assets = await Asset.findAll({ where: { createdBy: req.userId } });
    res.json(assets);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

export const updateAsset = async (req, res) => {
  try {
    const asset = await Asset.findByPk(req.params.id);
    if (!asset) return res.status(404).json({ message: "Asset not found" });

    if (asset.createdBy !== req.userId && req.role !== "admin") {
      return res.status(403).json({ message: "Forbidden" });
    }

    await asset.update(req.body);
    io.emit('update_asset',asset)
    res.json(asset);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

export const deleteAsset = async (req, res) => {
  try {
    const asset = await Asset.findByPk(req.params.id);
    if (!asset) return res.status(404).json({ message: "Asset not found" });

    if (req.role !== "admin") return res.status(403).json({ message: "Forbidden" });

    await asset.destroy();
    io.emit('delete_asset', {id: req.params.id})
    res.json({ message: "Asset deleted" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};
