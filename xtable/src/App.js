import logo from './logo.svg';
import './App.css';
import  { useState, useEffect } from 'react'

const data =   [
  { date: "2022-09-01", views: 100, article: "Article 1" },
  { date: "2023-09-01", views: 100, article: "Article 1" },
  { date: "2023-09-02", views: 150, article: "Article 2" },
  { date: "2023-09-02", views: 120, article: "Article 3" },
  { date: "2020-09-03", views: 200, article: "Article 4" }
]

function App() {
  const [filteredData, setFilteredData] = useState([]);
  

  useEffect(() => {
    setFilteredData(data)
  },[])
  
  const sortByDate = () => {
    const sortedByDate = [...data].sort((a, b) => new Date(a.date) - new Date(b.date));
    console.log(sortedByDate)
    setFilteredData(sortedByDate);
  }

  const sortByViews = () => {
    const sortedByViews = [...data].sort((a, b) => {
      if(b.views !== a.views) {
        return b.views - a.views
      }
      return new Date(b.date) - new Date(a.date);
    });
    console.log(sortedByViews)
    setFilteredData(sortedByViews);
  }

  return (
    <div className="App">
      <h1>Date and Views Table</h1>
      <div>
        <button onClick={sortByDate}>Sort by Date</button>
        <button onClick={sortByViews}>Sort by Views</button>
      </div>
      <div className="tableContainer">
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Views</th>
            <th>Article</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((ele,i) => (  
              <tr key={i}>
                <td> {ele.date} </td>
                <td> {ele.views} </td>
                <td> {ele.article} </td>
              </tr>
          ))}
          
        </tbody>
      </table>
      </div>
    </div>
  );
}

export default App;
