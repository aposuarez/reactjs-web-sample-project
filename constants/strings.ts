export enum RemoteConfigKeys {
    welcomeTitle = 'welcome_title',
    homeContent = 'home_content'
}

export const REMOTE_CONFIG_DEFAULT_VALUES = {
    welcomeTitle: 'Welcome to my website.',
    homeContent: {
        "welcomeTitle": "Welcome to my sample website.",
        "welcomeDescription": "This sample website is built with React and powered by Next.js with Redux for state management. Website contents are pulled and managed from Firebase Remote Config so that updates can published without doing any code changes and deployment.",
        "aboutMeTitle": "The name is John. John Michael Suarez...",
        "aboutMeSubtitle": "but you can just call me JM 😎",
        "aboutMeDescription": "I'm a frontend web and hybrid mobile application developer with expertise in ReactJS, Next.js, Redux, and modern frontend workflows. I have built and deployed responsive, user-friendly interfaces for various platforms, including this personal portfolio site hosted on Vercel, an admin dashboard for the BRAD App, and enterprise-level solutions like wecare.ph and CNX Helios. I am experienced in using cloud services like Firebase and AWS, and have worked in Agile teams using Git, Jira, and CI/CD practices. My work emphasizes clean, maintainable code and intuitive user experiences, showcasing a strong focus on frontend performance and usability."
      }
}

export const SAMPLE_TEXT = {
    default: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
}
