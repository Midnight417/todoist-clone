import React, { useState } from "react";
import { FaRegListAlt, FaRegCalendarAlt } from "react-icons/fa";
import moment from "moment";
import { firebase } from "../firebase";
import { useSelectedProjectValue } from "../context";

export const AddTask = ({
    showAddTaskMain = true,
    showShouldMain = false,
    showQuickAddTask,
    setShowQuickAddTask
}) => {
    const [task, setTask] = useState("");
    const [taskDate, setTaskDate] = useState("");
    const [project, setProject] = useState("");
    const [showMain, setShowMain] = useState(showShouldMain);
    const [showProjectOverlay, setShowProjectOverlay] = useState(false);
    const [showTaskDate, setShowTaskDate] = useState("");

    const { selectProject } = useSelectedProjectValue();

    const addTask = () => {
        const
    }
    return <p>Add Task</p>;
}