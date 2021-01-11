
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {useState} from 'react';
import Filterbox from "./components/filterbox";
import PersoninfoBox from "./components/personinfobox";
import data from './components/data/data.json';

function App() {
 
  const [tags, setTags] = useState([]);
  const filterAction = (tags) => {
    tags.map((tag, index) => tags[index] =  tag.toLowerCase());
    setTags(tags);
  };

  const appendTag = (newTag) => {
    tags.push(newTag);
    setTags([...tags]);
  }

  return (
    <div className="jumbotron mb-0">
      <div className="container">
        <div className="bg-header">
      
          <img className="d-md-none" src="images/bg-header-mobile.svg" alt="" ></img>
          <img className="d-md-block d-none" src="images/bg-header-desktop.svg" alt="" ></img>

        </div>
        
        <div className="tag-box-flex">
          <div className="tag-box d-flex">
              {tags.length > 0 && <Filterbox filterAction={filterAction} tags={tags}/>}
          </div>
        </div>
        
        <div className="content-box">
          
          <div className="result-container">
            {
              data.filter((item) => {
                const matchedTags = [
                  item.role, 
                  item.level, 
                  ...(item.languages) || [], 
                  ...(item.tools) || []
                ];

                return tags.length === 0 ||         
                  tags.every(tag => 
                    matchedTags.map((mt)=> mt.toLowerCase())
                    .indexOf(tag.toLowerCase()) !== -1);
                  }).map(item => 
                    (
                        <div key={`items-inst-${item.id}`}>
                          <PersoninfoBox item={item}  appendTag={appendTag} />
                        </div>
                      )
                  )
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
