const apiUrl = "https://api.quicksell.co/v1/internal/frontend-assignment";

const fetchData = async () => {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

const groupBy = (data, key) => {
  return data.reduce((result, item) => {
    const group = item[key];
    result[group] = result[group] || [];
    result[group].push(item);
    return result;
  }, {});
};

export const sortByPriority = (data) => {
  return data.sort((a, b) => b.priority - a.priority);
};

export const sortByTitle = (data) => {
  return data.sort((a, b) => a.title.localeCompare(b.title));
};

export const groupData = async () => {
  try {
    const data = await fetchData();

    const status = groupBy(data.tickets, "status");
    const user = groupBy(data.tickets, "userId");
    const priority = groupBy(data.tickets, "priority");

    return {
      status,
      user,
      priority,
    };
  } catch (error) {
    console.error("Error grouping data:", error);
  }
};

export const fetchUser = async () => {
  try {
    const data = await fetchData();

    return data["users"];
  } catch (error) {
    console.error("Error grouping data:", error);
  }
};
