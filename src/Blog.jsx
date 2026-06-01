import React from "react";

const blogPosts = [
  {
    id: 1,
    category: "Cardiology",
    readTime: "5 min read",
    title: "Understanding Heart Health: Prevention Tips for All Ages",
    description:
      "Learn about the key lifestyle changes that can significantly reduce your risk of heart disease and improve cardiovascular health.",
    date: "March 15, 2026",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 2,
    category: "Pediatrics",
    readTime: "7 min read",
    title: "Childhood Vaccinations: A Complete Guide for Parents",
    description:
      "Stay informed about essential vaccinations for your children and understand the recommended immunization schedule.",
    date: "March 10, 2026",
    image:
      "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 3,
    category: "General Medicine",
    readTime: "6 min read",
    title: "Managing Diabetes: Diet, Exercise, and Monitoring",
    description:
      "Practical advice for managing diabetes effectively through lifestyle modifications and regular health monitoring.",
    date: "March 5, 2026",
    image:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80",
  },
];

const Blog = () => {
  return (
    <>
      <style>{`
        * {
          box-sizing: border-box;
        }

        .blog-section {
          width: 100%;
          padding: 90px 20px;
          background: linear-gradient(180deg, #f8fbfa 0%, #ffffff 100%);
          font-family: Arial, sans-serif;
        }

        .blog-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .blog-header {
          text-align: center;
          margin-bottom: 55px;
        }

        .blog-subtitle {
          display: inline-block;
          font-size: 14px;
          font-weight: 800;
          letter-spacing: 1px;
          color: #4d9b73;
          text-transform: uppercase;
          margin-bottom: 12px;
        }

        .blog-title {
          margin: 0;
          font-size: 58px;
          line-height: 1.1;
          font-weight: 800;
          color: #1f2937;
        }

        .blog-text {
          max-width: 760px;
          margin: 16px auto 0;
          font-size: 20px;
          line-height: 1.7;
          color: #7a8a9a;
        }

        .blog-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 22px;
        }

        .blog-card {
          background: #ffffff;
          border: 1px solid #e8ecef;
          border-radius: 18px;
          overflow: hidden;
          box-shadow: 0 6px 20px rgba(15, 23, 42, 0.04);
          transition: all 0.35s ease;
        }

        .blog-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 18px 40px rgba(15, 23, 42, 0.10);
          border-color: #dce5ea;
        }

        .blog-image-wrap {
          width: 100%;
          height: 230px;
          background: #edf4f1;
          overflow: hidden;
          position: relative;
        }

        .blog-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.45s ease;
        }

        .blog-card:hover .blog-image {
          transform: scale(1.06);
        }

        .blog-content {
          padding: 18px 18px 20px;
        }

        .blog-meta {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 12px;
          font-size: 13px;
        }

        .blog-category {
          color: #4d9b73;
          font-weight: 700;
        }

        .blog-dot {
          color: #9aa8b6;
        }

        .blog-readtime {
          color: #7a8a9a;
          font-weight: 500;
        }

        .blog-post-title {
          margin: 0 0 12px;
          font-size: 18px;
          line-height: 1.45;
          font-weight: 800;
          color: #1f2937;
        }

        .blog-description {
          margin: 0 0 16px;
          font-size: 15px;
          line-height: 1.7;
          color: #708090;
        }

        .blog-date {
          font-size: 14px;
          color: #8b99a8;
        }

        @media (max-width: 1100px) {
          .blog-title {
            font-size: 48px;
          }

          .blog-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .blog-section {
            padding: 70px 16px;
          }

          .blog-title {
            font-size: 38px;
          }

          .blog-text {
            font-size: 17px;
          }

          .blog-grid {
            grid-template-columns: 1fr;
          }

          .blog-image-wrap {
            height: 220px;
          }
        }

        @media (max-width: 480px) {
          .blog-title {
            font-size: 30px;
          }

          .blog-text {
            font-size: 15px;
          }

          .blog-content {
            padding: 16px;
          }

          .blog-post-title {
            font-size: 17px;
          }

          .blog-description {
            font-size: 14px;
          }
        }
      `}</style>

      <section className="blog-section">
        <div className="blog-container">
          <div className="blog-header">
            <span className="blog-subtitle">Health Blog</span>
            <h2 className="blog-title">Health Articles & Tips</h2>
            <p className="blog-text">
              Stay informed with the latest health insights from our medical
              experts.
            </p>
          </div>

          <div className="blog-grid">
            {blogPosts.map((post) => (
              <div className="blog-card" key={post.id}>
                <div className="blog-image-wrap">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="blog-image"
                  />
                </div>

                <div className="blog-content">
                  <div className="blog-meta">
                    <span className="blog-category">{post.category}</span>
                    <span className="blog-dot">•</span>
                    <span className="blog-readtime">{post.readTime}</span>
                  </div>

                  <h3 className="blog-post-title">{post.title}</h3>
                  <p className="blog-description">{post.description}</p>
                  <div className="blog-date">{post.date}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;