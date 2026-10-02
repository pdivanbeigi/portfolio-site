import mst from '../media/MissouriS&T_Horizontal_Miner_RGB.png';
import hunter from '../media/hunter-logo-white-red.png'
import intelag from '../media/intelag.png'
export const WorkExperienceData = [
    {
        company: "Hunter Engineering Company",
        title: "Machine Vision Co-op",
        image:hunter,
        timeFrame:'May 2026 - Current',
        bullets: [
                "Integrated ST board firmware to capture ToF data and improving point cloud delivery speed by 10 frames per seconds ",
                "Analyzed object positioning algorithms provided by OpenCV and their differences compared to existing algorithms ",
                "Migrated Microsoft Visual Studio projects to CMake Projects for better compatibility across different platforms",
                "Engineered a mobile and smartwatch-connected remote-control application using C# and .NET MAUI, providing a modern software-based alternative to physical remote devices."
        ]
    },
        {
        company: "Intelag",
        title: "Full Stack Developer",
        image:intelag,
        timeFrame:'January 2025 - August 2026',
        bullets: [
                "Introduced and deployed AWS cloud foundation using OpenTofu (IaC) to enable repeatable, versioned environments", 
                "Established both internal and user facing IAM policies to prevent from driving up the costs by 65% ",
                "Designed Cloud Infrastructure resource simulator to show the costs, highlight resources and demonstrate the data flow between resources",
                "Developed internal tools for project management by integrating Jira and making intuitive frontends that would improve overall team performance" 
        ]
    },
    {
        company: "Hunter Engineering Company",
        title: "Data Science Co-op",
        image:hunter,
        timeFrame:'June 2024 - December 2024',
        bullets: [
            "Developed UI/UX using ReactJS and implemented scalable back-end solutions in Python, reducing data annotation time to 8 seconds per image.",
            "Optimized data retrieval tools by utilizing complex SQL queries with Python and FastAPI scripts, reducing data upload time from 2 days to 7 hours.",
            "Executed data annotation for machine learning, aiding in precise model training and deployment.",
            "Enhanced model training performance through rigorous debugging, code optimization, and foundational understanding of PyTorch Distributed Data Parallel, reducing training time to 1 hour instead of 4 hours."
        ]
    },
    {
        company: "Missouri University of Science and Technology",
        title: "Student IT Assistant",
        image:mst,
        timeFrame:'April 2023 - Current',
        bullets: [
            'Enhanced, delivered, and packaged applications to campus machines using AppsAnywhere','Developed Automation Scripts using AutoIt PowerShell and Visual Basic to activate the license for applications'
            ,'Operated Virtual Machines using Microsoft System Center Virtual Machine Manager for development and testing environment '
        ]
    }
]
