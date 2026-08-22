import { useEffect, useState } from "react";
import supabaseApi from "../services/supabaseApi";

export function useTasks(refreshTask = 0) {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getTasks = async () => {
      try {
        setLoading(true);

        const response = await supabaseApi.get("/tasks");

        setTasks(response.data);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      } finally {
        setLoading(false);
      }
    };

    getTasks();
  }, [refreshTask]);

  return {
    tasks,
    loading,
  };
}
