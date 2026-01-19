const incidents = [
  {
    title: "Needle-stick Injury",
    description:
      "While disposing of a used syringe containing infectious blood, a laboratory technician accidentally suffers a needle-stick injury that punctures the skin. The sample is known to carry potential blood-borne pathogens.",
    options: [
      "Report the injury immediately, wash the area thoroughly, and seek medical evaluation",
      "Wash hands briefly and continue working",
      "Ignore the injury since gloves were worn",
      "Dispose of the needle and continue work"
    ],
    correct: 0
  },
  {
    title: "Biohazard Spill",
    description:
      "During transfer of an infectious liquid culture from one container to another, the container slips and spills onto the laboratory floor, creating a risk of surface contamination and aerosol formation.",
    options: [
      "Isolate the area, use spill kit, and follow institutional spill response protocol",
      "Cover the spill with paper towels and leave the lab",
      "Ignore the spill assuming it will dry",
      "Wait for housekeeping staff to clean it"
    ],
    correct: 0
  },
  {
    title: "PPE Failure",
    description:
      "While handling a pathogenic sample inside a biosafety cabinet, the technician notices that their protective gloves have torn, leaving bare skin exposed to the biological material.",
    options: [
      "Stop work immediately, replace PPE, and decontaminate exposed skin",
      "Continue handling the sample carefully",
      "Ignore the tear since exposure seems minimal",
      "Finish work quickly and leave the lab"
    ],
    correct: 0
  },
  {
    title: "Unlabeled Biological Sample",
    description:
      "A container holding a biological sample is discovered in the laboratory refrigerator without any labeling, documentation, or indication of the sample’s origin or risk level.",
    options: [
      "Quarantine the sample and report it for identification and proper handling",
      "Use the sample cautiously",
      "Dispose of the sample without documentation",
      "Ignore it and leave it for others"
    ],
    correct: 0
  },
  {
    title: "Improper Waste Disposal",
    description:
      "During routine inspection, biomedical waste such as contaminated gloves and syringes are found disposed of in a general waste bin instead of a designated biohazard container.",
    options: [
      "Segregate the waste correctly and report the violation",
      "Cover the bin and leave it",
      "Assume someone else will handle it",
      "Ignore the improper disposal"
    ],
    correct: 0
  },
  {
    title: "Broken Contaminated Glassware",
    description:
      "A glass culture flask containing infectious material falls from the workbench and shatters, spreading contaminated glass fragments across the laboratory floor.",
    options: [
      "Secure the area, use proper tools, and follow broken-glass biohazard cleanup procedures",
      "Pick up fragments with gloved hands",
      "Sweep pieces into a dustbin",
      "Leave the fragments for later cleaning"
    ],
    correct: 0
  },
  {
    title: "Centrifuge Malfunction",
    description:
      "A centrifuge containing sealed biohazard samples begins vibrating abnormally and stops unexpectedly, raising concern about potential tube breakage and aerosol generation inside the device.",
    options: [
      "Shut down the centrifuge, wait, and report for professional inspection",
      "Open the lid immediately to check samples",
      "Restart the centrifuge",
      "Ignore the malfunction"
    ],
    correct: 0
  },
  {
    title: "Aerosol Exposure Risk",
    description:
      "Improper pipetting technique leads to the formation of fine aerosols while handling an infectious liquid, increasing the risk of inhalation exposure.",
    options: [
      "Stop work and follow aerosol exposure response protocol",
      "Continue working carefully",
      "Ignore aerosols as they are not visible",
      "Turn off ventilation to prevent spread"
    ],
    correct: 0
  },
  {
    title: "Unauthorized Laboratory Entry",
    description:
      "An individual without biosafety training enters the laboratory during active handling of infectious materials, posing a safety and compliance risk.",
    options: [
      "Escort the individual out and report the incident",
      "Allow them to stay briefly",
      "Ignore their presence",
      "Lock the door and continue work"
    ],
    correct: 0
  },
  {
    title: "Transporting Biohazard Samples",
    description:
      "Infectious biological samples must be transported from the laboratory to another facility, requiring strict containment and documentation to prevent accidental exposure.",
    options: [
      "Use sealed, labeled containers with approved transport documentation",
      "Carry samples manually without protection",
      "Use unsealed containers",
      "Transport samples without labels"
    ],
    correct: 0
  },
  {
    title: "Improper Storage Conditions",
    description:
      "Biological samples are discovered stored at an incorrect temperature, which may compromise containment and increase biohazard risks.",
    options: [
      "Correct storage conditions immediately and document the deviation",
      "Leave samples until later",
      "Ignore temperature warnings",
      "Discard samples without reporting"
    ],
    correct: 0
  },
  {
    title: "Fire Alarm During Biohazard Work",
    description:
      "A fire alarm sounds while an experiment involving infectious materials is in progress, requiring immediate safety decisions under pressure.",
    options: [
      "Secure samples safely and evacuate according to emergency protocols",
      "Ignore the alarm and continue experiment",
      "Disable the alarm",
      "Leave samples exposed and run"
    ],
    correct: 0
  },
  {
    title: "Food Inside Biohazard Laboratory",
    description:
      "Food items are brought into a biohazard laboratory, creating a risk of accidental ingestion or cross-contamination.",
    options: [
      "Remove the food and report the biosafety violation",
      "Consume food carefully",
      "Store food in laboratory refrigerator",
      "Ignore the rule"
    ],
    correct: 0
  },
  {
    title: "Failure to Decontaminate Work Area",
    description:
      "After completing work with infectious materials, the workbench and equipment are left without proper decontamination.",
    options: [
      "Decontaminate all surfaces immediately following protocol",
      "Clean the area later",
      "Cover the bench and leave",
      "Ignore decontamination procedures"
    ],
    correct: 0
  },
  {
    title: "Sample Leak During Transport",
    description:
      "While transporting a biological sample, liquid is observed leaking from the container, indicating possible containment failure.",
    options: [
      "Stop transport and follow spill and containment protocols",
      "Seal the leak with tape",
      "Ignore the leak",
      "Continue transport quickly"
    ],
    correct: 0
  }
];

