import React, { useMemo, useState } from "react";
import { Column, Task } from "../types";
import { defaultTasks } from "../dataConfig/taskDefaultValues";
import { defaultCols } from "../dataConfig/ColumnDefaultValues";

function kanbanboard() {
  const [tasks, setTasks] = useState<Task[]>(defaultTasks);
  const [columns, setColumns] = useState<Column[]>(defaultCols);
  const columnIds = useMemo(() => columns.map((col) => col.id), [columns]);

  const [activeColumn, setActiveColumn] = useState<Column | null>(null);
  const [activeTask, setActiveTask] = useState<Task | null>(null);
  return <div>kanbanboard</div>;
}

export default kanbanboard;
