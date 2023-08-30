import React from "react";

const SearchJobs = () => {
  return (
    <div className="search-jobs-wrapper mb-5">
      <form className="row">
        <div className="col search-input me-3 border rounded"><label htmlFor="what">what</label><input className="col focus-ring focus-ring-light w-75" type="text" /></div>
        <div className="col search-input me-3 border rounded"><label htmlFor="where">where</label><input className="col focus-ring focus-ring-light w-75" type="text" /></div>
        <button className="search-btn border border-light rounded" type="submit rounded">search</button>
      </form>
    </div>
  )
}


export default SearchJobs;