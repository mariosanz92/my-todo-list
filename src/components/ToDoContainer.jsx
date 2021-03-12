import React, { useState } from 'react';
import AddTask from "./AddTask";
import TaskList from "./TaskList.jsx";
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const ToDoContainer = () => {
    const [tasks, setTasks] = useState([])

    const handleAddTask = addTask => {
        setTasks([...tasks, addTask])
    }

    return (
        <React.Fragment>
            <CssBaseline />
                <Container maxWidth='xs' style={{ paddingTop: 20}}>
                    <Card >
                        <CardContent align="center">
                            <AddTask handleAddTask={handleAddTask} />
                            <TaskList tasks={tasks} setTasks={setTasks} />
                        </CardContent>
                    </Card>
                </Container>
        </React.Fragment>
    )
}

export default ToDoContainer;