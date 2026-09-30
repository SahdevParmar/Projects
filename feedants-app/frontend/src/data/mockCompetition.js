export const mockCompetition = {
  competition: {
    _id: "6ab7c4a3230cefb4b82a084d",
    title: "Feedants Classical Dance",
    category: "Dance",
    tags: ["Dance", "Multi-Win"],

    certificate: { provided: true },

    prizePool: { total: 1500, currency: "INR" },
    entryFee: { amount: 99, currency: "INR" },

    totalSlot: 20,
    bookedSlots: 1,

    judge: {
      name: "Manju Dubey",
      title: "Professional Kathak Dancer",
      experience: 12,
      avatarUrl: "https://i.pravatar.cc/200?img=47",
      introVideoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },

    dates: {
      registrationCloses: new Date(
        Date.now() + 2 * 24 * 60 * 60 * 1000,
      ).toISOString(),
      submissionStarts: new Date(
        Date.now() + 3 * 24 * 60 * 60 * 1000,
      ).toISOString(),
      submissionEnds: new Date(
        Date.now() + 27 * 24 * 60 * 60 * 1000,
      ).toISOString(),
      resultDate: new Date(Date.now() + 32 * 24 * 60 * 60 * 1000).toISOString(),
    },

    about:
      "This is an online classical dance competition open for all age groups. Participate from anywhere and showcase your talent. Express your passion through traditional dance. All submissions will be judged by a panel of professional dancers. Results will be announced based on technique, expression, and stage presence. Winners will receive prize money directly to their registered bank account.",

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
      { rank: 1, description: "1st Winner", cashValue: 550 },
      { rank: 2, description: "2nd Winner", cashValue: 300 },
      { rank: 3, description: "3rd Winner", cashValue: 240 },
      { rank: 4, description: "4th Winner", cashValue: 200 },
      { rank: 5, description: "5th Winner", cashValue: 130 },
      { rank: 6, description: "6th Winner", cashValue: 80 },
    ],

    previousWinners: [
      {
        name: "Riya Shah",
        rank: 1,
        year: 2025,
        imageUrl: "https://i.pravatar.cc/200?img=32",
      },
      {
        name: "Aarav Mehta",
        rank: 1,
        year: 2025,
        imageUrl: "https://i.pravatar.cc/200?img=12",
      },
      {
        name: "Neha Verma",
        rank: 2,
        year: 2025,
        imageUrl: "https://i.pravatar.cc/200?img=45",
      },
      {
        name: "Ishita Chopra",
        rank: 3,
        year: 2025,
        imageUrl: "https://i.pravatar.cc/200?img=28",
      },
      {
        name: "Priya Nair",
        rank: 2,
        year: 2025,
        imageUrl: "https://i.pravatar.cc/200?img=44",
      },
      {
        name: "Karan Singh",
        rank: 3,
        year: 2025,
        imageUrl: "https://i.pravatar.cc/200?img=15",
      },
    ],

    referral: {
      enabled: true,
      baseUrl: "https://feedants.com/r/referral123",
      discountAmount: 10,
      referrerReward: 10,
    },
  },

  state: "REGISTRATION_OPEN",
  slotsLeft: 19,

  userState: {
    isRegistered: false,
    canRegister: true,
  },
};

// Variants for testing other states
export const mockFullCompetition = {
  ...mockCompetition,
  competition: { ...mockCompetition.competition, bookedSlots: 20 },
  state: "FULL",
  slotsLeft: 0,
  userState: { isRegistered: false, canRegister: false },
};

export const mockRegisteredCompetition = {
  ...mockCompetition,
  userState: { isRegistered: true, canRegister: false },
};

export const mockSubmissionPhase = {
  ...mockCompetition,
  state: "SUBMISSION_PHASE",
  userState: { isRegistered: true, canRegister: false },
};
