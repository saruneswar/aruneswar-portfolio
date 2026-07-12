import { Project } from "@/types";

export const projectsData: Project[] = [
  {
    id: "proj-1",
    title: "AI-Based Myoelectric Prosthetic Arm (Smart India Hackathon National Winner)",
    slug: "ai-prosthetic-arm",
    shortDescription: "An AI-assisted prosthetic arm recognizing EMG muscle signals to control servo motors in real time.",
    fullDescription: "Developed an AI-assisted prosthetic arm capable of recognizing EMG muscle signals and controlling servo motors in real time. This project was successfully demonstrated during the Smart India Hackathon 2024, securing the National Winner title among thousands of participants. The system bridges the gap between biological signals and mechanical actuation, providing an affordable and highly accurate prosthetic solution.",
    coverImage: "/images/projects/Prosthetic_Arm/4.jpg.jpeg",
    gallery: [
      "/images/projects/Prosthetic_Arm/4.jpg.jpeg", // Prototype
      "/images/projects/Prosthetic_Arm/5.jpg.jpeg", // Testing
      "/images/projects/Prosthetic_Arm/1.jpg.jpeg", // Team / SIH
      "/images/projects/Prosthetic_Arm/2.jpg.jpeg", // Achievement
      "/images/projects/Prosthetic_Arm/3.jpg.jpeg"  // Achievement
    ],
    demoVideo: "/videos/projects/demo.mp4.mp4",
    technologies: ["ESP32", "EMG Sensors", "Servo Actuators", "Embedded C/C++", "Python"],
    role: "Embedded Hardware & Firmware Engineer",
    outcomes: [
      "Secured National Winner title at Smart India Hackathon 2024.",
      "Optimized hardware/software to significantly reduce electrical noise.",
      "Achieved high gesture recognition accuracy in real-time."
    ],
    status: "Completed",
    category: "Embedded Systems & AI",
    duration: "2024",
    problemStatement: "Amputees often lack access to affordable, highly responsive prosthetic arms that intuitively map muscle intents to mechanical actions without significant latency or noise interference.",
    objectives: [
      "Acquire and filter raw EMG signals from human muscles.",
      "Develop an AI classification model to predict intended gestures.",
      "Actuate servo motors in real-time based on classified intents.",
      "Minimize electrical noise and ensure reliable operation."
    ],
    systemArchitecture: "The system utilizes surface EMG sensors connected to an ESP32 microcontroller. The ESP32 handles analog-to-digital conversion, digital filtering, and runs a lightweight gesture classification algorithm to control a multi-degree-of-freedom servo-actuated robotic hand.",
    hardwareUsed: ["ESP32 Microcontroller", "MyoWare Muscle Sensors (EMG)", "MG995/SG90 Servo Motors", "Custom 3D Printed Arm", "Lithium-Ion Battery Pack"],
    softwareUsed: ["Arduino IDE (Embedded C/C++)", "Python (Model Training)", "TensorFlow Lite for Microcontrollers"],
    workingPrinciple: "When a user flexes a muscle, the EMG sensor detects the microvolt-level electrical activity. The signal is amplified, rectified, and read by the ESP32 ADC. A digital filter removes 50Hz mains noise. The cleaned signal is fed into a classification model that maps the signal pattern to a specific grip gesture, subsequently sending PWM signals to the corresponding servo motors to execute the grip.",
    engineeringChallenges: [
      "Severe 50Hz electrical noise interfering with the microvolt EMG signals.",
      "Processing complex AI classification algorithms within the memory constraints of an ESP32.",
      "Ensuring real-time latency below 200ms for a natural user experience."
    ],
    solutionsImplemented: [
      "Implemented a digital notch filter and optimized hardware shielding to eliminate noise.",
      "Quantized the Python-trained AI model using TensorFlow Lite to run efficiently on the ESP32.",
      "Used FreeRTOS on the ESP32 to separate data acquisition and motor control tasks into different cores."
    ],
    keyLearnings: [
      "Real-time digital signal processing on embedded microcontrollers.",
      "Integrating machine learning models into highly constrained edge devices.",
      "Advanced motor control and hardware-software interfacing."
    ],
    resultsAndImpact: [
      "Successfully recognized 5 distinct hand gestures with over 90% accuracy.",
      "Achieved a response latency of ~150ms.",
      "Won the National Smart India Hackathon 2024."
    ]
  },
  {
    id: "proj-2",
    title: "Guardians of Grid - Smart Power Line Fault Detection",
    slug: "smart-power-line-fault-detection",
    shortDescription: "Embedded system to monitor electrical distribution lines and automatically isolate relay-based faults.",
    fullDescription: "Designed an offline embedded system to monitor electrical distribution lines and detect abnormal operating conditions. The system continuously tracks voltage and current, instantly detecting overcurrent, undervoltage, and short-circuit events to isolate faults using relay logic.",
    coverImage: "/images/projects/Power_Line_Fault_Detection/1.jpg.jpeg",
    demoVideo: "/videos/projects/power_line_demo.mp4",
    gallery: [
      "/images/projects/Power_Line_Fault_Detection/1.jpg.jpeg", // Project Hero / Hardware
      "/images/projects/Power_Line_Fault_Detection/2.jpg.jpeg", // Development / Testing
      "/images/projects/Power_Line_Fault_Detection/3.jpg.jpeg"  // Documentation / Demonstration
    ],
    technologies: ["ESP32-S3", "LoRa Communication", "RS485 Modbus RTU", "Current Transformer Sensors", "Pole Nodes", "Transformer Master", "Gateway Architecture", "Embedded C"],
    role: "Electrical Systems Designer",
    outcomes: [
      "Improved fault response time through automated logic.",
      "Successfully isolated simulated short-circuit and overcurrent faults.",
      "Developed an intuitive OLED interface for localized monitoring."
    ],
    status: "Completed",
    category: "Power Systems & Protection",
    duration: "2025",
    problemStatement: "Traditional electrical distribution networks often rely on slow, manual fault detection methods, leading to prolonged equipment damage and widespread power outages during transient or permanent faults.",
    objectives: [
      "Continuously monitor line voltage and current in real-time.",
      "Detect overcurrent, undervoltage, and short-circuit faults instantly.",
      "Automatically isolate the faulty section using relay logic.",
      "Display real-time grid status and fault logs locally."
    ],
    systemArchitecture: "The architecture features a decentralized IoT gateway structure. Multiple Pole Nodes (ESP32-S3) monitor localized Current Transformer sensors and transmit data via LoRa Communication to a central Transformer Master. The master aggregates grid data and communicates with industrial SCADA systems using RS485 Modbus RTU for real-time monitoring and automated fault isolation.",
    hardwareUsed: ["ESP32-S3 Microcontroller", "LoRa Transceiver Modules", "RS485 Modbus Modules", "Current Transformer (CT) Sensors", "5V Relay Modules", "Pole Nodes", "Transformer Master Unit"],
    softwareUsed: ["Arduino IDE (Embedded C)", "Custom Protective Relay Logic Algorithm"],
    workingPrinciple: "Sensors continuously step down and measure the AC voltage and current. The ESP32 calculates the RMS values. If the RMS current exceeds the predefined safe limit (overcurrent) or the voltage drops significantly (undervoltage/short-circuit), the control logic immediately de-energizes the corresponding relay to open the circuit. The specific fault condition is then flagged on the OLED screen.",
    engineeringChallenges: [
      "Accurately calculating RMS values from noisy AC sinusoidal waveforms.",
      "Ensuring the relay trip time was fast enough to prevent hardware damage.",
      "Calibrating analog sensors for precise voltage and current measurements."
    ],
    solutionsImplemented: [
      "Developed a custom sampling algorithm to capture hundreds of data points per cycle for precise RMS calculation.",
      "Optimized the control loop to evaluate fault conditions in under 10 milliseconds.",
      "Implemented a software calibration routine to offset sensor drift."
    ],
    keyLearnings: [
      "Deep understanding of AC waveform analysis and RMS calculations in software.",
      "Practical experience with protective relay logic and fault isolation.",
      "Calibration and integration of industrial-grade analog sensors."
    ],
    resultsAndImpact: [
      "Achieved a fault detection and isolation time of < 50ms.",
      "Successfully validated against multiple simulated fault scenarios without failure.",
      "Provided a cost-effective, localized smart grid protection alternative."
    ]
  }
];
