"use client";

import React, { useState, useEffect } from "react";
import {
  LinearProgress,
  Typography,
  Box,
  Chip,
  Tooltip,
  Card,
  CardContent,
  Modal,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button
} from "@mui/material";

const Account: React.FC = () => {


  const user = {
    username: "JohnDoe123",
    email: "johndoe@example.com",
    points: 5000
  };

  const tiers = [
    { name: "Bronze", points: 0, maxPoints: 1000, color: "brown" },
    { name: "Silver", points: 1000, maxPoints: 2500, color: "#add8e6" },
    { name: "Gold", points: 2500, maxPoints: 5000, color: "#ffd700" },
    { name: "Platinum", points: 5000, maxPoints: Infinity, color: "linear-gradient(45deg, #00c6ff, #0072ff)" },
  ];

  const currentTier = tiers.find((tier) => user.points >= tier.points && user.points <= tier.maxPoints) || tiers[0];
  const nextTier = tiers[tiers.indexOf(currentTier) + 1] || currentTier;

  let progress = 0;


  if (user.points = 0) {
    progress;
  }
  else if (currentTier.name === "Bronze") {
    progress = (user.points / currentTier.maxPoints) * 100;
  }
  else if (currentTier.name === "Silver") {
    progress = ((user.points - currentTier.points) / (nextTier.maxPoints - currentTier.points)) * 100;
  }
  else if (currentTier.name === "Gold") {
    progress = ((user.points - currentTier.points) / (5000 - currentTier.points)) * 100;
  }
  else if (currentTier.name === "Platinum") {
    progress = 100;
  }

  const [navbarHeight, setNavbarHeight] = useState(0);

  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    const navbar = document.getElementById("navbar");
    if (navbar) {
      setNavbarHeight(navbar.offsetHeight);
    }
  }, []);

  const handleModalOpen = () => setOpenModal(true);
  const handleModalClose = () => setOpenModal(false);

  return (
    <div id="account" className="w-full justify-center" style={{ paddingTop: `${navbarHeight}px` }}>
      <div className="flex flex-col items-center">
        <div className="w-full max-w-4xl bg-gray-100 p-12 rounded-lg shadow-md mb-6">
          <Typography variant="h3" fontWeight="bold" className="mb-4" marginBottom={3}>
            <text className="text-blue-600">Account Overview</text>
          </Typography>
          <Card variant="outlined" sx={{ mb: 4, p: 2 }} color="neutral">
            <CardContent>
              <Typography variant="h6" fontWeight="bold">
                <text className="text-blue-700">User Information</text>
              </Typography>
              <Typography variant="body1">
                <strong>Username:</strong> {user.username}
              </Typography>
              <Typography variant="body1">
                <strong>Email:</strong> {user.email}
              </Typography>
            </CardContent>
          </Card>

          {/* Current Tier */}
          <Box className="mb-4">
            <Chip
              label={currentTier.name}
              color="primary"
              size="large"
              variant="filled"
              sx={{
                fontSize: "1rem",
                padding: "0.5rem 1rem",
                backgroundColor: currentTier.color,
                background: currentTier.name === "Platinum" ? currentTier.color : undefined,
                boxShadow: currentTier.name === "Platinum" ? "0 0 10px rgba(0, 114, 255, 0.5)" : undefined,
              }}
            />
          </Box>

          <Box className="mb-6">
            <Typography variant="body1" className="mb-2">
              Points: {user.points} / {currentTier.maxPoints}
            </Typography>
            <LinearProgress
              variant="determinate"
              value={progress}
              color={
                currentTier.name === "Platinum"
                  ? "primary"
                  : currentTier.name === "Gold"
                  ? "warning"
                  : currentTier.name === "Silver"
                  ? "info"
                  : currentTier.name === "Bronze"
                  ? "default"
                  : "default"
              }
              thickness={8}
              sx={{
                borderRadius: "4px",
                "--LinearProgress-progressThickness": "16px",
              }}
            />
          </Box>

          <Box>
            <Tooltip title="Bronze < Silver < Gold < Platinum" placement="bottom-start">
              <Typography
                variant="body2"
                sx={{ textDecoration: "underline", cursor: "pointer" }}
                onClick={handleModalOpen}
              >
                What are tiers?
              </Typography>
            </Tooltip>
          </Box>
        </div>
      </div>

      {/* Modal (Popup) */}
      <Dialog open={openModal} onClose={handleModalClose}>
        <DialogTitle id="tier-modal-title">Tier Explanation</DialogTitle>
        <DialogContent>
          <Typography variant="body1" sx={{ marginBottom: 2 }}>
            <strong>Bronze</strong>: 0 - 999 points<br />
            <strong>Silver</strong>: 1000 - 2499 points<br />
            <strong>Gold</strong>: 2500 - 4999 points<br />
            <strong>Platinum</strong>: 5000+ points<br />
            <br />
            Each hour of parking reserved and completed earns you 100 points. As you accumulate points, you progress through the tiers, unlocking exclusive benefits and rewards!
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleModalClose} color="neutral">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Account;