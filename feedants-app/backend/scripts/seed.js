import "dotenv/config";
import { connectDB } from "../src/connections/connectDB.js";
import { CompetitionModel } from "../src/models/Competition.model.js";
import { userModel } from "../src/models/User.model.js";
import bcrypt from "bcryptjs";
import mongoose from "mongoose";

const days = (n) => {
  const d = new Date();
  d.setDate(d.getDate() + n);
  return d;
};

const seed = async () => {
  try {
    await connectDB();
    await CompetitionModel.deleteMany({});
    await userModel.deleteMany({});

    const judge = await userModel.create({
      name: "Manju Dubey",
      username: "manju_dubey",

      email: "manju@feedants.com",
      passwordHash: await bcrypt.hash("judge", 10),
      role: "judge",
      avatarUrl: "https://i.pravatar.cc/200?img=47",
      judgeProfile: {
        title: "Professional Kathak Dancer",
        experience: "12+ Years",
      },
    });
    console.log("judge acc. created.");
    const testUser = await userModel.create({
      name: "test",
      username: "test",
      email: "test@feedants.com",
      passwordHash: await bcrypt.hash("test", 10),
    });
    const riya = await userModel.create({
      name: "Riya Shah",
      username: "riya",
      email: "riya@feedants.com",
      passwordHash: await bcrypt.hash("riya", 10),
      avatarUrl: "https://i.pravatar.cc/200?img=32",
    });
    const aarav = await userModel.create({
      name: "Aarav Mehta",
      username: "aarav",
      email: "aarav@feedants.com",
      passwordHash: await bcrypt.hash("riya", 10),
      avatarUrl: "https://i.pravatar.cc/200?img=12",
    });
    const neha = await userModel.create({
      name: "Neha Verma",
      username: "neha",
      email: "neha@feedants.com",
      passwordHash: await bcrypt.hash("riya", 10),
      avatarUrl: "https://i.pravatar.cc/200?img=45",
    });
    const ishita = await userModel.create({
      name: "Ishita Chopra",
      username: "ishita",
      email: "ishita@feedants.com",
      passwordHash: await bcrypt.hash("riya", 10),
      avatarUrl: "https://i.pravatar.cc/200?img=28",
    });

    const competition = await CompetitionModel.create({
      title: "Feedants Classical Dance",
      category: "Dance",
      tags: ["Dance", "Multi-Win"],
      prizePool: { total: 1500 },
      entryFee: { amount: 99 },
      totalSlot: 20,
      judge: {
        name: judge.name,
        title: judge.judgeProfile.title,
        experience: 12,
        avatarUrl: judge.avatarUrl,
        introVideoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      },
      dates: {
        registrationCloses: days(2),
        submissionStarts: days(3),
        submissionEnds: days(27),
        resultDate: days(32),
      },
      about:
        "This is an online classical dance competition open for all age groups. Participate from anywhere and showcase your talent. Express your passion through traditional dance.",
      tabs: {
        judgingParameters: [
          "Technique and form",
          "Expression and stage presence",
          "Rhythm and timing",
          "Costume and presentation",
        ],
        rulesAndEligibility: [
          "Open to all age groups",
          "Solo performances only",
          "Video submissions must be under 5 minutes",
          "Original choreography encouraged",
        ],
      },
      rewards: [
        {
          rank: 1,
          description: "1st Winner",
          cashValue: 550,
        },
        {
          rank: 2,
          description: "2nd Winner",
          cashValue: 300,
        },
        {
          rank: 3,
          description: "3rd Winner",
          cashValue: 240,
        },
        {
          rank: 4,
          description: "4th Winner",
          cashValue: 200,
        },
        {
          rank: 5,
          description: "5th Winner",
          cashValue: 130,
        },
        {
          rank: 6,
          description: "6th Winner",
          cashValue: 80,
        },
      ],
      previousWinners: [
        {
          userId: riya._id,
          name: riya.name,
          rank: 1,
          year: 2025,
          imageUrl: riya.avatarUrl,
        },
        {
          userId: aarav._id,
          name: aarav.name,
          rank: 2,
          year: 2025,
          imageUrl: aarav.avatarUrl,
        },
        {
          userId: neha._id,
          name: neha.name,
          rank: 3,
          year: 2025,
          imageUrl: neha.avatarUrl,
        },
        {
          userId: ishita._id,
          name: ishita.name,
          rank: 4,
          year: 2025,
          imageUrl: ishita.avatarUrl,
        },
      ],
      referral: {
        enabled: true,
        baseUrl: `https://feedants.com/r/${testUser._id}`,
        discountAmount: 10,
        referrerReward: 10,
      },
    });
    console.log("competition created");
  } catch (error) {
    console.log("seed error:", error);
  }
};

seed();
