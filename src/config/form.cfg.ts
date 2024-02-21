const formConfig = {
  waiverType: {
    label: "Type of Waiver",
    values: [
      "CADI Waiver",
      "DD Waiver",
      "BI Waiver",
      "Elderly Waiver",
      "Private Pay",
    ],
  },
  waiverTypeSpecific: {
    label: undefined,
    values: [
      "Coed",
      "Female Only",
      "Male Only",
      "High Medical Needs",
      "Female Only, High Medical Needs",
      "Male Only, High Medical Needs",
      "No preference",
    ],
  },
  timeframe: {
    label: "Timeframe Needed",
    values: ["IMMEDIATLEY", "1-2 Weeks", "1 Month", "Other"],
  },
  housingType: {
    label: "Type of Housing Desired",
    values: [
      "18+",
      "55+",
      "Pets Accepted",
      "Wheelchair Accessible",
      "If multiple options will work, Please list which of above you prefer.",
    ],
  },
  equipementsNeeded: {
    label:
      "Medical Equipment, Devices, Adaptive Aides, Technology, Specific Medical Needs",
  },
  guardianStatus: {
    label: "Guardian Status",
    values: ["Self", "Private", "Public", "Under Commitement"],
  },
  livingSituation: {
    label: "Current Living Situation",
    values: [
      "Own housing: Lease, Mortgage or Roommate",
      "Service Provider: Foster Care or Group Home",
      "Hotel Motel",
      "Jail/Prison/Junvenile Detention",
      "Family/Friends due to Economic Hardship",
      "Emergency Shelter",
      "A place not meant for Housing",
      "Other",
    ],
  },
  mobility: {
    label: "Mobility",
    description:
      "Some of our homes have rooms that are accessible, but not to the entire house, just one floor. Other homes are made accessible with the use of chair lifts. Please answer the following questions so we can provide you with a list of the most appropriate settings for your individual’s specific needs",
    qns: {
      concerns: {
        label: "Does this person have mobility concerns?",
        values: ["Yes", "No"],
      },
      usedMobilityDevices: {
        label:
          "Does this person use OR could they use any of the following to assist with mobility/accessibility? (Cane, Walker, Wheelchair, Scooter, Chair lift for stairs, Hoyer Lift) If yes please list what is used below.",
      },
      adjustWithOneFloor: {
        label:
          "Would they be open to moving into a home if they only had access to one floor of the home, due to the limited accessibility of the home?",
        values: ["Yes", "No"],
      },
    },
  },
  residentialOpenings: {
    label:
      "Residential Assisted Living and Customized Living Openings List (Please, Check all that apply)",
    description:
      "Simple Health Services tries to keep this list as up to date as possible. We will be in touch to confirm your selections are still available.",
    qns: {
      accessible55P: {
        label: "55+ ACCESSIBLE",
        values: ["5336 NORTHPORT DRIVE, BROOKLYN CENTER, MN 55429."],
      },
      notAccessible55P: {
        label: "55+ NOT ACCESSIBLE",
        values: ["8256 SCOTT AVENUE NORTH BROOKLYN PARK, MN 55443."],
      },
      accessible18P: {
        label: "55+ NOT ACCESSIBLE",
        values: [
          "1013 WEST RIVER ROAD, CHAMPLIN, MN, 55316.",
          "6044 CLINTON AVENUE SOUTH, MINNEAPOLIS, MN 55419.",
          "6426 109TH PLACE NORTH, CHAMPLIN, MN 55316.",
          "7900 DOUGLAS DRIVE NORTH, BROOKLYN PARK, MN 55443.",
        ],
      },
      notAccessible18P: {
        label: "55+ NOT ACCESSIBLE",
        values: ["3693 GROVNER ROAD, NORTH, OAKDALE, MN 55128."],
      },
      notAccessible18PFemaleOnly: {
        label: "55+ NOT ACCESSIBLE - FEMALE ONLY",
        values: ["7124 16TH STREET NORTH, OAKDALE, MN 55128."],
      },
    },
  },
  teamContact: {
    label: "Team Contact Information",
    description:
      "*Please Include Name, Company Name, Best Contact Number & Email Address in the Spaces Provided*",
    qns: {
      caseManager: {
        label:
          "Waiver Case Manager: Company Name, Best Contact Number & Email Address",
      },
      referrer: {
        label:
          "Referring Party: Company Name, Best Contact Number & Email Address*If different from Waiver Case Manager",
      },
      legalRepresentative: {
        label:
          "Legal Representative or Guardian: Company Name, Best Contact Number & Email Address",
      },
      assessmentData: {
        label:
          "The Current CSSP & MNChoice Assessment below, or to our Community Referral Coordinator, Samantha Tschida, at Samantha@simplehealthservices.org",
      },
    },
  },
};

export default formConfig;
