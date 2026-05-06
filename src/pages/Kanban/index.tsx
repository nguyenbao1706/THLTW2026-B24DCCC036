import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { getTasks, saveTasks } from '@/models/task';
import { useState } from 'react';
import { Card } from 'antd';

export default () => {
  const [tasks, setTasks] = useState(getTasks());

  const columns = {
    todo: 'Cần làm',
    doing: 'Đang làm',
    done: 'Hoàn thành',
  };

  const onDragEnd = (result) => {
    if (!result.destination) return;

    const newTasks = [...tasks];
    const task = newTasks.find((t) => t.id.toString() === result.draggableId);

    if (task) {
      task.status = result.destination.droppableId;
      setTasks(newTasks);
      saveTasks(newTasks);
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div style={{ display: 'flex', gap: 20 }}>
        {Object.keys(columns).map((col) => (
          <Droppable droppableId={col} key={col}>
            {(provided) => (
              <div ref={provided.innerRef} {...provided.droppableProps} style={{ width: 300 }}>
                <h3>{columns[col]}</h3>

                {tasks
                  .filter((t) => t.status === col)
                  .map((t, index) => (
                    <Draggable key={t.id} draggableId={t.id.toString()} index={index}>
                      {(p) => (
                        <Card
                          ref={p.innerRef}
                          {...p.draggableProps}
                          {...p.dragHandleProps}
                          style={{ marginBottom: 10 }}
                        >
                          {t.title}
                        </Card>
                      )}
                    </Draggable>
                  ))}

                {provided.placeholder}
              </div>
            )}
          </Droppable>
        ))}
      </div>
    </DragDropContext>
  );
};