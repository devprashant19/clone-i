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
        title: "My Clone: H-Assist",
        description: "Current status: Attending Standup",
        link: "",
        status: "active",
    },
    {
        title: "Today's Schedule",
        description: "3 Meetings · 2 Tasks · 1 Auto-Reply",
        link: "https://netflix.com",
        status: "Synced",
    },
    {
        title: "Train Your Clone",
        description:
            "Add new personal facts and tone preferences",
        link: "",
        status: "Updated 2 days ago",
    },
    {
        title: "Performance Insights",
        description: "Time saved this week: 4.2 hrs",
        status: "92% Efficiency",
        link: "",
    },
    {
        title: "Communication History",
        description: "14 messages auto-responded",
        status: "Slack, Telegram",
        link: "",
    },
    {
        title: "Settings & Integrations",
        description: "Google Calendar, Notion, Discord",
        status: "3 Connected",
        link: "",
    },
];
