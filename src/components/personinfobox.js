import React from "react";
import "@pathofdev/react-tag-input/build/index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import '../App.css';

function PersoninfoBox(props) {
    const {item, appendTag} = props;
    return (
        <div className={`d-flex justify-content-center align-items-center position-relative info-box responsive-container ${item.new && item.featured ? 'info-box-border' : ''}`}>
            <div className="d-flex justify-content-between w-100 flex-column flex-md-row">
                <div className="infobox-left d-flex flex-column flex-md-row">
                   <img src={item.logo} />
                   <div className = "description d-flex flex-column">
                       <div>
                            <span className="company-box stack-font mr-3">{item.company}</span>
                            {item.new ? <span className="new-box text-uppercase text-white rounded-pill m-2">new!</span> : null}
                            {item.featured ? <span className="featured-box text-uppercase text-white rounded-pill">featured</span> : null}
                       </div>
                       
                       <h5 className="mb-0">{item.position}</h5>
                       <div className="d-flex">
                           <p className="m-0">{item.postedAt} <span>&#8226;</span> {item.contract} <span>&#8226;</span> {item.location}</p>
                       </div>
                   </div>
                </div>
                <div className="infobox-right d-flex align-items-center float-right">
                    <div className="skill-p d-flex float-right flex-wrap">
                        {
                            [
                                item.role, 
                                item.level, 
                                ...(item.languages) || [], 
                                ...(item.tools) || []
                            ].map((it, idx) => (
                                <div 
                                    key={`tag-item-${idx}`} 
                                    className="tag-span stack-font" 
                                    onClick={() => appendTag(it)}
                                >
                                    {it}
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
       )
}

export default PersoninfoBox;
