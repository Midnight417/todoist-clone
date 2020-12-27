import React, { useState } from "react";
import {
    FaChevronDown,
    FaInbox,
    FaRegCalendarAlt,
    FaRegCalendar
} from "react-icons/fa"
import { useSelectedProjectValue } from "../../context"
import { Projects } from "../Projects"
import { AddProject } from "../AddProject"

export const Sidebar = () => {
    const { setSelectedProject } = useSelectedProjectValue();
    const [active, setActive] = useState("INBOX");
    const [showProjects, setShowProjects] = useState("true");

    return (
        <div className="sidebar" data-testid="sidebar">
            <ul className="sidebar__generic">
                <li
                    data-testid="inbox"
                    className={active === "INBOX" ? "active" : undefined}
                    onClick={() => {
                        setActive("INBOX");
                        setSelectedProject("INBOX");
                    }}
                >
                    <span>
                        <FaInbox />
                    </span>
                    <span>Inbox</span>
                </li>
                <li
                    data-testid="today"
                    className={active === "TODAY" ? "active" : undefined}
                    onClick={() => {
                        setActive("TODAY");
                        setSelectedProject("TODAY");
                    }}
                >
                    <span>
                        <FaRegCalendar />
                    </span>
                    <span>Today</span>
                </li>
                <li
                    data-testid="next_7"
                    className={active === "NEXT_7" ? "active" : undefined}
                    onClick={() => {
                        setActive("NEXT_7");
                        setSelectedProject("NEXT_7");
                    }}
                >
                    <span>
                        <FaRegCalendarAlt />
                    </span>
                    <span>Next 7 days</span>
                </li>
            </ul>

            <div
                className="sidebar__middle"
                onClick={() => setShowProjects(!showProjects)}
            >
                <span>
                    <FaChevronDown className={!showProjects ? "hidden-projects" : undefined}/>
                </span>
                <h2>Projects</h2>
            </div>

            <ul className="sidebar__projects">
                {showProjects && <Projects />}
            </ul>
            {showProjects && <AddProject />}
        </div>
    )
}