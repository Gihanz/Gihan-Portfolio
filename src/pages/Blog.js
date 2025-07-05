import { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import fallbackImg from "../assets/fallback.png";
import logo from "../assets/medium_logo.png"; // Your logo for final card

function getFirstImageFromHtml(html) {
  if (!html) return null;
  const imgRegex = /<img[^>]+src="([^">]+)"/i;
  const match = html.match(imgRegex);
  return match ? match[1] : null;
}

const shimmerStyle = `
  @keyframes shimmer {
    0% { background-position: -400px 0; }
    100% { background-position: 400px 0; }
  }
  .shimmer {
    background: linear-gradient(
      90deg,
      #f0f0f0 25%,
      #e0e0e0 37%,
      #f0f0f0 63%
    );
    background-size: 400% 100%;
    animation: shimmer 1.5s infinite;
  }
`;

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [loadingImages, setLoadingImages] = useState({});

  useEffect(() => {
    fetch(
      `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@gihanshamikeliyanage`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data?.items) {
          setPosts(data.items);
        }
      });
  }, []);

  const handleImageLoad = (guid) => {
    setLoadingImages((prev) => ({ ...prev, [guid]: false }));
  };

  return (
    <>
      <style>{shimmerStyle}</style>

      <section className="p-6 max-w-screen-xl mx-auto pt-20">
        <h2 className="text-2xl font-semibold mb-6 text-center">Gihan on Medium</h2>

        {posts.length === 0 ? (
          <p className="text-center text-gray-500">Loading posts...</p>
        ) : (
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, index) => {
              const readingTime = Math.ceil(post.content.length / 200);
              const thumbnailFromContent = getFirstImageFromHtml(post.content);
              const hasThumbnail =
                post.thumbnail &&
                !post.thumbnail.includes("medium.com/undefined");

              const thumbnail = hasThumbnail
                ? post.thumbnail
                : thumbnailFromContent || fallbackImg;

              const isLoading = loadingImages[post.guid] !== false;

              return (
                <Fade key={post.guid} triggerOnce delay={index * 30}>
                  <a
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col"
                  >
                    <div className="relative w-full h-48 overflow-hidden bg-gray-200 dark:bg-gray-700">
                      {isLoading && (
                        <div className="absolute inset-0 shimmer" />
                      )}
                      <img
                        src={thumbnail}
                        alt={post.title}
                        loading="lazy"
                        onLoad={() => handleImageLoad(post.guid)}
                        className={`w-full h-48 object-cover transition-opacity duration-500 ${
                          isLoading ? "opacity-0" : "opacity-100"
                        }`}
                      />
                    </div>

                    <div className="p-4 flex-1 flex flex-col">
                      <h3 className="text-lg font-semibold mb-1 text-gray-900 dark:text-white">
                        {post.title}
                      </h3>
                      <p className="text-sm text-gray-500 mb-2">
                        {new Date(post.pubDate).toLocaleDateString()} · {readingTime} min read
                      </p>
                      <p className="text-sm text-gray-700 dark:text-gray-300 mb-3 line-clamp-3">
                        {post.description.replace(/<[^>]+>/g, "")}
                      </p>
                      <div className="mt-auto flex flex-wrap gap-2">
                        {post.categories.map((tag) => (
                          <span
                            key={tag}
                            className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 text-xs px-2 py-1 rounded-full"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </a>
                </Fade>
              );
            })}

            {/* Final card linking to Medium */}
            <Fade triggerOnce delay={posts.length * 50}>
              <a
                href="https://medium.com/@gihanshamikeliyanage"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-br from-black to-gray-800 text-white rounded-lg shadow-md p-8 sm:p-10 flex flex-col items-center justify-center hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={logo}
                  alt="Gihan Medium Logo"
                  className="w-16 h-16 rounded-full mb-3 border border-white"
                />
                <span className="text-xl font-bold mb-1">P8 Hub 🍁</span>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 text-center">
                  Gihan on Medium
                </h3>
                <p className="text-sm sm:text-base text-white/80 text-center pt-4 sm:pt-10 max-w-xs sm:max-w-sm">
                  See all my 30+ articles and publications on my full Medium blog.
                </p>
              </a>
            </Fade>
          </div>
        )}
      </section>
    </>
  );
}
