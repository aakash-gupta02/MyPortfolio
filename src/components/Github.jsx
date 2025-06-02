import { useState, useEffect } from "react";
import { IoLogoGithub } from "react-icons/io5";
import { FiRefreshCw } from "react-icons/fi";

export default function GitHub() {
  const [showGraph, setShowGraph] = useState(true);
  const [profileData, setProfileData] = useState(null);
  const [repos, setRepos] = useState([]);
  const [commitStats, setCommitStats] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [profileRes, reposRes] = await Promise.all([
          fetch('https://api.github.com/users/aakash-gupta02'),
          fetch('https://api.github.com/users/aakash-gupta02/repos?sort=updated&per_page=6')
        ]);
        
        setProfileData(await profileRes.json());
        setRepos(await reposRes.json());
        
        // Fetch commit statistics (last 30 days)
        const eventsRes = await fetch('https://api.github.com/users/aakash-gupta02/events');
        const events = await eventsRes.json();
        const pushEvents = events.filter(event => event.type === 'PushEvent');
        const last30DaysCommits = pushEvents.reduce((total, event) => {
          const eventDate = new Date(event.created_at);
          const daysAgo = (new Date() - eventDate) / (1000 * 60 * 60 * 24);
          return daysAgo <= 30 ? total + event.payload.commits.length : total;
        }, 0);
        
        setCommitStats({
          last30Days: last30DaysCommits,
          last7Days: pushEvents.reduce((total, event) => {
            const daysAgo = (new Date() - new Date(event.created_at)) / (1000 * 60 * 60 * 24);
            return daysAgo <= 7 ? total + event.payload.commits.length : total;
          }, 0)
        });
        
        setIsLoading(false);
      } catch (err) {
        console.error("GitHub API error:", err);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) return (
    <div className="flex justify-center py-12">
      <FiRefreshCw className="animate-spin text-2xl text-indigo-400" />
    </div>
  );
  return (
    <div className="space-y-8">
      {/* Profile Section */}
      <section className="bg-[#2a2a2a] rounded-lg p-6 shadow-lg border border-gray-700">
        <div className="flex flex-col sm:flex-row items-start gap-6">
          <img 
            src={profileData.avatar_url} 
            alt="GitHub avatar" 
            className="w-24 h-24 rounded-full border-2 border-indigo-400"
          />
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <h3 className="text-2xl font-semibold">{profileData.name || profileData.login}</h3>
              <a 
                href={profileData.html_url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-indigo-400 hover:text-indigo-300 transition-colors"
              >
                <i className="fab fa-github"></i>
              </a>
            </div>
            <p className="text-gray-400 mb-4">{profileData.bio || 'GitHub enthusiast'}</p>
            
            {/* Stats Cards */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-[#333] p-4 rounded-lg">
                <div className="text-indigo-400 text-xl font-bold">{profileData.public_repos}</div>
                <div className="text-gray-400 text-sm">Repositories</div>
              </div>
              <div className="bg-[#333] p-4 rounded-lg">
                <div className="text-indigo-400 text-xl font-bold">{commitStats?.last30Days || 0}</div>
                <div className="text-gray-400 text-sm">Commits (30d)</div>
              </div>
              <div className="bg-[#333] p-4 rounded-lg">
                <div className="text-indigo-400 text-xl font-bold">{repos.reduce((acc, repo) => acc + repo.stargazers_count, 0)}</div>
                <div className="text-gray-400 text-sm">Total Stars</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contributions Section */}
      <section className="bg-[#2a2a2a] rounded-lg p-6 shadow-lg border border-gray-700">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">Contributions</h2>
          <button
            onClick={() => setShowGraph(!showGraph)}
            className="text-indigo-400 hover:text-indigo-300 transition-colors flex items-center gap-2"
          >
            {showGraph ? "Show Dots" : "Show Graph"}
            <i className="fas fa-exchange-alt"></i>
          </button>
        </div>
        
        <div className="bg-[#333] p-4 rounded-lg mb-4">
          {showGraph ? (
            <img
              src={`https://github-readme-activity-graph.vercel.app/graph?username=${profileData.login}&theme=github-compact&hide_border=true&bg_color=1F2937&color=58A6FF&line=1F6FEB&point=58A6FF`}
              alt="GitHub Activity Graph"
              className="w-full h-auto"
            />
          ) : (
            <img
              src={`https://ghchart.rshah.org/2A303C/${profileData.login}`}
              alt="GitHub Contributions"
              className="w-full h-auto"
            />
          )}
          <div className="flex justify-between items-center mt-3 text-sm">
            <span className="text-gray-400">
              {showGraph ? "Commit activity timeline" : "Daily contribution heatmap"}
            </span>
            <span className="text-indigo-400">
              {commitStats?.last30Days} commits in last 30 days
            </span>
          </div>
        </div>
      </section>

      {/* Repositories Section */}
      <section className="bg-[#2a2a2a] rounded-lg p-6 shadow-lg border border-gray-700">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">Recent Repositories</h2>
          <a
            href={`https://github.com/${profileData.login}?tab=repositories`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-400 hover:text-indigo-300 transition-colors"
          >
            View All
          </a>
        </div>
        
        <div className="space-y-4">
          {repos.slice(0, 3).map(repo => (
            <a
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 bg-[#333] rounded-lg hover:bg-[#3a3a3a] transition-colors"
            >
              <div className="flex items-center">
                <div className="w-10 h-10 bg-indigo-900 rounded-lg flex items-center justify-center mr-4">
                  <i className="fas fa-code text-indigo-400"></i>
                </div>
                <div>
                  <h3 className="font-semibold">{repo.name}</h3>
                  <p className="text-gray-400 text-sm line-clamp-1">
                    {repo.description || 'No description provided'}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <div className="text-indigo-400 font-bold">{repo.stargazers_count}</div>
                  <div className="text-gray-500 text-xs">Stars</div>
                </div>
                <i className="fas fa-chevron-right text-gray-400"></i>
              </div>
            </a>
          ))}
        </div>
      </section>
    </div>
  );


}