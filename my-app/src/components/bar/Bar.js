import { useState } from "react";

export default function Bar() {
    const [category, setCategory] = useState("");
    const [region, setRegion] = useState("");
    const [sortBy, setSortBy] = useState("");

    const handleSearch = () => {
        console.log("Search triggered with:");
        console.log("Category:", category);
        console.log("Region:", region);
        console.log("Sort By:", sortBy);
        // Add API call or search logic here
    };

    return (
        <div className="bar">
            {/* Category Dropdown */}
            <select 
                value={category} 
                onChange={(e) => setCategory(e.target.value)} 
                className="p-2 border rounded-md"
            >
                <option value="">Select Category</option>
                <option value="technology">Technology</option>
                <option value="business">Business</option>
                <option value="sports">Sports</option>
            </select>

            {/* Region Dropdown */}
            <select 
                value={region} 
                onChange={(e) => setRegion(e.target.value)} 
                className="p-2 border rounded-md"
            >
                <option value="">Select Region</option>
                <option value="us">United States</option>
                <option value="uk">United Kingdom</option>
                <option value="asia">Asia</option>
            </select>

            {/* Sort By Dropdown */}
            <select 
                value={sortBy} 
                onChange={(e) => setSortBy(e.target.value)} 
                className="p-2 border rounded-md"
            >
                <option value="">Sort By</option>
                <option value="latest">Latest</option>
                <option value="popular">Most Popular</option>
                <option value="trending">Trending</option>
            </select>

            {/* Search Button */}
            <button 
                onClick={handleSearch} 
                className="p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
                Search
            </button>
        </div>
    );
}
