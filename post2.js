document.addEventListener("DOMContentLoaded", () => {
    const dataList = document.getElementById("data-list");
  
    // Simulate fetching data (replace with real API endpoint)
    const fetchData = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await response.json();
  
        // Display data
        data.slice(0, 10).forEach(item => {
          const dataItem = document.createElement("div");
          dataItem.classList.add("data-item");
  
          dataItem.innerHTML = `
            <div class="title">${item.title}</div>
            <div class="description">${item.body}</div>
          `;
  
          dataList.appendChild(dataItem);
        });
      } catch (error) {
        console.error("Error fetching data:", error);
        dataList.innerHTML = "<p>Failed to load data. Please try again later.</p>";
      }
    };
  
    fetchData();
  });