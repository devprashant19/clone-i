
import { HoverEffect } from "../ui/CardHoverEffect";

export function Card() {
    return (
        <div className="max-w-screen mx-auto px-8 bg-black w-screen">
            <HoverEffect items={projects}/>
        </div>
    );
}
export const projects = [
    {   
        id:1,
        title: "My Clone: H-Assist",
        description: "Current status: Attending Standup",
        link: "",
        status: "active",
    },
    {
        id:2,
        title: "Today's Schedule",
        description: "3 Meetings · 2 Tasks · 1 Auto-Reply",
        link: "https://netflix.com",
        status: "Synced",
    },
    {
        id:3,
        title: "Train Your Clone",
        description:
            "Add new personal facts and tone preferences",
        link: "",
        status: "Updated 2 days ago",
    },
    {   
        id:4,
        title: "Performance Insights",
        description: "Time saved this week: 4.2 hrs",
        status: "92% Efficiency",
        link: "",
    },
    {
        id:5,
        title: "Communication History",
        description: "14 messages auto-responded",
        status: "Slack, Telegram",
        link: "",
    },
    {
        id:6,
        title: "Settings & Integrations",
        description: "Google Calendar, Notion, Discord",
        status: "3 Connected",
        link: "",
    },
];
